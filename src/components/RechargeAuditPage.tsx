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
    { key: '1', rechargeAmount: 50, currency: 'CNY', rechargeAccount: '支付宝', account: '支付宝', auditStatus: '通过', rechargeTime: '2025-10-31 18:41:24' },
    { key: '2', rechargeAmount: 66.71, currency: 'CNY', rechargeAccount: '支付宝', account: '支付宝', auditStatus: '通过', rechargeTime: '2025-07-01 19:06:11' },
    { key: '3', rechargeAmount: 500, currency: 'CNY', rechargeAccount: '支付宝', account: '支付宝', auditStatus: '通过', rechargeTime: '2025-06-27 11:54:46' },
    { key: '4', rechargeAmount: 500, currency: 'CNY', rechargeAccount: '支付宝', account: '支付宝', auditStatus: '通过', rechargeTime: '2025-06-13 10:42:28' },
    { key: '5', rechargeAmount: 400, currency: 'CNY', rechargeAccount: '支付宝', account: '支付宝', auditStatus: '通过', rechargeTime: '2025-05-16 15:42:01' },
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
