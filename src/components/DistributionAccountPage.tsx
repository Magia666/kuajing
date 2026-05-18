import React from 'react';
import { Table, Input, Button, Space, Card, Statistic } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';

interface DistributionAccountData {
  key: string;
  transactionNumber: string;
  amount: number;
  applicationTime: string;
  paymentTime: string;
  status: string;
}

const DistributionAccountPage: React.FC = () => {
  const columns: TableColumnsType<DistributionAccountData> = [
    { title: '交易单号', dataIndex: 'transactionNumber', key: 'transactionNumber' },
    { title: '提现金额', dataIndex: 'amount', key: 'amount' },
    { title: '申请时间', dataIndex: 'applicationTime', key: 'applicationTime' },
    { title: '打款时间', dataIndex: 'paymentTime', key: 'paymentTime' },
    { title: '状态', dataIndex: 'status', key: 'status' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">分销账款</h1>
      
      <div className="flex gap-4 mb-4">
        <Card className="flex-1">
          <Statistic title={<span>冻结金额 <QuestionCircleOutlined /></span>} value={0} prefix="¥" />
        </Card>
        <Card className="flex-1">
          <Statistic title={<span>可提现 <QuestionCircleOutlined /></span>} value={0} prefix="¥" />
        </Card>
        <Card className="flex-1">
          <Statistic title={<span>已提现 <QuestionCircleOutlined /></span>} value={0} prefix="¥" />
        </Card>
        <div className="flex items-center">
            <Button>设置收款</Button>
        </div>
      </div>
      
      <Card className="mb-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-medium text-gray-600">交易状态:</span>
          <Space>
            {['全部', '未打款', '已打款', '已拒绝'].map(status => (
              <Button key={status} type="text" size="small">{status}</Button>
            ))}
          </Space>
        </div>
        <div className="flex items-center gap-4 mt-4">
             <span className="font-medium text-gray-600">交易单号:</span>
             <Input placeholder="输入交易单号" style={{ width: 200 }} />
             <Button type="primary" icon={<SearchOutlined />}>查询</Button>
             <Button icon={<ReloadOutlined />}>重置</Button>
             <Button type="primary" icon={<PlusOutlined />}>申请提现</Button>
        </div>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    transactionNumber: "SO202405181000",
    amount: "128.00",
    applicationTime: "2024-05-10 14:10:00",
    paymentTime: "2024-05-10 14:10:00",
    status: "处理中"
  },
  {
    key: "2",
    transactionNumber: "PO202405181007",
    amount: "194.50",
    applicationTime: "2024-05-11 14:15:00",
    paymentTime: "2024-05-11 14:15:00",
    status: "已发货"
  },
  {
    key: "3",
    transactionNumber: "RO202405181014",
    amount: "261.00",
    applicationTime: "2024-05-12 14:20:00",
    paymentTime: "2024-05-12 14:20:00",
    status: "待付款"
  },
  {
    key: "4",
    transactionNumber: "TR202405181021",
    amount: "327.50",
    applicationTime: "2024-05-13 14:25:00",
    paymentTime: "2024-05-13 14:25:00",
    status: "已完成"
  },
  {
    key: "5",
    transactionNumber: "WO202405181028",
    amount: "394.00",
    applicationTime: "2024-05-14 14:30:00",
    paymentTime: "2024-05-14 14:30:00",
    status: "已取消"
  },
  {
    key: "6",
    transactionNumber: "SO202405181035",
    amount: "460.50",
    applicationTime: "2024-05-15 14:35:00",
    paymentTime: "2024-05-15 14:35:00",
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

export default DistributionAccountPage;
