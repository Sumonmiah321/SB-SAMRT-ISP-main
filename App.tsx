
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/Dashboard';
import { ClientList } from './components/ClientList';
import { ClientDetails } from './components/ClientDetails';
import { PopWiseClients } from './components/PopWiseClients';
import { MonthlySales } from './components/MonthlySales';
import { Invoices } from './components/Invoices';
import { SalesAnalytics } from './components/SalesAnalytics';
import { SMSAndCall } from './components/SMSAndCall';
import { SelfRecharge } from './components/SelfRecharge';
import { ClientManagement } from './components/ClientManagement';
import { PPPoEManagement } from './components/PPPoEManagement';
import { HotspotManagement } from './components/HotspotManagement';
import { CardManagement } from './components/CardManagement';
import { CardGeneratorExcel } from './components/CardGeneratorExcel';
import { AllCardsList } from './components/AllCardsList';
import { CardReport } from './components/CardReport';
import { CardReportDateWise } from './components/CardReportDateWise';
import { ManageUsers } from './components/ManageUsers';
import { UserPermissions } from './components/UserPermissions';
import { PackagePlanPermission } from './components/PackagePlanPermission';
import { ZonePermission } from './components/ZonePermission';
import { UpdateUserInfo } from './components/UpdateUserInfo';
import { MikrotikConfig, PackagePlanConfig, ZoneConfig, SetupConfig } from './components/ConfigManagement';
import { PlanCreate } from './components/PlanCreate';
import { PlanEdit } from './components/PlanEdit';
import { ServerMikrotik } from './components/ServerMikrotik';
import { UpdateServerInfo } from './components/UpdateServerInfo';
import { UpdateClientInfo } from './components/UpdateClientInfo';
import { ClientRenew } from './components/ClientRenew';
import { Ticketing } from './components/Ticketing';
import { NetworkDiagramList } from './components/NetworkDiagramList';
import { MyPackagePlan } from './components/MyPackagePlan';
import { TrafficMonitor } from './components/TrafficMonitor';
import { DeviceWatcher } from './components/DeviceWatcher';
import { ServerWatcher } from './components/ServerWatcher';
import { MyProfile } from './components/MyProfile';
import { PasswordChange } from './components/PasswordChange';
import { ThemeDrawer } from './components/ThemeDrawer';
import { AppView, ThemeConfig, AccountsFilter } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>('Dashboard');
  const [accountsFilter, setAccountsFilter] = useState<AccountsFilter>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isThemeDrawerOpen, setIsThemeDrawerOpen] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [targetUserEmail, setTargetUserEmail] = useState<string | null>(null);
  const [targetUserName, setTargetUserName] = useState<string | null>(null);
  
  // Sub-tab states
  const [clientSubTab, setClientSubTab] = useState<'create' | 'search' | 'migrate'>('create');
  const [pppoeSubTab, setPppoeSubTab] = useState<'all' | 'active' | 'traffic'>('all');
  const [hotspotSubTab, setHotspotSubTab] = useState<'all' | 'active' | 'log'>('all');
  const [cardSubTab, setCardSubTab] = useState<'search' | 'generator' | 'print'>('search');
  const [smsSubTab, setSmsSubTab] = useState<'send' | 'history' | 'api'>('history');

  const [theme, setTheme] = useState<ThemeConfig>({
    colorScheme: 'dark',
    width: 'fluid',
    sidebarPosition: 'fixed',
    sidebarColor: 'dark',
    sidebarSize: 'default',
    topbarColor: 'dark',
    sidebarUserInfo: true,
  });

  const handleViewDetails = (id: string) => {
    setSelectedClientId(id);
    setActiveView('ClientDetails');
  };

  const handleRenewPlan = (id: string) => {
    setSelectedClientId(id);
    setActiveView('ClientRenew');
  };

  const handleEditClient = (id: string) => {
    setSelectedClientId(id);
    setActiveView('UpdateClientInfo');
  };

  const handleEditServer = (id: string) => {
    setSelectedServerId(id);
    setActiveView('UpdateServerInfo');
  };

  const handleEditPlan = (id: string) => {
    setSelectedPlanId(id);
    setActiveView('PlanEdit');
  };

  const handleManagePermissions = (email: string) => {
    setTargetUserEmail(email);
    setActiveView('UserPermissions');
  };

  const handlePackagePlanPermission = (email: string) => {
    setTargetUserEmail(email);
    setActiveView('PackagePlanPermission');
  };

  const handleZonePermission = (name: string) => {
    setTargetUserName(name);
    setActiveView('ZonePermission');
  };

  const handleUpdateUserInfo = (email: string) => {
    setTargetUserEmail(email);
    setActiveView('UpdateUserInfo');
  };

  const handleNavigate = (view: AppView, filter: AccountsFilter = 'All', subTab: any = null) => {
    setActiveView(view);
    setAccountsFilter(filter);
    
    if (view === 'ClientManagement' && subTab) {
        if (subTab === 'create') setActiveView('UpdateClientInfo');
        else setClientSubTab(subTab);
    }
    if (view === 'PPPoEManagement' && subTab) setPppoeSubTab(subTab);
    if (view === 'HotspotManagement' && subTab) setHotspotSubTab(subTab);
    if (view === 'SMSAndCall' && subTab) setSmsSubTab(subTab);
    if (view === 'CardManagement' && subTab) {
        if (subTab === 'excel') setActiveView('CardGeneratorExcel');
        else if (subTab === 'all-list') setActiveView('AllCardsList');
        else if (subTab === 'report') setActiveView('CardReport');
        else if (subTab === 'report-date-wise') setActiveView('CardReportDateWise');
        else setCardSubTab(subTab);
    }

    if (view !== 'ClientDetails' && view !== 'ClientRenew' && view !== 'UpdateClientInfo') setSelectedClientId(null);
    if (view !== 'UpdateServerInfo') setSelectedServerId(null);
    if (view !== 'PlanEdit') setSelectedPlanId(null);
    if (view !== 'UserPermissions' && view !== 'PackagePlanPermission' && view !== 'UpdateUserInfo') setTargetUserEmail(null);
    if (view !== 'ZonePermission') setTargetUserName(null);
  };

  const renderView = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard onViewDetails={handleViewDetails} onNavigate={handleNavigate} />;
      case 'Accounts':
        return <ClientList onViewDetails={handleViewDetails} onEditClient={handleEditClient} initialFilterMode={accountsFilter} />;
      case 'PopWiseClients':
        return <PopWiseClients onViewDetails={handleViewDetails} />;
      case 'MonthlySales':
        return <MonthlySales />;
      case 'Invoices':
        return <Invoices onViewDetails={handleViewDetails} />;
      case 'SalesAnalytics':
        return <SalesAnalytics />;
      case 'SMSAndCall':
        return <SMSAndCall activeTab={smsSubTab} />;
      case 'SelfRecharge':
        return <SelfRecharge />;
      case 'ClientManagement':
        return <ClientManagement activeTab={clientSubTab} />;
      case 'UpdateClientInfo':
        return <UpdateClientInfo id={selectedClientId} onBack={() => selectedClientId ? setActiveView('ClientDetails') : setActiveView('Accounts')} />;
      case 'UpdateServerInfo':
        return <UpdateServerInfo id={selectedServerId || ''} onBack={() => setActiveView('ServerMikrotik')} />;
      case 'ClientRenew':
        return (
          <ClientRenew 
            id={selectedClientId || '506282'} 
            onBack={() => setActiveView('ClientDetails')} 
          />
        );
      case 'PPPoEManagement':
        return <PPPoEManagement activeTab={pppoeSubTab} onViewDetails={handleViewDetails} />;
      case 'HotspotManagement':
        return <HotspotManagement activeTab={hotspotSubTab} onViewDetails={handleViewDetails} />;
      case 'CardManagement':
        return <CardManagement activeTab={cardSubTab} />;
      case 'CardGeneratorExcel':
        return <CardGeneratorExcel />;
      case 'AllCardsList':
        return <AllCardsList />;
      case 'CardReport':
        return <CardReport />;
      case 'CardReportDateWise':
        return <CardReportDateWise />;
      case 'ManageUsers':
        return (
          <ManageUsers 
            onEditPermission={handleManagePermissions} 
            onPlanPermission={handlePackagePlanPermission}
            onZonePermission={handleZonePermission} 
            onEditUserInfo={handleUpdateUserInfo}
          />
        );
      case 'UserPermissions':
        return <UserPermissions email={targetUserEmail || 'mdsumon12300@gmail.com'} onBack={() => setActiveView('ManageUsers')} />;
      case 'PackagePlanPermission':
        return <PackagePlanPermission email={targetUserEmail || 'mdsumon12300@gmail.com'} onBack={() => setActiveView('ManageUsers')} />;
      case 'ZonePermission':
        return <ZonePermission userName={targetUserName || 'Sb Wifi Zone'} onBack={() => setActiveView('ManageUsers')} />;
      case 'UpdateUserInfo':
        return <UpdateUserInfo email={targetUserEmail || 'mdsumon12300@gmail.com'} onBack={() => setActiveView('ManageUsers')} />;
      case 'ServerMikrotik':
        return <ServerMikrotik onEditServer={handleEditServer} />;
      case 'MikrotikConfig':
        return <MikrotikConfig />;
      case 'PackagePlanConfig':
        return <PackagePlanConfig onAddPlan={() => setActiveView('PlanCreate')} onEditPlan={handleEditPlan} />;
      case 'PlanCreate':
        return <PlanCreate onBack={() => setActiveView('PackagePlanConfig')} />;
      case 'PlanEdit':
        return <PlanEdit planId={selectedPlanId || ''} onBack={() => setActiveView('PackagePlanConfig')} />;
      case 'ZoneConfig':
        return <ZoneConfig />;
      case 'SetupConfig':
        return <SetupConfig />;
      case 'Ticketing':
        return <Ticketing />;
      case 'NetworkDiagram':
        return <NetworkDiagramList />;
      case 'MyPackagePlan':
        return <MyPackagePlan />;
      case 'TrafficMonitor':
        return <TrafficMonitor />;
      case 'ServerWatcher':
        return <ServerWatcher />;
      case 'DeviceWatcher':
        return <DeviceWatcher />;
      case 'MyProfile':
        return <MyProfile onBack={() => setActiveView('Dashboard')} />;
      case 'PasswordChange':
        return <PasswordChange onBack={() => setActiveView('Dashboard')} />;
      case 'ClientDetails':
        return (
          <ClientDetails 
            id={selectedClientId || '506282'} 
            onBack={() => setActiveView('Accounts')} 
            onRenew={() => handleRenewPlan(selectedClientId || '506282')}
            onEdit={() => handleEditClient(selectedClientId || '506282')}
          />
        );
      default:
        return <Dashboard onViewDetails={handleViewDetails} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`flex min-h-screen ${theme.colorScheme === 'dark' ? 'bg-slate-900 text-white' : 'bg-[#f4f7fa] text-slate-700'}`}>
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeView={activeView} 
        currentFilter={accountsFilter}
        onNavigate={handleNavigate} 
        theme={theme}
      />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'}`}>
        <TopBar 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          onOpenThemeSettings={() => setIsThemeDrawerOpen(true)}
          theme={theme}
          activeView={activeView}
          onNavigate={handleNavigate}
          onViewDetails={handleViewDetails}
        />
        <main className={`p-6 flex-1 ${theme.width === 'boxed' ? 'max-w-6xl mx-auto w-full' : ''}`}>
          {renderView()}
        </main>
      </div>
      <ThemeDrawer 
        isOpen={isThemeDrawerOpen} 
        onClose={() => setIsThemeDrawerOpen(false)} 
        config={theme} 
        onChange={setTheme} 
      />
    </div>
  );
};

export default App;
