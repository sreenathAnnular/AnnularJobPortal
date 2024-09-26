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
        </div>
      </form>
    </div>
  );
};

export default EditEducationForm;
