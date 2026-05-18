import React from 'react';
import { Table, Input, Button, Space, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

interface EmployeeData {
  key: string;
  username: string;
  realName: string;
  phone: string;
  email: string;
  note: string;
  status: string;
}

const EmployeeManagementPage: React.FC = () => {
  const columns: TableColumnsType<EmployeeData> = [
    { title: '用户账号', dataIndex: 'username', key: 'username' },
    { title: '真实姓名', dataIndex: 'realName', key: 'realName' },
    { title: '手机号', dataIndex: 'phone', key: 'phone' },
    { title: '邮箱', dataIndex: 'email', key: 'email' },
    { title: '备注', dataIndex: 'note', key: 'note' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a> },
  ];

  const dataSource: EmployeeData[] = [];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">员工管理</h1>
      <Card className="mb-4">
        <Space wrap className="w-full mb-4">
          <Input placeholder="请输入账号" className="w-48" />
          <Input placeholder="请输入真实姓名" className="w-48" />
          <Input placeholder="请输入手机号" className="w-48" />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
        </Space>
        
        <Button type="primary" icon={<PlusOutlined />}>新建员工</Button>
      </Card>
      
      <Card>
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

export default EmployeeManagementPage;
