import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@/src/components/ui';
import { Receipt, DollarSign, AlertCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Expenses() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Expense Scanner</h2>
          <p className="text-slate-500">AI-powered receipt scanning and anomaly detection.</p>
        </div>
        <Button className="gap-2"><Receipt className="h-4 w-4" /> Scan Receipt</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Spend (MTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$12,450.00</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <ArrowDownRight className="h-3 w-3" /> 4.2% vs last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-800 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> Flagged Anomalies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-900">2</div>
            <p className="text-xs text-red-700 mt-1">Requires manual review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Pending Reimbursements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$1,240.50</div>
            <p className="text-xs text-slate-500 mt-1">Across 5 employees</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { merchant: 'AWS EMEA SARL', amount: 4500.00, date: 'Today', category: 'Infrastructure', status: 'Approved', anomaly: false },
              { merchant: 'Uber Trip', amount: 145.20, date: 'Yesterday', category: 'Travel', status: 'Flagged', anomaly: true, reason: 'Duplicate charge detected' },
              { merchant: 'WeWork', amount: 1200.00, date: 'Oct 24', category: 'Office', status: 'Approved', anomaly: false },
              { merchant: 'Adobe Creative Cloud', amount: 54.99, date: 'Oct 22', category: 'Software', status: 'Flagged', anomaly: true, reason: 'Unapproved vendor category' },
              { merchant: 'Delta Airlines', amount: 650.00, date: 'Oct 20', category: 'Travel', status: 'Approved', anomaly: false },
            ].map((tx, i) => (
              <div key={i} className={`flex items-center justify-between p-4 border rounded-lg ${tx.anomaly ? 'border-red-200 bg-red-50/30' : 'border-slate-100'}`}>
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${tx.anomaly ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      {tx.merchant}
                      {tx.anomaly && <Badge variant="destructive" className="text-[10px] h-4 px-1 py-0">Anomaly</Badge>}
                    </div>
                    <p className="text-xs text-slate-500">{tx.date} • {tx.category}</p>
                    {tx.anomaly && <p className="text-xs text-red-600 mt-1">{tx.reason}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-semibold">${tx.amount.toFixed(2)}</p>
                    <p className="text-xs text-slate-500">{tx.status}</p>
                  </div>
                  <Button variant={tx.anomaly ? "default" : "ghost"} size="sm">
                    {tx.anomaly ? 'Review' : 'View'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
