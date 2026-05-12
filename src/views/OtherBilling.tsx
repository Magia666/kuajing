import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../lib/utils';

export type OtherBillingMode = 'del-misc-payable' | 'del-srv-order' | 'del-storage-bill' | 'del-cost-settlement';

interface OtherBillingProps {
  mode: OtherBillingMode;
}

const MOCK_MISC = [
  { id: '1', clientName: 'fxchenwei', miscNo: 'M1001', amount: 50.00, balance: 120.00, warehouse: '星卓樾泰泰国仓', orderNo: 'ORD001', remark: '附加包装费', admin: 'sysadmin', addTime: '2024-04-12 10:00:00', payTime: '2024-04-12 11:00:00', status: '已付款' }
];

const MOCK_SRV = [
  { id: '1', clientName: 'yueyang02', warehouse: '星卓樾泰泰国仓', srvNo: 'S2001', srvType: '贴标服务', desc: '重新贴标', adminRemark: '加急', status: '已完成', price: 1.5, qty: 100, fee: 150.00, cost: 100.00, profit: 50.00, pricer: 'admin', payStatus: '未付款', attachment: '无', addTime: '2024-04-15 09:30:00', payTime: '' }
];

const MOCK_STORAGE = [
  { id: '1', billNo: 'B3001', clientName: 'qin', amount: 300.00, cost: 200.00, profit: 100.00, balance: 1500.00, generateTime: '2024-04-20 14:00:00', payStatus: '未付款', payTime: '', warehouse: '星卓樾泰泰国仓', admin: 'sysadmin' }
];

const MOCK_COST = [
  { id: '1', costNo: 'C4001', warehouse: '星卓樾泰泰国仓', applicant: '张三', type: '租金', useFor: '4月仓库租金', fee: 5000.00, status: '已审', payTime: '2024-04-25 10:00:00', addTime: '2024-04-21 09:00:00' }
];


export function OtherBilling({ mode }: OtherBillingProps) {
  let data: any[] = [];
  if (mode === 'del-misc-payable') data = MOCK_MISC;
  if (mode === 'del-srv-order') data = MOCK_SRV;
  if (mode === 'del-storage-bill') data = MOCK_STORAGE;
  if (mode === 'del-cost-settlement') data = MOCK_COST;

  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 flex-1 flex flex-col mt-2 mx-2">
        {/* Search Bar */}
        <div className="p-3 border-b border-gray-100 flex flex-wrap items-center gap-3 bg-gray-50/50">
          {mode === 'del-misc-payable' && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">杂项编号</span>
                <input type="text" placeholder="请输入杂项编号搜索" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">客户名称</span>
                <input type="text" placeholder="请输入客户名称搜索" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部状态</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部仓库</option>
              </select>
              
              <div className="flex items-center gap-1">
                <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                  <option>添加时间</option>
                </select>
                <div className="flex items-center">
                  <input type="date" defaultValue="2026-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                  <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                </div>
              </div>
              
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部销售</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部客服</option>
              </select>

              <div className="flex items-center gap-1">
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">查询</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">添加待付杂项</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">导出excel</button>
              </div>
            </>
          )}

          {mode === 'del-srv-order' && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">客户名称</span>
                <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">服务编号</span>
                <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>服务类型</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>付款状态</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部状态</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部仓库</option>
              </select>
              
              <div className="flex items-center gap-1">
                <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                  <option>添加时间</option>
                </select>
                <div className="flex items-center">
                  <input type="date" defaultValue="2026-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                  <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                </div>
              </div>
              
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部销售</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部客服</option>
              </select>

              <div className="flex items-center gap-1">
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">查询</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">添加服务订单</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">导出Excel</button>
              </div>
            </>
          )}

          {mode === 'del-storage-bill' && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">客户名称</span>
                <input type="text" placeholder="请输入客户名称" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">账单编号</span>
                <input type="text" placeholder="请输入账单编号" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              
              <div className="flex items-center gap-1">
                <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                  <option>生成时间</option>
                </select>
                <div className="flex items-center">
                  <input type="date" defaultValue="2026-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                  <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                </div>
              </div>
              
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部销售</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部客服</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部仓库</option>
              </select>
              <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-24 bg-white">
                <option>全部订单</option>
              </select>

              <div className="flex items-center gap-1">
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">查询</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">生成账单</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">导出Excel</button>
              </div>
            </>
          )}

          {mode === 'del-cost-settlement' && (
            <>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">应付单号</span>
                <input type="text" placeholder="应付单号" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
              </div>
              
              <div className="flex items-center gap-1">
                <input type="date" defaultValue="2026-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
              </div>

              <div className="flex items-center gap-1 ml-2">
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">查询</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">添加应付</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-4 h-7 text-[12px] transition-colors rounded-sm">导出Excel</button>
              </div>
            </>
          )}

        </div>

        {/* Table area */}
        <div className="overflow-auto flex-1">
          <table className="w-full border-collapse text-[12px] text-center border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 border-r border-gray-200 w-16">
                  <div className="flex items-center justify-center gap-1 lg:font-normal">
                    <input type="checkbox" /> 序号
                  </div>
                </th>
                
                {mode === 'del-misc-payable' && (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">杂项编号</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单金额</th>
                    <th className="px-3 py-2 border-r border-gray-200">账户余额</th>
                    <th className="px-3 py-2 border-r border-gray-200">所属仓库</th>
                    <th className="px-3 py-2 border-r border-gray-200">单号/流水</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单备注</th>
                    <th className="px-3 py-2 border-r border-gray-200">添加管理员</th>
                    <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">状态</th>
                  </>
                )}

                {mode === 'del-srv-order' && (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">服务编号</th>
                    <th className="px-3 py-2 border-r border-gray-200">服务类型</th>
                    <th className="px-3 py-2 border-r border-gray-200">服务说明</th>
                    <th className="px-3 py-2 border-r border-gray-200">管理员备注</th>
                    <th className="px-3 py-2 border-r border-gray-200">服务状态</th>
                    <th className="px-3 py-2 border-r border-gray-200">单价</th>
                    <th className="px-3 py-2 border-r border-gray-200">数量</th>
                    <th className="px-3 py-2 border-r border-gray-200">服务费用</th>
                    <th className="px-3 py-2 border-r border-gray-200">服务成本</th>
                    <th className="px-3 py-2 border-r border-gray-200">利润</th>
                    <th className="px-3 py-2 border-r border-gray-200">定价人</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款状态</th>
                    <th className="px-3 py-2 border-r border-gray-200">附件</th>
                    <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款时间</th>
                  </>
                )}

                {mode === 'del-storage-bill' && (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">账单编号</th>
                    <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单金额</th>
                    <th className="px-3 py-2 border-r border-gray-200">账单成本</th>
                    <th className="px-3 py-2 border-r border-gray-200">利润</th>
                    <th className="px-3 py-2 border-r border-gray-200">账户余额</th>
                    <th className="px-3 py-2 border-r border-gray-200">生成时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款状态</th>
                    <th className="px-3 py-2 border-r border-gray-200">付款时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">操作管理员</th>
                  </>
                )}

                {mode === 'del-cost-settlement' && (
                  <>
                    <th className="px-3 py-2 border-r border-gray-200">应付单号</th>
                    <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
                    <th className="px-3 py-2 border-r border-gray-200">申请人</th>
                    <th className="px-3 py-2 border-r border-gray-200">应付类型</th>
                    <th className="px-3 py-2 border-r border-gray-200">费用用途</th>
                    <th className="px-3 py-2 border-r border-gray-200">费用</th>
                    <th className="px-3 py-2 border-r border-gray-200">状态</th>
                    <th className="px-3 py-2 border-r border-gray-200">支出时间</th>
                    <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                  </>
                )}
                
                <th className="px-3 py-2 border-l border-gray-200 bg-[#f5f7fa]">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200">
              {data.map((item, index) => (
                <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {index + 1}
                    </div>
                  </td>
                  
                  {mode === 'del-misc-payable' && (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.clientName}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.miscNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.amount?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.balance?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.orderNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.remark}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.admin}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 whitespace-nowrap min-w-[80px]">
                        {item.addTime && (
                          <div className="flex flex-col">
                            <span>{item.addTime.split(' ')[0]}</span>
                            <span>{item.addTime.split(' ')[1]}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 whitespace-nowrap min-w-[80px]">
                        {item.payTime && (
                          <div className="flex flex-col">
                            <span>{item.payTime.split(' ')[0]}</span>
                            <span>{item.payTime.split(' ')[1]}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.status}</td>
                    </>
                  )}

                  {mode === 'del-srv-order' && (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.clientName}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.srvNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.srvType}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.desc}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.adminRemark}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.status}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.price?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.qty}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.fee?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.cost?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.profit?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.pricer}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.payStatus}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.attachment}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 whitespace-nowrap min-w-[80px]">
                        {item.addTime && (
                          <div className="flex flex-col">
                            <span>{item.addTime.split(' ')[0]}</span>
                            <span>{item.addTime.split(' ')[1]}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.payTime}</td>
                    </>
                  )}

                  {mode === 'del-storage-bill' && (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.billNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.clientName}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.amount?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.cost?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.profit?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.balance?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 whitespace-nowrap min-w-[80px]">
                        {item.generateTime && (
                          <div className="flex flex-col">
                            <span>{item.generateTime.split(' ')[0]}</span>
                            <span>{item.generateTime.split(' ')[1]}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.payStatus}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.payTime}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.admin}</td>
                    </>
                  )}

                  {mode === 'del-cost-settlement' && (
                    <>
                      <td className="px-3 py-2 border-r border-gray-200">{item.costNo}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.applicant}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.type}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.useFor}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.fee?.toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{item.status}</td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 whitespace-nowrap min-w-[80px]">
                        {item.payTime && (
                          <div className="flex flex-col">
                            <span>{item.payTime.split(' ')[0]}</span>
                            <span>{item.payTime.split(' ')[1]}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200 text-gray-500 whitespace-nowrap min-w-[80px]">
                        {item.addTime && (
                          <div className="flex flex-col">
                            <span>{item.addTime.split(' ')[0]}</span>
                            <span>{item.addTime.split(' ')[1]}</span>
                          </div>
                        )}
                      </td>
                    </>
                  )}
                  
                  <td className="px-3 py-2 border-l border-gray-200">
                    <div className="flex items-center justify-center gap-1 text-[#1890ff] whitespace-nowrap">
                      <button className="hover:underline">[查看]</button>
                      <button className="hover:underline">[编辑]</button>
                      <button className="hover:underline text-red-500">[删除]</button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {data.length > 0 && (
                <tr className="hover:bg-gray-50 transition-colors text-red-500">
                  {mode === 'del-misc-payable' && (
                    <>
                      <td colSpan={3} className="px-3 py-2 text-center font-bold border-r border-gray-200 border-l">总计</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.amount || 0), 0).toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold text-red-500" colSpan={9}>账单金额红色标识客户账户余额足以支付</td>
                    </>
                  )}
                  {mode === 'del-srv-order' && (
                    <>
                      <td colSpan={8} className="px-3 py-2 text-center font-bold border-r border-gray-200 border-l">总计</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.qty || 0), 0)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold" colSpan={1}>{data.reduce((a, b) => a + (b.fee || 0), 0).toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold text-red-500 text-left pl-4" colSpan={8}>账单金额红色标识客户账户余额足以支付</td>
                    </>
                  )}
                  {mode === 'del-storage-bill' && (
                    <>
                      <td colSpan={3} className="px-3 py-2 text-center font-bold border-r border-gray-200 border-l">合计</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold text-red-500 text-left pl-4" colSpan={9}>账单金额红色标识客户账户余额足以支付</td>
                    </>
                  )}
                  {mode === 'del-cost-settlement' && (
                    <>
                      <td colSpan={6} className="px-3 py-2 text-center font-bold border-r border-gray-200 border-l">总计</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold text-red-500" colSpan={1}>{data.reduce((a, b) => a + (b.fee || 0), 0).toFixed(2)}</td>
                      <td className="px-3 py-2 border-r border-gray-200 font-bold text-red-500" colSpan={4}></td>
                    </>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer actions & Pagination */}
        <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-50/50">
          <div className="flex items-center gap-2">
            {(mode === 'del-misc-payable' || mode === 'del-srv-order' || mode === 'del-storage-bill') && (
              <button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-4 py-1.5 text-[12px] rounded-sm transition-colors">
                {mode === 'del-srv-order' || mode === 'del-storage-bill' || mode === 'del-misc-payable' ? '批量付款' : ''}
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-[12px] text-gray-600">
            <span>总计 {data.length} 个记录</span>
            <span>分为 1 页</span>
            <span>当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded px-1 h-6 outline-none bg-white">
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
      
      <div className="w-full text-center py-4 text-[11px] text-gray-400">
        共执行 {mode === 'del-srv-order' ? 9 : mode === 'del-misc-payable' ? 8 : mode === 'del-storage-bill' ? 8 : 6} 个查询，用时 0.02{Math.floor(Math.random() * 10000)} 秒，Gzip 已禁用，内存占用 {(6.2 + Math.random()).toFixed(3)} MB
      </div>
    </div>
  );
}
