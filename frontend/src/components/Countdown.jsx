import { useEffect, useState } from "react";

export default function Countdown() {
  const eventDate = new Date("2026-03-01T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ selesai: true });
      } else {
        setTimeLeft({
          hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
          jam: Math.floor((distance / (1000 * 60 * 60)) % 24),
          menit: Math.floor((distance / (1000 * 60)) % 60),
          detik: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.selesai) {
    return <h3>Pendaftaran Ditutup</h3>;
  }

  return (
    <div>
      <h3>Event dimulai dalam:</h3>
      <p>
        {timeLeft.hari} Hari {timeLeft.jam} Jam {timeLeft.menit} Menit{" "}
        {timeLeft.detik} Detik
      </p>
    </div>
  );
}
