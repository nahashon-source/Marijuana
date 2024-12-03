import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="text-2xl font-bold">The Green Truth</Link>
        <div className="flex flex-wrap space-x-4">
          <Link to="/plant" className="hover:text-green-300">The Plant</Link>
          <Link to="/science" className="hover:text-green-300">Science</Link>
          <Link to="/consumption" className="hover:text-green-300">Consumption</Link>
          <Link to="/strains" className="hover:text-green-300">Strains</Link>
          <Link to="/health" className="hover:text-green-300">Health</Link>
          <Link to="/growing" className="hover:text-green-300">Growing</Link>
          <Link to="/legal" className="hover:text-green-300">Legal</Link>
          <Link to="/history" className="hover:text-green-300">History</Link>
          <Link to="/resources" className="hover:text-green-300">Resources</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;