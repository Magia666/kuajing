import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface ExpressClaimData {
  key: string;
  expressNumber: string;
  express: string;
  warehouse: string;
  status: string;
  receiveTime: string;
  photo: string;
}

const ExpressClaimPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<ExpressClaimData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '快递单号', dataIndex: 'expressNumber', key: 'expressNumber' },
    { title: '快递', dataIndex: 'express', key: 'express' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '签收时间', dataIndex: 'receiveTime', key: 'receiveTime' },
    { title: '照片', dataIndex: 'photo', key: 'photo' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'pending', label: '待录单' },
    { key: 'confirm', label: '待认领' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">快递招领</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Input placeholder="快递单号" prefix="快递单号:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
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

export default ExpressClaimPage;
