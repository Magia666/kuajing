import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Radio } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface SettlementData {
  key: string;
  orderNumber: string;
  platformType: string;
  storeName: string;
  estimatedAmount: number;
  completionTime: string;
}

const PlatformSettlementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<SettlementData> = [
    { title: '订单编号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '平台类型', dataIndex: 'platformType', key: 'platformType' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '预计结算金额', dataIndex: 'estimatedAmount', key: 'estimatedAmount' },
    { title: '完成时间', dataIndex: 'completionTime', key: 'completionTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">平台对账</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">平台类型:</span>
            <Radio.Group defaultValue="all">
              <Radio.Button value="all">全部</Radio.Button>
              <Radio.Button value="shopee">Shopee</Radio.Button>
              <Radio.Button value="lazada">Lazada</Radio.Button>
              <Radio.Button value="tiktok">tiktok</Radio.Button>
            </Radio.Group>
          </div>
          <Input placeholder="店铺名称" prefix="店铺名称:" style={{ width: 250 }} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600">时间范围:</span>
            <RangePicker showTime />
          </div>
          <Input placeholder="订单编号" prefix="搜索信息:" style={{ width: 250 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
        </Space>
      </Card>
      
      <Card>
        <Radio.Group value={activeTab} onChange={(e) => setActiveTab(e.target.value)} className="mb-4">
          <Radio.Button value="pending">待结算</Radio.Button>
          <Radio.Button value="completed">已结算</Radio.Button>
          <Radio.Button value="withdrawalLog">拨款记录</Radio.Button>
        </Radio.Group>
        
        <div className="mb-4 text-gray-700 font-bold">
           总预计结算金额：114.13
        </div>

        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    orderNumber: "SO202405181000",
    platformType: "淘宝",
    storeName: "跨境小店 US",
    estimatedAmount: "128.00",
    completionTime: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    orderNumber: "PO202405181007",
    platformType: "1688联盟",
    storeName: "跨境小店 UK",
    estimatedAmount: "194.50",
    completionTime: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    orderNumber: "RO202405181014",
    platformType: "独立站 Shopify",
    storeName: "跨境小店 SG",
    estimatedAmount: "261.00",
    completionTime: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    orderNumber: "TR202405181021",
    platformType: "Amazon US",
    storeName: "跨境小店 MY",
    estimatedAmount: "327.50",
    completionTime: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    orderNumber: "WO202405181028",
    platformType: "Shopee MY",
    storeName: "跨境小店 PH",
    estimatedAmount: "394.00",
    completionTime: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    orderNumber: "SO202405181035",
    platformType: "京东",
    storeName: "跨境小店 US",
    estimatedAmount: "460.50",
    completionTime: "2024-05-15 14:35:00"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default PlatformSettlementPage;
