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

  const dataSource: EmployeeData[] = [
  {
    key: "1",
    username: "张无忌",
    realName: "2024新款智能手表监控防水运动手环",
    phone: "13880000000",
    email: "employee0@company.com",
    note: "SO202405181000",
    status: "处理中"
  },
  {
    key: "2",
    username: "李寻欢",
    realName: "无线蓝牙耳机降噪入耳式长续航",
    phone: "13880012345",
    email: "employee1@company.com",
    note: "PO202405181007",
    status: "已发货"
  },
  {
    key: "3",
    username: "王语嫣",
    realName: "纯棉短袖T恤男夏季宽松百搭",
    phone: "13880024690",
    email: "employee2@company.com",
    note: "RO202405181014",
    status: "待付款"
  },
  {
    key: "4",
    username: "赵敏",
    realName: "户外便携运动水杯大容量防漏",
    phone: "13880037035",
    email: "employee3@company.com",
    note: "TR202405181021",
    status: "已完成"
  },
  {
    key: "5",
    username: "系统管理员",
    realName: "家用多功能颈椎按摩仪护颈",
    phone: "13880049380",
    email: "employee4@company.com",
    note: "WO202405181028",
    status: "已取消"
  },
  {
    key: "6",
    username: "运营专员",
    realName: "2024新款智能手表监控防水运动手环",
    phone: "13880061725",
    email: "employee5@company.com",
    note: "SO202405181035",
    status: "退款中"
  }
];

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
