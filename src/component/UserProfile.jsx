import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import Navbar from "./Navbar";
import { MdModeEdit } from "react-icons/md";
import EditProjectForm from './EditProjectForm ';
import EditPersonalInfoForm from './EditPersonalInfoForm';
import EditEducationForm from './EditEducationForm'; 

const UserProfile = () => {
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false); // New state for editing education
  const [currentProject, setCurrentProject] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "Victor Brandon M",
    email: "sample@gmail.com",
    phone: "1234567891",
  });

  const handleEditProjectClick = (project) => {
    setCurrentProject(project);
    setIsEditingProject(true);
  };

  const handleEditPersonalClick = () => {
    setIsEditingPersonal(true);
  };

  const handleEditEducationClick = () => {
    setIsEditingEducation(true); // Set education edit to true
  };

  const handleCloseProjectForm = () => {
    setIsEditingProject(false);
    setCurrentProject(null);
  };

  const handleClosePersonalForm = () => {
    setIsEditingPersonal(false);
  };

  const handleCloseEducationForm = () => {
    setIsEditingEducation(false); // Close education form
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-5 mt-16">
        {/* Personal Info Section */}
        <div className="mb-8 p-4 flex items-start">
          <div className="flex-1">
            <Typography variant="h4" className="font-semibold mb-2">Self Introduction</Typography>
            <input type="file" className="block mb-4" />
          </div>

          <div className="text-center">
            <div className="mb-2">
              <Typography className="text-lg">{userInfo.name}</Typography>
              <Typography className="text-gray-600">{userInfo.email}</Typography>
            </div>
            <div className="flex space-x-4 mt-1">
              <Button className="normal-case" color="green">Share</Button>
              <a 
                href="/profile/28?isView=active" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center"
              >
                <Button className="normal-case" color="blue">View Profile</Button>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-2 border-dashed border-gray-500" />

        {/* Summary and Education Section */}
        <div className="mb-8 p-4 flex">
          <div className="flex-1">
            <Typography variant="h5" className="font-semibold">SUMMARY <MdModeEdit  className="cursor-pointer text-gray-600" 
                onClick={handleEditPersonalClick}  /> 
               
              </Typography>
            <Typography>Sample sentence</Typography>

            <div className="mt-4">
              <Typography variant="h6" className="font-semibold">EDUCATION</Typography>
              <Typography>sit - csbs</Typography>
              <Typography>test - final</Typography>
              <div className="flex space-x-4 mt-4">
                <Button className="normal-case" color="green" onClick={handleEditEducationClick}>Edit Education</Button> {/* Edit Education Button */}
                <Button className="normal-case"  color="green">Edit Certificate</Button>
              </div>
            </div>
          </div>

          <div className="flex-1 pl-4">
            <div className="flex items-center justify-between">
              <Typography variant="h6" className="mt-4 font-semibold">PROJECTS</Typography>
              <MdModeEdit className="cursor-pointer text-gray-600" 
                onClick={() => handleEditProjectClick(currentProject)}  /> 
                
            </div>
            <Typography>Crystal Deltas (2024-06-10 to 2024-06-11)</Typography>
            <Typography>Summary</Typography>
            <Typography>zoho (2024-09-25 to 2024-09-25)</Typography>
            <Typography>Sample summary</Typography>
            <Button color="green" className="mt-4 normal-case">Read more</Button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8 p-4">
          <hr className="my-2 border-dashed border-gray-500" />
          <Typography variant="h5" className="font-semibold">SKILLS & CONTACT INFORMATION</Typography>
          <Typography>Phone: {userInfo.phone}</Typography>
          <Typography>Email: {userInfo.email}</Typography>
          <Typography variant="h6" className="mt-4 font-semibold">SKILLS</Typography>
          <Typography>HTML, CSS, React JS, Skill1</Typography>
          <Typography variant="h6" className="mt-4 font-semibold">TOOLS</Typography>
          <Typography>Tool1, Tool2, Tool3</Typography>
        </div>

        {/* Conditional Rendering of the Edit Project Form as an Overlay */}
        {isEditingProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-3/4 min-h-1/2 p-14">
              <EditProjectForm 
                project={currentProject} 
                onClose={handleCloseProjectForm}
              />
            </div>
          </div>
        )}

        {/* Conditional Rendering of the Edit Personal Info Form as an Overlay */}
        {isEditingPersonal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-3/4 min-h-1/2 p-14">
              <EditPersonalInfoForm 
                userInfo={userInfo} 
                onClose={handleClosePersonalForm}
              />
            </div>
          </div>
        )}

        {/* Conditional Rendering of the Edit Education Form as an Overlay */}
        {isEditingEducation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-3/4 min-h-3/4 p-10">
              <EditEducationForm onClose={handleCloseEducationForm} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
