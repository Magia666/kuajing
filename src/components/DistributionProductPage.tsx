import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Space, Card, Form, Select } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, ExportOutlined, DownloadOutlined, UploadOutlined } from '@ant-design/icons';

interface DistributionProductData {
  key: string;
  productInfo: string;
  itemNumber: string;
  sku: string;
  price: number;
  stock: number;
  weight: number;
  dimensions: string;
  category: string;
}

const DistributionProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('onSale');

  const columns: TableColumnsType<DistributionProductData> = [
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
    { title: '货号', dataIndex: 'itemNumber', key: 'itemNumber' },
    { title: 'sku/规格/系统编码/本地编码', dataIndex: 'sku', key: 'sku' },
    { title: '售价', dataIndex: 'price', key: 'price' },
    { title: '库存', dataIndex: 'stock', key: 'stock' },
    { title: '商品重量', dataIndex: 'weight', key: 'weight' },
    { title: '尺寸/体积', dataIndex: 'dimensions', key: 'dimensions' },
    { title: '商品分类', dataIndex: 'category', key: 'category' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const topTabs: TabsProps['items'] = [
    { key: 'onSale', label: '已上架' },
    { key: 'offSale', label: '已下架' },
    { key: 'all', label: '全部' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">分销商品</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} />
        
        <Form layout="inline" className="mt-4 gap-4">
          <Form.Item label="系统编码">
            <Input placeholder="系统编码" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="货号">
            <Input placeholder="货号" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="sku">
            <Input placeholder="sku" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="产品名称">
            <Input placeholder="产品名称" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="商品分类">
            <Select placeholder="商品分类" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      
      <Card>
        <Space className="mb-4">
          <Button type="primary" icon={<PlusOutlined />}>新增</Button>
          <Button icon={<DownloadOutlined />}>同步到物流仓库</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
          <Button icon={<DownloadOutlined />}>批量下架</Button>
          <Button icon={<UploadOutlined />}>excel导入</Button>
          <Button icon={<UploadOutlined />}>从线上导入</Button>
          <Button type="link">模板</Button>
        </Space>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    productInfo: "2024新款智能手表监控防水运动手环",
    itemNumber: "2024新款智能手表监控防水运动手环",
    sku: "SKU-24C000X",
    price: "128.00",
    stock: 10,
    weight: "0.50kg",
    dimensions: "10x20x30 cm",
    category: "电子产品"
  },
  {
    key: "2",
    productInfo: "无线蓝牙耳机降噪入耳式长续航",
    itemNumber: "无线蓝牙耳机降噪入耳式长续航",
    sku: "SKU-24C001X",
    price: "194.50",
    stock: 25,
    weight: "0.70kg",
    dimensions: "11x21x31 cm",
    category: "服装服饰"
  },
  {
    key: "3",
    productInfo: "纯棉短袖T恤男夏季宽松百搭",
    itemNumber: "纯棉短袖T恤男夏季宽松百搭",
    sku: "SKU-24C002X",
    price: "261.00",
    stock: 40,
    weight: "0.90kg",
    dimensions: "12x22x32 cm",
    category: "家居日用"
  },
  {
    key: "4",
    productInfo: "户外便携运动水杯大容量防漏",
    itemNumber: "户外便携运动水杯大容量防漏",
    sku: "SKU-24C003X",
    price: "327.50",
    stock: 55,
    weight: "1.10kg",
    dimensions: "13x23x33 cm",
    category: "户外运动"
  },
  {
    key: "5",
    productInfo: "家用多功能颈椎按摩仪护颈",
    itemNumber: "家用多功能颈椎按摩仪护颈",
    sku: "SKU-24C004X",
    price: "394.00",
    stock: 70,
    weight: "1.30kg",
    dimensions: "14x24x34 cm",
    category: "美妆个护"
  },
  {
    key: "6",
    productInfo: "2024新款智能手表监控防水运动手环",
    itemNumber: "2024新款智能手表监控防水运动手环",
    sku: "SKU-24C005X",
    price: "460.50",
    stock: 85,
    weight: "1.50kg",
    dimensions: "15x25x35 cm",
    category: "电子产品"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default DistributionProductPage;
