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
          dataSource={[
  {
    key: "1",
    storeType: "跨境小店 US",
    storeName: "跨境小店 US",
    site: "跨境小店 US",
    withdrawalAmount: "128.00",
    paymentMethod: "微信支付",
    paymentAccount: "张无忌",
    transactionNumber: "SO202405181000",
    transactionVoucher: "VOUCHER-0000",
    paymentScreenshot: "微信支付",
    withdrawalStatus: "处理中",
    applyTime: "2024-05-10 14:10:00",
    remark: "客户要求加急发货",
    rejectionReason: "客户要求加急发货"
  },
  {
    key: "2",
    storeType: "跨境小店 UK",
    storeName: "跨境小店 UK",
    site: "跨境小店 UK",
    withdrawalAmount: "194.50",
    paymentMethod: "支付宝",
    paymentAccount: "李寻欢",
    transactionNumber: "PO202405181007",
    transactionVoucher: "VOUCHER-0001",
    paymentScreenshot: "支付宝",
    withdrawalStatus: "已发货",
    applyTime: "2024-05-11 14:15:00",
    remark: "商品存在轻微瑕疵",
    rejectionReason: "商品存在轻微瑕疵"
  },
  {
    key: "3",
    storeType: "跨境小店 SG",
    storeName: "跨境小店 SG",
    site: "跨境小店 SG",
    withdrawalAmount: "261.00",
    paymentMethod: "信用卡",
    paymentAccount: "王语嫣",
    transactionNumber: "RO202405181014",
    transactionVoucher: "VOUCHER-0002",
    paymentScreenshot: "信用卡",
    withdrawalStatus: "待付款",
    applyTime: "2024-05-12 14:20:00",
    remark: "包裹外包装破损",
    rejectionReason: "包裹外包装破损"
  },
  {
    key: "4",
    storeType: "跨境小店 MY",
    storeName: "跨境小店 MY",
    site: "跨境小店 MY",
    withdrawalAmount: "327.50",
    paymentMethod: "PayPal",
    paymentAccount: "赵敏",
    transactionNumber: "TR202405181021",
    transactionVoucher: "VOUCHER-0003",
    paymentScreenshot: "PayPal",
    withdrawalStatus: "已完成",
    applyTime: "2024-05-13 14:25:00",
    remark: "尺码拍错，要求换货",
    rejectionReason: "尺码拍错，要求换货"
  },
  {
    key: "5",
    storeType: "跨境小店 PH",
    storeName: "跨境小店 PH",
    site: "跨境小店 PH",
    withdrawalAmount: "394.00",
    paymentMethod: "余额抵扣",
    paymentAccount: "系统管理员",
    transactionNumber: "WO202405181028",
    transactionVoucher: "VOUCHER-0004",
    paymentScreenshot: "余额抵扣",
    withdrawalStatus: "已取消",
    applyTime: "2024-05-14 14:30:00",
    remark: "地址填写错误，已更正",
    rejectionReason: "地址填写错误，已更正"
  },
  {
    key: "6",
    storeType: "跨境小店 US",
    storeName: "跨境小店 US",
    site: "跨境小店 US",
    withdrawalAmount: "460.50",
    paymentMethod: "微信支付",
    paymentAccount: "运营专员",
    transactionNumber: "SO202405181035",
    transactionVoucher: "VOUCHER-0005",
    paymentScreenshot: "微信支付",
    withdrawalStatus: "退款中",
    applyTime: "2024-05-15 14:35:00",
    remark: "客户要求加急发货",
    rejectionReason: "客户要求加急发货"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default StoreWithdrawalPage;
