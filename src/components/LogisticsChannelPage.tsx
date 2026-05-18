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
          dataSource={[]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default LogisticsChannelPage;
