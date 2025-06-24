import React, { useState } from 'react';
import eventData from '../data';
import EventCard from './EventCard';

const EventList = () => {
  const [events] = useState(eventData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event =>
    event.namaEvent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Cari event..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
      {filteredEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
