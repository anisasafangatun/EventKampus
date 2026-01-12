import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [active, setActive] = useState("sejarah");

  const renderContent = () => {
    switch (active) {
      case "sejarah":
        return <p>Kampus Tirta Persada berdiri sebagai lembaga pendidikan yang berkomitmen mencetak generasi unggul, berkarakter, dan berdaya saing.</p>;
      case "visi":
        return (
          <>
            <p><b>Visi:</b> Menjadi kampus unggul dan berkarakter.</p>
            <p><b>Misi:</b> Menyelenggarakan pendidikan berkualitas, inovatif, dan beretika.</p>
          </>
        );
      case "tujuan":
        return <p>Menghasilkan lulusan yang kompeten, berintegritas, dan siap menghadapi dunia kerja.</p>;
      case "sasaran":
        return <p>Meningkatkan kualitas akademik, riset, dan pengabdian kepada masyarakat.</p>;
      case "lambang":
        return <p>Makna lambang mencerminkan semangat keilmuan, persatuan, dan kemajuan.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      <h2>Profil Kampus</h2>

      <div className="home-menu">
        <button onClick={() => setActive("sejarah")}>Sejarah</button>
        <button onClick={() => setActive("visi")}>Visi & Misi</button>
        <button onClick={() => setActive("tujuan")}>Tujuan</button>
        <button onClick={() => setActive("sasaran")}>Sasaran</button>
        <button onClick={() => setActive("lambang")}>Makna Lambang</button>
      </div>

      <div className="home-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
