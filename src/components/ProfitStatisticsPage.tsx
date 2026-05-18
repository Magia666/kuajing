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
          dataSource={[
  {
    key: "1",
    orderNumber: "SO202405181000",
    orderStatus: "处理中",
    storeName: "跨境小店 US",
    storeRemark: "跨境小店 US",
    warehouse: "美西一仓",
    orderAmount: "128.00",
    importAmount: "128.00",
    totalCost: "128.00",
    productCost: "128.00",
    shippingCost: "128.00",
    warehouseCost: "128.00",
    otherCost: "128.00",
    profit: "15.0%",
    profitMargin: "15.0%",
    productTotalAmount: "128.00",
    refundAmount: "128.00",
    buyerShipping: "张无忌",
    logisticShipping: "顺丰国际",
    shopeeRebate: "跨境小店 US"
  },
  {
    key: "2",
    orderNumber: "PO202405181007",
    orderStatus: "已发货",
    storeName: "跨境小店 UK",
    storeRemark: "跨境小店 UK",
    warehouse: "深圳总仓",
    orderAmount: "194.50",
    importAmount: "194.50",
    totalCost: "194.50",
    productCost: "194.50",
    shippingCost: "194.50",
    warehouseCost: "194.50",
    otherCost: "194.50",
    profit: "17.0%",
    profitMargin: "17.0%",
    productTotalAmount: "194.50",
    refundAmount: "194.50",
    buyerShipping: "李寻欢",
    logisticShipping: "云途物流",
    shopeeRebate: "跨境小店 UK"
  },
  {
    key: "3",
    orderNumber: "RO202405181014",
    orderStatus: "待付款",
    storeName: "跨境小店 SG",
    storeRemark: "跨境小店 SG",
    warehouse: "义乌中转仓",
    orderAmount: "261.00",
    importAmount: "261.00",
    totalCost: "261.00",
    productCost: "261.00",
    shippingCost: "261.00",
    warehouseCost: "261.00",
    otherCost: "261.00",
    profit: "19.0%",
    profitMargin: "19.0%",
    productTotalAmount: "261.00",
    refundAmount: "261.00",
    buyerShipping: "王语嫣",
    logisticShipping: "燕文物流",
    shopeeRebate: "跨境小店 SG"
  },
  {
    key: "4",
    orderNumber: "TR202405181021",
    orderStatus: "已完成",
    storeName: "跨境小店 MY",
    storeRemark: "跨境小店 MY",
    warehouse: "美东二仓",
    orderAmount: "327.50",
    importAmount: "327.50",
    totalCost: "327.50",
    productCost: "327.50",
    shippingCost: "327.50",
    warehouseCost: "327.50",
    otherCost: "327.50",
    profit: "21.0%",
    profitMargin: "21.0%",
    productTotalAmount: "327.50",
    refundAmount: "327.50",
    buyerShipping: "赵敏",
    logisticShipping: "DHL Express",
    shopeeRebate: "跨境小店 MY"
  },
  {
    key: "5",
    orderNumber: "WO202405181028",
    orderStatus: "已取消",
    storeName: "跨境小店 PH",
    storeRemark: "跨境小店 PH",
    warehouse: "法兰克福仓",
    orderAmount: "394.00",
    importAmount: "394.00",
    totalCost: "394.00",
    productCost: "394.00",
    shippingCost: "394.00",
    warehouseCost: "394.00",
    otherCost: "394.00",
    profit: "23.0%",
    profitMargin: "23.0%",
    productTotalAmount: "394.00",
    refundAmount: "394.00",
    buyerShipping: "系统管理员",
    logisticShipping: "FedEx",
    shopeeRebate: "跨境小店 PH"
  },
  {
    key: "6",
    orderNumber: "SO202405181035",
    orderStatus: "退款中",
    storeName: "跨境小店 US",
    storeRemark: "跨境小店 US",
    warehouse: "美西一仓",
    orderAmount: "460.50",
    importAmount: "460.50",
    totalCost: "460.50",
    productCost: "460.50",
    shippingCost: "460.50",
    warehouseCost: "460.50",
    otherCost: "460.50",
    profit: "25.0%",
    profitMargin: "25.0%",
    productTotalAmount: "460.50",
    refundAmount: "460.50",
    buyerShipping: "运营专员",
    logisticShipping: "顺丰国际",
    shopeeRebate: "跨境小店 US"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
          scroll={{ x: 2500 }}
        />
      </Card>
    </div>
  );
};

export default ProfitStatisticsPage;
