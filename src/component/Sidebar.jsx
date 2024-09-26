import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const Sidebar = ({ addMeeting }) => {
  const [date, setDate] = useState(new Date()); // State for the selected date
  const [showButton, setShowButton] = useState(false); // State to control the visibility of the button
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal
  const [time, setTime] = useState(''); // State for the meeting time
  const [description, setDescription] = useState(''); // State for the meeting description

  const handleDateChange = (newDate) => {
    setDate(newDate); // Update the selected date
    setShowButton(true); // Show the "Add Meeting" button when a date is clicked
    console.log('Selected date:', newDate); // Log the selected date to the console
  };

  const handleAddMeeting = () => {
    setShowModal(true); // Show the modal when the button is clicked
  };

  const handleSubmit = () => {
    // Create a meeting object
    const meeting = {
      date: date.toDateString(),
      time,
      description,
    };

    // Add the meeting using the addMeeting function passed from Dashboard
    addMeeting(meeting);

    // Reset fields after submission
    setTime('');
    setDescription('');
    setShowModal(false); // Close the modal
  };

  return (
    <div className="w-[27%] h-screen bg-gray-200 p-4 fixed left-0 top-0 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-700 mb-5">Jobs Engine</h1>

      {/* Calendar container with added margin */}
      <div className="flex-grow flex items-start justify-center mt-[10%]">
        <div className="flex flex-col items-center">
          <div className="p-4 m-2">
            <Calendar 
              onChange={handleDateChange} 
              value={date} 
              className="rounded-md bg-gray-200 border-none" // Remove border
              
              // Use formatShortWeekday to customize weekday names
              formatShortWeekday={(locale, date) => 
                ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
              }
            />
          </div>

          {/* Conditionally render the "Add Meeting" button in its own div */}
          {showButton && (
            <div className="mt-2"> {/* Adjust margin here as needed */}
              <button 
                onClick={handleAddMeeting} 
                className="bg-black text-white px-4 py-2 rounded-md shadow-md"
              >
                Add Meeting
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal for adding meeting */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">Time & Description</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Time:</label>
              <input 
                type="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                className="rounded-md w-full p-2" // Removed border class
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Description:</label>
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                className="rounded-md w-full p-2" // Removed border class
                rows="3"
                required 
              />
            </div>
            <div className="flex justify-end">
              <button 
                onClick={handleSubmit} 
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
              <button 
                onClick={() => setShowModal(false)} 
                className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;



