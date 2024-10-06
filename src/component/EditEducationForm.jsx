<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@material-tailwind/react";
import { saveEducationData } from '../redux/educationSlice';
import { updateUserProfile } from '../redux/userProfileSlice'; // Adjust this import based on your file structure

const EditEducationForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);

  const [educationEntries, setEducationEntries] = useState([]);

  useEffect(() => {
    // Initialize educationEntries with data from userProfile
    if (userProfile.educationList && userProfile.educationList.length > 0) {
      setEducationEntries(userProfile.educationList.map(edu => ({
        educationId: edu.educationId,
        college: edu.collegeName,
        course: edu.courseName,
      })));
    } else {
      // If no education data, start with one empty entry
      setEducationEntries([{ college: '', course: '' }]);
    }
  }, [userProfile]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEntries = [...educationEntries];
    updatedEntries[index] = { ...updatedEntries[index], [name]: value };
    setEducationEntries(updatedEntries);
  };

  const addNewEducationEntry = () => {
    setEducationEntries([...educationEntries, { college: '', course: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const educationWebModelList = educationEntries.map(entry => ({
      educationId: entry.educationId, // Include if it exists
      collegeName: entry.college,
      courseName: entry.course,
      userWebModel: {
        userId: userProfile.userId // Assuming userId is available in userProfile
      }
    }));

    try {
      const response = await dispatch(saveEducationData({ educationWebModelList }));
      if (response.meta.requestStatus === 'fulfilled') {
        // Update the user profile with the new education data
        dispatch(updateUserProfile({
          ...userProfile,
          educationList: educationWebModelList, // Update this based on your userProfile structure
        }));
        onClose();
      }
    } catch (error) {
      console.error("Error updating education:", error);
    }
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h3" className="font-semibold">Education</Typography>
        <button onClick={onClose} className="text-gray-500 text-3xl">×</button>
      </div>

      <hr className="border-gray-500 mb-4" />

      <form onSubmit={handleSubmit}>
        {educationEntries.map((entry, index) => (
          <div key={index} className="grid grid-cols-2 gap-8 mt-6 mb-4">
            <div>
              <label className="block">College:</label>
              <input
                type="text"
                name="college"
                value={entry.college}
                onChange={(e) => handleChange(index, e)}
                className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block">Course:</label>
              <input
                type="text"
                name="course"
                value={entry.course}
                onChange={(e) => handleChange(index, e)}
                className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
                required
              />
            </div>
          </div>
        ))}

        <div className="flex space-x-2">
          <Button type="button" color="black" onClick={addNewEducationEntry} className="mt-2 ml-auto font-thin text-[14px] normal-case">
            Add
          </Button>
        </div>

        <div>
          <Button color="black" type="submit" className="mt-2 w-full text-[16px] font-thin">
            UPDATE EDUCATION INFO
          </Button>
=======
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@material-tailwind/react";
import { setEducationData, saveEducationData } from '../redux/educationSlice'; // Adjust the import path

const EditEducationForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const educationData = useSelector((state) => state.education.educationData);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setEducationData({ ...educationData, [name]: value }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveEducationData(educationData)); // Dispatch the save action
    onClose(); // Close the form after saving
  };

  return (
    <div className="mt-4 p-10">
      <Typography variant="h4" className="font-semibold mb-4">Edit Education</Typography>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-8 mb-4">
          {/* Column 1 */}
          <div>
            <label className="block">College:</label>
            <input
              type="text"
              name="college"
              value={educationData.college}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          {/* Column 2 */}
          <div>
            <label className="block">Course:</label>
            <input
              type="text"
              name="course"
              value={educationData.course}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          {/* Column 3 */}
          <div>
            <label className="block">Start Year:</label>
            <input
              type="text"
              name="startYear"
              value={educationData.startYear}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          {/* Column 4 */}
          <div>
            <label className="block">End Year:</label>
            <input
              type="text"
              name="endYear"
              value={educationData.endYear}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          {/* Column 5 */}
          <div>
            <label className="block">Grade:</label>
            <input
              type="text"
              name="grade"
              value={educationData.grade}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          {/* Column 6 */}
          <div>
            <label className="block">Location:</label>
            <input
              type="text"
              name="location"
              value={educationData.location}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button color="green" type="submit" className="mt-2">Save</Button>
          <Button color="red" onClick={onClose} className="mt-2">Cancel</Button>
>>>>>>> origin/master
        </div>
      </form>
    </div>
  );
};

<<<<<<< HEAD
export default EditEducationForm;  
=======
export default EditEducationForm;
>>>>>>> origin/master
