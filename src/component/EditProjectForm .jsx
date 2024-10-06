<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Button, Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { updateProject } from '../redux/projectSlice';

const EditProjectForm = ({ project, onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    projectId: '',
    projectCompany: '',
    projectName: '',
    projectFromDate: '',
    projectToDate: '',
    projectTools: '',
    projectSoftware: '',
    projectSummary: '',
  });

  useEffect(() => {
    if (project) {
      setFormData({
        projectId: project.projectId || '',
        projectCompany: project.projectCompany || '',
        projectName: project.projectName || '',
        projectFromDate: project.projectFromDate || '',
        projectToDate: project.projectToDate || '',
        projectTools: project.projectTools || '',
        projectSoftware: project.projectSoftware || '',
        projectSummary: project.projectSummary || '',
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
=======
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

const EditProjectForm = ({ project, onClose }) => {
  const [formData, setFormData] = useState({
    name: project?.name || "",
    companyName: project?.companyName || "",
    projectName: project?.projectName || "",
    fromDate: project?.fromDate || "",
    toDate: project?.toDate || "",
    tools: project?.tools || "",
    softwareSummary: project?.softwareSummary || "",
    summary: project?.summary || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
>>>>>>> origin/master
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD

    const payload = {
      projectWebModelList: [
        {
          projectId: formData.projectId,
          projectCompany: formData.projectCompany,
          projectName: formData.projectName,
          projectFromDate: formData.projectFromDate,
          projectToDate: formData.projectToDate,
          projectTools: formData.projectTools,
          projectSoftware: formData.projectSoftware,
          projectSummary: formData.projectSummary,
        },
      ],
    };
  
    dispatch(updateProject(payload))
      .then(() => {
        console.log('Updated Project:', formData);
        onClose();
      })
      .catch((error) => {
        console.error('Error updating project:', error);
      });
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h3" className="font-semibold">Edit Project</Typography>
        <button onClick={onClose} className="text-gray-500 text-3xl">×</button>
      </div>

      <hr className="border-gray-500 mb-4" />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-8 mt-6 mb-4">
          <div>
            <label className="block">Project Company:</label>
            <input
              type="text"
              name="projectCompany"
              value={formData.projectCompany}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block">Project Name:</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block">Project Start Date:</label>
            <input
              type="date"
              name="projectFromDate"
              value={formData.projectFromDate}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block">Project End Date:</label>
            <input
              type="date"
              name="projectToDate"
              value={formData.projectToDate}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block">Project Tools:</label>
            <input
              type="text"
              name="projectTools"
              value={formData.projectTools}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block">Project Software:</label>
            <input
              type="text"
              name="projectSoftware"
              value={formData.projectSoftware}
              onChange={handleChange}
              className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            />
          </div>

          <div className="col-span-2">
            <label className="block">Project Summary:</label>
            <textarea
              name="projectSummary"
              value={formData.projectSummary}
              onChange={handleChange}
              className="border p-3 h-24 w-full bg-gray-200 rounded-lg"
            />
          </div>
        </div>

        <div>
          <Button color="black" type="submit" className="mt-2 w-full text-[16px] font-thin">
            Save Project
          </Button>
=======
    // Handle the save logic here (e.g., API call to update the project)
    console.log("Updated project data:", formData);
    onClose();
  };

  return (
    <div className="mt-4 p-8 ">
      <Typography variant="h4" className="font-semibold mb-6">Edit Project Form</Typography>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block">Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">From Date:</label>
          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            required
          />
        </div>
       
        <div className="mb-4">
          <label className="block">To Date:</label>
          <input
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Tools:</label>
          <input
            type="text"
            name="tools"
            value={formData.tools}
            onChange={handleChange}
            className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Software Summary:</label>
          <textarea
            name="softwareSummary"
            value={formData.softwareSummary}
            onChange={handleChange}
            className="border p-3 h-12 w-full bg-gray-200 rounded-lg"
            required
          ></textarea>
        </div>
        
        <div className="flex space-x-2 col-span-2">
          <Button color="green" type="submit" className="mt-2">Save</Button>
          <Button color="red" onClick={onClose} className="mt-2">Cancel</Button>
>>>>>>> origin/master
        </div>
      </form>
    </div>
  );
};

export default EditProjectForm;

