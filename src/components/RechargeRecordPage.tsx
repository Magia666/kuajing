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
          dataSource={[
  {
    key: "1",
    orderNumber: "测试数据 1",
    transactionAmount: 100,
    remainingPoints: "测试数据 1",
    description: "测试数据 1",
    transactionTime: "2024-03-21"
  },
  {
    key: "2",
    orderNumber: "测试数据 2",
    transactionAmount: 200,
    remainingPoints: "测试数据 2",
    description: "测试数据 2",
    transactionTime: "2024-03-22"
  },
  {
    key: "3",
    orderNumber: "测试数据 3",
    transactionAmount: 300,
    remainingPoints: "测试数据 3",
    description: "测试数据 3",
    transactionTime: "2024-03-23"
  },
  {
    key: "4",
    orderNumber: "测试数据 4",
    transactionAmount: 400,
    remainingPoints: "测试数据 4",
    description: "测试数据 4",
    transactionTime: "2024-03-24"
  },
  {
    key: "5",
    orderNumber: "测试数据 5",
    transactionAmount: 500,
    remainingPoints: "测试数据 5",
    description: "测试数据 5",
    transactionTime: "2024-03-25"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default RechargeRecordPage;
