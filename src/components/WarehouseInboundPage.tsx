import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Form, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined, PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface WarehouseInboundData {
  key: string;
  // Based on filter fields, assumed columns for the future
  inboundNumber: string;
  status: string;
  type: string;
  waybillNumber: string;
  createTime: string;
  inboundTime: string;
  sku: string;
  systemCode: string;
}

const WarehouseInboundPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const columns: TableColumnsType<WarehouseInboundData> = [
    { title: '入库单号', dataIndex: 'inboundNumber', key: 'inboundNumber' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '订单类型', dataIndex: 'type', key: 'type' },
    { title: '运单号', dataIndex: 'waybillNumber', key: 'waybillNumber' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '入库时间', dataIndex: 'inboundTime', key: 'inboundTime' },
    { title: '商品sku', dataIndex: 'sku', key: 'sku' },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'all', label: '全部(18)' },
    { key: 'pending', label: '待入库(0)' },
    { key: 'completed', label: '已入库(17)' },
    { key: 'partial', label: '部分入库(0)' },
    { key: 'abnormal', label: '异常入库(1)' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">入库申请</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <Form layout="inline" className="mt-4 gap-4">
          <Form.Item label="入库单号">
            <Input placeholder="入库单号" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item label="状态">
            <Select placeholder="状态" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item label="订单类型">
            <Select placeholder="订单类型" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item label="运单号">
            <Input placeholder="运单号" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item label="创建时间">
            <RangePicker style={{ width: 300 }} />
          </Form.Item>
          <Form.Item label="入库时间">
            <RangePicker style={{ width: 300 }} />
          </Form.Item>
          <Form.Item label="商品sku">
            <Input placeholder="商品sku" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item label="系统编码">
            <Input placeholder="系统编码" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
              <Button icon={<ExportOutlined />}>导出</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<PlusOutlined />}>创建入库单</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    inboundNumber: "SO202405181000",
    status: "处理中",
    type: "电子产品",
    waybillNumber: "SO202405181000",
    createTime: "2024-05-10 14:10:00",
    inboundTime: "2024-05-10 14:10:00",
    sku: "SKU-24C000X",
    systemCode: "SO202405181000"
  },
  {
    key: "2",
    inboundNumber: "PO202405181007",
    status: "已发货",
    type: "服装服饰",
    waybillNumber: "PO202405181007",
    createTime: "2024-05-11 14:15:00",
    inboundTime: "2024-05-11 14:15:00",
    sku: "SKU-24C001X",
    systemCode: "PO202405181007"
  },
  {
    key: "3",
    inboundNumber: "RO202405181014",
    status: "待付款",
    type: "家居日用",
    waybillNumber: "RO202405181014",
    createTime: "2024-05-12 14:20:00",
    inboundTime: "2024-05-12 14:20:00",
    sku: "SKU-24C002X",
    systemCode: "RO202405181014"
  },
  {
    key: "4",
    inboundNumber: "TR202405181021",
    status: "已完成",
    type: "户外运动",
    waybillNumber: "TR202405181021",
    createTime: "2024-05-13 14:25:00",
    inboundTime: "2024-05-13 14:25:00",
    sku: "SKU-24C003X",
    systemCode: "TR202405181021"
  },
  {
    key: "5",
    inboundNumber: "WO202405181028",
    status: "已取消",
    type: "美妆个护",
    waybillNumber: "WO202405181028",
    createTime: "2024-05-14 14:30:00",
    inboundTime: "2024-05-14 14:30:00",
    sku: "SKU-24C004X",
    systemCode: "WO202405181028"
  },
  {
    key: "6",
    inboundNumber: "SO202405181035",
    status: "退款中",
    type: "电子产品",
    waybillNumber: "SO202405181035",
    createTime: "2024-05-15 14:35:00",
    inboundTime: "2024-05-15 14:35:00",
    sku: "SKU-24C005X",
    systemCode: "SO202405181035"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default WarehouseInboundPage;
