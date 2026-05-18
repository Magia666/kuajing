import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Row, Col, Statistic } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface ProfitData {
  key: string;
  orderNumber: string;
  orderStatus: string;
  storeName: string;
  storeRemark: string;
  warehouse: string;
  orderAmount: number;
  importAmount: number;
  totalCost: number;
  productCost: number;
  shippingCost: number;
  warehouseCost: number;
  otherCost: number;
  profit: number;
  profitMargin: string;
  productTotalAmount: number;
  refundAmount: number;
  buyerShipping: number;
  logisticShipping: number;
  shopeeRebate: number;
}

const ProfitStatisticsPage: React.FC = () => {
  const columns: TableColumnsType<ProfitData> = [
    { title: '订单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '订单状态', dataIndex: 'orderStatus', key: 'orderStatus' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '店铺备注', dataIndex: 'storeRemark', key: 'storeRemark' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '订单金额(CNY)', dataIndex: 'orderAmount', key: 'orderAmount' },
    { title: '进账金额(CNY)', dataIndex: 'importAmount', key: 'importAmount' },
    { title: '总成本(CNY)', dataIndex: 'totalCost', key: 'totalCost' },
    { title: '商品成本(CNY)', dataIndex: 'productCost', key: 'productCost' },
    { title: '运费成本(CNY)', dataIndex: 'shippingCost', key: 'shippingCost' },
    { title: '仓库成本(CNY)', dataIndex: 'warehouseCost', key: 'warehouseCost' },
    { title: '其他费用(CNY)', dataIndex: 'otherCost', key: 'otherCost' },
    { title: '利润(CNY)', dataIndex: 'profit', key: 'profit' },
    { title: '利润率(%)', dataIndex: 'profitMargin', key: 'profitMargin' },
    { title: '商品总额', dataIndex: 'productTotalAmount', key: 'productTotalAmount' },
    { title: '退款金额', dataIndex: 'refundAmount', key: 'refundAmount' },
    { title: '买家支付运费', dataIndex: 'buyerShipping', key: 'buyerShipping' },
    { title: '物流者收取的运费', dataIndex: 'logisticShipping', key: 'logisticShipping' },
    { title: 'Shopee运费回扣', dataIndex: 'shopeeRebate', key: 'shopeeRebate' },
  ];

  const statisticData = [
    { title: '订单金额总计', value: 0.00 },
    { title: '进账金额总计', value: 0.00 },
    { title: '总成本总计', value: 0.00 },
    { title: '商品成本总计', value: 0.00 },
    { title: '运费成本总计', value: 0.00 },
    { title: '仓库成本总计', value: 0.00 },
    { title: '其他费用总计', value: 0.00 },
    { title: '利润总计', value: 0.00 },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">利润统计</h1>
      
      <Card className="mb-4">
        <Row gutter={[16, 16]}>
          <Col span={6}><Select placeholder="平台类型" style={{ width: '100%' }} allowClear /></Col>
          <Col span={6}><Input placeholder="订单状态" /></Col>
          <Col span={12}><Input placeholder="订单号" /></Col>
          <Col span={6}><Input placeholder="仓库" /></Col>
          <Col span={6}><Input placeholder="店铺" /></Col>
          <Col span={12}><Input placeholder="系统状态" /></Col>
          <Col span={12}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={12}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={12}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={24}>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
              <Button icon={<ExportOutlined />}>导出</Button>
            </Space>
          </Col>
        </Row>
      </Card>

      <Row gutter={[16, 16]} className="mb-4">
        {statisticData.map((item, index) => (
          <Col span={3} key={index}>
            <Card type="inner" bodyStyle={{ padding: '12px' }}>
              <Statistic title={item.title} value={item.value} precision={2} />
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
          scroll={{ x: 2500 }}
        />
      </Card>
    </div>
  );
};

export default ProfitStatisticsPage;
