import React, { useState } from 'react';
import { Table, Input, Button, Card, Tabs, Select, DatePicker } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface PackageClaimData {
  key: string;
  productInfo: string;
  originalOrderInfo: string;
  packageInfo: string;
  shelfInfo: string;
  time: string;
  remark: string;
}

const PackageClaimPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('linked');
  const [activeSubTab, setActiveSubTab] = useState('pending');

  const columns: TableColumnsType<PackageClaimData> = [
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
    { title: '原订单信息', dataIndex: 'originalOrderInfo', key: 'originalOrderInfo' },
    { title: '包裹信息', dataIndex: 'packageInfo', key: 'packageInfo' },
    { title: '上架信息', dataIndex: 'shelfInfo', key: 'shelfInfo' },
    { title: '时间', dataIndex: 'time', key: 'time' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'linked', label: '关联订单' },
    { key: 'unlinked', label: '未关联订单' },
    { key: 'pending', label: '待认领' },
  ];

  const subTabItems: TabsProps['items'] = [
    { key: 'pending', label: '待出货 (0)' },
    { key: 'shipped', label: '已重出 (0)' },
    { key: 'destroyed', label: '已销毁 (0)' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">包裹认领</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Select placeholder="仓库" style={{ width: 180 }} allowClear />
            <Select placeholder="上架时间" style={{ width: 180 }} allowClear />
            <RangePicker showTime style={{ width: 250 }} />
            <Select placeholder="扫描单号" style={{ width: 180 }} allowClear />
            <Input placeholder="输入单号" style={{ width: 180 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Button icon={<ExportOutlined />} className="mb-4">导出</Button>
        <Tabs activeKey={activeSubTab} onChange={setActiveSubTab} items={subTabItems} type="card" />

        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    productInfo: "测试数据 1",
    originalOrderInfo: "测试数据 1",
    packageInfo: "测试数据 1",
    shelfInfo: "测试数据 1",
    time: "2024-03-21",
    remark: "测试数据 1"
  },
  {
    key: "2",
    productInfo: "测试数据 2",
    originalOrderInfo: "测试数据 2",
    packageInfo: "测试数据 2",
    shelfInfo: "测试数据 2",
    time: "2024-03-22",
    remark: "测试数据 2"
  },
  {
    key: "3",
    productInfo: "测试数据 3",
    originalOrderInfo: "测试数据 3",
    packageInfo: "测试数据 3",
    shelfInfo: "测试数据 3",
    time: "2024-03-23",
    remark: "测试数据 3"
  },
  {
    key: "4",
    productInfo: "测试数据 4",
    originalOrderInfo: "测试数据 4",
    packageInfo: "测试数据 4",
    shelfInfo: "测试数据 4",
    time: "2024-03-24",
    remark: "测试数据 4"
  },
  {
    key: "5",
    productInfo: "测试数据 5",
    originalOrderInfo: "测试数据 5",
    packageInfo: "测试数据 5",
    shelfInfo: "测试数据 5",
    time: "2024-03-25",
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

export default PackageClaimPage;
