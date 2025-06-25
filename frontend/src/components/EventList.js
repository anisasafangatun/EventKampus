import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import "./EventList.css"; // pastikan file ini ada dan berisi styling

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data.json") // ambil dari folder 'public'
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Fetch gagal:", err));
  }, []);

  const filteredEvents = events.filter((event) =>
    event.namaEvent?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (events.length === 0) {
    return <p style={{ padding: "2rem", color: "white" }}>Memuat data event...</p>;
  }

  return (
  <div
    style={{
      backgroundImage: `url("/images/download1.jfif")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      padding: "2rem",
    }}
  >
    <h1 style={{
      textAlign: "center",
      color: "#6a1b9a", // Ungu gelap
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      borderRadius: "10px",
      padding: "0.5rem",
      fontWeight: "bold",
      marginBottom: "1rem"
    }}>
      Event Kampus Tirta Persada
    </h1>

    <input
      type="text"
      placeholder="Cari event..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-box"
    />


      <div className="event-cards-wrapper">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
