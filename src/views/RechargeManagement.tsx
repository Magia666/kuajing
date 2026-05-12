import React from 'react';
import { cn } from '../lib/utils';
import { Search } from 'lucide-react';

export type RechargeManagementMode = 'recharge-new' | 'recharge-list' | 'recharge-done' | 'recharge-detail' | 'recharge-method';

interface RechargeManagementProps {
  mode: RechargeManagementMode;
}

const MOCK_DETAIL = [
  { id: 1, name: 'yueyang07', code: '12021', type: '增加', amount: '+149253.73', balance: '149253.73', admin: 'fxadmin', remark: '账户充值', time: '2025-12-04 13:17:44' },
  { id: 2, name: 'yueyang02', code: '12016', type: '增加', amount: '+14925.37', balance: '14925.37', admin: 'fxadmin', remark: '账户充值', time: '2025-12-04 13:17:35' },
  { id: 3, name: 'yueyang10', code: '12024', type: '增加', amount: '+1492.54', balance: '1492.54', admin: 'fxadmin', remark: '账户充值', time: '2025-12-04 13:17:23' },
  { id: 4, name: 'yueyang01', code: '12015', type: '增加', amount: '+1492537.31', balance: '1492537.31', admin: 'fxadmin', remark: '账户充值', time: '2025-12-04 13:16:56' },
  { id: 5, name: 'qin', code: '12014', type: '增加', amount: '+149253.73', balance: '149253.73', admin: 'fxadmin', remark: '账户充值', time: '2025-12-03 19:39:49' },
];

export function RechargeManagement({ mode }: RechargeManagementProps) {
  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden flex flex-col font-sans w-full">
      {/* Container differences for 'recharge-new' vs others */}
      {mode === 'recharge-new' ? (
        <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 mt-2 mx-2 p-6 flex-1">
          <div className="mb-4">
            <h2 className="text-[#1890ff] text-[14px] font-bold border-l-4 border-[#1890ff] pl-2 -ml-6">新增待充值</h2>
          </div>
          <div className="max-w-[700px] mt-8 text-[13px]">
            <div className="flex mb-4 items-center">
              <label className="w-24 text-right pr-4 text-gray-600">客户名称</label>
              <div className="flex flex-1">
                <input type="text" placeholder="请输入客户名称" className="border border-gray-300 rounded-l px-3 h-8 w-full outline-none focus:border-blue-400" />
                <button className="bg-gray-100 border border-gray-300 border-l-0 rounded-r px-4 hover:bg-gray-200 transition-colors">查询</button>
              </div>
            </div>
            
            <div className="flex mb-4 items-center">
              <label className="w-24 text-right pr-4 text-gray-600">充值币种</label>
              <div className="flex-1 flex items-center relative">
                <select className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400 appearance-none bg-white">
                  <option>请选择充值币种</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                <span className="text-red-500 ml-2 font-bold">*</span>
              </div>
            </div>

            <div className="flex mb-4 items-center">
              <label className="w-24 text-right pr-4 text-gray-600">充值金额</label>
              <div className="flex-1 flex items-center">
                <input type="text" placeholder="充值金额" className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400" />
                <span className="text-red-500 ml-2 font-bold">*</span>
              </div>
            </div>

            <div className="flex mb-4 items-center">
              <label className="w-24 text-right pr-4 text-gray-600">汇款方式</label>
              <div className="flex-1 flex items-center relative">
                <select className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400 appearance-none bg-white">
                  <option>淘宝支付</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                <span className="text-red-500 ml-2 font-bold">*</span>
              </div>
            </div>

            <div className="flex mb-4 items-center">
              <label className="w-24 text-right pr-4 text-gray-600">账户户名</label>
              <div className="flex-1">
                <input type="text" placeholder="账户户名" className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400" />
              </div>
            </div>

            <div className="flex mb-4 items-start">
              <label className="w-24 text-right pr-4 text-gray-600 pt-1">
                <span className="text-red-500">*</span>备注
              </label>
              <div className="flex-1 flex items-start">
                <textarea className="border border-gray-300 rounded px-3 py-2 w-full h-24 outline-none focus:border-blue-400 resize-none"></textarea>
                <span className="text-red-500 ml-2 font-bold mt-1">*</span>
              </div>
            </div>

            <div className="flex mb-4 items-center">
              <label className="w-24 text-right pr-4 text-gray-600">充值时间</label>
              <div className="flex-1 flex items-center">
                <input type="text" className="border border-gray-300 rounded px-3 h-8 w-full outline-none focus:border-blue-400" />
                <span className="text-red-500 ml-2 font-bold">*</span>
              </div>
            </div>

            <div className="flex mb-8 items-start">
              <label className="w-24 text-right pr-4 text-gray-600 pt-6">充值凭证</label>
              <div className="flex-1">
                <div className="w-20 h-20 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-gray-400 text-3xl cursor-pointer hover:bg-gray-200 transition-colors">
                  +
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8 pt-4">
              <button className="bg-[#1890ff] text-white rounded px-8 py-1.5 focus:outline-none hover:bg-blue-500 transition-colors">保存</button>
              <button className="bg-white border border-[#1890ff] text-[#1890ff] rounded px-8 py-1.5 focus:outline-none hover:bg-blue-50 transition-colors">取消</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 flex-1 flex flex-col mt-2 mx-2">
          {/* Search Bar */}
          <div className="p-3 border-b border-gray-100 flex flex-wrap items-center gap-3 bg-gray-50/50">
            {(mode === 'recharge-list' || mode === 'recharge-done') && (
              <>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-white px-2 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">关键词</span>
                  <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
                </div>
                
                <div className="flex items-center">
                  <input type="date" defaultValue="2024-04-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                  <input type="date" defaultValue="2026-05-11" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                </div>

                <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-28 bg-white">
                  <option>全部状态</option>
                </select>

                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm ml-2">搜索</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">导出Excel</button>
              </>
            )}

            {mode === 'recharge-detail' && (
              <>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-white px-2 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">客户编码</span>
                  <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px]" />
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-white px-2 py-1.5 border border-gray-200 border-r-0 h-7 flex items-center">时间</span>
                  <div className="flex items-center">
                    <input type="date" className="border border-gray-300 px-2 h-7 text-[12px] outline-none" />
                    <input type="date" className="border border-gray-300 px-2 h-7 text-[12px] outline-none border-l-0" />
                  </div>
                </div>

                <select className="border border-gray-300 outline-none text-[12px] px-2 h-7 w-28 bg-white">
                  <option>全部</option>
                </select>

                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm ml-2">搜索</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">导出Excel</button>
              </>
            )}

            {mode === 'recharge-method' && (
              <>
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-gray-400 bg-white border border-gray-200 border-r-0 h-7 px-2">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap bg-white pr-2 py-1.5 border-y border-gray-200 h-7 flex items-center">银行名称</span>
                  <input type="text" className="border border-gray-300 px-2 h-7 w-32 outline-none focus:border-blue-400 text-[12px] border-l-0" />
                </div>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm ml-2">搜索</button>
                <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-5 h-7 text-[12px] transition-colors rounded-sm">添加内容</button>
              </>
            )}
          </div>

          {/* Table area */}
          <div className="overflow-auto flex-1">
            <table className="w-full border-collapse text-[12px] text-center border-b border-gray-200">
              <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
                <tr className="border-b border-gray-200">
                  {(mode === 'recharge-list' || mode === 'recharge-done' || mode === 'recharge-detail') && (
                    <th className="px-3 py-3 border-r border-gray-200 w-16">
                      <div className="flex items-center justify-center gap-1 lg:font-normal">
                        <input type="checkbox" /> {mode === 'recharge-detail' ? '' : '序号'}
                      </div>
                    </th>
                  )}
                  {mode === 'recharge-method' && (
                    <th className="px-3 py-3 border-r border-gray-200">编号</th>
                  )}

                  {(mode === 'recharge-list' || mode === 'recharge-done') && (
                    <>
                      <th className="px-3 py-3 border-r border-gray-200">客户名称</th>
                      <th className="px-3 py-3 border-r border-gray-200">汇款金额</th>
                      <th className="px-3 py-3 border-r border-gray-200">币种金额</th>
                      <th className="px-3 py-3 border-r border-gray-200">充值币种</th>
                      <th className="px-3 py-3 border-r border-gray-200">汇率</th>
                      <th className="px-3 py-3 border-r border-gray-200">汇款银行</th>
                      <th className="px-3 py-3 border-r border-gray-200">汇款时间</th>
                      <th className="px-3 py-3 border-r border-gray-200">全部状态</th>
                      <th className="px-3 py-3 border-r border-gray-200">添加人</th>
                      <th className="px-3 py-3 border-r border-gray-200">添加时间</th>
                      {mode === 'recharge-done' && <th className="px-3 py-3 border-r border-gray-200">处理时间</th>}
                      <th className="px-3 py-3 border-r border-gray-200">账户户名</th>
                      <th className="px-3 py-3 border-r border-gray-200">备注</th>
                      <th className="px-3 py-3 border-r border-gray-200">充值编号</th>
                      <th className="px-3 py-3 border-gray-200">操作</th>
                    </>
                  )}

                  {mode === 'recharge-detail' && (
                    <>
                      <th className="px-3 py-3 border-r border-gray-200">客户名称</th>
                      <th className="px-3 py-3 border-r border-gray-200">明细类型</th>
                      <th className="px-3 py-3 border-r border-gray-200">变动金额</th>
                      <th className="px-3 py-3 border-r border-gray-200">账户余额</th>
                      <th className="px-3 py-3 border-r border-gray-200">添加人</th>
                      <th className="px-3 py-3 border-r border-gray-200">备注</th>
                      <th className="px-3 py-3 border-gray-200">添加时间</th>
                    </>
                  )}

                  {mode === 'recharge-method' && (
                    <>
                      <th className="px-3 py-3 border-r border-gray-200">银行名称</th>
                      <th className="px-3 py-3 border-r border-gray-200">银行账号</th>
                      <th className="px-3 py-3 border-r border-gray-200">开户人</th>
                      <th className="px-3 py-3 border-r border-gray-200">银行账号</th>
                      <th className="px-3 py-3 border-gray-200">操作</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 border-b border-gray-200">
                {mode === 'recharge-detail' && MOCK_DETAIL.map((item, index) => (
                  <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                    <td className="px-3 py-3 border-r border-gray-200">
                      <div className="flex items-center justify-center gap-1">
                        <input type="checkbox" /> {index + 1}
                      </div>
                    </td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.name} <span className="text-red-500">({item.code})</span></td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.type}</td>
                    <td className="px-3 py-3 border-r border-gray-200 text-red-500">{item.amount}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.balance}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.admin}</td>
                    <td className="px-3 py-3 border-r border-gray-200">{item.remark}</td>
                    <td className="px-3 py-3">{item.time}</td>
                  </tr>
                ))}

                {(mode === 'recharge-list' || mode === 'recharge-done') && (
                  <>
                    <tr className="hover:bg-[#f5f7fa] transition-colors">
                      <td colSpan={16} className="px-3 py-6 text-gray-500">
                        您现在还没有任何内容
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors text-red-500">
                      <td colSpan={2} className="px-3 py-3 text-center border-r border-gray-200 border-l font-normal">合计</td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      {mode === 'recharge-done' && <td className="px-3 py-3 border-r border-gray-200"></td>}
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                      <td className="px-3 py-3 border-r border-gray-200"></td>
                    </tr>
                  </>
                )}

                {mode === 'recharge-method' && (
                  <tr className="hover:bg-[#f5f7fa] transition-colors">
                    <td colSpan={6} className="px-3 py-6 text-gray-500">
                      您现在还没有任何内容
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer info/pagination */}
          <div className="w-full flex items-center justify-end px-4 py-2 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 text-[12px] text-gray-600">
              <span>总计 {mode === 'recharge-detail' ? 5 : 0} 个记录分为 1 页当前第 1 页，每页</span>
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
      )}
      
      {mode !== 'recharge-new' && (
        <div className="w-full text-center py-4 text-[11px] text-gray-400 bg-[#f0f2f5]">
          共执行 {mode === 'recharge-detail' ? '9' : '4'} 个查询，用时 {(Math.random() * 0.05).toFixed(6)} 秒，Gzip 已禁用，内存占用 {(5.1 + Math.random() * 0.2).toFixed(3)} MB
        </div>
      )}
    </div>
  );
}
