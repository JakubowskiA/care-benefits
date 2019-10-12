import React from 'react';
import './App.css';
import PrescriptionPage from './components/PrescriptionPage';

function App() {
  return (
    <div className="App">
      <header>
        Care Benefits
      </header>
      <nav>
        <span className="nav-item">Medications</span>
        <span className="nav-item">Appointments</span>
        <span className="nav-item">Logout</span>
      </nav>

      <PrescriptionPage />
    </div>
  );
}

export default App;
