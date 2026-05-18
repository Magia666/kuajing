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
  {
    key: "1",
    account: "张无忌",
    phone: "13880000000",
    registerTime: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    account: "李寻欢",
    phone: "13880012345",
    registerTime: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    account: "王语嫣",
    phone: "13880024690",
    registerTime: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    account: "赵敏",
    phone: "13880037035",
    registerTime: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    account: "系统管理员",
    phone: "13880049380",
    registerTime: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    account: "运营专员",
    phone: "13880061725",
    registerTime: "2024-05-15 14:35:00"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default InvitationListPage;
