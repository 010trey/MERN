    // src/Routes.js
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './Components/Home';
    import Number from './Components/Number';
    import Word from './Components/Word';
    import StyledWord from './Components/StyledWord';

    function RoutesConfig() {
    return (
        <Router>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/:num" element={<Number />} />
            <Route path="/:word" element={<Word />} />
            <Route path="/:word/:color/:background" element={<StyledWord />} />
        </Routes>
        </Router>
    );
    }

    export default RoutesConfig;
