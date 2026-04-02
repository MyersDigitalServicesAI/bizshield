import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Compliance from './pages/dashboard/Compliance';
import Vault from './pages/dashboard/Vault';
import AIGovernance from './pages/dashboard/AIGovernance';
import Productivity from './pages/dashboard/Productivity';
import Expenses from './pages/dashboard/Expenses';
import Onboarding from './pages/Onboarding';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="vault" element={<Vault />} />
          <Route path="ai-governance" element={<AIGovernance />} />
          <Route path="productivity" element={<Productivity />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
