'use client'

import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = ({ events }) => {

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = event.bgcolor || '#3174ad'; // Default color or custom color from event data
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: event.color || '#3174ad',
      border: '0',
      display: 'block',
    };
    return {
      style,
    };
  };


  return (
    <div style={{ height: '900px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '0' }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};


export default EventCalendar;