import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface RechargeRecordData {
  key: string;
  orderNumber: string;
  transactionAmount: number;
  remainingPoints: number;
  description: string;
  transactionTime: string;
}

const RechargeRecordPage: React.FC = () => {
  const columns: TableColumnsType<RechargeRecordData> = [
    { title: '订单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '交易金额', dataIndex: 'transactionAmount', key: 'transactionAmount' },
    { title: '剩余积分', dataIndex: 'remainingPoints', key: 'remainingPoints' },
    { title: '描述', dataIndex: 'description', key: 'description' },
    { title: '交易时间', dataIndex: 'transactionTime', key: 'transactionTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">充值记录</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="订单号" prefix="订单号:" style={{ width: 250 }} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600">日期:</span>
            <RangePicker />
          </div>
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
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

export default RechargeRecordPage;
