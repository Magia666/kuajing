import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface InventoryLogData {
  key: string;
  systemCode: string;
  sku: string;
  type: string;
  warehouse: string;
  storeName: string;
  quantity: number;
  remainingStock: number;
  description: string;
  date: string;
}

const InventoryLogPage: React.FC = () => {
  const columns: TableColumnsType<InventoryLogData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
    { title: 'sku', dataIndex: 'sku', key: 'sku' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '数量', dataIndex: 'quantity', key: 'quantity' },
    { title: '剩余库存', dataIndex: 'remainingStock', key: 'remainingStock' },
    { title: '说明', dataIndex: 'description', key: 'description' },
    { title: '日期', dataIndex: 'date', key: 'date' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">库存日志</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="sku" style={{ width: 150 }} />
          <Input placeholder="商品名称" style={{ width: 150 }} />
          <Input placeholder="系统编码" style={{ width: 150 }} />
          <Select placeholder="平台类型" style={{ width: 150 }} allowClear />
          <Select placeholder="仓库" style={{ width: 150 }} allowClear />
          <RangePicker />
          <Input placeholder="订单编号" style={{ width: 150 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "测试数据 1",
    systemCode: "测试数据 1",
    sku: "测试数据 1",
    type: "测试数据 1",
    warehouse: "测试数据 1",
    storeName: "测试数据 1",
    quantity: "测试数据 1",
    remainingStock: "测试数据 1",
    description: "测试数据 1",
    date: "2024-03-21"
  },
  {
    key: "测试数据 2",
    systemCode: "测试数据 2",
    sku: "测试数据 2",
    type: "测试数据 2",
    warehouse: "测试数据 2",
    storeName: "测试数据 2",
    quantity: "测试数据 2",
    remainingStock: "测试数据 2",
    description: "测试数据 2",
    date: "2024-03-22"
  },
  {
    key: "测试数据 3",
    systemCode: "测试数据 3",
    sku: "测试数据 3",
    type: "测试数据 3",
    warehouse: "测试数据 3",
    storeName: "测试数据 3",
    quantity: "测试数据 3",
    remainingStock: "测试数据 3",
    description: "测试数据 3",
    date: "2024-03-23"
  },
  {
    key: "测试数据 4",
    systemCode: "测试数据 4",
    sku: "测试数据 4",
    type: "测试数据 4",
    warehouse: "测试数据 4",
    storeName: "测试数据 4",
    quantity: "测试数据 4",
    remainingStock: "测试数据 4",
    description: "测试数据 4",
    date: "2024-03-24"
  },
  {
    key: "测试数据 5",
    systemCode: "测试数据 5",
    sku: "测试数据 5",
    type: "测试数据 5",
    warehouse: "测试数据 5",
    storeName: "测试数据 5",
    quantity: "测试数据 5",
    remainingStock: "测试数据 5",
    description: "测试数据 5",
    date: "2024-03-25"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default InventoryLogPage;
