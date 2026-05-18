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

  const dataSource: ProductData[] = [
  {
    key: "1",
    localCode: "SO202405181000",
    productName: "2024新款智能手表监控防水运动手环",
    sku: "SKU-24C000X",
    matchedSku: "SKU-24C000X",
    dimensions: "10x20x30 cm",
    cost: "128.00"
  },
  {
    key: "2",
    localCode: "PO202405181007",
    productName: "无线蓝牙耳机降噪入耳式长续航",
    sku: "SKU-24C001X",
    matchedSku: "SKU-24C001X",
    dimensions: "11x21x31 cm",
    cost: "194.50"
  },
  {
    key: "3",
    localCode: "RO202405181014",
    productName: "纯棉短袖T恤男夏季宽松百搭",
    sku: "SKU-24C002X",
    matchedSku: "SKU-24C002X",
    dimensions: "12x22x32 cm",
    cost: "261.00"
  },
  {
    key: "4",
    localCode: "TR202405181021",
    productName: "户外便携运动水杯大容量防漏",
    sku: "SKU-24C003X",
    matchedSku: "SKU-24C003X",
    dimensions: "13x23x33 cm",
    cost: "327.50"
  },
  {
    key: "5",
    localCode: "WO202405181028",
    productName: "家用多功能颈椎按摩仪护颈",
    sku: "SKU-24C004X",
    matchedSku: "SKU-24C004X",
    dimensions: "14x24x34 cm",
    cost: "394.00"
  },
  {
    key: "6",
    localCode: "SO202405181035",
    productName: "2024新款智能手表监控防水运动手环",
    sku: "SKU-24C005X",
    matchedSku: "SKU-24C005X",
    dimensions: "15x25x35 cm",
    cost: "460.50"
  }
];

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
