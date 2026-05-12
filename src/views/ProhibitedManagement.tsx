import React from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProhibitedItemData {
  id: string;
  name: string;
  description: string;
  addedTime: string;
  status: string;
}

const MOCK_DATA: ProhibitedItemData[] = [
  { 
    id: '1', 
    name: '电池或含有电池类产品', 
    description: '1、纯锂金属电池（功率<100WH） 2、铅酸电池及其他种类的大功率电池（>100WH），或包含、配有此类电池的商品。', 
    addedTime: '2019-08-23 14:07:01', 
    status: '启用' 
  },
  { 
    id: '2', 
    name: '品牌及反倾销', 
    description: '1、受制裁的国家、组织生产的商品以及带有该国、组织的旗帜、logo等产品', 
    addedTime: '2019-08-23 14:04:46', 
    status: '启用' 
  },
  { 
    id: '3', 
    name: '涉医疗器械, 人身安全类或能源保护类商品', 
    description: '1、医疗器械商品。如计生用品, 含灸捧注时, 急救包等；2、玻璃制品：3、压片机；4、各类刀具。如匕首、折叠刀、蝴蝶刀、沟槽刀、弹片刀、刀片、推刀等；5、每公斤钱箱超过含90毫克铅的钱箱；6、成人玩具（需具有SAA认证才可承运）；7、放射性物质、核物质；8、鸦片、吗啡、海洛因、大麻以及其他能使人成瘾的毒品或者麻醉品、精神药物；以及有碍人畜健康的、来自疫区的以及其他能传播疾病的食品、药品或者其物品；9、各类未经加工、或未脱脂的动物骨头、犀牛角、豹骨、鸦片、四氧化碳、CFC-113；10、', 
    addedTime: '2019-08-23 14:02:00', 
    status: '启用' 
  },
  { 
    id: '4', 
    name: '贵重物品', 
    description: '1、贵金属及其制品，如镀金镀银的普珍类产品；2、钻石；3、无法估价，或是价值超过10000美金的艺术品、古董；4、货币、邮票（仅含有收藏通道）、信用卡、有价凭证（如海运提单）；', 
    addedTime: '2019-08-23 13:42:44', 
    status: '启用' 
  },
  { 
    id: '5', 
    name: '文化及贵重品类', 
    description: '1、对中国政治、经济、文化、道德有害的印刷品、胶卷、照片、唱片、录音带、录像带、光碟、计算机存储介质及其他物品；政治宣传品；2、色情、宣扬封建迷信或凶杀、暴力的产品；3、令人感到不适、恐惧、不安，或涉及到种族主义的产品。如倾向种族歧视，或人体组织模型。图像；4、没取得刊登编号的各类刊物，如光盘、书籍、画报、产品说明书等；5、常规的文化遗产；6、文物及其商品，宗教产品。如佛像，图腾等；7、绘画，直接用颜料，或涂料人工绘制在画纸、画布，或其他介质上的产品；8、前他不符合我国相关法', 
    addedTime: '2019-08-23 11:45:03', 
    status: '启用' 
  },
];

export function ProhibitedManagement() {
  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 animate-in fade-in duration-500 w-full min-h-[600px]">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-y-3 bg-[#f5f7fa] p-3 rounded-sm mb-4">
        <div className="flex items-center gap-2 mr-4 min-w-[200px]">
          <label className="text-[12px] text-gray-600 whitespace-nowrap">分类中文名称</label>
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
            <Plus size={14} /> 新建禁运品
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-auto border border-gray-200">
        <table className="w-full text-[12px] text-left border-collapse min-w-[1200px]">
          <thead className="bg-[#f5f7fa] text-gray-600 font-medium">
            <tr>
              <th className="px-3 py-2 border-r border-gray-200 w-20">
                <div className="flex items-center gap-2 justify-center">
                  <input type="checkbox" /> 查询
                </div>
              </th>
              <th className="px-3 py-2 border-r border-gray-200 w-64">禁运品名称</th>
              <th className="px-3 py-2 border-r border-gray-200">禁运说明</th>
              <th className="px-3 py-2 border-r border-gray-200 w-48">添加时间</th>
              <th className="px-3 py-2 border-r border-gray-200 w-24">状态</th>
              <th className="px-3 py-2 w-24 border-r border-gray-200">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {MOCK_DATA.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 border-r border-gray-200 py-2">
                  <div className="flex items-center gap-2 justify-center">
                    <input type="checkbox" /> {index + 1}
                  </div>
                </td>
                <td className="px-3 py-4 border-r border-gray-200 text-gray-700 py-2">{item.name}</td>
                <td className="px-4 py-4 border-r border-gray-200 text-gray-500 leading-relaxed max-w-xl px-3 py-2">
                  {item.description}
                </td>
                <td className="px-3 py-4 border-r border-gray-200 text-gray-500 whitespace-nowrap py-2">
                  {item.addedTime}
                </td>
                <td className="px-3 py-4 border-r border-gray-200 py-2">
                  <span className="px-2 py-0.5 rounded-sm outline outline-1 outline-offset-1 text-[10px] text-green-600 outline-green-200">
                    {item.status}
                  </span>
                </td>
                <td className="px-3 py-4 py-2 border-r border-gray-200">
                  <div className="flex justify-center gap-2 text-blue-500">
                    <button className="hover:underline">[编辑]</button>
                    <button className="hover:underline text-red-500">[删除]</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination component style match */}
      <div className="mt-4 flex flex-wrap items-center justify-end gap-4 text-[12px] text-gray-500">
        <span>总计 {MOCK_DATA.length} 个记录分为 1 页当前第 1 页，每页</span>
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
        共执行 4 个查询，用时 {Math.random().toFixed(6)} 秒，Gzip 已禁用，内存占用 { (4 + Math.random()).toFixed(3) } MB
      </div>
    </div>
  );
}
