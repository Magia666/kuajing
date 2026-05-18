import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface ReturnApplicationData {
  key: string;
  returnWarehouse: string;
  returnMethod: string;
  applicationPackage: string;
  applicationRemark: string;
  returnAddress: string;
  packageFee: string;
  applicationInfo: string;
  packageInfo: string;
}

const ReturnApplicationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<ReturnApplicationData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '寄回仓库 | 寄回方式', dataIndex: 'returnWarehouse', key: 'returnWarehouse' },
    { title: '申请包裹', dataIndex: 'applicationPackage', key: 'applicationPackage' },
    { title: '申请备注 | 图片', dataIndex: 'applicationRemark', key: 'applicationRemark' },
    { title: '寄回地址', dataIndex: 'returnAddress', key: 'returnAddress' },
    { title: '寄回包裹 | 费用', dataIndex: 'packageFee', key: 'packageFee' },
    { title: '申请信息', dataIndex: 'applicationInfo', key: 'applicationInfo' },
    { title: '寄回包裹 | 信息', dataIndex: 'packageInfo', key: 'packageInfo' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'pending', label: '待处理 (0)' },
    { key: 'approved', label: '已寄回 (0)' },
    { key: 'rejected', label: '已拒绝 (0)' },
    { key: 'all', label: '全部 (0)' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">申请寄回</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Select placeholder="寄回仓库" style={{ width: 180 }} allowClear />
            <Select placeholder="寄回方式" style={{ width: 180 }} allowClear />
            <Select placeholder="申请时间" style={{ width: 180 }} allowClear />
            <RangePicker style={{ width: 250 }} />
            <Select placeholder="申请包裹" style={{ width: 180 }} allowClear />
            <Input placeholder="申请包裹" style={{ width: 180 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">申请寄回</Button>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "测试数据 1",
    returnWarehouse: "测试数据 1",
    applicationPackage: "测试数据 1",
    applicationRemark: "测试数据 1",
    returnAddress: "测试数据 1",
    packageFee: "测试数据 1",
    applicationInfo: "测试数据 1",
    packageInfo: "测试数据 1"
  },
  {
    key: "测试数据 2",
    returnWarehouse: "测试数据 2",
    applicationPackage: "测试数据 2",
    applicationRemark: "测试数据 2",
    returnAddress: "测试数据 2",
    packageFee: "测试数据 2",
    applicationInfo: "测试数据 2",
    packageInfo: "测试数据 2"
  },
  {
    key: "测试数据 3",
    returnWarehouse: "测试数据 3",
    applicationPackage: "测试数据 3",
    applicationRemark: "测试数据 3",
    returnAddress: "测试数据 3",
    packageFee: "测试数据 3",
    applicationInfo: "测试数据 3",
    packageInfo: "测试数据 3"
  },
  {
    key: "测试数据 4",
    returnWarehouse: "测试数据 4",
    applicationPackage: "测试数据 4",
    applicationRemark: "测试数据 4",
    returnAddress: "测试数据 4",
    packageFee: "测试数据 4",
    applicationInfo: "测试数据 4",
    packageInfo: "测试数据 4"
  },
  {
    key: "测试数据 5",
    returnWarehouse: "测试数据 5",
    applicationPackage: "测试数据 5",
    applicationRemark: "测试数据 5",
    returnAddress: "测试数据 5",
    packageFee: "测试数据 5",
    applicationInfo: "测试数据 5",
    packageInfo: "测试数据 5"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ReturnApplicationPage;
