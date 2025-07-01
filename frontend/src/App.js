import React from 'react';
import EventList from './components/EventList';
import './App.css';

const App = () => {
  const divStyle = {
    backgroundImage: "url('/images/pexels-irenelasus-88517.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'senter',
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
  };
  return (
    <div style={divStyle}>
      <header className="header">
        <img src="/images/logo-removebg-preview.png" alt="logo" className="logo" />
        <h1 className="judul-gradient">Event Kampus Tirta Persada</h1>

      </header>

      <div className="AppContent">
        <EventList />
      </div>
    </div>
  );
};

export default App;
