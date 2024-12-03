import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Plant from './pages/Plant';
import History from './pages/History';
import Growing from './pages/Growing';
import Legal from './pages/Legal';
import Resources from './pages/Resources';
import Health from './pages/Health';
import Strains from './pages/Strains';
import Consumption from './pages/Consumption';
import Science from './pages/Science';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/history" element={<History />} />
          <Route path="/growing" element={<Growing />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/health" element={<Health />} />
          <Route path="/strains" element={<Strains />} />
          <Route path="/consumption" element={<Consumption />} />
          <Route path="/science" element={<Science />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;