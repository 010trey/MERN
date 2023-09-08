// src/Routes.js
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ResourceDetails from './Components/ResourceDetails';
import NotFound from './Components/NotFound';
import ErrorMessage from './Components/ErrorMessage';

function App() {
  return (
    <>
      <BrowserRouter>    
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:resource/:id" element={<ResourceDetails />} />
          <Route path="/error" element={<ErrorMessage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;

