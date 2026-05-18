import React, { useState } from 'react';
import { Table, Input, Button, Card, Space, Checkbox, message } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, UndoOutlined } from '@ant-design/icons';

interface RecycleBinData {
  key: string;
  orderNumber: string;
  deletionTime: string;
}

const RecycleBinPage: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: TableColumnsType<RecycleBinData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '订单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '删除时间', dataIndex: 'deletionTime', key: 'deletionTime', sorter: true },
    { title: '操作', key: 'operation', render: () => <Button type="link" icon={<UndoOutlined />}>恢复</Button> },
  ];

  const dataSource: RecycleBinData[] = [
  {
    key: "1",
    orderNumber: "SO202405181000",
    deletionTime: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    orderNumber: "PO202405181007",
    deletionTime: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    orderNumber: "RO202405181014",
    deletionTime: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    orderNumber: "TR202405181021",
    deletionTime: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    orderNumber: "WO202405181028",
    deletionTime: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    orderNumber: "SO202405181035",
    deletionTime: "2024-05-15 14:35:00"
  }
];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleBulkRestore = () => {
    if (selectedRowKeys.length === 0) {
      message.warning('请先选择要恢复的订单');
      return;
    }
    message.success(`成功恢复 ${selectedRowKeys.length} 条订单`);
    setSelectedRowKeys([]);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">回收站</h1>
      <Card className="mb-4">
        <Space className="w-full justify-start gap-4">
          <Input placeholder="订单号" prefix="订单号:" style={{ width: 300 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<UndoOutlined />} onClick={handleBulkRestore}>批量恢复</Button>
        </div>
        <Table 
          rowSelection={rowSelection}
          columns={columns} 
          dataSource={dataSource} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default RecycleBinPage;
