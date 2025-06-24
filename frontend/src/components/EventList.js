import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const adaptedEvents = data.map((user) => ({
          id: user.id,
          namaEvent: `Event oleh ${user.name}`,
          tanggal: "2025-07-10", // Contoh tanggal statis
          lokasi: user.address.city,
          penyelenggara: user.company.name,
          deskripsi: `Hubungi ${user.email} untuk info lebih lanjut.`,
        }));
        setEvents(adaptedEvents);
      })
      .catch((error) => {
        console.error("Gagal mengambil data:", error);
      });
  }, []);

  if (events.length === 0) {
    return <p>Memuat data event...</p>;
  }

  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventList;

