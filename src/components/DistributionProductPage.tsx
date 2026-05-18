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
    productInfo: "测试数据 1",
    itemNumber: "测试数据 1",
    sku: "测试数据 1",
    price: 100,
    stock: "测试数据 1",
    weight: "测试数据 1",
    dimensions: "测试数据 1",
    category: "测试数据 1"
  },
  {
    key: "2",
    productInfo: "测试数据 2",
    itemNumber: "测试数据 2",
    sku: "测试数据 2",
    price: 200,
    stock: "测试数据 2",
    weight: "测试数据 2",
    dimensions: "测试数据 2",
    category: "测试数据 2"
  },
  {
    key: "3",
    productInfo: "测试数据 3",
    itemNumber: "测试数据 3",
    sku: "测试数据 3",
    price: 300,
    stock: "测试数据 3",
    weight: "测试数据 3",
    dimensions: "测试数据 3",
    category: "测试数据 3"
  },
  {
    key: "4",
    productInfo: "测试数据 4",
    itemNumber: "测试数据 4",
    sku: "测试数据 4",
    price: 400,
    stock: "测试数据 4",
    weight: "测试数据 4",
    dimensions: "测试数据 4",
    category: "测试数据 4"
  },
  {
    key: "5",
    productInfo: "测试数据 5",
    itemNumber: "测试数据 5",
    sku: "测试数据 5",
    price: 500,
    stock: "测试数据 5",
    weight: "测试数据 5",
    dimensions: "测试数据 5",
    category: "测试数据 5"
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
