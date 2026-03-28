
import React from 'react';
import { 
  LayoutGrid, 
  Receipt, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  RefreshCcw, 
  Users, 
  Globe, 
  Wifi, 
  CreditCard, 
  Settings, 
  HelpCircle,
  Network,
  Box,
  Monitor,
  Eye,
  ShoppingCart
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
  {
    category: '', // Removed NAVIGATION category header to match screenshot
    items: [
      { name: 'Dashboard', icon: <LayoutGrid size={20} strokeWidth={2.5} />, path: 'Dashboard' },
      { 
        name: 'Billing', 
        icon: <Receipt size={20} strokeWidth={2.5} />, 
        subItems: [
          'All Accounts', 
          'Active Accounts', 
          'Todays Client', 
          'Expired Accounts', 
          'Today\'s Expired', 
          'Yesterday\'s Expired',
          'Expire In 3 Days', 
          'Expire In 7 Days',
          'Suspend Accounts',
          'Left Accounts'
        ] 
      },
      { name: 'Reports', icon: <FileText size={20} strokeWidth={2.5} />, subItems: ['POP Wise Clients', 'Monthly Sales', 'Invoices'] },
      { name: 'Analytics', icon: <BarChart3 size={20} strokeWidth={2.5} />, subItems: ['Sales Analytics'] },
      { name: 'SMS & Call', icon: <MessageSquare size={20} strokeWidth={2.5} />, isNew: true, subItems: ['Send Bulk SMS', 'SMS History', 'API Configuration'] },
      { name: 'Self Recharge', icon: <RefreshCcw size={20} strokeWidth={2.5} /> },
    ]
  },
  {
    category: 'CLIENT',
    items: [
      { name: 'Client', icon: <Users size={20} strokeWidth={2.5} />, subItems: ['Create New', 'Client Search', 'Plan Migration'] },
      { name: 'PPPoE', icon: <Globe size={20} strokeWidth={2.5} />, subItems: ['All Users', 'Active Users', 'User Traffic'] },
      { name: 'Hotspot', icon: <Wifi size={20} strokeWidth={2.5} />, subItems: ['All Users', 'Active Users', 'Log'] },
    ]
  },
  {
    category: 'CARD',
    items: [
      { name: 'Card', icon: <CreditCard size={20} strokeWidth={2.5} />, subItems: ['Card Search', 'All Cards List', 'Card Report', 'Card Report Date Wise', 'Card Generator', 'Card Generator Excel', 'Card Print'] },
    ]
  },
  {
    category: 'OTHERS',
    items: [
      { name: 'Ticketing', icon: <HelpCircle size={20} strokeWidth={2.5} />, isNew: true },
      { name: 'Network Diagram', icon: <Network size={20} strokeWidth={2.5} /> },
      { name: 'My Package Plan', icon: <Box size={20} strokeWidth={2.5} /> },
      { name: 'Traffic Monitor', icon: <Monitor size={20} strokeWidth={2.5} /> },
      { name: 'Server Watcher', icon: <Eye size={20} strokeWidth={2.5} /> },
      { name: 'Device Watcher', icon: <Monitor size={20} strokeWidth={2.5} /> },
    ]
  },
  {
    category: 'CONFIGURATION',
    items: [
      { name: 'Manage Users', icon: <Users size={20} strokeWidth={2.5} /> },
      { name: 'Config', icon: <Settings size={20} strokeWidth={2.5} />, subItems: ['Mikrotik', 'Package Plan', 'Zone', 'Setup'] },
      { name: 'Instant Pay', icon: <ShoppingCart size={20} strokeWidth={2.5} /> },
    ]
  }
];

// Helper for dynamic dates
const getTodayDate = () => {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getFullYear()).slice(-2)}`;
};

export const MOCK_CLIENTS: any[] = [
  { id: '506282', clientId: '0599552535', name: 'Ahmed Shadi', mobile: '0599552535', package: '15Days', protocol: 'hotspot', bill: 15, balance: 0, expDate: '18/10/25 22:20', lastPayDate: '04/09/25', status: 'Expired', popName: 'Main Zone' },
  { id: '533797', clientId: '0553490924', name: 'Arman', mobile: '0553490924', package: '30Days', protocol: 'hotspot', bill: 30, balance: 0, expDate: '21/01/26 22:24', lastPayDate: '22/12/25', status: 'Expired', popName: 'Main Zone' },
  { id: '533800', clientId: '0557281610', name: 'Hamza Khan', mobile: '0557281610', package: '30Days', protocol: 'hotspot', bill: 30, balance: 0, expDate: '21/01/26 22:26', lastPayDate: '22/12/25', status: 'Expired', popName: 'North POP' },
  { id: '491709', clientId: '0572064541', name: 'Shitha', mobile: '0572064541', package: '15Days', protocol: 'hotspot', bill: 15, balance: 0, expDate: '21/01/26 23:07', lastPayDate: '06/01/26', status: 'Expired', popName: 'East Side' },
  { id: '534913', clientId: '0504375198', name: 'Elias (Today)', mobile: '0504375198', package: '15Days', protocol: 'hotspot', bill: 15, balance: 0, expDate: '27/01/26 23:08', lastPayDate: getTodayDate(), status: 'Paid', popName: 'Main Zone' },
  { id: '534905', clientId: '0544874847', name: 'Eshuf (Today)', mobile: '0544874847', package: '30Days', protocol: 'hotspot', bill: 30, balance: 0, expDate: '27/01/26 23:35', lastPayDate: getTodayDate(), status: 'Paid', popName: 'North POP' },
  { id: '534906', clientId: '0534981833', name: 'Bakker', mobile: '0534981833', package: '15Days', protocol: 'hotspot', bill: 15, balance: 0, expDate: '29-01-26 17:53', lastPayDate: '14/01/26', status: 'Paid', popName: 'East Side' },
  { id: '534907', clientId: 'Hplaptop', name: 'Laptop User', mobile: '0559900223', package: '90Days', protocol: 'pppoe', bill: 180, balance: 0, expDate: '30-01-26 02:12', lastPayDate: '01/11/25', status: 'Paid', popName: 'Main Zone' },
  { id: '534908', clientId: '0538370307', name: 'Karim', mobile: '0538370307', package: '15Days', protocol: 'hotspot', bill: 15, balance: 0, expDate: '25/01/26 10:00', lastPayDate: '10/01/26', status: 'Paid', popName: 'North POP' },
  { id: '534909', clientId: '0572508371', name: 'Rahim', mobile: '0572508371', package: '15Days', protocol: 'hotspot', bill: 15, balance: 0, expDate: '25/01/26 11:00', lastPayDate: '10/01/26', status: 'Paid', popName: 'East Side' },
  { id: '534910', clientId: '0571222920', name: 'Jabbar', mobile: '0571222920', package: '15Days', protocol: 'hotspot', bill: 15, balance: 0, expDate: '25/01/26 12:00', lastPayDate: '10/01/26', status: 'Paid', popName: 'North POP' },
  { id: '533911', clientId: '0539579168', name: 'Selim', mobile: '0539579168', package: '15Days', protocol: 'hotspot', bill: 15, balance: 0, expDate: '25/01/26 13:00', lastPayDate: '10/01/26', status: 'Paid', popName: 'Main Zone' },
  // New statuses for testing
  { id: '534920', clientId: '0598765432', name: 'Suspended User', mobile: '0598765432', package: '30Days', protocol: 'hotspot', bill: 30, balance: 0, expDate: '10/01/26', lastPayDate: '10/12/25', status: 'Suspend', popName: 'Main Zone' },
  { id: '534921', clientId: '0591234567', name: 'Left User', mobile: '0591234567', package: '15Days', protocol: 'hotspot', bill: 15, balance: 0, expDate: '01/01/26', lastPayDate: '15/12/25', status: 'Left', popName: 'East Side' },
];

export const MOCK_INVOICES = [
  { inv: '2368841', user: '0538370307', amount: '15' },
  { inv: '2368839', user: '0572508371', amount: '15' },
  { inv: '2368779', user: '0571222920', amount: '15' },
  { inv: '2368707', user: '0539579168', amount: '15' },
  { inv: '2368655', user: '0599552535', amount: '15' },
  { inv: '2368612', user: '0553490924', amount: '30' },
  { inv: '2368599', user: '0557281610', amount: '30' },
  { inv: '2368580', user: '0572064541', amount: '15' },
];
