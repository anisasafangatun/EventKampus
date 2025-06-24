// frontend/src/components/EventCard.js
import React from 'react';
import './EventCard.css';

const EventCard = ({ namaEvent, tanggal, lokasi, penyelenggara, deskripsi }) => {
  return (
    <div className="event-card">
      <h2 className="event-title">{namaEvent}</h2>
      <p><span className="event-highlight">Tanggal:</span> {tanggal}</p>
      <p><span className="event-highlight">Lokasi:</span> {lokasi}</p>
      <p><span className="event-highlight">Penyelenggara:</span> {penyelenggara}</p>
      <p className="event-description">{deskripsi}</p>
    </div>
  );
};

export default EventCard;

