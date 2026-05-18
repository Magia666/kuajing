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
  {
    key: "1",
    withdrawTime: "2024-05-10 14:10:00",
    withdrawAmount: "128.00",
    accountType: "张无忌",
    withdrawAccount: "张无忌",
    status: "处理中"
  },
  {
    key: "2",
    withdrawTime: "2024-05-11 14:15:00",
    withdrawAmount: "194.50",
    accountType: "李寻欢",
    withdrawAccount: "李寻欢",
    status: "已发货"
  },
  {
    key: "3",
    withdrawTime: "2024-05-12 14:20:00",
    withdrawAmount: "261.00",
    accountType: "王语嫣",
    withdrawAccount: "王语嫣",
    status: "待付款"
  },
  {
    key: "4",
    withdrawTime: "2024-05-13 14:25:00",
    withdrawAmount: "327.50",
    accountType: "赵敏",
    withdrawAccount: "赵敏",
    status: "已完成"
  },
  {
    key: "5",
    withdrawTime: "2024-05-14 14:30:00",
    withdrawAmount: "394.00",
    accountType: "系统管理员",
    withdrawAccount: "系统管理员",
    status: "已取消"
  },
  {
    key: "6",
    withdrawTime: "2024-05-15 14:35:00",
    withdrawAmount: "460.50",
    accountType: "运营专员",
    withdrawAccount: "运营专员",
    status: "退款中"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default InvitationWithdrawalPage;
