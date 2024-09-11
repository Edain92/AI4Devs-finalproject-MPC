import React, { useEffect, useRef } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Budget-Friendly City Explorer',
    start: new Date(2024, 7, 10),
    end: new Date(2024, 7, 12),
  },
  {
    title: 'Luxury Getaway',
    start: new Date(2024, 7, 20),
    end: new Date(2024, 7, 22),
  },
  {
    title: 'Adventure Seeker\'s Dream',
    start: new Date(2024, 7, 25),
    end: new Date(2024, 7, 27),
  },
];

const Calendar = ({ closeCalendar }: { closeCalendar: () => void }) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        closeCalendar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeCalendar]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={calendarRef} className="bg-white p-6 rounded shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Trip Calendar</h2>
          <button className="text-gray-500" onClick={closeCalendar}>&times;</button>
        </div>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
        <div className="mt-4">
          <ul>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
              Budget-Friendly City Explorer
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
              Luxury Getaway
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
              Adventure Seeker's Dream
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calendar;