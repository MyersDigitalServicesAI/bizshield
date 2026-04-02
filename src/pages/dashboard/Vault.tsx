import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@/src/components/ui';
import { HardDrive, Cloud, Server, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function Vault() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Vault & Backups</h2>
          <p className="text-slate-500">Manage your automated data backups and retention policies.</p>
        </div>
        <Button className="gap-2"><RefreshCw className="h-4 w-4" /> Run Manual Backup</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Data Protected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4.2 TB</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUpIcon className="h-3 w-3" /> +120 GB this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Backup Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">100%</div>
            <p className="text-xs text-slate-500 mt-1">All systems operational</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Active Destinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-slate-500 mt-1">AWS, GCP, Local NAS</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Backup Destinations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'AWS S3 (us-east-1)', type: 'Cloud', status: 'Healthy', lastSync: '10 mins ago', icon: Cloud, color: 'text-blue-500' },
              { name: 'Google Cloud Storage', type: 'Cloud', status: 'Healthy', lastSync: '1 hour ago', icon: Cloud, color: 'text-amber-500' },
              { name: 'On-Premise NAS', type: 'Local', status: 'Healthy', lastSync: '2 hours ago', icon: Server, color: 'text-slate-700' },
            ].map((dest, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <dest.icon className={`h-6 w-6 ${dest.color}`} />
                  </div>
                  <div>
                    <p className="font-medium">{dest.name}</p>
                    <p className="text-xs text-slate-500">{dest.type} • Last sync: {dest.lastSync}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> {dest.status}
                  </Badge>
                  <Button variant="ghost" size="sm">Configure</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TrendingUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
