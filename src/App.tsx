import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Podcasts from './pages/Podcasts';
import MovieList from './pages/Movies';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/movielist" element={<MovieList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
