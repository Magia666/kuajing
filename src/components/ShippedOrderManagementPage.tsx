import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Select, Space, Card, DatePicker, Checkbox, Dropdown, Menu } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined, DownOutlined } from '@ant-design/icons';

interface OrderData {
  key: string;
  orderNumber: string;
  customer: string;
  status: string;
  total: number;
}

const ShippedOrderManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const columns: TableColumnsType<OrderData> = [
    { title: '订单编号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '客户', dataIndex: 'customer', key: 'customer' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '总价', dataIndex: 'total', key: 'total' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a> },
  ];

  const dataSource: OrderData[] = [{ key: "1", orderNumber: "ORD-001", customer: "John Doe", title: "Test Item", status: "处理中", total: 100, roleName: "管理员", accountName: "test_user", phone: "13800138000", amount: 100, operation: "操作" }, { key: "2", orderNumber: "ORD-002", customer: "Jane Doe", title: "Test Item 2", status: "已完成", total: 200, roleName: "普通职员", accountName: "normal_user", phone: "13800138001", amount: 200, operation: "操作" }];

  const topTabs: TabsProps['items'] = [
    { key: 'shipped', label: '已发货订单' },
  ];

  const subTabs: TabsProps['items'] = [
    { key: 'all', label: '全部' },
    { key: 'pending', label: '待获取面单' },
    { key: 'received', label: '已获取面单' },
  ];

  const filterItem = (label: string, items: string[]) => (
    <div className="flex flex-wrap gap-4 items-center">
      <span className="font-medium text-gray-600 w-20">{label}:</span>
      <Space className="flex-wrap">
        {items.map(item => <Button key={item} type="text" size="small">{item}</Button>)}
      </Space>
    </div>
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Card className="mb-4">
        <Tabs activeKey={activeTab} items={topTabs} className="mb-4" />
        
        <div className="space-y-4">
          {filterItem('系统状态', ['待处理', '部分入库', '打包中', '已交运', '已搁置', '问题件', '已取消', '全部'])}
          {filterItem('订单状态', ['全部', '待出货-未申请', '已申请-未确认', '待出货-已申请', '重新出货', '待出货-已取件', '运送中', '已送达', '已收货', '已退货', '取消中', '已取消', '完成', '其他'])}
          {filterItem('订单标记', ['全部', '预刷', '紧急', '测评', '问题', '缺货', '已预刷', '退货重出', '拒收', '无标记'])}
          {filterItem('打印状态', ['全部', '未打印(面单)', '已打印(面单)', '未打印(拣货单)', '已打印(拣货单)', '未扣费', '已扣费', '已退款', '未退款', '已打包', '未打包', '材料费用:全部', '未扣费', '已扣费'])}
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600 w-20">截止日期:</span>
            <Space className="flex-wrap">
              {['全部', '已超时', '剩余12', '剩余24', '剩余48', '剩余3天', '剩余5天', '剩余7天', '超14天'].map(item => <Button key={item} type="text" size="small">{item}</Button>)}
            </Space>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600 w-20">包裹类型:</span>
            <Space>
              <Checkbox>单品数</Checkbox>
              <Checkbox>单品多数</Checkbox>
              <Checkbox>多品混包</Checkbox>
            </Space>
          </div>
          {filterItem('是否采购', ['全部', '未采购', '已采购', '已发货'])}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 items-center">
          <span className="font-medium text-gray-600">下单/发货/交运/截止时间:</span>
          <DatePicker.RangePicker />
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Space.Compact className="w-96">
            <Select defaultValue="订单编号" className="w-24"><Select.Option value="订单编号">订单编号</Select.Option></Select>
            <Input placeholder="输入内容" className="w-64" />
          </Space.Compact>
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button type="primary" icon={<ExportOutlined />}>导出</Button>
          <Button icon={<DownOutlined />}>更多</Button>
        </div>
      </Card>
      
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Tabs activeKey={activeTab} onChange={setActiveTab} items={subTabs} type="card" />
          <Space>
            <Button>同步状态</Button>
            <Button>上门投递</Button>
            <Button>预约取件</Button>
            <Button>批量上传面单</Button>
            <Button>同步快递</Button>
            <Button>导入采购快递</Button>
            <Button>批量标记</Button>
            <Button>批量打印</Button>
            <Button>批量操作</Button>
          </Space>
        </div>
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ShippedOrderManagementPage;
