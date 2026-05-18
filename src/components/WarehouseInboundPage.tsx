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
    inboundNumber: "测试数据 1",
    status: "处理中",
    type: "测试数据 1",
    waybillNumber: "测试数据 1",
    createTime: "2024-03-21",
    inboundTime: "2024-03-21",
    sku: "测试数据 1",
    systemCode: "测试数据 1"
  },
  {
    key: "2",
    inboundNumber: "测试数据 2",
    status: "成功",
    type: "测试数据 2",
    waybillNumber: "测试数据 2",
    createTime: "2024-03-22",
    inboundTime: "2024-03-22",
    sku: "测试数据 2",
    systemCode: "测试数据 2"
  },
  {
    key: "3",
    inboundNumber: "测试数据 3",
    status: "处理中",
    type: "测试数据 3",
    waybillNumber: "测试数据 3",
    createTime: "2024-03-23",
    inboundTime: "2024-03-23",
    sku: "测试数据 3",
    systemCode: "测试数据 3"
  },
  {
    key: "4",
    inboundNumber: "测试数据 4",
    status: "成功",
    type: "测试数据 4",
    waybillNumber: "测试数据 4",
    createTime: "2024-03-24",
    inboundTime: "2024-03-24",
    sku: "测试数据 4",
    systemCode: "测试数据 4"
  },
  {
    key: "5",
    inboundNumber: "测试数据 5",
    status: "处理中",
    type: "测试数据 5",
    waybillNumber: "测试数据 5",
    createTime: "2024-03-25",
    inboundTime: "2024-03-25",
    sku: "测试数据 5",
    systemCode: "测试数据 5"
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
