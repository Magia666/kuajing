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
          dataSource={[]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default CommonAddressPage;
