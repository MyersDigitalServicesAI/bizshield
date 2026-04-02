import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  HardDrive, 
  BrainCircuit, 
  TrendingUp, 
  Receipt,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { RiskScoreWidget } from '../dashboard/RiskScoreWidget';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Compliance', path: '/compliance', icon: ShieldCheck },
  { name: 'Vault (Backups)', path: '/vault', icon: HardDrive },
  { name: 'AI Governance', path: '/ai-governance', icon: BrainCircuit },
  { name: 'Productivity', path: '/productivity', icon: TrendingUp },
  { name: 'Expenses', path: '/expenses', icon: Receipt },
];

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">BizShield OS</span>
        </div>
        
        <div className="px-4 pb-4">
          <RiskScoreWidget score={85} className="w-full shadow-none bg-slate-50 border-slate-100" />
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-slate-100 text-slate-900" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 space-y-1">
          <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 flex-shrink-0">
          <h1 className="text-lg font-semibold">Workspace Overview</h1>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
