import React from 'react';
import { cn } from '../lib/utils';

export type PriceManagementMode = 'price-currency' | 'price-zones' | 'price-list' | 'price-void' | 'price-delivery-zone' | 'price-remote-zone';

interface PriceManagementProps {
  mode: PriceManagementMode;
}

const MOCK_CURRENCY = [
  { id: 1, zhName: '人民币', enName: 'RMB', abbr: 'RMB', symbol: '¥', isDefault: false, addTime: '2019-05-15 15:51:18', status: '启用', remark: '人民币' },
  { id: 2, zhName: '美元', enName: 'USD', abbr: 'USD', symbol: '$', isDefault: true, addTime: '2019-05-15 15:46:16', status: '启用', remark: '美元' },
];

const MOCK_ZONES = [
  { id: 1, name: '泰国', whName: '星卓越泰国仓', sort: 50, remark: '', area: '泰国', addTime: '2025-03-25 11:08:58' },
];

const MOCK_PRICES = [
  { id: 1, name: 'Shopee', code: 'Shopee', express: '虾皮', whName: '星卓越泰国仓', type: '派送报价', feeType: '使用系统报价\n(API:Shopee)', remark: '', visible: '全部可见', area: '泰国', status: '启用', updateTime: '2025-04-27 15:28:57', addTime: '2025-03-25 11:09:45' },
];

const MOCK_DELIVERY_ZONES = [
  { id: 1, name: '泰国', country: '泰国' },
];

export function PriceManagement({ mode }: PriceManagementProps) {
  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 flex-1 flex flex-col mt-2 mx-2 relative min-h-0">
        {/* Header Actions / Filters */}
        <div className="p-3 border-b border-gray-100 flex flex-wrap items-start gap-3 bg-gray-50/50">
          {mode === 'price-currency' && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">币种名称</span>
                <input type="text" placeholder="请输入币种名称" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
              </div>
              <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                <option>全部状态</option>
              </select>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">新建币种</button>
            </>
          )}

          {mode === 'price-zones' && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">分区名称</span>
                <input type="text" placeholder="请输入分区名称搜索" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
              </div>
              <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                <option>全部状态</option>
              </select>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">新建分区</button>
            </>
          )}

          {(mode === 'price-delivery-zone' || mode === 'price-remote-zone') && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">分区名称</span>
                <input type="text" placeholder="请输入分区名称" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
              </div>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">新增分区</button>
            </>
          )}

          {(mode === 'price-list' || mode === 'price-void') && (
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">报价名称</span>
                <input type="text" placeholder="关键词" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 bg-gray-50 border border-gray-200 border-r-0 px-2 py-1 h-7 flex items-center whitespace-nowrap">类型编码</span>
                <input type="text" placeholder="类型编码" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
              </div>
              <input type="text" placeholder="客户账号(如12000)" className="border border-gray-300 px-2 h-7 w-40 text-[12px] outline-none focus:border-blue-400" />
              
              <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                <option>全部仓库</option>
              </select>
              <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                <option>全部快递</option>
              </select>
              <select className="border border-gray-300 px-2 h-7 text-[12px] outline-none bg-white min-w-[100px]">
                <option>全部状态</option>
              </select>

              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">查询</button>
              <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 text-[12px] transition-colors rounded-sm ml-2">添加报价</button>
            </div>
          )}
        </div>

        {/* Table area */}
        <div className="overflow-auto flex-1 pb-16">
          <table className="w-full border-collapse text-[12px] text-center min-w-max">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="border-b border-gray-200">
                <th className="px-3 py-3 border-r border-gray-200 w-16">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" /> 序号
                  </div>
                </th>
                
                {mode === 'price-currency' && (
                  <>
                    <th className="px-3 py-3 border-r border-gray-200">币种中文名称</th>
                    <th className="px-3 py-3 border-r border-gray-200">币种英文英文</th>
                    <th className="px-3 py-3 border-r border-gray-200">币种缩写</th>
                    <th className="px-3 py-3 border-r border-gray-200">币种符号</th>
                    <th className="px-3 py-3 border-r border-gray-200">默认币种</th>
                    <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                    <th className="px-3 py-3 border-r border-gray-200">状态</th>
                    <th className="px-3 py-3 border-r border-gray-200">备注</th>
                    <th className="px-3 py-3 border-r border-gray-200 w-32">操作</th>
                  </>
                )}

                {mode === 'price-zones' && (
                  <>
                    <th className="px-3 py-3 border-r border-gray-200">分区名称</th>
                    <th className="px-3 py-3 border-r border-gray-200">归属仓库</th>
                    <th className="px-3 py-3 border-r border-gray-200">分区排序</th>
                    <th className="px-3 py-3 border-r border-gray-200">分区备注</th>
                    <th className="px-3 py-3 border-r border-gray-200">分区地区</th>
                    <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                    <th className="px-3 py-3 border-r border-gray-200 w-40">操作</th>
                  </>
                )}

                {(mode === 'price-delivery-zone' || mode === 'price-remote-zone') && (
                  <>
                    <th className="px-3 py-3 border-r border-gray-200">分区名称</th>
                    <th className="px-3 py-3 border-r border-gray-200">所属国家</th>
                    <th className="px-3 py-3 border-r border-gray-200">操作</th>
                  </>
                )}

                {(mode === 'price-list' || mode === 'price-void') && (
                  <>
                    <th className="px-3 py-3 border-r border-gray-200">报价名称</th>
                    <th className="px-3 py-3 border-r border-gray-200">类型编码</th>
                    <th className="px-3 py-3 border-r border-gray-200">发货快递</th>
                    <th className="px-3 py-3 border-r border-gray-200">仓库名称</th>
                    <th className="px-3 py-3 border-r border-gray-200">报价类型</th>
                    <th className="px-3 py-3 border-r border-gray-200">报价收费方式</th>
                    <th className="px-3 py-3 border-r border-gray-200">备注</th>
                    <th className="px-3 py-3 border-r border-gray-200">渠道可见权限</th>
                    <th className="px-3 py-3 border-r border-gray-200">派送地区</th>
                    <th className="px-3 py-3 border-r border-gray-200">状态</th>
                    <th className="px-3 py-3 border-r border-gray-200">更新时间</th>
                    <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                    <th className="px-3 py-3 border-r border-gray-200 w-[420px]">操作</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {mode === 'price-currency' && MOCK_CURRENCY.map((item, index) => (
                <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-3 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {index + 1}
                    </div>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.zhName}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.enName}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.abbr}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.symbol}</td>
                  <td className={cn("px-3 py-3 border-r border-gray-200", item.isDefault && "text-red-500")}>
                    {item.isDefault ? '系统默认币种' : ''}
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.status}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.remark}</td>
                  <td className="px-3 py-3 border-r border-gray-200">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">[修改]</button>
                    <button className="text-blue-500 hover:text-blue-700">[删除]</button>
                  </td>
                </tr>
              ))}

              {mode === 'price-zones' && MOCK_ZONES.map((item, index) => (
                <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-3 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {index + 1}
                    </div>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.name}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.whName}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.sort}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.remark}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.area}</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-500">{item.addTime}</td>
                  <td className="px-3 py-3 border-r border-gray-200">
                    <button className="text-blue-500 hover:text-blue-700 mr-1">修改</button>
                    <button className="text-blue-500 hover:text-blue-700 mr-1">[分区管理]</button>
                    <button className="text-blue-500 hover:text-blue-700">删除</button>
                  </td>
                </tr>
              ))}

              {mode === 'price-delivery-zone' && MOCK_DELIVERY_ZONES.map((item, index) => (
                <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-3 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {index + 1}
                    </div>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.name}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.country}</td>
                  <td className="px-3 py-3 border-r border-gray-200">
                    <button className="text-blue-500 hover:text-blue-700 mr-1">[修改]</button>
                    <button className="text-red-500 hover:text-red-700">[删除]</button>
                  </td>
                </tr>
              ))}
              
              {/* mode === 'price-remote-zone' and 'price-void' have no items initially, so nothing maps */}

              {mode === 'price-list' && MOCK_PRICES.map((item, index) => (
                <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-3 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {index + 1}
                    </div>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.name}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.code}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.express}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.whName}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.type}</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-red-500 whitespace-pre-line">{item.feeType}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.remark}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.visible}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.area}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{item.status}</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-500">
                    <div className="w-24 text-center mx-auto">{item.updateTime.replace(' ', '\n')}</div>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200 text-gray-500">
                    <div className="w-24 text-center mx-auto">{item.addTime.replace(' ', '\n')}</div>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200">
                    <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
                      <button className="text-blue-500 hover:text-blue-700">[编辑]</button>
                      <button className="text-blue-500 hover:text-blue-700">[导入报价]</button>
                      <button className="text-blue-500 hover:text-blue-700">[查看报价]</button>
                      <button className="text-blue-500 hover:text-blue-700">[查看成本]</button>
                      <button className="text-blue-500 hover:text-blue-700">[偏远报价]</button>
                      <button className="text-blue-500 hover:text-blue-700">[偏远成本]</button>
                      <button className="text-blue-500 hover:text-blue-700">[附加费]</button>
                      <button className="text-red-500 hover:text-red-700">[禁用]</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="w-full flex items-center justify-end px-4 py-2 bg-white border-t border-gray-100 absolute bottom-0 left-0 right-0 h-14">
          <div className="flex items-center gap-2 text-[12px] text-gray-600">
            <span>总计 {mode === 'price-currency' ? '2' : mode === 'price-void' || mode === 'price-remote-zone' ? '0' : '1'} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded px-1 h-6 outline-none bg-white">
              <option>10</option>
              <option>50</option>
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-2 border-l border-gray-300 pl-3">
              <button className="text-gray-400 hover:text-gray-600">第一页</button>
              <button className="text-gray-400 hover:text-gray-600">上一页</button>
              <button className="text-gray-400 hover:text-gray-600">下一页</button>
              <button className="text-gray-400 hover:text-gray-600">最末页</button>
            </div>
            <select className="border border-gray-300 rounded h-6 outline-none ml-1 bg-white">
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="w-full text-center py-4 text-[11px] text-gray-400 bg-[#f0f2f5]">
        共执行 {(mode === 'price-list' || mode === 'price-void') ? '9' : (mode === 'price-delivery-zone' || mode === 'price-remote-zone') ? '7' : mode === 'price-zones' ? '5' : '4'} 个查询，用时 {(Math.random() * 0.05).toFixed(6)} 秒，Gzip 已禁用，内存占用 {(4.2 + Math.random() * 0.2).toFixed(3)} MB
      </div>
    </div>
  );
}
