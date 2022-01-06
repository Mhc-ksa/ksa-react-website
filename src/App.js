import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import EventsPage from "./pages/EventsPage"
import KulturePage from "./pages/KulturePage"
import GalleryPage from "./pages/GalleryPage"
import ContactPage from "./pages/ContactPage"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/kulture' element={<KulturePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
