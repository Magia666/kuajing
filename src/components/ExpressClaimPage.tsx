import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface ExpressClaimData {
  key: string;
  expressNumber: string;
  express: string;
  warehouse: string;
  status: string;
  receiveTime: string;
  photo: string;
}

const ExpressClaimPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<ExpressClaimData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '快递单号', dataIndex: 'expressNumber', key: 'expressNumber' },
    { title: '快递', dataIndex: 'express', key: 'express' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '签收时间', dataIndex: 'receiveTime', key: 'receiveTime' },
    { title: '照片', dataIndex: 'photo', key: 'photo' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'pending', label: '待录单' },
    { key: 'confirm', label: '待认领' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">快递招领</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Input placeholder="快递单号" prefix="快递单号:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    expressNumber: "SO202405181000",
    express: "顺丰国际",
    warehouse: "美西一仓",
    status: "处理中",
    receiveTime: "2024-05-10 14:10:00",
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80"
  },
  {
    key: "2",
    expressNumber: "PO202405181007",
    express: "云途物流",
    warehouse: "深圳总仓",
    status: "已发货",
    receiveTime: "2024-05-11 14:15:00",
    photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80"
  },
  {
    key: "3",
    expressNumber: "RO202405181014",
    express: "燕文物流",
    warehouse: "义乌中转仓",
    status: "待付款",
    receiveTime: "2024-05-12 14:20:00",
    photo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&q=80"
  },
  {
    key: "4",
    expressNumber: "TR202405181021",
    express: "DHL Express",
    warehouse: "美东二仓",
    status: "已完成",
    receiveTime: "2024-05-13 14:25:00",
    photo: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150&q=80"
  },
  {
    key: "5",
    expressNumber: "WO202405181028",
    express: "FedEx",
    warehouse: "法兰克福仓",
    status: "已取消",
    receiveTime: "2024-05-14 14:30:00",
    photo: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=150&q=80"
  },
  {
    key: "6",
    expressNumber: "SO202405181035",
    express: "顺丰国际",
    warehouse: "美西一仓",
    status: "退款中",
    receiveTime: "2024-05-15 14:35:00",
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ExpressClaimPage;
