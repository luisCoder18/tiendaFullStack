import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Puedes agregar más rutas aquí */}
            </Routes>
        </Router>
    );
};

export default App;
