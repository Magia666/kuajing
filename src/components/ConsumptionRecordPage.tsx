import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface ConsumptionRecordData {
  key: string;
  transactionNumber: string;
  transactionBalance: number;
  orderNumber: string;
  type: string;
  amount: number;
  currency: string;
  description: string;
  transactionTime: string;
}

const ConsumptionRecordPage: React.FC = () => {
  const columns: TableColumnsType<ConsumptionRecordData> = [
    { title: '交易单号', dataIndex: 'transactionNumber', key: 'transactionNumber' },
    { title: '交易余额', dataIndex: 'transactionBalance', key: 'transactionBalance' },
    { title: '单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '单型', dataIndex: 'type', key: 'type' },
    { title: '金额', dataIndex: 'amount', key: 'amount' },
    { title: '币种', dataIndex: 'currency', key: 'currency' },
    { title: '描述', dataIndex: 'description', key: 'description' },
    { title: '交易时间', dataIndex: 'transactionTime', key: 'transactionTime' },
    { title: '明细', key: 'detail', render: () => <a>明细</a> },
  ];

  const dataSource: ConsumptionRecordData[] = [
  {
    key: "1",
    transactionNumber: "SO202405181000",
    transactionBalance: "128.00",
    orderNumber: "SO202405181000",
    type: "电子产品",
    amount: "128.00",
    currency: "USD",
    description: "客户要求加急发货",
    transactionTime: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    transactionNumber: "PO202405181007",
    transactionBalance: "194.50",
    orderNumber: "PO202405181007",
    type: "服装服饰",
    amount: "194.50",
    currency: "CNY",
    description: "商品存在轻微瑕疵",
    transactionTime: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    transactionNumber: "RO202405181014",
    transactionBalance: "261.00",
    orderNumber: "RO202405181014",
    type: "家居日用",
    amount: "261.00",
    currency: "EUR",
    description: "包裹外包装破损",
    transactionTime: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    transactionNumber: "TR202405181021",
    transactionBalance: "327.50",
    orderNumber: "TR202405181021",
    type: "户外运动",
    amount: "327.50",
    currency: "GBP",
    description: "尺码拍错，要求换货",
    transactionTime: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    transactionNumber: "WO202405181028",
    transactionBalance: "394.00",
    orderNumber: "WO202405181028",
    type: "美妆个护",
    amount: "394.00",
    currency: "JPY",
    description: "地址填写错误，已更正",
    transactionTime: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    transactionNumber: "SO202405181035",
    transactionBalance: "460.50",
    orderNumber: "SO202405181035",
    type: "电子产品",
    amount: "460.50",
    currency: "USD",
    description: "客户要求加急发货",
    transactionTime: "2024-05-15 14:35:00"
  }
];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">消费记录</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="订单号" prefix="订单号:" style={{ width: 250 }} />
          <Select placeholder="类型" style={{ width: 200 }} allowClear />
          <RangePicker />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ConsumptionRecordPage;
