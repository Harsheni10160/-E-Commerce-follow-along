import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from './Routes';  
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> {/* Corrected here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
