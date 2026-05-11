/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { StatCards } from './components/StatCards';
import { ActionSection } from './components/ActionSection';
import { DashboardContent } from './components/DashboardContent';
import { MaterialAdd } from './views/MaterialAdd';
import { AddProductSingle } from './views/AddProductSingle';
import { BulkImportProduct } from './views/BulkImportProduct';
import { ProductManagement } from './views/ProductManagement';
import { DistributionManagement } from './views/DistributionManagement';
import { CategoryManagement } from './views/CategoryManagement';
import { ProhibitedManagement } from './views/ProhibitedManagement';
import { HSCodeManagement } from './views/HSCodeManagement';
import { AddOrder } from './views/AddOrder';
import { OrderList } from './views/OrderList';
import { PendingConfirmationOrders } from './views/PendingConfirmationOrders';
import { OverseasPendingInWarehouse } from './views/OverseasPendingInWarehouse';
import { OverseasInWarehouse } from './views/OverseasInWarehouse';
import { ConfirmationFailedOrders } from './views/ConfirmationFailedOrders';
import { OrderRecycleBin } from './views/OrderRecycleBin';
import { AddReturnOrder } from './views/AddReturnOrder';
import { AddDropshipOrder } from './views/AddDropshipOrder';
import { ReturnOrderList } from './views/ReturnOrderList';
import { ReturnPendingConfirmation } from './views/ReturnPendingConfirmation';
import { ReturnOverseasPendingInWarehouse } from './views/ReturnOverseasPendingInWarehouse';
import { ReturnOverseasInWarehouse } from './views/ReturnOverseasInWarehouse';
import { ReturnConfirmationFailed } from './views/ReturnConfirmationFailed';
import { ReturnOrderRecycleBin } from './views/ReturnOrderRecycleBin';
import { DropshipOrderList } from './views/DropshipOrderList';
import { TrackManagement } from './views/TrackManagement';
import { InventoryManagement } from './views/InventoryManagement';
import { MaterialManagement } from './views/MaterialManagement';
import { AnonList } from './views/AnonList';
import { DropshipPendingShelf } from './views/DropshipPendingShelf';
import { TransitPendingShelf } from './views/TransitPendingShelf';
import { InboundReport } from './views/InboundReport';
import { OutboundReport } from './views/OutboundReport';
import { SkuInOutReport } from './views/SkuInOutReport';
import { SortingPortManagement } from './views/SortingPortManagement';
import { SortingFlow } from './views/SortingFlow';
import { SortingStatus } from './views/SortingStatus';
import { WarehouseListConfig } from './views/WarehouseListConfig';
import { FBAWarehouse } from './views/FBAWarehouse';
import { ShelfAdd } from './views/ShelfAdd';
import { ShelfMgmt } from './views/ShelfMgmt';
import { WhUsageRate } from './views/WhUsageRate';
import { ShelfVacancyRate } from './views/ShelfVacancyRate';
import { ChevronRight, Home } from 'lucide-react';

export default function App() {
  const [activeModuleId, setActiveModuleId] = React.useState('nebula');
  const [activeItemId, setActiveItemId] = React.useState('product-list');

  return (
    <div className="flex h-screen overflow-hidden bg-[#f0f2f5]">
      {/* Sidebar - depends on active module */}
      <Sidebar 
        activeModuleId={activeModuleId} 
        activeItemId={activeItemId} 
        setActiveItemId={setActiveItemId} 
      />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Navigation */}
        <TopNav activeModuleId={activeModuleId} setActiveModuleId={setActiveModuleId} />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Sub-header / Breadcrumb row */}
          <div className="h-10 bg-white border-b border-gray-100 flex items-center px-4 gap-2 text-xs text-gray-400">
            <div className="w-1.5 h-full bg-blue-500 mr-2"></div>
            <Home size={12} className="text-gray-400" />
            <ChevronRight size={10} />
            <span className="text-gray-600 font-medium">首页</span>
            {activeItemId !== 'product-list' && (
              <>
                <ChevronRight size={10} />
                <span className="text-gray-400 lowercase">{activeItemId.replace(/-/g, ' ')}</span>
              </>
            )}
          </div>

          {/* Actual Dashboard Body */}
          <div className="p-4 w-full">
            {activeItemId === 'single-add' ? (
              <AddProductSingle />
            ) : activeItemId === 'material-add' ? (
              <MaterialAdd />
            ) : activeItemId === 'bulk-import' ? (
              <BulkImportProduct />
            ) : ['pending-review', 'product-list', 'disabled-products', 'rejected-products'].includes(activeItemId) ? (
              <ProductManagement mode={activeItemId as any} />
            ) : ['pending-dist', 'dist-list', 'dist-apply'].includes(activeItemId) ? (
              <DistributionManagement mode={activeItemId as any} />
            ) : activeItemId === 'category-management' ? (
              <CategoryManagement />
            ) : activeItemId === 'prohibited-items' ? (
              <ProhibitedManagement />
            ) : activeItemId === 'hs-codes' ? (
              <HSCodeManagement />
            ) : activeItemId === 'order-add' ? (
              <AddOrder />
            ) : activeItemId === 'all-orders' ? (
              <OrderList />
            ) : activeItemId === 'pending-confirm' ? (
              <PendingConfirmationOrders />
            ) : activeItemId === 'pending-warehouse' ? (
              <OverseasPendingInWarehouse />
            ) : activeItemId === 'in-warehouse' ? (
              <OverseasInWarehouse />
            ) : activeItemId === 'failed-confirm' ? (
              <ConfirmationFailedOrders />
            ) : activeItemId === 'order-recycle' ? (
              <OrderRecycleBin />
            ) : activeItemId === 'return-order-add' ? (
              <AddReturnOrder />
            ) : activeItemId === 'add-dropship-order' ? (
              <AddDropshipOrder />
            ) : activeItemId === 'return-order-list' ? (
              <ReturnOrderList />
            ) : activeItemId === 'ret-pending' ? (
              <ReturnPendingConfirmation />
            ) : activeItemId === 'ret-wh-pending' ? (
              <ReturnOverseasPendingInWarehouse />
            ) : activeItemId === 'ret-wh-done' ? (
              <ReturnOverseasInWarehouse />
            ) : activeItemId === 'ret-failed' ? (
              <ReturnConfirmationFailed />
            ) : activeItemId === 'ret-recycle' ? (
              <ReturnOrderRecycleBin />
            ) : ['ds-all', 'ds-pending', 'ds-pack', 'ds-oos', 'ds-ship', 'ds-waiting', 'ds-signed', 'ds-deleted'].includes(activeItemId) ? (
              <DropshipOrderList mode={activeItemId as any} />
            ) : ['track-rules', 'track-orders', 'track-sign', 'track-delivery-err', 'track-timeout-err', 'track-analysis'].includes(activeItemId) ? (
              <TrackManagement mode={activeItemId as any} />
            ) : ['inv-query', 'owner-dist-inv', 'cust-dist-inv', 'inv-query-combo', 'inv-age-analysis', 'inv-detail', 'inv-warning', 'inv-transit', 'inv-history-shelf', 'pending-off-shelf', 'done-off-shelf'].includes(activeItemId) ? (
              <InventoryManagement mode={activeItemId as any} />
            ) : activeItemId === 'ds-pending-shelf' ? (
              <DropshipPendingShelf />
            ) : activeItemId === 'transit-pending-shelf' ? (
              <TransitPendingShelf />
            ) : activeItemId === 'wh-in-report' ? (
              <InboundReport />
            ) : activeItemId === 'wh-out-report' ? (
              <OutboundReport />
            ) : activeItemId === 'sku-io-report' ? (
              <SkuInOutReport />
            ) : activeItemId === 'sorting-ports' ? (
              <SortingPortManagement />
            ) : activeItemId === 'sorting-flow' ? (
              <SortingFlow />
            ) : activeItemId === 'sorting-status' ? (
              <SortingStatus />
            ) : activeItemId === 'wh-list-config' ? (
              <WarehouseListConfig />
            ) : activeItemId === 'fba-wh' ? (
              <FBAWarehouse />
            ) : activeItemId === 'shelf-add' ? (
              <ShelfAdd />
            ) : activeItemId === 'shelf-mgmt' ? (
              <ShelfMgmt />
            ) : activeItemId === 'wh-usage-rate' ? (
              <WhUsageRate />
            ) : activeItemId === 'shelf-vacancy-rate' ? (
              <ShelfVacancyRate />
            ) : ['material-list', 'material-record'].includes(activeItemId) ? (
              <MaterialManagement mode={activeItemId as any} />
            ) : activeItemId === 'orders-anon-list' ? (
              <AnonList />
            ) : (
              <>
                {/* Row 1: KPI Stat Cards */}
                <StatCards />

                {/* Row 2: Search & Quick Actions */}
                <ActionSection />

                {/* Row 3 & 4: Charts, Status & Work Order List */}
                <DashboardContent />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
