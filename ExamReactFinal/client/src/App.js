import './App.css';
import { Routes, Route } from'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Add from './components/Add';
import ViewOne from './components/ViewOne';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [userName, setUserName] = useState("")

  return (  
    
    <div className="App">
      
      <Routes>
        <Route element={<LandingPage setUserName={setUserName}/>} path="/" />
        <Route element={<Home />} path="/pirates" />
        <Route element={<ErrorPage />} path="/unautorized" />
        <Route element={<ViewOne />} path="/pirates/:id" />
        <Route element={<Add userName={userName}  />} path="/pirates/new" />
      </Routes>
    </div>
  );
}

export default App;
