import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@/src/components/ui';
import { BrainCircuit, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function AIGovernance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">AI Governance</h2>
          <p className="text-slate-500">Monitor and control AI tool usage across your organization.</p>
        </div>
        <Button>Add Policy</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-amber-200 bg-amber-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-amber-800 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Shadow AI Detected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-900">3</div>
            <p className="text-xs text-amber-700 mt-1">Unapproved tools in use</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Approved Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-slate-500 mt-1">Across 4 departments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Data Leak Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">Low</div>
            <p className="text-xs text-slate-500 mt-1">DLP policies active</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Discovered AI Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'ChatGPT', users: 45, status: 'Approved', risk: 'Low', icon: BrainCircuit },
              { name: 'Grammarly', users: 12, status: 'Unreviewed', risk: 'Medium', icon: BrainCircuit },
              { name: 'Otter.ai', users: 3, status: 'Blocked', risk: 'High', icon: ShieldAlert },
              { name: 'GitHub Copilot', users: 28, status: 'Approved', risk: 'Low', icon: BrainCircuit },
            ].map((tool, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <tool.icon className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="font-medium">{tool.name}</p>
                    <p className="text-xs text-slate-500">{tool.users} active users</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-slate-500">Risk Level</span>
                    <Badge variant="outline" className={
                      tool.risk === 'High' ? 'border-red-200 text-red-700 bg-red-50' :
                      tool.risk === 'Medium' ? 'border-amber-200 text-amber-700 bg-amber-50' :
                      'border-green-200 text-green-700 bg-green-50'
                    }>{tool.risk}</Badge>
                  </div>
                  <div className="flex flex-col items-end gap-1 w-24">
                    <span className="text-xs text-slate-500">Status</span>
                    <Badge variant="secondary" className={
                      tool.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      tool.status === 'Blocked' ? 'bg-red-100 text-red-800' :
                      'bg-slate-100 text-slate-800'
                    }>{tool.status}</Badge>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
