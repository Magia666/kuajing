import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Space, Card, Form } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, EditOutlined } from '@ant-design/icons';

interface IssueData {
  key: string;
  orderInfo: string;
  store: string;
  messageContent: string;
  messageTime: string;
}

const IssueOrderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<IssueData> = [
    { title: '订单编号/平台', dataIndex: 'orderInfo', key: 'orderInfo', width: '20%' },
    { title: '店铺名称(别名)', dataIndex: 'store', key: 'store' },
    { title: '消息内容', dataIndex: 'messageContent', key: 'messageContent' },
    { title: '消息时间', dataIndex: 'messageTime', key: 'messageTime' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a>, width: 100 },
  ];

  const dataSource: IssueData[] = [{ key: "1", orderNumber: "ORD-001", customer: "John Doe", title: "Test Item", status: "处理中", total: 100, roleName: "管理员", accountName: "test_user", phone: "13800138000", amount: 100, operation: "操作" }, { key: "2", orderNumber: "ORD-002", customer: "Jane Doe", title: "Test Item 2", status: "已完成", total: 200, roleName: "普通职员", accountName: "normal_user", phone: "13800138001", amount: 200, operation: "操作" }];

  const topTabs: TabsProps['items'] = [
    { key: 'pending', label: '待处理' },
    { key: 'processed', label: '已处理' },
    { key: 'finished', label: '完结' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">问题订单</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} />
        
        <Form layout="inline" className="mt-4 gap-4">
          <Form.Item label="订单编号">
            <Input placeholder="输入订单编号" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="消息内容">
            <Input placeholder="输入消息内容" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="用户ID">
            <Input placeholder="输入用户ID" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<EditOutlined />}>批量标记</Button>
        </div>
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

export default IssueOrderPage;
