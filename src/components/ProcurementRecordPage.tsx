import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Row, Col, Statistic } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined, SyncOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface ProcurementData {
  key: string;
  storeInfo: string;
  shippingAddress: string;
  procurementInfo: string;
  orderInfo: string;
  time: string;
  productInfo: string;
}

const ProcurementRecordPage: React.FC = () => {
  const columns: TableColumnsType<ProcurementData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '店铺信息', dataIndex: 'storeInfo', key: 'storeInfo' },
    { title: '采购地址', dataIndex: 'shippingAddress', key: 'shippingAddress' },
    { title: '采购信息', dataIndex: 'procurementInfo', key: 'procurementInfo' },
    { title: '订单信息', dataIndex: 'orderInfo', key: 'orderInfo' },
    { title: '时间', dataIndex: 'time', key: 'time' },
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
  ];

  const statistics = [
    { title: '采购记录数', value: 0 },
    { title: '平台订单数', value: 0 },
    { title: '订单商品数量', value: 0 },
    { title: '订单实收金额(元)', value: 0.00, precision: 2 },
    { title: '采购商品数量', value: 0 },
    { title: '采购商品成本(元)', value: 0.00, precision: 2 },
    { title: '总利润(元)', value: 0.00, precision: 2 },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">采购记录</h1>
      
      <Card className="mb-4">
        <Row gutter={[16, 16]}>
          <Col span={6}><Input placeholder="采购单号" /></Col>
          <Col span={6}><Input placeholder="订单号" /></Col>
          <Col span={6}><Input placeholder="快递单号" /></Col>
          <Col span={6}>
            <Select placeholder="采购平台" style={{ width: '100%' }} allowClear />
          </Col>
          <Col span={6}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={6}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={6}><Input placeholder="采购账户" /></Col>
          <Col span={6}>
            <Select placeholder="平台类型" style={{ width: '100%' }} allowClear />
          </Col>
          <Col span={24}>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
            </Space>
          </Col>
        </Row>
      </Card>

      <Space className="mb-4">
        <Button icon={<ExportOutlined />}>导出</Button>
        <Button icon={<SyncOutlined />}>同步采购信息</Button>
      </Space>

      <Row gutter={[16, 16]} className="mb-4">
        {statistics.map((item, index) => (
          <Col span={3} key={index}>
            <Card type="inner" bodyStyle={{ padding: '12px' }}>
              <Statistic title={item.title} value={item.value} precision={item.precision} />
            </Card>
          </Col>
        ))}
      </Row>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    storeInfo: "跨境小店 US",
    shippingAddress: "广东省深圳市南山区科兴科学园1栋600室",
    procurementInfo: "采购单-20240518",
    orderInfo: "SO202405181000",
    time: "2024-05-10 14:10:00",
    productInfo: "2024新款智能手表监控防水运动手环"
  },
  {
    key: "2",
    storeInfo: "跨境小店 UK",
    shippingAddress: "广东省深圳市南山区科兴科学园2栋601室",
    procurementInfo: "物流包裹-YD998123",
    orderInfo: "PO202405181007",
    time: "2024-05-11 14:15:00",
    productInfo: "无线蓝牙耳机降噪入耳式长续航"
  },
  {
    key: "3",
    storeInfo: "跨境小店 SG",
    shippingAddress: "广东省深圳市南山区科兴科学园3栋602室",
    procurementInfo: "A区-05货架-03层",
    orderInfo: "RO202405181014",
    time: "2024-05-12 14:20:00",
    productInfo: "纯棉短袖T恤男夏季宽松百搭"
  },
  {
    key: "4",
    storeInfo: "跨境小店 MY",
    shippingAddress: "广东省深圳市南山区科兴科学园4栋603室",
    procurementInfo: "采购单-20240518",
    orderInfo: "TR202405181021",
    time: "2024-05-13 14:25:00",
    productInfo: "户外便携运动水杯大容量防漏"
  },
  {
    key: "5",
    storeInfo: "跨境小店 PH",
    shippingAddress: "广东省深圳市南山区科兴科学园5栋604室",
    procurementInfo: "物流包裹-YD998123",
    orderInfo: "WO202405181028",
    time: "2024-05-14 14:30:00",
    productInfo: "家用多功能颈椎按摩仪护颈"
  },
  {
    key: "6",
    storeInfo: "跨境小店 US",
    shippingAddress: "广东省深圳市南山区科兴科学园6栋605室",
    procurementInfo: "A区-05货架-03层",
    orderInfo: "SO202405181035",
    time: "2024-05-15 14:35:00",
    productInfo: "2024新款智能手表监控防水运动手环"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ProcurementRecordPage;
