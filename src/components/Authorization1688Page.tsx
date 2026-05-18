import React from 'react';
import { Table, Input, Button, Card, Select, Space, Alert } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface AuthorizationData {
  key: string;
  account: string;
  remark: string;
  authTime: string;
  authStatus: string;
  expirationTime: string;
}

const Authorization1688Page: React.FC = () => {
  const columns: TableColumnsType<AuthorizationData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '账号', dataIndex: 'account', key: 'account' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '授权时间', dataIndex: 'authTime', key: 'authTime' },
    { title: '授权状态', dataIndex: 'authStatus', key: 'authStatus' },
    { title: '过期时间', dataIndex: 'expirationTime', key: 'expirationTime', sorter: true },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">1688授权</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Input placeholder="账号" prefix="账号:" style={{ width: 200 }} />
            <Input placeholder="备注" prefix="备注:" style={{ width: 200 }} />
            <Select placeholder="是否过期" style={{ width: 200 }} allowClear options={[{label: '是', value: 'yes'}, {label: '否', value: 'no'}]} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">新增授权</Button>
        <Alert title={<>已选择0项 <a className="ml-2">清空</a></>} type="info" showIcon className="mb-4" />
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "测试数据 1",
    account: "测试数据 1",
    remark: "测试数据 1",
    authTime: "2024-03-21",
    authStatus: "处理中",
    expirationTime: "2024-03-21"
  },
  {
    key: "测试数据 2",
    account: "测试数据 2",
    remark: "测试数据 2",
    authTime: "2024-03-22",
    authStatus: "成功",
    expirationTime: "2024-03-22"
  },
  {
    key: "测试数据 3",
    account: "测试数据 3",
    remark: "测试数据 3",
    authTime: "2024-03-23",
    authStatus: "处理中",
    expirationTime: "2024-03-23"
  },
  {
    key: "测试数据 4",
    account: "测试数据 4",
    remark: "测试数据 4",
    authTime: "2024-03-24",
    authStatus: "成功",
    expirationTime: "2024-03-24"
  },
  {
    key: "测试数据 5",
    account: "测试数据 5",
    remark: "测试数据 5",
    authTime: "2024-03-25",
    authStatus: "处理中",
    expirationTime: "2024-03-25"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default Authorization1688Page;
