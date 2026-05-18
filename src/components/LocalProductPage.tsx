import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Select, Space, Card, Alert } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, PlusOutlined, UploadOutlined, DownloadOutlined, ExportOutlined } from '@ant-design/icons';

interface ProductData {
  key: string;
  localCode: string;
  productName: string;
  sku: string;
  matchedSku: string;
  dimensions: string;
  cost: number;
}

const LocalProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('single');

  const columns: TableColumnsType<ProductData> = [
    { title: '本地/自定义/分类/分销', dataIndex: 'localCode', key: 'localCode' },
    { title: '产品名称', dataIndex: 'productName', key: 'productName' },
    { title: 'sku/规格', dataIndex: 'sku', key: 'sku' },
    { title: '已匹配店铺SKU', dataIndex: 'matchedSku', key: 'matchedSku' },
    { title: '尺寸/体积/重量', dataIndex: 'dimensions', key: 'dimensions' },
    { title: '成本', dataIndex: 'cost', key: 'cost' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a> },
  ];

  const dataSource: ProductData[] = [{ key: "1", orderNumber: "ORD-001", customer: "John Doe", title: "Test Item", status: "处理中", total: 100, roleName: "管理员", accountName: "test_user", phone: "13800138000", amount: 100, operation: "操作" }, { key: "2", orderNumber: "ORD-002", customer: "Jane Doe", title: "Test Item 2", status: "已完成", total: 200, roleName: "普通职员", accountName: "normal_user", phone: "13800138001", amount: 200, operation: "操作" }];

  const items: TabsProps['items'] = [
    { key: 'single', label: '单sku' },
    { key: 'bundle', label: '组合sku' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">本地商品</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={items} type="card" className="mb-4" />
        
        <Space wrap className="w-full mb-4">
          <Input placeholder="本地编码" className="w-48" />
          <Input placeholder="自定义编码" className="w-48" />
          <Input placeholder="sku" className="w-48" />
          <Input placeholder="产品名称" className="w-48" />
          <Select placeholder="商品分类" className="w-48" />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
        </Space>
        
        <Space>
          <Button type="primary" icon={<PlusOutlined />}>新增</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
          <Button icon={<UploadOutlined />}>从线上导入</Button>
          <Button icon={<DownloadOutlined />}>excel导入</Button>
        </Space>
      </Card>
      
      <Card>
        <Alert 
          title="*本地sku不可重复，否则会影响sku的自动对应和批量库存发货，请卖家尽快修正历史数据" 
          type="info" 
          showIcon 
          className="mb-4"
        />
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

export default LocalProductPage;
