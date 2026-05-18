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
          dataSource={[]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ProcurementRecordPage;
