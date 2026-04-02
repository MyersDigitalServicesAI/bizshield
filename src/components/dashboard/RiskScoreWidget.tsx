import React from 'react';
import { cn } from '@/src/lib/utils';
import { ShieldAlert, ShieldCheck, Shield } from 'lucide-react';

interface RiskScoreWidgetProps {
  score: number;
  trend?: 'up' | 'down' | 'stable';
  className?: string;
}

export function RiskScoreWidget({ score, trend = 'stable', className }: RiskScoreWidgetProps) {
  // Determine color and icon based on score
  let colorClass = 'text-green-500';
  let bgClass = 'bg-green-500/10';
  let Icon = ShieldCheck;
  let statusText = 'Low Risk';

  if (score < 50) {
    colorClass = 'text-red-500';
    bgClass = 'bg-red-500/10';
    Icon = ShieldAlert;
    statusText = 'High Risk';
  } else if (score < 80) {
    colorClass = 'text-amber-500';
    bgClass = 'bg-amber-500/10';
    Icon = Shield;
    statusText = 'Moderate Risk';
  }

  return (
    <div className={cn("flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-sm", className)}>
      <div className={cn("flex h-12 w-12 items-center justify-center rounded-full", bgClass, colorClass)}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-500">Global Risk Score</span>
        <div className="flex items-baseline gap-2">
          <span className={cn("text-2xl font-bold tracking-tight", colorClass)}>{score}</span>
          <span className="text-xs font-medium text-slate-400">/ 100</span>
        </div>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <span className={cn("text-xs font-semibold px-2 py-1 rounded-full", bgClass, colorClass)}>
          {statusText}
        </span>
      </div>
    </div>
  );
}
