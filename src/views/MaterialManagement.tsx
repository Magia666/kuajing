import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '../lib/utils';

interface MaterialData {
  id: string;
  code: string;
  name: string;
  enName: string;
  warehouse: string;
  value: number;
  inventory: number;
  totalValue: number;
  status: string;
  addedTime: string;
}

interface MaterialRecordData {
  id: string;
  code: string;
  name: string;
  enName: string;
  warehouse: string;
  changeType: string;
  change: number;
  remark: string;
  addedTime: string;
}

const MOCK_LIST: MaterialData[] = [
  {
    id: '1',
    code: 'WL10004',
    name: '测试物料',
    enName: 'ceshiwuliao',
    warehouse: '星卓樾泰泰国仓',
    value: 100.00,
    inventory: 100,
    totalValue: 10000,
    status: '启用',
    addedTime: '2025-12-02 00:14:32'
  },
  {
    id: '2',
    code: 'WL10005',
    name: '中号加强纸箱',
    enName: 'Medium Reinforced Box',
    warehouse: '美东一仓',
    value: 5.50,
    inventory: 2000,
    totalValue: 11000,
    status: '启用',
    addedTime: '2025-12-05 14:20:00'
  },
  {
    id: '3',
    code: 'WL10006',
    name: '气泡膜一卷',
    enName: 'Bubble Wrap Roll',
    warehouse: '星卓樾泰泰国仓',
    value: 45.00,
    inventory: 150,
    totalValue: 6750,
    status: '停用',
    addedTime: '2025-12-10 09:15:22'
  }
];

const MOCK_RECORDS: MaterialRecordData[] = [
  {
    id: '1',
    code: 'WL10004',
    name: '测试物料',
    enName: 'ceshiwuliao',
    warehouse: '星卓樾泰泰国仓',
    changeType: '入库',
    change: 50,
    remark: '采购入库',
    addedTime: '2025-12-03 10:00:00'
  },
  {
    id: '2',
    code: 'WL10004',
    name: '测试物料',
    enName: 'ceshiwuliao',
    warehouse: '星卓樾泰泰国仓',
    changeType: '出库',
    change: -10,
    remark: '生产领料',
    addedTime: '2025-12-04 15:30:12'
  },
  {
    id: '3',
    code: 'WL10005',
    name: '中号加强纸箱',
    enName: 'Medium Reinforced Box',
    warehouse: '美东一仓',
    changeType: '入库',
    change: 2000,
    remark: '初期建账',
    addedTime: '2025-12-05 14:25:00'
  }
];

interface MaterialManagementProps {
  mode: 'material-list' | 'material-record';
}

export function MaterialManagement({ mode }: MaterialManagementProps) {
  const isList = mode === 'material-list';

  return (
    <div className="bg-white rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full h-full overflow-hidden flex flex-col">
      {/* Search Bar */}
      <div className="p-3 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
        <div className="flex items-center gap-1">
          <span className="text-[12px] text-gray-600">物料编号</span>
          <input 
            type="text" 
            placeholder="物料编号" 
            className="border border-gray-300 rounded-sm px-2 h-7 w-40 outline-none focus:border-blue-400 text-[12px]"
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[12px] text-gray-600">关键词</span>
          <input 
            type="text" 
            placeholder="关键词" 
            className="border border-gray-300 rounded-sm px-2 h-7 w-40 outline-none focus:border-blue-400 text-[12px]"
          />
        </div>
        <select className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none w-32">
          <option>全部仓库</option>
        </select>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input type="date" className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none w-36" />
          </div>
          <div className="relative">
            <input type="date" className="border border-gray-300 rounded-sm px-2 h-7 text-[12px] outline-none w-36" />
          </div>
        </div>
        <button className="bg-[#1890ff] hover:bg-[#1890ff]/90 text-white px-6 h-7 rounded-sm text-[12px] flex items-center justify-center transition-colors">
          查询
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-auto flex-1">
        <table className="w-full border-collapse text-[12px] text-left">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr className="border-b border-gray-200">
              <th className="px-3 py-2 border-r border-gray-200 w-16">
                <div className="flex items-center justify-center gap-1">
                  <input type="checkbox" /> 序号
                </div>
              </th>
              <th className="px-3 py-2 border-r border-gray-200">物料编号</th>
              <th className="px-3 py-2 border-r border-gray-200">物料名称</th>
              <th className="px-3 py-2 border-r border-gray-200">物料英文名称</th>
              <th className="px-3 py-2 border-r border-gray-200">仓库名称</th>
              
              {isList ? (
                <>
                  <th className="px-3 py-2 border-r border-gray-200">物料货值</th>
                  <th className="px-3 py-2 border-r border-gray-200">库存</th>
                  <th className="px-3 py-2 border-r border-gray-200">总货值</th>
                  <th className="px-3 py-2 border-r border-gray-200">状态</th>
                  <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                  <th className="px-3 py-2 border-r border-gray-200">操作</th>
                </>
              ) : (
                <>
                  <th className="px-3 py-2 border-r border-gray-200">库存变动类型</th>
                  <th className="px-3 py-2 border-r border-gray-200">库存变动</th>
                  <th className="px-3 py-2 border-r border-gray-200">备注</th>
                  <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isList && MOCK_LIST.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">{item.code}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.name}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.enName}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.value.toFixed(2)}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.inventory}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.totalValue}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.status}</td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-500 max-w-[100px]">
                  <div className="flex flex-col whitespace-nowrap">
                    <span>{item.addedTime.split(' ')[0]}</span>
                    <span>{item.addedTime.split(' ')[1]}</span>
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex items-center justify-center gap-1 text-[12px]">
                    <button className="text-[#1890ff] hover:underline">[物料入库]</button>
                    <button className="text-[#1890ff] hover:underline">[物料出库]</button>
                    <button className="text-[#1890ff] hover:underline">[编辑]</button>
                    <button className="text-red-500 hover:underline">[删除]</button>
                  </div>
                </td>
              </tr>
            ))}
            
            {isList && MOCK_LIST.length > 0 && (
              <tr className="hover:bg-gray-50 transition-colors text-red-500">
                <td colSpan={6} className="px-3 py-2 border-r border-gray-200 text-center">合计</td>
                <td className="px-3 py-2 border-r border-gray-200 text-center">{MOCK_LIST.reduce((acc, curr) => acc + curr.inventory, 0)}</td>
                <td className="px-3 py-2 border-r border-gray-200 text-center">{MOCK_LIST.reduce((acc, curr) => acc + curr.totalValue, 0)}</td>
                <td colSpan={3} className="px-3 py-2 border-r border-gray-200"></td>
              </tr>
            )}

            {!isList && MOCK_RECORDS.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex items-center justify-center gap-1">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">{item.code}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.name}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.enName}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.warehouse}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.changeType}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.change}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.remark}</td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-500">{item.addedTime}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer / Pagination */}
        <div className="w-full flex items-center justify-end px-4 py-2 border-t border-gray-200 bg-[#f9f9f9] text-[12px] text-gray-600">
          <div className="flex items-center gap-2">
            <span>总计 {isList ? MOCK_LIST.length : MOCK_RECORDS.length} 个记录</span>
            <span>分为 1 页</span>
            <span>当前第 1 页，每页</span>
            <select className="border border-gray-300 rounded px-1 min-h-0 h-6 outline-none">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <div className="flex items-center gap-1 ml-2 border-l border-gray-300 pl-3">
              <button className="text-gray-400 hover:text-gray-600">第一页</button>
              <button className="text-gray-400 hover:text-gray-600">上一页</button>
              <button className="text-gray-400 hover:text-gray-600">下一页</button>
              <button className="text-gray-400 hover:text-gray-600">最末页</button>
            </div>
            <select className="border border-gray-300 rounded min-h-0 h-6 outline-none ml-1">
              <option>1</option>
            </select>
          </div>
        </div>

        <div className="w-full text-center py-4 text-[11px] text-gray-400">
          共执行 6 个查询，用时 0.028140 秒，Gzip 已禁用，内存占用 7.162 MB
        </div>
      </div>
    </div>
  );
}

