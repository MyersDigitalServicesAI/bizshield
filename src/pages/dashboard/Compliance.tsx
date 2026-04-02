import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@/src/components/ui';
import { ShieldCheck, FileText, CheckCircle2, Clock } from 'lucide-react';

export default function Compliance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Compliance Center</h2>
          <p className="text-slate-500">Manage frameworks, policies, and audits.</p>
        </div>
        <Button>Generate Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-blue-500" /> SOC 2 Type II
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Readiness</span>
                <span className="font-medium text-green-600">95%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[95%]" />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Audit Ready</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-purple-500" /> HIPAA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Readiness</span>
                <span className="font-medium text-amber-600">78%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[78%]" />
              </div>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">In Progress</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-slate-700" /> GDPR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Readiness</span>
                <span className="font-medium text-green-600">100%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-full" />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Compliant</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Required Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { task: 'Review Data Processing Agreement', framework: 'GDPR', due: 'Tomorrow', status: 'pending' },
              { task: 'Employee Security Training Q3', framework: 'SOC 2', due: 'In 3 days', status: 'pending' },
              { task: 'Update Incident Response Plan', framework: 'HIPAA', due: 'Next week', status: 'pending' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-full">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.task}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-[10px] h-5">{item.framework}</Badge>
                      <span className="text-xs text-slate-500">Due {item.due}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">Review</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
