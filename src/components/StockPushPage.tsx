import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface StockPushRuleData {
  key: string;
  ruleName: string;
  productSku: string;
  storeName: string;
  warehouse: string;
  time: string;
  status: string;
}

const StockPushPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('push');

  const columns: TableColumnsType<StockPushRuleData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '规则名称', dataIndex: 'ruleName', key: 'ruleName' },
    { title: '商品sku', dataIndex: 'productSku', key: 'productSku' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '时间', dataIndex: 'time', key: 'time' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'push', label: '库存推送' },
    { key: 'log', label: '推送记录' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">库存推送</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />

        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Input placeholder="SKU名称" prefix="SKU名称:" style={{ width: 250 }} />
            <Input placeholder="规则名称" prefix="规则名称:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Space className="mb-4">
          <Button type="primary">添加推送规则</Button>
          <Button type="primary">手动推送</Button>
        </Space>
        <Table 
          columns={columns} 
          dataSource={[]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default StockPushPage;
