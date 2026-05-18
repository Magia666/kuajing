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

  const dataSource: RoleData[] = [
  {
    key: "1",
    roleCode: "张无忌",
    roleName: "张无忌",
    createTime: "2024-05-10 14:10:00",
    note: "SO202405181000"
  },
  {
    key: "2",
    roleCode: "李寻欢",
    roleName: "李寻欢",
    createTime: "2024-05-11 14:15:00",
    note: "PO202405181007"
  },
  {
    key: "3",
    roleCode: "王语嫣",
    roleName: "王语嫣",
    createTime: "2024-05-12 14:20:00",
    note: "RO202405181014"
  },
  {
    key: "4",
    roleCode: "赵敏",
    roleName: "赵敏",
    createTime: "2024-05-13 14:25:00",
    note: "TR202405181021"
  },
  {
    key: "5",
    roleCode: "系统管理员",
    roleName: "系统管理员",
    createTime: "2024-05-14 14:30:00",
    note: "WO202405181028"
  },
  {
    key: "6",
    roleCode: "运营专员",
    roleName: "运营专员",
    createTime: "2024-05-15 14:35:00",
    note: "SO202405181035"
  }
];

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
