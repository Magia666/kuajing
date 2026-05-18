import React from 'react';
import { Table, Input, Button, Space, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface RoleData {
  key: string;
  roleCode: string;
  roleName: string;
  createTime: string;
  note: string;
}

const RoleManagementPage: React.FC = () => {
  const columns: TableColumnsType<RoleData> = [
    { title: '角色编码', dataIndex: 'roleCode', key: 'roleCode' },
    { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime', sorter: true },
    { title: '备注', dataIndex: 'note', key: 'note' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a> },
  ];

  const dataSource: RoleData[] = [{ key: "1", orderNumber: "ORD-001", customer: "John Doe", title: "Test Item", status: "处理中", total: 100, roleName: "管理员", accountName: "test_user", phone: "13800138000", amount: 100, operation: "操作" }, { key: "2", orderNumber: "ORD-002", customer: "Jane Doe", title: "Test Item 2", status: "已完成", total: 200, roleName: "普通职员", accountName: "normal_user", phone: "13800138001", amount: 200, operation: "操作" }];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">员工角色</h1>
      <Card className="mb-4">
        <Space wrap className="w-full mb-4">
          <Input placeholder="角色名称" className="w-64" />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
        
        <Button type="primary" icon={<PlusOutlined />}>创建角色</Button>
      </Card>
      
      <Card>
        <div className="bg-blue-50 p-3 mb-4 rounded border border-blue-100 text-sm">
          已选择0项 <a className="ml-2">清空</a>
        </div>
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

export default RoleManagementPage;
