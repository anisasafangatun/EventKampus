import React, { useEffect, useState } from "react";
import eventData from "../data";
import EventCard from "./EventCard";
import "./EventList.css";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setEvents(eventData);
    fetch("/data.json")
      .then((res) => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Data dari data.json:", data);
        setEvents(data);
      })
      .catch((err) => {
        console.error("Fetch gagal:", err);
      });
  }, []);

  const filteredEvents = events.filter((event) =>
    event.namaEvent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // style background image di sini
  const divStyle = {
    backgroundImage: `url(${require('../assets/images/gradasibg.jpg')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={divStyle}>
      <div className="event-list-container">
        <h1 className="judul-event">Event Kampus Tirta Persada</h1>

        <input
          type="text"
          placeholder="Cari event..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-box"
        />

        <div className="event-cards-wrapper">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))
          ) : (
            <p className="no-event">Tidak ada event yang cocok.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
