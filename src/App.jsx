import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';

const App = () => {
  return (
    <div>
        <Router>
    <Routes>
      <Route path="/" element={<Signin/>} />
    </Routes>
  </Router>

    </div>
  )
}

export default App


