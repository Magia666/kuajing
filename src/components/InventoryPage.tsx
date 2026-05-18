import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Select, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ExportOutlined, PrinterOutlined, SettingOutlined } from '@ant-design/icons';

interface InventoryData {
  key: string;
  warehouse: string;
  productInfo: string;
  category: string;
  dimensions: string;
  stock: number;
  available: number;
  frozen: number;
  damaged: number;
  safetyStock: number;
  sales: string;
  inTransit: number;
  costInfo: string;
}

const InventoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  const columns: TableColumnsType<InventoryData> = [
    { title: '系统/自定义/仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
    { title: '商品分类', dataIndex: 'category', key: 'category' },
    { title: '尺寸/体积', dataIndex: 'dimensions', key: 'dimensions' },
    { title: '库存数量', dataIndex: 'stock', key: 'stock' },
    { title: '可用数量', dataIndex: 'available', key: 'available' },
    { title: '冻结数量', dataIndex: 'frozen', key: 'frozen' },
    { title: '破损数', dataIndex: 'damaged', key: 'damaged' },
    { title: '安全库存', dataIndex: 'safetyStock', key: 'safetyStock' },
    { title: '销量(7天/15天/30天)', dataIndex: 'sales', key: 'sales' },
    { title: '在途数量', dataIndex: 'inTransit', key: 'inTransit' },
    { title: '成本/总成本/可用成本', dataIndex: 'costInfo', key: 'costInfo' },
    { title: '操作', key: 'operation', render: () => <a>操作</a>, fixed: 'right' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'inventory', label: '现有库存' },
    { key: 'warning', label: '预警SKU' },
    { key: 'distribution', label: '分销库存' },
    { key: 'distributionWarning', label: '分销预警' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">现有库存</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />

        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Input placeholder="sku" prefix="sku:" style={{ width: 200 }} />
            <Input placeholder="规格" prefix="规格:" style={{ width: 200 }} />
            <Input placeholder="产品名称" prefix="产品名称:" style={{ width: 200 }} />
            <Input placeholder="系统编码" prefix="系统编码:" style={{ width: 200 }} />
            <Input placeholder="自定义编码" prefix="自定义编码:" style={{ width: 200 }} />
            <Select placeholder="仓库" style={{ width: 200 }} allowClear />
            <Select placeholder="商品分类" style={{ width: 200 }} allowClear />
            <Input placeholder="备注" prefix="备注:" style={{ width: 200 }} />
            
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ExportOutlined />}>导出</Button>
            </Space>
        </div>
      </Card>
      
      <Card>
        <Space className="mb-4">
          <Button type="primary" icon={<PrinterOutlined />}>打印标签</Button>
          <Button icon={<SettingOutlined />}>编辑安全库存</Button>
        </Space>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    warehouse: "测试数据 1",
    productInfo: "测试数据 1",
    category: "测试数据 1",
    dimensions: "测试数据 1",
    stock: "测试数据 1",
    available: "测试数据 1",
    frozen: "测试数据 1",
    damaged: "测试数据 1",
    safetyStock: "测试数据 1",
    sales: "测试数据 1",
    inTransit: "测试数据 1",
    costInfo: 100
  },
  {
    key: "2",
    warehouse: "测试数据 2",
    productInfo: "测试数据 2",
    category: "测试数据 2",
    dimensions: "测试数据 2",
    stock: "测试数据 2",
    available: "测试数据 2",
    frozen: "测试数据 2",
    damaged: "测试数据 2",
    safetyStock: "测试数据 2",
    sales: "测试数据 2",
    inTransit: "测试数据 2",
    costInfo: 200
  },
  {
    key: "3",
    warehouse: "测试数据 3",
    productInfo: "测试数据 3",
    category: "测试数据 3",
    dimensions: "测试数据 3",
    stock: "测试数据 3",
    available: "测试数据 3",
    frozen: "测试数据 3",
    damaged: "测试数据 3",
    safetyStock: "测试数据 3",
    sales: "测试数据 3",
    inTransit: "测试数据 3",
    costInfo: 300
  },
  {
    key: "4",
    warehouse: "测试数据 4",
    productInfo: "测试数据 4",
    category: "测试数据 4",
    dimensions: "测试数据 4",
    stock: "测试数据 4",
    available: "测试数据 4",
    frozen: "测试数据 4",
    damaged: "测试数据 4",
    safetyStock: "测试数据 4",
    sales: "测试数据 4",
    inTransit: "测试数据 4",
    costInfo: 400
  },
  {
    key: "5",
    warehouse: "测试数据 5",
    productInfo: "测试数据 5",
    category: "测试数据 5",
    dimensions: "测试数据 5",
    stock: "测试数据 5",
    available: "测试数据 5",
    frozen: "测试数据 5",
    damaged: "测试数据 5",
    safetyStock: "测试数据 5",
    sales: "测试数据 5",
    inTransit: "测试数据 5",
    costInfo: 500
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
          scroll={{ x: 1500 }}
        />
        <div className="mt-4 text-gray-500 text-sm">
            总库存0件，总成本0元，SKU总数0个，可用库存0件，可用库存成本0元
        </div>
      </Card>
    </div>
  );
};

export default InventoryPage;
