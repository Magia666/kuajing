import React from 'react';
import { Table, Input, Button, Card, Select, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface FreightTrialData {
  key: string;
  channelName: string;
  destination: string;
  features: string;
  timeliness: string;
  maxWeight: string;
  calculationMethod: string;
  estimatedCost: string;
}

const FreightTrialPage: React.FC = () => {
  const columns: TableColumnsType<FreightTrialData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '渠道名称', dataIndex: 'channelName', key: 'channelName' },
    { title: '目的地', dataIndex: 'destination', key: 'destination' },
    { title: '符合特性', dataIndex: 'features', key: 'features' },
    { title: '时效', dataIndex: 'timeliness', key: 'timeliness' },
    { title: '最大限重', dataIndex: 'maxWeight', key: 'maxWeight' },
    { title: '计算方式', dataIndex: 'calculationMethod', key: 'calculationMethod' },
    { title: '预估费用', dataIndex: 'estimatedCost', key: 'estimatedCost' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">运费试算</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Input placeholder="重量" prefix="重量kg:" style={{ width: 150 }} />
            <Space.Compact>
                <Input placeholder="长" prefix="尺寸:" style={{ width: 80 }} />
                <Input placeholder="宽" style={{ width: 80 }} />
                <Input placeholder="高" style={{ width: 80 }} />
            </Space.Compact>
            <Select placeholder="站点" style={{ width: 150 }} allowClear />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            { key: '1', channelName: '标准云途专线', destination: '美国', features: '普货', timeliness: '7-12天', maxWeight: '3kg', calculationMethod: '按实重', estimatedCost: '￥ 68.50' },
            { key: '2', channelName: 'DHL国际特快', destination: '全球', features: '带电/特货', timeliness: '3-5天', maxWeight: '20kg', calculationMethod: '按体积重', estimatedCost: '￥ 145.00' },
            { key: '3', channelName: 'E邮宝', destination: '欧洲', features: '普货小包', timeliness: '10-20天', maxWeight: '2kg', calculationMethod: '按实重计费', estimatedCost: '￥ 45.30' }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default FreightTrialPage;
