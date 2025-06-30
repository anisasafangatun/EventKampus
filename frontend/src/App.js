import React from 'react';
import EventList from './components/EventList';
import './App.css';

const App = () => {
  const style = { // Gambar dari folder public/images
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div className="App" style={style}>
      <h1 className="text-2xl font-bold text-center my-4">Event Kampus Tirta Persada</h1>
      <EventList />
    </div>
  );
};

export default App;

