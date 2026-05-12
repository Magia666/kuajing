import React from 'react';
import { Search, FileSpreadsheet, RefreshCw } from 'lucide-react';

const MOCK_DATA = [
  { id: '1', name: 'yueyang07', remark: '', code: '12021', level: 'V1 普通客户', sales: '张三', cs: '唐', funds: 300, credit: 0, pendingFreight: 0, pendingMisc: 0, warehouseFee: 0, deposit: 0, availableBalance: 300, pushStatus: '已推送', regTime: '2025-12-04 13:41:47', loginTime: '2026-05-12 11:41:47' },
  { id: '2', name: 'jinyi', remark: '大客户', code: '12013', level: 'V3 核心客户', sales: '李四', cs: '王', funds: 15400, credit: 10000, pendingFreight: 1250, pendingMisc: 50, warehouseFee: 300, deposit: 5000, availableBalance: 13800, pushStatus: '已推送', regTime: '2024-06-17 14:47:53', loginTime: '2026-05-12 10:22:15' },
  { id: '3', name: 'shenzhen_elec', remark: '电子产品', code: '13003', level: 'V2 高级客户', sales: '王五', cs: '赵', funds: 2100.5, credit: 2000, pendingFreight: 0, pendingMisc: 0, warehouseFee: 85.5, deposit: 1000, availableBalance: 2015, pushStatus: '已推送', regTime: '2025-01-10 09:12:33', loginTime: '2026-05-11 16:30:11' },
  { id: '4', name: 'beijing_trade', remark: '', code: '13002', level: 'V1 普通客户', sales: '张三', cs: '唐', funds: -50, credit: 500, pendingFreight: 120, pendingMisc: 0, warehouseFee: 0, deposit: 0, availableBalance: -170, pushStatus: '未推送', regTime: '2025-03-21 15:55:01', loginTime: '2026-05-09 14:20:00' },
  { id: '5', name: 'shanghai_tech', remark: '数码配件', code: '13001', level: 'V2 高级客户', sales: '李四', cs: '王', funds: 8500, credit: 5000, pendingFreight: 340, pendingMisc: 0, warehouseFee: 120, deposit: 2000, availableBalance: 8040, pushStatus: '已推送', regTime: '2025-02-18 10:44:22', loginTime: '2026-05-12 09:15:30' },
  { id: '6', name: 'guangzhou_garment', remark: '服装类', code: '13004', level: 'V1 普通客户', sales: '王五', cs: '赵', funds: 1200, credit: 0, pendingFreight: 150, pendingMisc: 20, warehouseFee: 0, deposit: 0, availableBalance: 1030, pushStatus: '已推送', regTime: '2025-08-05 11:30:45', loginTime: '2026-05-10 14:50:20' },
  { id: '7', name: 'hangzhou_home', remark: '家居用品', code: '13005', level: 'V2 高级客户', sales: '张三', cs: '唐', funds: 5400, credit: 2000, pendingFreight: 560, pendingMisc: 0, warehouseFee: 200, deposit: 1000, availableBalance: 4640, pushStatus: '已推送', regTime: '2025-09-12 09:20:15', loginTime: '2026-05-11 10:10:40' },
  { id: '8', name: 'chengdu_toys', remark: '玩具批发', code: '13006', level: 'V1 普通客户', sales: '李四', cs: '王', funds: 800, credit: 0, pendingFreight: 0, pendingMisc: 0, warehouseFee: 0, deposit: 0, availableBalance: 800, pushStatus: '未推送', regTime: '2025-11-20 16:45:30', loginTime: '2026-05-08 11:25:10' },
  { id: '9', name: 'wuhan_sports', remark: '运动器材', code: '13007', level: 'V3 核心客户', sales: '王五', cs: '赵', funds: 22000, credit: 15000, pendingFreight: 1800, pendingMisc: 100, warehouseFee: 450, deposit: 5000, availableBalance: 19650, pushStatus: '已推送', regTime: '2024-05-10 14:30:00', loginTime: '2026-05-12 08:30:45' },
  { id: '10', name: 'nanjing_beauty', remark: '美妆护肤', code: '13008', level: 'V2 高级客户', sales: '张三', cs: '唐', funds: 3600, credit: 1000, pendingFreight: 200, pendingMisc: 0, warehouseFee: 50, deposit: 500, availableBalance: 3350, pushStatus: '已推送', regTime: '2025-10-08 10:15:20', loginTime: '2026-05-11 15:40:30' },
  { id: '11', name: 'suzhou_gifts', remark: '礼品工艺品', code: '13009', level: 'V1 普通客户', sales: '李四', cs: '王', funds: 1500, credit: 0, pendingFreight: 300, pendingMisc: 0, warehouseFee: 0, deposit: 0, availableBalance: 1200, pushStatus: '未推送', regTime: '2025-12-01 09:50:10', loginTime: '2026-05-07 14:10:25' },
  { id: '12', name: 'qingdao_auto', remark: '汽车配件', code: '13010', level: 'V3 核心客户', sales: '王五', cs: '赵', funds: 18500, credit: 12000, pendingFreight: 1500, pendingMisc: 80, warehouseFee: 300, deposit: 3000, availableBalance: 16620, pushStatus: '已推送', regTime: '2024-08-15 11:20:30', loginTime: '2026-05-12 11:05:50' },
];

export function CustomerList() {
  return (
    <div className="bg-[#f0f2f5] h-full overflow-hidden font-sans text-gray-700 w-full flex flex-col">
      {/* Header Search */}
      <div className="bg-white p-2 border-b border-gray-200 flex flex-wrap items-center gap-2 m-2 mb-0 rounded-t-sm">
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">会员名称：</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">手机：</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">客户密钥：</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">邮件地址：</span>
          <input type="text" className="outline-none text-[12px] w-28" />
        </div>
        <div className="flex items-center gap-1 border border-gray-200 h-7 px-1 bg-white">
          <span className="text-[12px] text-gray-500 whitespace-nowrap">登录时间：</span>
          <input type="date" className="outline-none text-[12px] w-28" />
        </div>
        
        <button className="bg-[#1890ff] hover:bg-blue-600 text-white px-4 h-7 text-[12px] rounded-sm transition-colors flex items-center gap-1">
          <Search size={14} />查询
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 h-7 text-[12px] rounded-sm transition-colors flex items-center gap-1">
          <FileSpreadsheet size={14} />导出Excel
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 h-7 text-[12px] rounded-sm transition-colors flex items-center gap-1">
          <RefreshCw size={14} />更新可用余额
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white mx-2 mb-2 border border-t-0 border-gray-200 rounded-b-sm overflow-hidden flex-1 flex flex-col min-h-0">
        <div className="overflow-auto flex-1">
          <table className="w-full border-collapse text-[12px] text-left min-w-[2000px] border-b border-gray-200">
            <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
              <tr>
                <th className="px-3 py-2 border-r border-gray-200 w-16">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" /> 序号
                  </div>
                </th>
                <th className="px-3 py-2 border-r border-gray-200">客户名称</th>
                <th className="px-3 py-2 border-r border-gray-200">备注</th>
                <th className="px-3 py-2 border-r border-gray-200">客户编号</th>
                <th className="px-3 py-2 border-r border-gray-200">会员等级</th>
                <th className="px-3 py-2 border-r border-gray-200">跟进销售</th>
                <th className="px-3 py-2 border-r border-gray-200">跟进客服</th>
                <th className="px-3 py-2 border-r border-gray-200">账户资金</th>
                <th className="px-3 py-2 border-r border-gray-200">信用额度</th>
                <th className="px-3 py-2 border-r border-gray-200">待付运费</th>
                <th className="px-3 py-2 border-r border-gray-200">待付杂项</th>
                <th className="px-3 py-2 border-r border-gray-200">库内费用</th>
                <th className="px-3 py-2 border-r border-gray-200">客户押金</th>
                <th className="px-3 py-2 border-r border-gray-200">可用余额</th>
                <th className="px-3 py-2 border-r border-gray-200">推送状态</th>
                <th className="px-3 py-2 border-r border-gray-200">注册时间</th>
                <th className="px-3 py-2 border-r border-gray-200">登录时间</th>
                <th className="px-3 py-2 border-r border-gray-200 min-w-[280px]">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-gray-700">
              {MOCK_DATA.map((item, index) => (
                <tr key={item.id} className="hover:bg-[#f5f7fa] transition-colors">
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" /> {index + 1}
                    </div>
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200 text-blue-600">{item.name}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.remark}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.code}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.level}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.sales}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.cs}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-red-500">{item.funds.toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-green-500">{item.credit.toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.pendingFreight.toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.pendingMisc.toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.warehouseFee.toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200">{item.deposit.toFixed(2)}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-blue-600 font-bold w-24">({item.availableBalance.toFixed(2)})</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-green-600">{item.pushStatus}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-gray-400">{item.regTime}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-gray-400">{item.loginTime}</td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    <div className="flex flex-wrap gap-2 text-blue-500">
                      <button className="hover:underline">[编辑]</button>
                      <button className="hover:underline">[收货地址]</button>
                      <button className="hover:underline">[查看账目明细]</button>
                      <button className="hover:underline">[资金入库]</button>
                      <button className="hover:underline text-green-600">[进入会员中心]</button>
                      <button className="hover:underline text-orange-500">[客户概况]</button>
                      <button className="hover:underline text-red-500">[注销]</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="w-full flex items-center justify-between px-4 py-2 bg-white border-t border-gray-100 shrink-0">
          <div className="flex items-center gap-2 text-[12px] text-gray-600">
            <span>总计 {MOCK_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded px-1 h-6 outline-none bg-white">
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 ml-2 border-l border-gray-300 pl-3">
              <button className="text-gray-400 hover:text-gray-600">第一页</button>
              <button className="text-gray-400 hover:text-gray-600">上一页</button>
              <button className="text-gray-400 hover:text-gray-600">下一页</button>
              <button className="text-gray-400 hover:text-gray-600">最末页</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
