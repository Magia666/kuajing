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
    warehouse: "美西一仓",
    orderNumber: "SO202405181000",
    claimType: "电子产品",
    claimDescription: "客户要求加急发货",
    applicationAmount: "128.00",
    actualAmount: "128.00",
    status: "处理中",
    rejectionReason: "客户要求加急发货",
    applyTime: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    warehouse: "深圳总仓",
    orderNumber: "PO202405181007",
    claimType: "服装服饰",
    claimDescription: "商品存在轻微瑕疵",
    applicationAmount: "194.50",
    actualAmount: "194.50",
    status: "已发货",
    rejectionReason: "商品存在轻微瑕疵",
    applyTime: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    warehouse: "义乌中转仓",
    orderNumber: "RO202405181014",
    claimType: "家居日用",
    claimDescription: "包裹外包装破损",
    applicationAmount: "261.00",
    actualAmount: "261.00",
    status: "待付款",
    rejectionReason: "包裹外包装破损",
    applyTime: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    warehouse: "美东二仓",
    orderNumber: "TR202405181021",
    claimType: "户外运动",
    claimDescription: "尺码拍错，要求换货",
    applicationAmount: "327.50",
    actualAmount: "327.50",
    status: "已完成",
    rejectionReason: "尺码拍错，要求换货",
    applyTime: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    warehouse: "法兰克福仓",
    orderNumber: "WO202405181028",
    claimType: "美妆个护",
    claimDescription: "地址填写错误，已更正",
    applicationAmount: "394.00",
    actualAmount: "394.00",
    status: "已取消",
    rejectionReason: "地址填写错误，已更正",
    applyTime: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    warehouse: "美西一仓",
    orderNumber: "SO202405181035",
    claimType: "电子产品",
    claimDescription: "客户要求加急发货",
    applicationAmount: "460.50",
    actualAmount: "460.50",
    status: "退款中",
    rejectionReason: "客户要求加急发货",
    applyTime: "2024-05-15 14:35:00"
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
