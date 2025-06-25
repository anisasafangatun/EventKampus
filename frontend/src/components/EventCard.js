import React from "react";
import "./EventCard.css";

const EventCard = ({ namaEvent, tanggal, lokasi, penyelenggara, deskripsi }) => {
  return (
    <div className="event-card">
      <h2>{namaEvent}</h2>
      <p><strong>Tanggal:</strong> {tanggal}</p>
      <p><strong>Lokasi:</strong> {lokasi}</p>
      <p><strong>Penyelenggara:</strong> {penyelenggara}</p>
      <em>{deskripsi}</em>
    </div>
  );
};

export default EventCard;
