import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, Button, Progress } from '@/src/components/ui';
import { ShieldCheck, Building2, CreditCard, HardDrive, CheckCircle2 } from 'lucide-react';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto h-12 w-12 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
            <ShieldCheck className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome to BizShield OS</h1>
          <p className="text-slate-500 mt-2">Let's set up your unified security and operations dashboard.</p>
        </div>

        <Card className="border-slate-200 shadow-lg">
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-500">Step {step} of 5</span>
              <span className="text-sm font-medium text-slate-900">{Math.round((step / 5) * 100)}%</span>
            </div>
            <Progress value={(step / 5) * 100} className="h-2" />
          </CardHeader>
          <CardContent className="p-8">
            {step === 1 && (
              <div className="space-y-6 text-center">
                <Building2 className="h-12 w-12 text-slate-400 mx-auto" />
                <div>
                  <h2 className="text-xl font-semibold">Connect Workspace</h2>
                  <p className="text-slate-500 mt-2">Connect Google Workspace or Microsoft 365 to enable AI Governance and Productivity tracking.</p>
                </div>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <Button variant="outline" className="h-12 gap-2">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
                    Connect Google Workspace
                  </Button>
                  <Button variant="outline" className="h-12 gap-2">
                    <img src="https://www.svgrepo.com/show/448234/microsoft.svg" className="h-5 w-5" alt="Microsoft" />
                    Connect Microsoft 365
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 text-center">
                <CreditCard className="h-12 w-12 text-slate-400 mx-auto" />
                <div>
                  <h2 className="text-xl font-semibold">Connect Financials</h2>
                  <p className="text-slate-500 mt-2">Link your accounting software and corporate cards for automated expense scanning.</p>
                </div>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <Button variant="outline" className="h-12 gap-2 text-green-700 border-green-200 hover:bg-green-50">
                    Connect QuickBooks
                  </Button>
                  <Button variant="outline" className="h-12 gap-2 text-blue-700 border-blue-200 hover:bg-blue-50">
                    Connect Stripe
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center">
                <HardDrive className="h-12 w-12 text-slate-400 mx-auto" />
                <div>
                  <h2 className="text-xl font-semibold">Configure Vault Backups</h2>
                  <p className="text-slate-500 mt-2">Select your preferred cloud destinations for automated, encrypted daily backups.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="border-2 border-blue-500 bg-blue-50 rounded-xl p-4 cursor-pointer">
                    <p className="font-semibold text-blue-900">AWS S3</p>
                    <p className="text-xs text-blue-700 mt-1">Recommended</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-slate-300">
                    <p className="font-semibold text-slate-700">Google Cloud</p>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 text-center">
                <ShieldCheck className="h-12 w-12 text-slate-400 mx-auto" />
                <div>
                  <h2 className="text-xl font-semibold">Compliance Frameworks</h2>
                  <p className="text-slate-500 mt-2">Select the compliance frameworks you need to track.</p>
                </div>
                <div className="flex flex-col gap-3 max-w-xs mx-auto text-left">
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer bg-slate-50 border-slate-300">
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                    <span className="font-medium">SOC 2 Type II</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer bg-slate-50 border-slate-300">
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                    <span className="font-medium">GDPR</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                    <span className="font-medium">HIPAA</span>
                  </label>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6 text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                <div>
                  <h2 className="text-2xl font-bold">You're all set!</h2>
                  <p className="text-slate-500 mt-2">Your BizShield OS is ready. Start your subscription to activate all 5 modules immediately.</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 max-w-sm mx-auto border border-slate-100">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-lg font-semibold">Pro Plan</span>
                    <span className="text-3xl font-bold">$49<span className="text-sm text-slate-500 font-normal">/mo</span></span>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2 text-left mb-6">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> All 5 Modules included</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Automated compliance alerts</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> AI Expense Scanning</li>
                  </ul>
                  <Button className="w-full h-12 text-lg" onClick={handleNext}>
                    Subscribe & Go to Dashboard
                  </Button>
                </div>
              </div>
            )}

            {step < 5 && (
              <div className="mt-8 flex justify-between items-center pt-6 border-t border-slate-100">
                <Button variant="ghost" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>
                  Back
                </Button>
                <Button onClick={handleNext} className="px-8">
                  Continue
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
