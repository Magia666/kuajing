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
            { key: '1', ruleName: '美国仓自动发货', warehouse: '美东仓库', shippingMethod: 'USPS_FirstClass', allowedStores: 'Shopee_US_1, Amazon_US_Main', excludedStores: 'None', shippingDate: '每天 14:00', orderStatus: '待发货', buyerNote: '排除', status: '开启' },
            { key: '2', ruleName: '欧洲海外仓规则', warehouse: '法兰克福仓', shippingMethod: 'DHL_Parcel', allowedStores: 'All European Stores', excludedStores: 'Shopify_UK_Test', shippingDate: '周一至周五 16:00', orderStatus: '已支付', buyerNote: '包含', status: '停用' }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default AutoShippingPage;
