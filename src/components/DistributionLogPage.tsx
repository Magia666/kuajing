import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface DistributionLogData {
  key: string;
  systemCode: string;
  warehouse: string;
  productName: string;
  sku: string;
  supplier: string;
  type: string;
  quantity: number;
  remainingStock: number;
  remark: string;
  date: string;
}

const DistributionLogPage: React.FC = () => {
  const columns: TableColumnsType<DistributionLogData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '商品名称', dataIndex: 'productName', key: 'productName' },
    { title: 'sku', dataIndex: 'sku', key: 'sku' },
    { title: '供应商', dataIndex: 'supplier', key: 'supplier' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '数量', dataIndex: 'quantity', key: 'quantity' },
    { title: '剩余库存', dataIndex: 'remainingStock', key: 'remainingStock' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '日期', dataIndex: 'date', key: 'date' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'log', label: '分销日志' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Tabs items={tabItems} className="mb-4 bg-white px-4" />
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="sku" prefix="sku:" style={{ width: 180 }} />
          <Input placeholder="商品名称" prefix="名称:" style={{ width: 180 }} />
          <Input placeholder="系统编码" prefix="系统编码:" style={{ width: 180 }} />
          <Select placeholder="请选择供应商" prefix="供应商:" style={{ width: 180 }} allowClear />
          <Select placeholder="出库库" prefix="出库库:" style={{ width: 180 }} allowClear />
          <Select placeholder="仓库" prefix="仓库:" style={{ width: 180 }} allowClear />
          <RangePicker />
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
    warehouse: "美西一仓",
    productName: "2024新款智能手表监控防水运动手环",
    sku: "SKU-24C000X",
    supplier: "深圳市汇佳科技有限公司",
    type: "电子产品",
    quantity: 10,
    remainingStock: 10,
    remark: "客户要求加急发货",
    date: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    systemCode: "PO202405181007",
    warehouse: "深圳总仓",
    productName: "无线蓝牙耳机降噪入耳式长续航",
    sku: "SKU-24C001X",
    supplier: "义乌市源浩贸易",
    type: "服装服饰",
    quantity: 25,
    remainingStock: 25,
    remark: "商品存在轻微瑕疵",
    date: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    systemCode: "RO202405181014",
    warehouse: "义乌中转仓",
    productName: "纯棉短袖T恤男夏季宽松百搭",
    sku: "SKU-24C002X",
    supplier: "广州市时尚衣橱企业",
    type: "家居日用",
    quantity: 40,
    remainingStock: 40,
    remark: "包裹外包装破损",
    date: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    systemCode: "TR202405181021",
    warehouse: "美东二仓",
    productName: "户外便携运动水杯大容量防漏",
    sku: "SKU-24C003X",
    supplier: "深圳市汇佳科技有限公司",
    type: "户外运动",
    quantity: 55,
    remainingStock: 55,
    remark: "尺码拍错，要求换货",
    date: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    systemCode: "WO202405181028",
    warehouse: "法兰克福仓",
    productName: "家用多功能颈椎按摩仪护颈",
    sku: "SKU-24C004X",
    supplier: "义乌市源浩贸易",
    type: "美妆个护",
    quantity: 70,
    remainingStock: 70,
    remark: "地址填写错误，已更正",
    date: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    systemCode: "SO202405181035",
    warehouse: "美西一仓",
    productName: "2024新款智能手表监控防水运动手环",
    sku: "SKU-24C005X",
    supplier: "广州市时尚衣橱企业",
    type: "电子产品",
    quantity: 85,
    remainingStock: 85,
    remark: "客户要求加急发货",
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

export default DistributionLogPage;
