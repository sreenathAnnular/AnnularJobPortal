
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home'; // Import the Home component
import Dashboard from './component/Dashboard';
import RegisterForm from './component/RegisterForm';
import UserProfile from './component/UserProfile';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} /> {/* Add the Home route */}
          <Route path="/registerform" element={<RegisterForm/>} />
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/my-resume" element={<UserProfile/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

