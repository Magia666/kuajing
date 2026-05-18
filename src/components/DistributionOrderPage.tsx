import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Form, Row, Col } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface DistributionOrderData {
  key: string;
  orderNumber: string;
  systemCode: string;
  sku: string;
  transactionDate: string;
  quantity: number;
  amount: number;
  orderStatus: string;
  paymentStatus: string;
  store: string;
  supplier: string;
  distributor: string;
  warehouse: string;
}

const DistributionOrderPage: React.FC = () => {
  const columns: TableColumnsType<DistributionOrderData> = [
    { title: '订单编号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
    { title: 'SKU', dataIndex: 'sku', key: 'sku' },
    { title: '交易日期', dataIndex: 'transactionDate', key: 'transactionDate' },
    { title: '数量', dataIndex: 'quantity', key: 'quantity' },
    { title: '商品金额', dataIndex: 'amount', key: 'amount' },
    { title: '订单状态', dataIndex: 'orderStatus', key: 'orderStatus' },
    { title: '支付状态', dataIndex: 'paymentStatus', key: 'paymentStatus' },
    { title: '店铺状态', dataIndex: 'store', key: 'store' },
    { title: '供应商', dataIndex: 'supplier', key: 'supplier' },
    { title: '分销商', dataIndex: 'distributor', key: 'distributor' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
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
      <h1 className="text-xl font-bold mb-4">分销订单</h1>
      <Card className="mb-4">
        <div className="space-y-4">
          {renderFilterSection('状态', ['全部', '待出库', '已出库'])}
          {renderFilterSection('支付状态', ['全部', '冻结中', '已支付', '已退款'])}
          
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-600 w-16">发货时间:</span>
            <RangePicker />
          </div>
          
          <Form layout="inline" className="gap-4">
            <Form.Item label="搜索信息">
              <Space.Compact>
                <Select defaultValue="订单编号" style={{ width: 120 }}>
                  <Select.Option value="订单编号">订单编号</Select.Option>
                </Select>
                <Input placeholder="批量搜索用逗号进行隔开" style={{ width: 250 }} />
                <Select defaultValue="精确查询" style={{ width: 120 }}>
                  <Select.Option value="精确查询">精确查询</Select.Option>
                </Select>
              </Space.Compact>
            </Form.Item>
            <Form.Item>
              <Input placeholder="供应商" style={{ width: 150 }} />
            </Form.Item>
            <Form.Item>
              <Input placeholder="分销商" style={{ width: 150 }} />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" icon={<SearchOutlined />}>查询</Button>
                <Button icon={<ReloadOutlined />}>重置</Button>
                <Button icon={<ExportOutlined />}>导出</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    orderNumber: "测试数据 1",
    systemCode: "测试数据 1",
    sku: "测试数据 1",
    transactionDate: "2024-03-21",
    quantity: "测试数据 1",
    amount: 100,
    orderStatus: "处理中",
    paymentStatus: "处理中",
    store: "测试数据 1",
    supplier: "测试数据 1",
    distributor: "测试数据 1",
    warehouse: "测试数据 1"
  },
  {
    key: "2",
    orderNumber: "测试数据 2",
    systemCode: "测试数据 2",
    sku: "测试数据 2",
    transactionDate: "2024-03-22",
    quantity: "测试数据 2",
    amount: 200,
    orderStatus: "成功",
    paymentStatus: "成功",
    store: "测试数据 2",
    supplier: "测试数据 2",
    distributor: "测试数据 2",
    warehouse: "测试数据 2"
  },
  {
    key: "3",
    orderNumber: "测试数据 3",
    systemCode: "测试数据 3",
    sku: "测试数据 3",
    transactionDate: "2024-03-23",
    quantity: "测试数据 3",
    amount: 300,
    orderStatus: "处理中",
    paymentStatus: "处理中",
    store: "测试数据 3",
    supplier: "测试数据 3",
    distributor: "测试数据 3",
    warehouse: "测试数据 3"
  },
  {
    key: "4",
    orderNumber: "测试数据 4",
    systemCode: "测试数据 4",
    sku: "测试数据 4",
    transactionDate: "2024-03-24",
    quantity: "测试数据 4",
    amount: 400,
    orderStatus: "成功",
    paymentStatus: "成功",
    store: "测试数据 4",
    supplier: "测试数据 4",
    distributor: "测试数据 4",
    warehouse: "测试数据 4"
  },
  {
    key: "5",
    orderNumber: "测试数据 5",
    systemCode: "测试数据 5",
    sku: "测试数据 5",
    transactionDate: "2024-03-25",
    quantity: "测试数据 5",
    amount: 500,
    orderStatus: "处理中",
    paymentStatus: "处理中",
    store: "测试数据 5",
    supplier: "测试数据 5",
    distributor: "测试数据 5",
    warehouse: "测试数据 5"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default DistributionOrderPage;
