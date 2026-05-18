import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Select, Space, Card, Badge } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

interface ProductData {
  key: string;
  product: string;
  skuSpecs: string;
  matchStatus: string;
  localProductInfo: string;
  productSku: string;
}

const ProductMatchPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const columns: TableColumnsType<ProductData> = [
    { title: '产品', dataIndex: 'product', key: 'product' },
    { title: 'sku/规格', dataIndex: 'skuSpecs', key: 'skuSpecs' },
    { title: '匹配状态', dataIndex: 'matchStatus', key: 'matchStatus' },
    { title: '本地商品信息', dataIndex: 'localProductInfo', key: 'localProductInfo' },
    { title: '商品sku', dataIndex: 'productSku', key: 'productSku' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a> },
  ];

  const dataSource: ProductData[] = []; // Empty for now

  const items: TabsProps['items'] = [
    { key: 'all', label: <Badge count={0} offset={[10, 0]}>全部</Badge> },
    { key: 'matched', label: <Badge count={0} offset={[10, 0]}>已匹配</Badge> },
    { key: 'unmatched', label: <Badge count={0} offset={[10, 0]}>未匹配</Badge> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Card className="mb-4">
        <Space wrap className="w-full mb-4">
          <Input placeholder="产品ID" className="w-40" />
          <Input placeholder="sku" className="w-40" />
          <Input placeholder="加*可模糊查询" className="w-40" />
          <Input placeholder="主sku" className="w-40" />
          <Input placeholder="店铺名称" className="w-40" />
          <Select placeholder="站点" className="w-40" />
          <Input placeholder="标题" className="w-40" />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
        <Space>
          <Button type="primary" icon={<PlusOutlined />}>SKU自动匹配</Button>
          <Button icon={<MinusOutlined />}>SKU解除匹配</Button>
        </Space>
      </Card>
      
      <Card>
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={items} />
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ProductMatchPage;
