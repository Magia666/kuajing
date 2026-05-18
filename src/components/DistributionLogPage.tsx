import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface DistributionLogData {
  key: string;
  systemCode: string;
  warehouse: string;
  productName: string;
  sku: string;
  supplier: string;
  type: string;
  quantity: number;
  remainingStock: number;
  remark: string;
  date: string;
}

const DistributionLogPage: React.FC = () => {
  const columns: TableColumnsType<DistributionLogData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '商品名称', dataIndex: 'productName', key: 'productName' },
    { title: 'sku', dataIndex: 'sku', key: 'sku' },
    { title: '供应商', dataIndex: 'supplier', key: 'supplier' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '数量', dataIndex: 'quantity', key: 'quantity' },
    { title: '剩余库存', dataIndex: 'remainingStock', key: 'remainingStock' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '日期', dataIndex: 'date', key: 'date' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'log', label: '分销日志' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Tabs items={tabItems} className="mb-4 bg-white px-4" />
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="sku" prefix="sku:" style={{ width: 180 }} />
          <Input placeholder="商品名称" prefix="名称:" style={{ width: 180 }} />
          <Input placeholder="系统编码" prefix="系统编码:" style={{ width: 180 }} />
          <Select placeholder="请选择供应商" prefix="供应商:" style={{ width: 180 }} allowClear />
          <Select placeholder="出库库" prefix="出库库:" style={{ width: 180 }} allowClear />
          <Select placeholder="仓库" prefix="仓库:" style={{ width: 180 }} allowClear />
          <RangePicker />
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
    warehouse: "测试数据 1",
    productName: "测试数据 1",
    sku: "测试数据 1",
    supplier: "测试数据 1",
    type: "测试数据 1",
    quantity: "测试数据 1",
    remainingStock: "测试数据 1",
    remark: "测试数据 1",
    date: "2024-03-21"
  },
  {
    key: "测试数据 2",
    systemCode: "测试数据 2",
    warehouse: "测试数据 2",
    productName: "测试数据 2",
    sku: "测试数据 2",
    supplier: "测试数据 2",
    type: "测试数据 2",
    quantity: "测试数据 2",
    remainingStock: "测试数据 2",
    remark: "测试数据 2",
    date: "2024-03-22"
  },
  {
    key: "测试数据 3",
    systemCode: "测试数据 3",
    warehouse: "测试数据 3",
    productName: "测试数据 3",
    sku: "测试数据 3",
    supplier: "测试数据 3",
    type: "测试数据 3",
    quantity: "测试数据 3",
    remainingStock: "测试数据 3",
    remark: "测试数据 3",
    date: "2024-03-23"
  },
  {
    key: "测试数据 4",
    systemCode: "测试数据 4",
    warehouse: "测试数据 4",
    productName: "测试数据 4",
    sku: "测试数据 4",
    supplier: "测试数据 4",
    type: "测试数据 4",
    quantity: "测试数据 4",
    remainingStock: "测试数据 4",
    remark: "测试数据 4",
    date: "2024-03-24"
  },
  {
    key: "测试数据 5",
    systemCode: "测试数据 5",
    warehouse: "测试数据 5",
    productName: "测试数据 5",
    sku: "测试数据 5",
    supplier: "测试数据 5",
    type: "测试数据 5",
    quantity: "测试数据 5",
    remainingStock: "测试数据 5",
    remark: "测试数据 5",
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

export default DistributionLogPage;
