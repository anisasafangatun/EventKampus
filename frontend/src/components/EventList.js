import React from 'react';
import EventCard from './EventCard';
import eventData from '../data';

const EventList = () => {
  return (
    <div className="event-list">
      {eventData.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          date={event.date}
          location={event.location}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default EventList;
