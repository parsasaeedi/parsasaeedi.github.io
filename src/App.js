import React from 'react';
import './App.css';
import { Home } from './Home/';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      
      <div className="App">
        <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/" element={<h1>Hello World</h1>} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
