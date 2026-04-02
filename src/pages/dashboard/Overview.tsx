import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge, Progress } from '@/src/components/ui';
import { ShieldCheck, HardDrive, BrainCircuit, TrendingUp, Receipt, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/src/lib/utils';

const riskData = [
  { name: 'Jan', score: 65 },
  { name: 'Feb', score: 70 },
  { name: 'Mar', score: 68 },
  { name: 'Apr', score: 75 },
  { name: 'May', score: 82 },
  { name: 'Jun', score: 85 },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-slate-500">Your company's unified security and operations overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
            <ShieldCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-slate-500 mt-1">SOC2 & HIPAA Ready</p>
            <Progress value={92} className="mt-3" indicatorClassName="bg-green-500" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vault Backups</CardTitle>
            <HardDrive className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Healthy</div>
            <p className="text-xs text-slate-500 mt-1">Last backup 2 hours ago</p>
            <div className="flex gap-2 mt-3">
              <Badge variant="secondary" className="bg-green-100 text-green-800">AWS</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">GCP</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Governance</CardTitle>
            <BrainCircuit className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 Alerts</div>
            <p className="text-xs text-slate-500 mt-1">Unapproved tools detected</p>
            <div className="mt-3 flex items-center text-xs text-amber-600 font-medium">
              <AlertTriangle className="h-3 w-3 mr-1" /> Action Required
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            <Receipt className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-slate-500 mt-1">-4% from last month</p>
            <Progress value={65} className="mt-3" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Risk Score Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={riskData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorScore)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[
                { title: 'New AI Tool Detected', desc: 'Grammarly usage detected on 3 devices.', time: '2 hours ago', icon: BrainCircuit, color: 'text-amber-500', bg: 'bg-amber-100' },
                { title: 'Backup Successful', desc: 'Daily snapshot synced to AWS S3.', time: '5 hours ago', icon: HardDrive, color: 'text-green-500', bg: 'bg-green-100' },
                { title: 'Expense Flagged', desc: 'Duplicate software subscription found.', time: '1 day ago', icon: Receipt, color: 'text-red-500', bg: 'bg-red-100' },
                { title: 'Policy Updated', desc: 'Data retention policy v2.1 published.', time: '2 days ago', icon: ShieldCheck, color: 'text-blue-500', bg: 'bg-blue-100' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={cn("mt-0.5 p-2 rounded-full", item.bg)}>
                    <item.icon className={cn("h-4 w-4", item.color)} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                    <p className="text-xs text-slate-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
