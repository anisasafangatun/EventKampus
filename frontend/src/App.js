import React from 'react';
import './App.css';
import EventList from './components/EventList'; // Pastikan path benar

function App() {
  return (
    <div className="app-container">
      <h1>Event Kampus Tirta Persada</h1>
      <EventList />
    </div>
  );
}

export default App;
