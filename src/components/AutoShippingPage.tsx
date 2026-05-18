import React from 'react';
import { Table, Input, Button, Card, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface AutoShippingData {
  key: string;
  ruleName: string;
  warehouse: string;
  shippingMethod: string;
  allowedStores: string;
  excludedStores: string;
  shippingDate: string;
  orderStatus: string;
  buyerNote: string;
  status: string;
}

const AutoShippingPage: React.FC = () => {
  const columns: TableColumnsType<AutoShippingData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '规则名称', dataIndex: 'ruleName', key: 'ruleName' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '运输方式', dataIndex: 'shippingMethod', key: 'shippingMethod' },
    { title: '允许的店铺', dataIndex: 'allowedStores', key: 'allowedStores' },
    { title: '排除的店铺', dataIndex: 'excludedStores', key: 'excludedStores' },
    { title: '发货日期', dataIndex: 'shippingDate', key: 'shippingDate' },
    { title: '订单状态', dataIndex: 'orderStatus', key: 'orderStatus' },
    { title: '排除买家备注订单', dataIndex: 'buyerNote', key: 'buyerNote' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">自动发货</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Input placeholder="规则名称" prefix="规则名称:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">添加推送规则</Button>
        <div className="text-gray-600 mb-4 text-sm">
            <p>1. 每天6点至22点，每2小时执行一次;</p>
            <p>2. 只处理72小时内同步到的订单，超出72小时的订单不处理。</p>
        </div>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    ruleName: "2024新款智能手表监控防水运动手环",
    warehouse: "美西一仓",
    shippingMethod: "微信支付",
    allowedStores: "跨境小店 US",
    excludedStores: "跨境小店 US",
    shippingDate: "2024-05-10 14:10:00",
    orderStatus: "处理中",
    buyerNote: "张无忌",
    status: "处理中"
  },
  {
    key: "2",
    ruleName: "无线蓝牙耳机降噪入耳式长续航",
    warehouse: "深圳总仓",
    shippingMethod: "支付宝",
    allowedStores: "跨境小店 UK",
    excludedStores: "跨境小店 UK",
    shippingDate: "2024-05-11 14:15:00",
    orderStatus: "已发货",
    buyerNote: "李寻欢",
    status: "已发货"
  },
  {
    key: "3",
    ruleName: "纯棉短袖T恤男夏季宽松百搭",
    warehouse: "义乌中转仓",
    shippingMethod: "信用卡",
    allowedStores: "跨境小店 SG",
    excludedStores: "跨境小店 SG",
    shippingDate: "2024-05-12 14:20:00",
    orderStatus: "待付款",
    buyerNote: "王语嫣",
    status: "待付款"
  },
  {
    key: "4",
    ruleName: "户外便携运动水杯大容量防漏",
    warehouse: "美东二仓",
    shippingMethod: "PayPal",
    allowedStores: "跨境小店 MY",
    excludedStores: "跨境小店 MY",
    shippingDate: "2024-05-13 14:25:00",
    orderStatus: "已完成",
    buyerNote: "赵敏",
    status: "已完成"
  },
  {
    key: "5",
    ruleName: "家用多功能颈椎按摩仪护颈",
    warehouse: "法兰克福仓",
    shippingMethod: "余额抵扣",
    allowedStores: "跨境小店 PH",
    excludedStores: "跨境小店 PH",
    shippingDate: "2024-05-14 14:30:00",
    orderStatus: "已取消",
    buyerNote: "系统管理员",
    status: "已取消"
  },
  {
    key: "6",
    ruleName: "2024新款智能手表监控防水运动手环",
    warehouse: "美西一仓",
    shippingMethod: "微信支付",
    allowedStores: "跨境小店 US",
    excludedStores: "跨境小店 US",
    shippingDate: "2024-05-15 14:35:00",
    orderStatus: "退款中",
    buyerNote: "运营专员",
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

export default AutoShippingPage;
