import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Alert, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';

interface CompensationClaimData {
  key: string;
  warehouse: string;
  orderNumber: string;
  claimType: string;
  claimDescription: string;
  applicationAmount: number;
  actualAmount: number;
  status: string;
  rejectionReason: string;
  applyTime: string;
}

const CompensationClaimPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('claim');

  const columns: TableColumnsType<CompensationClaimData> = [
    { title: '索赔仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '索赔类型', dataIndex: 'claimType', key: 'claimType' },
    { title: '赔付说明', dataIndex: 'claimDescription', key: 'claimDescription' },
    { title: '申请赔付金额(¥)', dataIndex: 'applicationAmount', key: 'applicationAmount' },
    { title: '实际赔付金额(¥)', dataIndex: 'actualAmount', key: 'actualAmount' },
    { title: '处理状态', dataIndex: 'status', key: 'status' },
    { title: '拒绝赔付原因', dataIndex: 'rejectionReason', key: 'rejectionReason' },
    { title: '申请时间', dataIndex: 'applyTime', key: 'applyTime' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const topTabs: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'claim', label: '索赔工单' },
  ];

  const renderFilterSection = (label: string, items: string[]) => (
    <div className="flex flex-wrap gap-4 items-center">
      <span className="font-medium text-gray-600 w-16">{label}:</span>
      <Space className="flex-wrap">
        {items.map(item => <Button key={item} type="text" size="small">{item}</Button>)}
      </Space>
    </div>
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} className="mb-4 bg-white px-4" />
      
      <Alert
        title="赔付说明"
        description="此功能应用于您跟客服人员沟通且符合仓库赔付标准的订单发起索赔登记，例如:仓库错发漏发、丢件等 | 不符合赔付条件的，一律不予理赔"
        type="info"
        showIcon
        icon={<InfoCircleOutlined />}
        className="mb-4"
      />

      <Card className="mb-4">
        <div className="space-y-4">
          {renderFilterSection('处理状态', ['全部', '待处理', '已处理', '已拒绝'])}
          {renderFilterSection('申请时间', ['全部', '今天', '昨天', '近7天', '近15天', '近30天'])}
          
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-600 w-16">单号:</span>
            <Input placeholder="请填写单号" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
          </div>
        </div>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<PlusOutlined />}>申请赔付</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    warehouse: "测试数据 1",
    orderNumber: "测试数据 1",
    claimType: "测试数据 1",
    claimDescription: "测试数据 1",
    applicationAmount: 100,
    actualAmount: 100,
    status: "处理中",
    rejectionReason: "测试数据 1",
    applyTime: "2024-03-21"
  },
  {
    key: "2",
    warehouse: "测试数据 2",
    orderNumber: "测试数据 2",
    claimType: "测试数据 2",
    claimDescription: "测试数据 2",
    applicationAmount: 200,
    actualAmount: 200,
    status: "成功",
    rejectionReason: "测试数据 2",
    applyTime: "2024-03-22"
  },
  {
    key: "3",
    warehouse: "测试数据 3",
    orderNumber: "测试数据 3",
    claimType: "测试数据 3",
    claimDescription: "测试数据 3",
    applicationAmount: 300,
    actualAmount: 300,
    status: "处理中",
    rejectionReason: "测试数据 3",
    applyTime: "2024-03-23"
  },
  {
    key: "4",
    warehouse: "测试数据 4",
    orderNumber: "测试数据 4",
    claimType: "测试数据 4",
    claimDescription: "测试数据 4",
    applicationAmount: 400,
    actualAmount: 400,
    status: "成功",
    rejectionReason: "测试数据 4",
    applyTime: "2024-03-24"
  },
  {
    key: "5",
    warehouse: "测试数据 5",
    orderNumber: "测试数据 5",
    claimType: "测试数据 5",
    claimDescription: "测试数据 5",
    applicationAmount: 500,
    actualAmount: 500,
    status: "处理中",
    rejectionReason: "测试数据 5",
    applyTime: "2024-03-25"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default CompensationClaimPage;
