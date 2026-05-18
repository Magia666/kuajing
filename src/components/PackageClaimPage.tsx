import React, { useState } from 'react';
import { Table, Input, Button, Card, Tabs, Select, DatePicker } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface PackageClaimData {
  key: string;
  productInfo: string;
  originalOrderInfo: string;
  packageInfo: string;
  shelfInfo: string;
  time: string;
  remark: string;
}

const PackageClaimPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('linked');
  const [activeSubTab, setActiveSubTab] = useState('pending');

  const columns: TableColumnsType<PackageClaimData> = [
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
    { title: '原订单信息', dataIndex: 'originalOrderInfo', key: 'originalOrderInfo' },
    { title: '包裹信息', dataIndex: 'packageInfo', key: 'packageInfo' },
    { title: '上架信息', dataIndex: 'shelfInfo', key: 'shelfInfo' },
    { title: '时间', dataIndex: 'time', key: 'time' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'linked', label: '关联订单' },
    { key: 'unlinked', label: '未关联订单' },
    { key: 'pending', label: '待认领' },
  ];

  const subTabItems: TabsProps['items'] = [
    { key: 'pending', label: '待出货 (0)' },
    { key: 'shipped', label: '已重出 (0)' },
    { key: 'destroyed', label: '已销毁 (0)' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">包裹认领</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Select placeholder="仓库" style={{ width: 180 }} allowClear />
            <Select placeholder="上架时间" style={{ width: 180 }} allowClear />
            <RangePicker showTime style={{ width: 250 }} />
            <Select placeholder="扫描单号" style={{ width: 180 }} allowClear />
            <Input placeholder="输入单号" style={{ width: 180 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Button icon={<ExportOutlined />} className="mb-4">导出</Button>
        <Tabs activeKey={activeSubTab} onChange={setActiveSubTab} items={subTabItems} type="card" />

        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    productInfo: "2024新款智能手表监控防水运动手环",
    originalOrderInfo: "SO202405181000",
    packageInfo: "采购单-20240518",
    shelfInfo: "采购单-20240518",
    time: "2024-05-10 14:10:00",
    remark: "客户要求加急发货"
  },
  {
    key: "2",
    productInfo: "无线蓝牙耳机降噪入耳式长续航",
    originalOrderInfo: "PO202405181007",
    packageInfo: "物流包裹-YD998123",
    shelfInfo: "物流包裹-YD998123",
    time: "2024-05-11 14:15:00",
    remark: "商品存在轻微瑕疵"
  },
  {
    key: "3",
    productInfo: "纯棉短袖T恤男夏季宽松百搭",
    originalOrderInfo: "RO202405181014",
    packageInfo: "A区-05货架-03层",
    shelfInfo: "A区-05货架-03层",
    time: "2024-05-12 14:20:00",
    remark: "包裹外包装破损"
  },
  {
    key: "4",
    productInfo: "户外便携运动水杯大容量防漏",
    originalOrderInfo: "TR202405181021",
    packageInfo: "采购单-20240518",
    shelfInfo: "采购单-20240518",
    time: "2024-05-13 14:25:00",
    remark: "尺码拍错，要求换货"
  },
  {
    key: "5",
    productInfo: "家用多功能颈椎按摩仪护颈",
    originalOrderInfo: "WO202405181028",
    packageInfo: "物流包裹-YD998123",
    shelfInfo: "物流包裹-YD998123",
    time: "2024-05-14 14:30:00",
    remark: "地址填写错误，已更正"
  },
  {
    key: "6",
    productInfo: "2024新款智能手表监控防水运动手环",
    originalOrderInfo: "SO202405181035",
    packageInfo: "A区-05货架-03层",
    shelfInfo: "A区-05货架-03层",
    time: "2024-05-15 14:35:00",
    remark: "客户要求加急发货"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default PackageClaimPage;
