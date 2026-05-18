import React from 'react';
import { Table, Button, Card, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { PlusOutlined, FileTextOutlined } from '@ant-design/icons';

interface InvitationWithdrawalData {
  key: string;
  withdrawTime: string;
  withdrawAmount: string;
  accountType: string;
  withdrawAccount: string;
  status: string;
}

const InvitationWithdrawalPage: React.FC = () => {
  const columns: TableColumnsType<InvitationWithdrawalData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '提现时间', dataIndex: 'withdrawTime', key: 'withdrawTime' },
    { title: '提现金额', dataIndex: 'withdrawAmount', key: 'withdrawAmount' },
    { title: '账号类型', dataIndex: 'accountType', key: 'accountType' },
    { title: '提现账号', dataIndex: 'withdrawAccount', key: 'withdrawAccount' },
    { title: '状态', dataIndex: 'status', key: 'status' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">邀请提现</h1>
      
      <Card className="mb-4">
        <Space>
            <Button type="primary" icon={<PlusOutlined />}>立即提现</Button>
            <Button icon={<FileTextOutlined />}>查看规则</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            { key: '1', withdrawTime: '2024-01-15 11:20:00', withdrawAmount: '￥ 500.00', accountType: '支付宝', withdrawAccount: 'user@example.com', status: '已打款' },
            { key: '2', withdrawTime: '2024-02-01 09:10:30', withdrawAmount: '￥ 200.00', accountType: '微信', withdrawAccount: 'wxid_123456789', status: '处理中' },
            { key: '3', withdrawTime: '2024-02-28 16:45:10', withdrawAmount: '￥ 1000.00', accountType: '银行卡', withdrawAccount: '622202********1234', status: '审核驳回' }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default InvitationWithdrawalPage;
