import React, { useState } from 'react';
import { Table, Button, Tabs, Card } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons';

interface RechargeAuditData {
  key: string;
  rechargeAmount: number;
  currency: string;
  rechargeAccount: string;
  account: string;
  auditStatus: string;
  rechargeTime: string;
}

const RechargeAuditPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('audit');

  const columns: TableColumnsType<RechargeAuditData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '充值金额', dataIndex: 'rechargeAmount', key: 'rechargeAmount' },
    { title: '币种', dataIndex: 'currency', key: 'currency' },
    { title: '充值账户', dataIndex: 'rechargeAccount', key: 'rechargeAccount' },
    { title: '账号', dataIndex: 'account', key: 'account' },
    { title: '审核状态', dataIndex: 'auditStatus', key: 'auditStatus' },
    { title: '充值时间', dataIndex: 'rechargeTime', key: 'rechargeTime' },
    { title: '充值截图', key: 'screenshot', render: () => <SearchOutlined /> },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const dataSource: RechargeAuditData[] = [
  {
    key: "1",
    rechargeAmount: "128.00",
    currency: "USD",
    rechargeAccount: "张无忌",
    account: "张无忌",
    auditStatus: "处理中",
    rechargeTime: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    rechargeAmount: "194.50",
    currency: "CNY",
    rechargeAccount: "李寻欢",
    account: "李寻欢",
    auditStatus: "已发货",
    rechargeTime: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    rechargeAmount: "261.00",
    currency: "EUR",
    rechargeAccount: "王语嫣",
    account: "王语嫣",
    auditStatus: "待付款",
    rechargeTime: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    rechargeAmount: "327.50",
    currency: "GBP",
    rechargeAccount: "赵敏",
    account: "赵敏",
    auditStatus: "已完成",
    rechargeTime: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    rechargeAmount: "394.00",
    currency: "JPY",
    rechargeAccount: "系统管理员",
    account: "系统管理员",
    auditStatus: "已取消",
    rechargeTime: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    rechargeAmount: "460.50",
    currency: "USD",
    rechargeAccount: "运营专员",
    account: "运营专员",
    auditStatus: "退款中",
    rechargeTime: "2024-05-15 14:35:00"
  }
];

  const topTabs: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'audit', label: '充值审核' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} className="mb-4 bg-white px-4" />
      
      <Card>
        <div className="mb-4">
          <Button icon={<ReloadOutlined />}>刷新</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default RechargeAuditPage;
