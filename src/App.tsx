/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Overlay } from './components/Overlay';
import { Founder } from './components/Founder';
import { InsightsPage } from './components/InsightsPage';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="relative w-full bg-[#050505] text-white">
        <Preloader />
        <div className="bg-noise"></div>
        <Routes>
          <Route path="/" element={<Overlay />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
      </main>
    </Router>
  );
}
