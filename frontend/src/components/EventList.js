import React, { useEffect, useState } from "react";
import EventCard from "./EventCard"; 

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
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

      });
  }, []);

  if (events.length === 0) {
    return <p>Memuat data event...</p>;
  }

  return (
    <div>
      {events.map((event) => (
        // buat manggil komponen EventCard
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventList;


