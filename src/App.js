import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import CreateStory from './pages/CreateStory';
import YourStories from './pages/YourStories';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-story" element={<CreateStory />} />
        <Route path="/your-stories" element={<YourStories />} />
      </Routes>
    </Router>
  );
}

export default App;