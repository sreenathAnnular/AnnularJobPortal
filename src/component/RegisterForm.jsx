import React from 'react';
import FormNavbar from './FormNavbar';
import { Button } from '@material-tailwind/react';

const RegisterForm = () => {
  return (
    <div className="min-h-screen bg-[#f1f5f7]">
      <FormNavbar/>
      <div className="max-w-6xl mx-auto p-5 mt-10">
        <div className="flex justify-center">
          <form className="border bg-white p-5 w-full">
            <h2 className="font-bold text-3xl mb-6">Register</h2>

            {/* Resume Upload Section */}
            <div className="flex flex-col mb-6">
              <label className="block text-sm text-gray-600 mb-2">Upload Resume</label>
              <div className="grid grid-cols-5 gap-4">
                <input
                  className="p-4 text-lg col-span-4 rounded-md bg-[#F5F5F6]"
                  type="file"
                />
                <Button className="bg-black text-white normal-case text-lg p-4 col-span-1">
                  Upload
                </Button>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="mb-6">
              <h3 className="block text-lg mb-2 text-black font-bold">Contact Details</h3>

              <div className="grid grid-cols-3 gap-4 mb-4">
                {/* First, Middle, and Last Name inputs */}
                {['First Name', 'Middle Name', 'Last Name'].map((label) => (
                  <div key={label} className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">{label}</label>
                    <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Phone, Email, and Password inputs */}
                {[
                  { label: 'Phone Number', type: 'text' },
                  { label: 'Email', type: 'email' },
                  { label: 'Password', type: 'password' },
                ].map(({ label, type }) => (
                  <div key={label} className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">{label}</label>
                    <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type={type} />
                  </div>
                ))}
              </div>
            </div>

            {/* College and Course Section */}
            <div className="mb-6">
              <h3 className="block text-lg mb-2 text-black font-bold">Educational Details</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                {['College', 'Course'].map((label) => (
                  <div key={label} className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">{label}</label>
                    <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Button className="bg-black text-white normal-case text-lg px-6 py-3">
                  Add
                </Button>
              </div>
            </div>

            {/* Certification Section */}
            <div className="mb-6">
              <h3 className="block text-lg mb-2 text-black font-bold">Certification</h3>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Upload Certificate</label>
                  <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="file" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Certificate Name</label>
                  <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Year</label>
                  <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Expiration Month</label>
                  <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-black text-white normal-case text-lg px-6 py-3">
                  Add
                </Button>
              </div>
            </div>
            {/* {loaction section} */}
            <div className="mb-6">
              <h3 className="block text-lg mb-2 text-black font-bold">Location</h3>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Address</label>
                  <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">City</label>
                  <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">State</label>
                  <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Zip</label>
                  <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
                </div>
              </div>
            </div>
                {/* {mode of work} */}
                <div className="mb-6">
  <div className="flex flex-wrap space-x-14">
    
    {/* Willing to Relocate */}
    <div className="flex items-center space-x-2">
      <label className="text-black font-bold">Willing to Relocate</label>
      <label className="flex items-center">
        <input type="radio" name="relocate" value="yes" className="form-radio text-blue-600" />
        <span className="ml-1">Yes</span>
      </label>
      <label className="flex items-center">
        <input type="radio" name="relocate" value="no" className="form-radio text-blue-600" />
        <span className="ml-1">No</span>
      </label>
    </div>

    {/* Remote */}
    <div className="flex items-center space-x-2">
      <label className="text-black font-bold">Remote</label>
      <label className="flex items-center">
        <input type="radio" name="remote" value="yes" className="form-radio text-blue-600" />
        <span className="ml-1">Yes</span>
      </label>
      <label className="flex items-center">
        <input type="radio" name="remote" value="no" className="form-radio text-blue-600" />
        <span className="ml-1">No</span>
      </label>
    </div>

    {/* Hybrid */}
    <div className="flex items-center space-x-2">
      <label className="text-black font-bold">Hybrid</label>
      <label className="flex items-center">
        <input type="radio" name="hybrid" value="yes" className="form-radio text-blue-600" />
        <span className="ml-1">Yes</span>
      </label>
      <label className="flex items-center">
        <input type="radio" name="hybrid" value="no" className="form-radio text-blue-600" />
        <span className="ml-1">No</span>
      </label>
    </div>

    {/* Sponsorship Required */}
    <div className="flex items-center space-x-2">
      <label className="text-black font-bold">Sponsorship Required</label>
      <label className="flex items-center">
        <input type="radio" name="sponsorship" value="yes" className="form-radio text-blue-600" />
        <span className="ml-1">Yes</span>
      </label>
      <label className="flex items-center">
        <input type="radio" name="sponsorship" value="no" className="form-radio text-blue-600" />
        <span className="ml-1">No</span>
      </label>
    </div>
    
  </div>
</div>

<div className="flex items-center space-x-2">
      <label className="text-black font-bold">Gender</label>
      <label className="flex items-center">
        <input type="radio" name="sponsorship" value="yes" className="form-radio text-blue-600" />
        <span className="ml-1">Yes</span>
      </label>
      <label className="flex items-center">
        <input type="radio" name="sponsorship" value="no" className="form-radio text-blue-600" />
        <span className="ml-1">No</span>
      </label>
    </div>

            
          <div className='flex flex-col mt-6'>
          <label className="text-sm text-gray-600 mb-1">Please tell about yourself in 50-60 words</label>
          <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
          </div>

          {/* {project Details} */}
          <div className="mb-6">

  <div className="grid grid-cols-2 gap-4 mb-4">
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">Company</label>
      <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">Project Name</label>
      <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">From</label>
      <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="date" />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">To</label>
      <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="date" />
    </div>
    <div className="flex flex-col ">
      <label className="text-sm text-gray-600 mb-1">Tools</label>
      <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
    </div>
    <div className="flex flex-col ">
      <label className="text-sm text-gray-600 mb-1">Software</label>
      <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
    </div>
    <div className="flex flex-col col-span-2">
      <label className="text-sm text-gray-600 mb-1">Summary</label>
      <input className="p-3 text-lg border rounded-md bg-[#F5F5F6]" type="text" />
    </div>
  </div>
</div>
<div>
    <Button className='w-full normal-case text-lg'>Register</Button>
</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;