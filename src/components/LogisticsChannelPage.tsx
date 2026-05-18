import React from 'react';
import { Card, Input, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface LogisticsChannelData {
  key: string;
  channelName: string;
}

const LogisticsChannelPage: React.FC = () => {
  const columns: TableColumnsType<LogisticsChannelData> = [
    { title: '渠道名称', dataIndex: 'channelName', key: 'channelName' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">物流商管理</h1>
      
      <Card className="mb-4">
        <Input 
          placeholder="渠道名称" 
          prefix={<SearchOutlined />} 
          style={{ width: 250 }} 
        />
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    channelName: "2024新款智能手表监控防水运动手环"
  },
  {
    key: "2",
    channelName: "无线蓝牙耳机降噪入耳式长续航"
  },
  {
    key: "3",
    channelName: "纯棉短袖T恤男夏季宽松百搭"
  },
  {
    key: "4",
    channelName: "户外便携运动水杯大容量防漏"
  },
  {
    key: "5",
    channelName: "家用多功能颈椎按摩仪护颈"
  },
  {
    key: "6",
    channelName: "2024新款智能手表监控防水运动手环"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default LogisticsChannelPage;
