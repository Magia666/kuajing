import React from 'react';
import { Table, Input, Button, Card, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface InvitationData {
  key: string;
  account: string;
  phone: string;
  registerTime: string;
}

const InvitationListPage: React.FC = () => {
  const columns: TableColumnsType<InvitationData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '账号', dataIndex: 'account', key: 'account' },
    { title: '手机号', dataIndex: 'phone', key: 'phone' },
    { title: '注册时间', dataIndex: 'registerTime', key: 'registerTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">邀请列表</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Input placeholder="用户名" prefix="用户名:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            { key: '1', account: 'testuser001', phone: '138****1234', registerTime: '2023-10-25 10:30:00' },
            { key: '2', account: 'seller_mike', phone: '139****5678', registerTime: '2023-11-02 14:15:22' },
            { key: '3', account: 'jane_doe', phone: '186****9012', registerTime: '2023-12-10 09:45:11' }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default InvitationListPage;
