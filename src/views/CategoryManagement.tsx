import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface CategoryData {
  id: string;
  name: string;
  englishName: string;
  code: string;
  description: string;
  addedTime: string;
  status: string;
}

const MOCK_CATEGORIES: CategoryData[] = [
  { id: '1', name: '工业, 工具类目', englishName: '工业, 工具类目', code: 'G', description: '', addedTime: '2021-01-19 11:12:47', status: '启用' },
  { id: '2', name: '运输包装材料', englishName: '运输包装材料', code: 'Y', description: '', addedTime: '2020-12-09 16:24:52', status: '启用' },
  { id: '3', name: '美妆', englishName: '美妆', code: 'u', description: '', addedTime: '2020-11-02 13:51:23', status: '启用' },
  { id: '4', name: '计算机类配件', englishName: '计算机类配件', code: 'T', description: '', addedTime: '2020-10-10 15:06:17', status: '启用' },
  { id: '5', name: '健康用品', englishName: '健康用品', code: 'S', description: '', addedTime: '2020-10-10 15:06:07', status: '启用' },
  { id: '6', name: '工艺、装饰品', englishName: '工艺、装饰品', code: 'R', description: '', addedTime: '2020-10-10 15:05:59', status: '启用' },
  { id: '7', name: '乐器', englishName: '乐器', code: 'Q', description: '', addedTime: '2020-10-10 15:05:28', status: '启用' },
  { id: '8', name: '宠物用品', englishName: '宠物用品', code: 'P', description: '', addedTime: '2020-10-10 15:05:20', status: '启用' },
  { id: '9', name: '液体、粉末类', englishName: '液体、粉末类', code: 'O', description: '', addedTime: '2020-10-10 15:05:10', status: '启用' },
  { id: '10', name: '食品', englishName: '食品', code: 'N', description: '', addedTime: '2020-10-10 15:05:00', status: '启用' },
];

export function CategoryManagement() {
  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-y-3 bg-[#f5f7fa] p-3 rounded-sm mb-4">
        <div className="flex items-center gap-2 mr-4 min-w-[200px]">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">仓库名称</label>
          <input type="text" className="flex-1 h-7 px-2 border border-gray-300 text-[12px] outline-none focus:border-blue-400" />
        </div>
        <div className="flex items-center gap-2 mr-4">
          <select className="h-7 border border-gray-300 text-[12px] outline-none px-2 bg-white">
            <option>全部状态</option>
            <option>启用</option>
            <option>停用</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm transition-colors flex items-center gap-1">
            <Search size={14} /> 查询
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white h-7 px-4 text-[12px] rounded-sm transition-colors flex items-center gap-1">
            <Plus size={14} /> 新建分类
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-auto border border-gray-200">
        <table className="w-full text-[12px] text-left border-collapse min-w-full">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr>
              <th className="px-3 py-2 border-r border-gray-200 w-20">
                <div className="flex items-center gap-2">
                  <input type="checkbox" /> 序号
                </div>
              </th>
              <th className="px-3 py-2 border-r border-gray-200">分类名称</th>
              <th className="px-3 py-2 border-r border-gray-200">分类英文名称</th>
              <th className="px-3 py-2 border-r border-gray-200">分类编码</th>
              <th className="px-3 py-2 border-r border-gray-200">分类描述</th>
              <th className="px-3 py-2 border-r border-gray-200">添加时间</th>
              <th className="px-3 py-2 border-r border-gray-200">状态</th>
              <th className="px-3 py-2 border-r border-gray-200">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {MOCK_CATEGORIES.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">{item.name}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.englishName}</td>
                <td className="px-3 py-2 border-r border-gray-200">{item.code}</td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-400 italic">
                  {item.description || '-'}
                </td>
                <td className="px-3 py-2 border-r border-gray-200 text-gray-500 whitespace-nowrap">
                  {item.addedTime}
                </td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <span className="px-2 py-0.5 rounded-sm outline outline-1 outline-offset-1 text-[10px] text-green-600 outline-green-200">
                    {item.status}
                  </span>
                </td>
                <td className="px-3 py-2 border-r border-gray-200">
                  <div className="flex gap-4 text-blue-500">
                    <button className="hover:underline flex items-center gap-0.5"><Edit size={12}/>[编辑]</button>
                    <button className="hover:underline flex items-center gap-0.5 text-red-500"><Trash2 size={12}/>[删除]</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination component style match */}
      <div className="mt-4 flex flex-wrap items-center justify-end gap-4 text-[12px] text-gray-500">
        <span>总计 {MOCK_CATEGORIES.length} 个记录分为 1 页当前第 1 页，每页</span>
        <select className="border border-gray-300 p-0.5 outline-none rounded-sm">
          <option>100</option>
          <option>200</option>
        </select>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-gray-100 disabled:opacity-30" disabled>第一页</button>
          <button className="p-1 hover:bg-gray-100 disabled:opacity-30" disabled>上一页</button>
          <button className="p-1 hover:bg-gray-100 disabled:opacity-30" disabled>下一页</button>
          <button className="p-1 hover:bg-gray-100 disabled:opacity-30" disabled>最末页</button>
        </div>
        <select className="border border-gray-300 p-0.5 outline-none rounded-sm">
          <option>1</option>
        </select>
      </div>

      {/* Footer Info */}
      <div className="mt-8 text-center text-[10px] text-gray-400">
        共执行 1 个查询，用时 {Math.random().toFixed(6)} 秒，Gzip 已禁用，内存占用 { (4 + Math.random()).toFixed(3) } MB
      </div>
    </div>
  );
}
