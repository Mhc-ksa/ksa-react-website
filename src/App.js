import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import EventsPage from "./pages/EventsPage"
import KulturePage from "./pages/KulturePage"
import KslangPage from "./pages/KslangPage"
import KfoodPage from "./pages/KfoodPage"
import GalleryPage from "./pages/GalleryPage"
import ContactPage from "./pages/ContactPage"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/kulture' element={<KulturePage />} />
        <Route path='/kslang' element={<KslangPage />} />
        <Route path='/kfood' element={<KfoodPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<ContactPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
