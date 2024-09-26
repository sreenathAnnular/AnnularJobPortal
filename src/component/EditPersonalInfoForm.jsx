import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";

const EditPersonalInfoForm = ({ userInfo, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: userInfo?.firstName || "",
    middleName: userInfo?.middleName || "",
    lastName: userInfo?.lastName || "",
    phoneNumber: userInfo?.phoneNumber || "",
    email: userInfo?.email || "",
    password: "",
    address: userInfo?.address || "",
    city: userInfo?.city || "",
    state: userInfo?.state || "",
    zip: userInfo?.zip || "",
    summary: userInfo?.summary || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle save logic here
    console.log("Updated personal info:", formData);
    onClose(); // Close the form after saving
  };

  return (
    <div className="mt-4 p-4  max-h-[600px]"> {/* Adjust max height as needed */}
      <Typography variant="h4" className="font-semibold mb-4">Edit Personal Info</Typography>
      <div className="overflow-y-auto max-h-[500px]"> {/* Set the height for the scrollable area */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block">Middle Name:</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block">State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block">ZIP Code:</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block">Summary:</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className="border p-3 w-full bg-gray-200 rounded-lg"
              rows="3"
            />
          </div>
          <div className="col-span-2 flex space-x-2">
            <Button color="green" type="submit" className="mt-2">Save</Button>
            <Button color="red" onClick={onClose} className="mt-2">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPersonalInfoForm;
