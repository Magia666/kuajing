import React from 'react';
import { Table, Button, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

interface FileDownloadTask {
  key: string;
  downloadTime: string;
  status: string;
  remark: string;
}

const FileDownloadTaskPage: React.FC = () => {
  const columns: TableColumnsType<FileDownloadTask> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '下载时间', dataIndex: 'downloadTime', key: 'downloadTime' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">文件下载任务</h1>
      
      <Card className="mb-4">
        <Button icon={<ReloadOutlined />}>刷新</Button>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            { key: '1', downloadTime: '2024-03-01 10:00:00', status: '成功', remark: '导出2024年2月订单报表.xlsx' },
            { key: '2', downloadTime: '2024-03-02 14:30:15', status: '处理中', remark: '导出库存明细数据.csv' },
            { key: '3', downloadTime: '2024-03-05 09:15:00', status: '失败', remark: '系统超时，请重试' }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default FileDownloadTaskPage;
