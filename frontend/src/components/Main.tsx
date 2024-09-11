import React, { useState } from 'react';
import Calendar from './Calendar';

const Main = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4">
        <button className="w-full bg-white border border-gray-300 rounded p-2 mb-4">+ New Trip</button>
        <ul>
          <li className="p-2 border-b border-gray-300">(trips list from DB)</li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <div className="bg-gray-100 p-4 rounded">
          Great! Let's plan your trip. Where would you like to go?
        </div>
        <div className="flex mt-4">
          <input type="text" className="flex-1 border border-gray-300 rounded p-2" placeholder="Type your message..." />
          <button className="bg-black text-white p-2 rounded ml-2">Send</button>
        </div>
      </div>
      <div className="w-1/4 bg-gray-100 p-4">
        <ul>
          <li className="p-2 border-b border-gray-300 cursor-pointer" onClick={() => setShowCalendar(true)}>Calendar</li>
          <li className="p-2 border-b border-gray-300">Profile</li>
          <li className="p-2 border-b border-gray-300 text-red-500">Logout</li>
        </ul>
      </div>
      {showCalendar && <Calendar closeCalendar={closeCalendar} />}
    </div>
  );
};

export default Main;