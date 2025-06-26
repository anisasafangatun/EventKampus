import React from 'react';
import './App.css';
import EventList from './components/EventList';

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center my-4">Event Kampus Tirta Persada</h1>
      <EventList />
    </div>
  );
}

export default App;
