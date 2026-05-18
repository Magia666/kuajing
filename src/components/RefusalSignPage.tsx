import React from 'react';
import { Table, Input, Button, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

interface RefusalSignData {
  key: string;
  createTime: string;
  refusalOrderNumber: string;
  originalWarehouse: string;
  status: string;
  expressName: string;
  remark: string;
}

const RefusalSignPage: React.FC = () => {
  const columns: TableColumnsType<RefusalSignData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '拒签单号', dataIndex: 'refusalOrderNumber', key: 'refusalOrderNumber' },
    { title: '原件仓库', dataIndex: 'originalWarehouse', key: 'originalWarehouse' },
    { title: '处理状态', dataIndex: 'status', key: 'status' },
    { title: '快递名称', dataIndex: 'expressName', key: 'expressName' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">申请拒签</h1>
      
      <Card className="mb-4">
        <div className="flex flex-wrap gap-4 items-center">
            <Input placeholder="拒签单号" prefix="拒签单号:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
        </div>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">新增</Button>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    createTime: "2024-05-10 14:10:00",
    refusalOrderNumber: "SO202405181000",
    originalWarehouse: "美西一仓",
    status: "处理中",
    expressName: "2024新款智能手表监控防水运动手环",
    remark: "客户要求加急发货"
  },
  {
    key: "2",
    createTime: "2024-05-11 14:15:00",
    refusalOrderNumber: "PO202405181007",
    originalWarehouse: "深圳总仓",
    status: "已发货",
    expressName: "无线蓝牙耳机降噪入耳式长续航",
    remark: "商品存在轻微瑕疵"
  },
  {
    key: "3",
    createTime: "2024-05-12 14:20:00",
    refusalOrderNumber: "RO202405181014",
    originalWarehouse: "义乌中转仓",
    status: "待付款",
    expressName: "纯棉短袖T恤男夏季宽松百搭",
    remark: "包裹外包装破损"
  },
  {
    key: "4",
    createTime: "2024-05-13 14:25:00",
    refusalOrderNumber: "TR202405181021",
    originalWarehouse: "美东二仓",
    status: "已完成",
    expressName: "户外便携运动水杯大容量防漏",
    remark: "尺码拍错，要求换货"
  },
  {
    key: "5",
    createTime: "2024-05-14 14:30:00",
    refusalOrderNumber: "WO202405181028",
    originalWarehouse: "法兰克福仓",
    status: "已取消",
    expressName: "家用多功能颈椎按摩仪护颈",
    remark: "地址填写错误，已更正"
  },
  {
    key: "6",
    createTime: "2024-05-15 14:35:00",
    refusalOrderNumber: "SO202405181035",
    originalWarehouse: "美西一仓",
    status: "退款中",
    expressName: "2024新款智能手表监控防水运动手环",
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

export default RefusalSignPage;
