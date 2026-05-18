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
    { key: '1', transactionNumber: '2049887382962229249', transactionBalance: 0, orderNumber: '', type: '仓位费', amount: 36.21, currency: 'CNY', description: '马来仓仓位续费，有效期至2026-05-31 费用:0.00,按月固定扣费', transactionTime: '2026-05-01 00:23:32' },
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
