// src/App.js
import React from 'react';
import EventList from './components/EventList';

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold p-4">Daftar Event Kampus</h1>
      <EventList />
    </div>
  );
}

export default App;
