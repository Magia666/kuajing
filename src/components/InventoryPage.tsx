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
    warehouse: "美西一仓",
    productInfo: "2024新款智能手表监控防水运动手环",
    category: "电子产品",
    dimensions: "10x20x30 cm",
    stock: 10,
    available: 10,
    frozen: 10,
    damaged: 10,
    safetyStock: 10,
    sales: 10,
    inTransit: 10,
    costInfo: "128.00"
  },
  {
    key: "2",
    warehouse: "深圳总仓",
    productInfo: "无线蓝牙耳机降噪入耳式长续航",
    category: "服装服饰",
    dimensions: "11x21x31 cm",
    stock: 25,
    available: 25,
    frozen: 25,
    damaged: 25,
    safetyStock: 25,
    sales: 25,
    inTransit: 25,
    costInfo: "194.50"
  },
  {
    key: "3",
    warehouse: "义乌中转仓",
    productInfo: "纯棉短袖T恤男夏季宽松百搭",
    category: "家居日用",
    dimensions: "12x22x32 cm",
    stock: 40,
    available: 40,
    frozen: 40,
    damaged: 40,
    safetyStock: 40,
    sales: 40,
    inTransit: 40,
    costInfo: "261.00"
  },
  {
    key: "4",
    warehouse: "美东二仓",
    productInfo: "户外便携运动水杯大容量防漏",
    category: "户外运动",
    dimensions: "13x23x33 cm",
    stock: 55,
    available: 55,
    frozen: 55,
    damaged: 55,
    safetyStock: 55,
    sales: 55,
    inTransit: 55,
    costInfo: "327.50"
  },
  {
    key: "5",
    warehouse: "法兰克福仓",
    productInfo: "家用多功能颈椎按摩仪护颈",
    category: "美妆个护",
    dimensions: "14x24x34 cm",
    stock: 70,
    available: 70,
    frozen: 70,
    damaged: 70,
    safetyStock: 70,
    sales: 70,
    inTransit: 70,
    costInfo: "394.00"
  },
  {
    key: "6",
    warehouse: "美西一仓",
    productInfo: "2024新款智能手表监控防水运动手环",
    category: "电子产品",
    dimensions: "15x25x35 cm",
    stock: 85,
    available: 85,
    frozen: 85,
    damaged: 85,
    safetyStock: 85,
    sales: 85,
    inTransit: 85,
    costInfo: "460.50"
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
