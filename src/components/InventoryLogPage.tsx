import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface InventoryLogData {
  key: string;
  systemCode: string;
  sku: string;
  type: string;
  warehouse: string;
  storeName: string;
  quantity: number;
  remainingStock: number;
  description: string;
  date: string;
}

const InventoryLogPage: React.FC = () => {
  const columns: TableColumnsType<InventoryLogData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
    { title: 'sku', dataIndex: 'sku', key: 'sku' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '数量', dataIndex: 'quantity', key: 'quantity' },
    { title: '剩余库存', dataIndex: 'remainingStock', key: 'remainingStock' },
    { title: '说明', dataIndex: 'description', key: 'description' },
    { title: '日期', dataIndex: 'date', key: 'date' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">库存日志</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="sku" style={{ width: 150 }} />
          <Input placeholder="商品名称" style={{ width: 150 }} />
          <Input placeholder="系统编码" style={{ width: 150 }} />
          <Select placeholder="平台类型" style={{ width: 150 }} allowClear />
          <Select placeholder="仓库" style={{ width: 150 }} allowClear />
          <RangePicker />
          <Input placeholder="订单编号" style={{ width: 150 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    systemCode: "SO202405181000",
    sku: "SKU-24C000X",
    type: "电子产品",
    warehouse: "美西一仓",
    storeName: "跨境小店 US",
    quantity: 10,
    remainingStock: 10,
    description: "客户要求加急发货",
    date: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    systemCode: "PO202405181007",
    sku: "SKU-24C001X",
    type: "服装服饰",
    warehouse: "深圳总仓",
    storeName: "跨境小店 UK",
    quantity: 25,
    remainingStock: 25,
    description: "商品存在轻微瑕疵",
    date: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    systemCode: "RO202405181014",
    sku: "SKU-24C002X",
    type: "家居日用",
    warehouse: "义乌中转仓",
    storeName: "跨境小店 SG",
    quantity: 40,
    remainingStock: 40,
    description: "包裹外包装破损",
    date: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    systemCode: "TR202405181021",
    sku: "SKU-24C003X",
    type: "户外运动",
    warehouse: "美东二仓",
    storeName: "跨境小店 MY",
    quantity: 55,
    remainingStock: 55,
    description: "尺码拍错，要求换货",
    date: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    systemCode: "WO202405181028",
    sku: "SKU-24C004X",
    type: "美妆个护",
    warehouse: "法兰克福仓",
    storeName: "跨境小店 PH",
    quantity: 70,
    remainingStock: 70,
    description: "地址填写错误，已更正",
    date: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    systemCode: "SO202405181035",
    sku: "SKU-24C005X",
    type: "电子产品",
    warehouse: "美西一仓",
    storeName: "跨境小店 US",
    quantity: 85,
    remainingStock: 85,
    description: "客户要求加急发货",
    date: "2024-05-15 14:35:00"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default InventoryLogPage;
