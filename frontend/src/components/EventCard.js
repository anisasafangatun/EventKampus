// frontend/src/components/EventCard.js
import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2 className="event-title">{event.namaEvent}</h2>
      <p><strong>Tanggal:</strong> {event.tanggal}</p>
      <p><strong>Lokasi:</strong> {event.lokasi}</p>
      <p><strong>Penyelenggara:</strong> {event.penyelenggara}</p>
      <p className="event-description">{event.deskripsi}</p>
    </div>
  );
};

export default EventCard;
