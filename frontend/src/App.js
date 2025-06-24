// src/App.js
import React from 'react';
import EventCard from './components/EventCard';
import eventData from './data';

function App() {
  return (
    <div>
      <h1>Daftar Acara</h1>
      {eventData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default App;

