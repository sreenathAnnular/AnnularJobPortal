<<<<<<< HEAD
 import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { fetchScheduleByDate } from '../redux/scheduleSlice';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  const { meetings, status, error } = useSelector(state => state.schedule);

  useEffect(() => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    dispatch(fetchScheduleByDate(formattedDate));
  }, [selectedDate, dispatch]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="flex flex-col h-screen"> {/* Flex column for navbar and content */}
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-grow"> {/* Flex container for sidebar and main content */}
        {/* Sidebar */}
        <Sidebar 
          selectedDate={selectedDate} 
          onDateChange={handleDateChange}
        />

        {/* Main content area */}
        <div className="flex-grow p-6 mt-24 flex justify-end"> {/* Use flex and justify-end for right alignment */}
          <div className=" p-4 rounded-md max-w-md"> {/* Meeting box */}  
            <h2 className="text-xl font-bold mb-4">Scheduled Meetings :</h2>  
            {/* for {selectedDate.toDateString()} */}
            {status === 'loading' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {meetings.length === 0 ? (
              <p>No meetings scheduled for this date.</p>
            ) : (
              meetings.map((meeting, index) => (
                <div key={index} className="mb-4 p-6 bg-gray-100 border-l-4 border-l-gray-800 rounded-md shadow-sm">
                  <p><strong>Time:</strong> {meeting.meetingTime}</p>
                  <p><strong>Description:</strong> {meeting.meetingDescription}</p>
                </div>
              ))
            )}
          </div>
=======
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
>>>>>>> origin/master
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
<<<<<<< HEAD


=======
>>>>>>> origin/master
