import React, { useState } from 'react';
import { Tabs, Input, Button, Space, Card, Tag } from 'antd';
import type { TabsProps } from 'antd';
import { SearchOutlined, AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

const MerchandisePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('merchandise');

  const topTabs: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'merchandise', label: '货盘商品' },
  ];

  const countries = ['泰国', '马来', '菲律宾', '越南', '新加坡', '印尼', '美国', '日本', '韩国', '西班牙', '台湾'];
  const productCategories = ['平板/平板配件', '手机/手机配件', '电脑/办公用品', '消费电子', '玩具', '家具百货', '户外运动/娱乐', '汽车用品/汽配', '手表'];
  const productTypes = ['十象精选', '最新产品', '最热销产品', '视频专区', 'VIP专区'];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} className="mb-4 bg-white px-4" />
      
      <Card className="mb-4">
        <div className="flex justify-center mb-6">
          <Input.Search 
            placeholder="请输入" 
            enterButton={<SearchOutlined />} 
            className="w-full max-w-lg" 
            addonBefore="产品名称"
          />
          <div className="ml-4 space-x-2">
            <Button type="primary">我要为供货商</Button>
            <Button type="primary">我要为分销商</Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <span className="font-medium text-gray-600 w-24 pt-1">发货国家/地区:</span>
            <Space size={[8, 8]} wrap>
              {countries.map(c => <Button key={c} type="text" size="small" className="hover:text-blue-500">{c}</Button>)}
            </Space>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium text-gray-600 w-24">发货仓库:</span>
            <Button type="default" size="small">马来仓</Button>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-gray-600 w-24 pt-1">商品分类:</span>
            <Space size={[8, 8]} wrap>
              {productCategories.map(c => <Button key={c} type="text" size="small" className="hover:text-blue-500">{c}</Button>)}
              <Button type="link" size="small">展开</Button>
            </Space>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-gray-600 w-24 pt-1">商品分类:</span>
            <Space size={[8, 8]} wrap>
              {productTypes.map(c => <Button key={c} type="text" size="small" className="hover:text-blue-500">{c}</Button>)}
            </Space>
            <div className="ml-auto">
              <Button icon={<AppstoreOutlined />} />
              <Button icon={<UnorderedListOutlined />} />
            </div>
          </div>
        </div>
      </Card>
      
      <div className="text-center py-20 text-gray-400">
        <AppstoreOutlined style={{ fontSize: 48 }} className="mb-4" />
        <p>暂无数据</p>
      </div>
    </div>
  );
};

export default MerchandisePage;
