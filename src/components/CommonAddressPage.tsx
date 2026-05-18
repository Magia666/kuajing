import React from 'react';
import { Table, Button, Card, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';

interface AddressData {
  key: string;
  platform: string;
  name: string;
  province: string;
  city: string;
  district: string;
  country: string;
  phone: string;
  address: string;
  type: string;
  isDefault: string;
}

const CommonAddressPage: React.FC = () => {
  const columns: TableColumnsType<AddressData> = [
    { title: '序号', dataIndex: 'key', width: 60 },
    { title: '平台', dataIndex: 'platform', key: 'platform' },
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '省/州', dataIndex: 'province', key: 'province' },
    { title: '城市', dataIndex: 'city', key: 'city' },
    { title: '区', dataIndex: 'district', key: 'district' },
    { title: '国家/地区', dataIndex: 'country', key: 'country' },
    { title: '联系电话', dataIndex: 'phone', key: 'phone' },
    { title: '详细地址', dataIndex: 'address', key: 'address' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '是否默认', dataIndex: 'isDefault', key: 'isDefault' },
    { title: '操作', key: 'operation', render: () => <Space><a>编辑</a><a>删除</a></Space> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">常用地址</h1>
      
      <Card className="mb-4">
        <Space>
            <Button type="primary" icon={<PlusOutlined />}>新增常用地址</Button>
            <Button icon={<ReloadOutlined />}>速卖通地址同步</Button>
            <Button icon={<ReloadOutlined />}>Coupang地址同步</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "测试数据 1",
    platform: "测试数据 1",
    name: "测试数据 1",
    province: "测试数据 1",
    city: "测试数据 1",
    district: "测试数据 1",
    country: "测试数据 1",
    phone: "测试数据 1",
    address: "测试数据 1",
    type: "测试数据 1",
    isDefault: "测试数据 1"
  },
  {
    key: "测试数据 2",
    platform: "测试数据 2",
    name: "测试数据 2",
    province: "测试数据 2",
    city: "测试数据 2",
    district: "测试数据 2",
    country: "测试数据 2",
    phone: "测试数据 2",
    address: "测试数据 2",
    type: "测试数据 2",
    isDefault: "测试数据 2"
  },
  {
    key: "测试数据 3",
    platform: "测试数据 3",
    name: "测试数据 3",
    province: "测试数据 3",
    city: "测试数据 3",
    district: "测试数据 3",
    country: "测试数据 3",
    phone: "测试数据 3",
    address: "测试数据 3",
    type: "测试数据 3",
    isDefault: "测试数据 3"
  },
  {
    key: "测试数据 4",
    platform: "测试数据 4",
    name: "测试数据 4",
    province: "测试数据 4",
    city: "测试数据 4",
    district: "测试数据 4",
    country: "测试数据 4",
    phone: "测试数据 4",
    address: "测试数据 4",
    type: "测试数据 4",
    isDefault: "测试数据 4"
  },
  {
    key: "测试数据 5",
    platform: "测试数据 5",
    name: "测试数据 5",
    province: "测试数据 5",
    city: "测试数据 5",
    district: "测试数据 5",
    country: "测试数据 5",
    phone: "测试数据 5",
    address: "测试数据 5",
    type: "测试数据 5",
    isDefault: "测试数据 5"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default CommonAddressPage;
