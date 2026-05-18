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
    orderNumber: "SO202405181000",
    transactionAmount: "128.00",
    remainingPoints: 100,
    description: "客户要求加急发货",
    transactionTime: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    orderNumber: "PO202405181007",
    transactionAmount: "194.50",
    remainingPoints: 150,
    description: "商品存在轻微瑕疵",
    transactionTime: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    orderNumber: "RO202405181014",
    transactionAmount: "261.00",
    remainingPoints: 200,
    description: "包裹外包装破损",
    transactionTime: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    orderNumber: "TR202405181021",
    transactionAmount: "327.50",
    remainingPoints: 250,
    description: "尺码拍错，要求换货",
    transactionTime: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    orderNumber: "WO202405181028",
    transactionAmount: "394.00",
    remainingPoints: 300,
    description: "地址填写错误，已更正",
    transactionTime: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    orderNumber: "SO202405181035",
    transactionAmount: "460.50",
    remainingPoints: 350,
    description: "客户要求加急发货",
    transactionTime: "2024-05-15 14:35:00"
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
