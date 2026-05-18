import React from 'react';
import { Table, Input, Button, Space, Card, Select } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface StoreWithdrawalData {
  key: string;
  storeType: string;
  storeName: string;
  site: string;
  withdrawalAmount: number;
  paymentMethod: string;
  paymentAccount: string;
  transactionNumber: string;
  transactionVoucher: string;
  paymentScreenshot: string;
  withdrawalStatus: string;
  applyTime: string;
  remark: string;
  rejectionReason: string;
}

const StoreWithdrawalPage: React.FC = () => {
  const columns: TableColumnsType<StoreWithdrawalData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '店铺类型', dataIndex: 'storeType', key: 'storeType' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '站点', dataIndex: 'site', key: 'site' },
    { title: '提现金额', dataIndex: 'withdrawalAmount', key: 'withdrawalAmount' },
    { title: '收款方式', dataIndex: 'paymentMethod', key: 'paymentMethod' },
    { title: '收款账户', dataIndex: 'paymentAccount', key: 'paymentAccount' },
    { title: '交易单号', dataIndex: 'transactionNumber', key: 'transactionNumber' },
    { title: '交易凭证', dataIndex: 'transactionVoucher', key: 'transactionVoucher' },
    { title: '付款截图', dataIndex: 'paymentScreenshot', key: 'paymentScreenshot' },
    { title: '提现状态', dataIndex: 'withdrawalStatus', key: 'withdrawalStatus' },
    { title: '申请时间', dataIndex: 'applyTime', key: 'applyTime' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '拒绝理由', dataIndex: 'rejectionReason', key: 'rejectionReason' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">店铺提现</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="店铺名称" prefix="店铺名称:" style={{ width: 250 }} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600 w-10">状态:</span>
            <Select style={{ width: 200 }} allowClear />
          </div>
          <Input placeholder="交易单号" prefix="交易单号:" style={{ width: 250 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<PlusOutlined />}>新增</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={[]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default StoreWithdrawalPage;
