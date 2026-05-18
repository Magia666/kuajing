import React from 'react';
import { Table, Input, Button, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

interface RefusalSignData {
  key: string;
  createTime: string;
  refusalOrderNumber: string;
  originalWarehouse: string;
  status: string;
  expressName: string;
  remark: string;
}

const RefusalSignPage: React.FC = () => {
  const columns: TableColumnsType<RefusalSignData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '拒签单号', dataIndex: 'refusalOrderNumber', key: 'refusalOrderNumber' },
    { title: '原件仓库', dataIndex: 'originalWarehouse', key: 'originalWarehouse' },
    { title: '处理状态', dataIndex: 'status', key: 'status' },
    { title: '快递名称', dataIndex: 'expressName', key: 'expressName' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">申请拒签</h1>
      
      <Card className="mb-4">
        <div className="flex flex-wrap gap-4 items-center">
            <Input placeholder="拒签单号" prefix="拒签单号:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
        </div>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">新增</Button>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "测试数据 1",
    createTime: "2024-03-21",
    refusalOrderNumber: "测试数据 1",
    originalWarehouse: "测试数据 1",
    status: "处理中",
    expressName: "测试数据 1",
    remark: "测试数据 1"
  },
  {
    key: "测试数据 2",
    createTime: "2024-03-22",
    refusalOrderNumber: "测试数据 2",
    originalWarehouse: "测试数据 2",
    status: "成功",
    expressName: "测试数据 2",
    remark: "测试数据 2"
  },
  {
    key: "测试数据 3",
    createTime: "2024-03-23",
    refusalOrderNumber: "测试数据 3",
    originalWarehouse: "测试数据 3",
    status: "处理中",
    expressName: "测试数据 3",
    remark: "测试数据 3"
  },
  {
    key: "测试数据 4",
    createTime: "2024-03-24",
    refusalOrderNumber: "测试数据 4",
    originalWarehouse: "测试数据 4",
    status: "成功",
    expressName: "测试数据 4",
    remark: "测试数据 4"
  },
  {
    key: "测试数据 5",
    createTime: "2024-03-25",
    refusalOrderNumber: "测试数据 5",
    originalWarehouse: "测试数据 5",
    status: "处理中",
    expressName: "测试数据 5",
    remark: "测试数据 5"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default RefusalSignPage;
