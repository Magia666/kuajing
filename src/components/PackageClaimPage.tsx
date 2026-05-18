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
          dataSource={[]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default PackageClaimPage;
