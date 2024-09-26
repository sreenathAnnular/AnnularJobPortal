import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [meetings, setMeetings] = useState([]); // State to hold meetings

  // Function to add a meeting
  const addMeeting = (meeting) => {
    setMeetings((prevMeetings) => [...prevMeetings, meeting]);
  };

  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Sidebar on the left, passing addMeeting function */}
      <Sidebar addMeeting={addMeeting} />

      {/* Main content area */}
      <div className='ml-[28%] mt-[7%] p-6'> {/* Adjusted for Sidebar width and Navbar height */}
        {/* <h1 className='text-3xl font-bold text-gray-800'>Welcome to the Dashboard</h1>
        <p>Your dashboard content goes here...</p> */}

        {/* Display meetings */}
        <div className="mt-4">
          <h2 className="text-xl font-bold">Scheduled Meetings:</h2>
          {meetings.length === 0 ? (
            <p>No meetings scheduled.</p>
          ) : (
            <div className="bg-gray-50 p-2 rounded-md max-w-sm">
              {meetings.map((meeting, index) => (
                <div key={index} className="mb-2 p-2 border border-gray-300 rounded-md">
                  <p><strong>Date:</strong> {meeting.date}</p>
                  <p><strong>Time:</strong> {meeting.time}</p>
                  <p><strong>Description:</strong> {meeting.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
