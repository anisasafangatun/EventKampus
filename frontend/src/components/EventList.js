import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Fetch gagal:", err));
  }, []);

  const filteredEvents = events.filter((event) =>
    event.namaEvent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (events.length === 0) {
    return <p>Memuat data event...</p>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(c:\Users\Arif Muamar\Downloads\download (1).jfif)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem'
      }}
    >
      <input
        type="text"
        placeholder="Cari event..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      {filteredEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventList;

