import React from 'react';
import { Table, Button, Card, Select, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface CommissionFlowData {
  key: string;
  flowType: string;
  amount: string;
  remainingAmount: string;
  remark: string;
  createTime: string;
}

const CommissionFlowPage: React.FC = () => {
  const columns: TableColumnsType<CommissionFlowData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '流水类型', dataIndex: 'flowType', key: 'flowType' },
    { title: '金额', dataIndex: 'amount', key: 'amount' },
    { title: '剩余金额', dataIndex: 'remainingAmount', key: 'remainingAmount' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">佣金流水</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Select placeholder="流水类型" style={{ width: 250 }} allowClear />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            { key: '1', flowType: '邀请奖励', amount: '+ ￥ 50.00', remainingAmount: '￥ 550.00', remark: '邀请用户 seller_mike 注册成功', createTime: '2023-11-02 14:15:22' },
            { key: '2', flowType: '提现扣除', amount: '- ￥ 500.00', remainingAmount: '￥ 50.00', remark: '申请体现到支付宝', createTime: '2024-01-15 11:20:00' },
            { key: '3', flowType: '订单返利', amount: '+ ￥ 12.50', remainingAmount: '￥ 62.50', remark: '下级用户生成运单号: YT123456789', createTime: '2024-02-10 10:00:00' }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default CommissionFlowPage;
