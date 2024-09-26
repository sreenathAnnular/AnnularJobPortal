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
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        </div>
      </form>
    </div>
  );
};

export default EditProjectForm;

