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
    orderNumber: "SO202405181000",
    systemCode: "SO202405181000",
    sku: "SKU-24C000X",
    transactionDate: "2024-05-10 14:10:00",
    quantity: 10,
    amount: "128.00",
    orderStatus: "处理中",
    paymentStatus: "处理中",
    store: "跨境小店 US",
    supplier: "深圳市汇佳科技有限公司",
    distributor: "深圳市汇佳科技有限公司",
    warehouse: "美西一仓"
  },
  {
    key: "2",
    orderNumber: "PO202405181007",
    systemCode: "PO202405181007",
    sku: "SKU-24C001X",
    transactionDate: "2024-05-11 14:15:00",
    quantity: 25,
    amount: "194.50",
    orderStatus: "已发货",
    paymentStatus: "已发货",
    store: "跨境小店 UK",
    supplier: "义乌市源浩贸易",
    distributor: "义乌市源浩贸易",
    warehouse: "深圳总仓"
  },
  {
    key: "3",
    orderNumber: "RO202405181014",
    systemCode: "RO202405181014",
    sku: "SKU-24C002X",
    transactionDate: "2024-05-12 14:20:00",
    quantity: 40,
    amount: "261.00",
    orderStatus: "待付款",
    paymentStatus: "待付款",
    store: "跨境小店 SG",
    supplier: "广州市时尚衣橱企业",
    distributor: "广州市时尚衣橱企业",
    warehouse: "义乌中转仓"
  },
  {
    key: "4",
    orderNumber: "TR202405181021",
    systemCode: "TR202405181021",
    sku: "SKU-24C003X",
    transactionDate: "2024-05-13 14:25:00",
    quantity: 55,
    amount: "327.50",
    orderStatus: "已完成",
    paymentStatus: "已完成",
    store: "跨境小店 MY",
    supplier: "深圳市汇佳科技有限公司",
    distributor: "深圳市汇佳科技有限公司",
    warehouse: "美东二仓"
  },
  {
    key: "5",
    orderNumber: "WO202405181028",
    systemCode: "WO202405181028",
    sku: "SKU-24C004X",
    transactionDate: "2024-05-14 14:30:00",
    quantity: 70,
    amount: "394.00",
    orderStatus: "已取消",
    paymentStatus: "已取消",
    store: "跨境小店 PH",
    supplier: "义乌市源浩贸易",
    distributor: "义乌市源浩贸易",
    warehouse: "法兰克福仓"
  },
  {
    key: "6",
    orderNumber: "SO202405181035",
    systemCode: "SO202405181035",
    sku: "SKU-24C005X",
    transactionDate: "2024-05-15 14:35:00",
    quantity: 85,
    amount: "460.50",
    orderStatus: "退款中",
    paymentStatus: "退款中",
    store: "跨境小店 US",
    supplier: "广州市时尚衣橱企业",
    distributor: "广州市时尚衣橱企业",
    warehouse: "美西一仓"
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
