import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';


import Footer from './components/Footer';


import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header></Header>
      <main className="min-h-screen bg-gray-100">
         
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/appointments" element={<Appointments />} />
       
        

      </Routes>
      </main>
<Footer></Footer>

    </Router>
  );
}

export default App;
