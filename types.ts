
export type AppView = 
  | 'Dashboard' 
  | 'Accounts' 
  | 'ClientDetails' 
  | 'PopWiseClients' 
  | 'MonthlySales' 
  | 'Invoices' 
  | 'SalesAnalytics' 
  | 'SMSAndCall' 
  | 'SelfRecharge' 
  | 'ClientManagement' 
  | 'PPPoEManagement' 
  | 'HotspotManagement' 
  | 'CardManagement'
  | 'CardGeneratorExcel'
  | 'AllCardsList'
  | 'CardReport'
  | 'CardReportDateWise'
  | 'Ticketing'
  | 'NetworkDiagram'
  | 'MyPackagePlan'
  | 'TrafficMonitor'
  | 'ServerWatcher'
  | 'DeviceWatcher'
  | 'ManageUsers'
  | 'ServerMikrotik'
  | 'UpdateServerInfo'
  | 'MikrotikConfig'
  | 'PackagePlanConfig'
  | 'PlanCreate'
  | 'PlanEdit'
  | 'ZoneConfig'
  | 'SetupConfig'
  | 'UpdateClientInfo'
  | 'ClientRenew'
  | 'MyProfile'
  | 'PasswordChange'
  | 'UserPermissions'
  | 'PackagePlanPermission'
  | 'ZonePermission'
  | 'UpdateUserInfo'; // New View for editing system users

export type AccountsFilter = 'All' | 'Active' | 'Today' | 'Expired' | 'Expire3Days' | 'Expire7Days' | 'ExpiredToday' | 'ExpiredYesterday' | 'Suspend' | 'Left';

export interface ThemeConfig {
  colorScheme: 'light' | 'dark';
  width: 'fluid' | 'boxed';
  sidebarPosition: 'fixed' | 'scrollable';
  sidebarColor: 'light' | 'dark' | 'brand' | 'gradient';
  sidebarSize: 'default' | 'condensed' | 'compact';
  topbarColor: 'light' | 'dark';
  sidebarUserInfo: boolean;
}

export interface Client {
  id: string;
  clientId: string;
  name: string;
  mobile: string;
  package: string;
  protocol: 'hotspot' | 'pppoe';
  bill: number;
  balance: number;
  expDate: string;
  lastPayDate: string;
  status: 'Expired' | 'Paid' | 'Suspend' | 'Left';
  popName?: string;
}
