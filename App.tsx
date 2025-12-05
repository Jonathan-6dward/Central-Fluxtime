import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import NewsAnalyzer from './pages/NewsAnalyzer';
import FlowNews from './pages/FlowNews';
import OsintTools from './pages/OsintTools';
import CreatorStudio from './pages/CreatorStudio';
import Automations from './pages/Automations';
import EcommerceBoost from './pages/EcommerceBoost';
import Settings from './pages/Settings';
import AdminPanel from './pages/AdminPanel';
import Layout from './components/Layout';

const AppContent = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  if (isLanding) {
    return <LandingPage />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news-analyzer" element={<NewsAnalyzer />} />
        <Route path="/flownews" element={<FlowNews />} />
        <Route path="/osint" element={<OsintTools />} />
        <Route path="/creator-studio" element={<CreatorStudio />} />
        <Route path="/automations" element={<Automations />} />
        <Route path="/ecommerce" element={<EcommerceBoost />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </HashRouter>
  );
};

export default App;