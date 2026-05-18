import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Select, Space, Card, Checkbox } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface ReturnOrderData {
  key: string;
  orderNumber: string;
  status: string;
  // Add other fields as needed based on common fields
}

const ReturnOrderManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<ReturnOrderData> = [
    { title: '订单编号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '退货状态', dataIndex: 'status', key: 'status' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a> },
  ];

  const dataSource: ReturnOrderData[] = [];

  const topTabs: TabsProps['items'] = [
    { key: 'pending', label: '待处理' },
    { key: 'processed', label: '已处理' },
    { key: 'hold', label: '已搁置' },
    { key: 'all', label: '全部' },
  ];

  const filterItem = (label: string, items: string[]) => (
    <div className="flex flex-wrap gap-4 items-center">
      <span className="font-medium text-gray-600 w-20">{label}:</span>
      <Space className="flex-wrap">
        {items.map(item => <Button key={item} type="text" size="small">{item}</Button>)}
      </Space>
    </div>
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Card className="mb-4">
        <h1 className="text-xl font-bold mb-4">退货订单</h1>
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} className="mb-4" />
        
        <div className="space-y-4">
          {filterItem('退货状态', ['全部', '全部退回中', '已退回未处理', '已退回已处理', '退回失败', '丢包&损坏'])}
          {filterItem('平台类型', ['全部', 'Shopee', 'Lazada', 'Jd', 'coupang', 'tiktok', 'tiktok-us', 'thisshop', 'shopify', '手工单'])}
          {filterItem('签收状态', ['全部', '买家签收前', '买家签收后'])}
          {filterItem('售后类型', ['全部', '取消订单', '退货退款', '仅退款'])}
          {filterItem('线上状态', ['全部', '发起申请', '同意退货', '发起争议', '同意退款', '退款成功', '平台关闭申请', '取消申请'])}
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600 w-20">发货仓库:</span>
            <Select className="w-48" placeholder="请选择" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Input.Group compact className="w-96">
            <Select defaultValue="订单编号" className="w-24"><Select.Option value="订单编号">订单编号</Select.Option></Select>
            <Input placeholder="批量搜索用逗号进行隔开" className="w-64" />
          </Input.Group>
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <div className="flex items-center mb-4 gap-4">
          <Checkbox>全选</Checkbox>
          <Button>同步订单</Button>
          <Button>标记留置</Button>
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

export default ReturnOrderManagementPage;
