import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shayari from './pages/Shayari';
import Thoughts from './pages/Thoughts';
import Books from './pages/Books';
import Projects from './pages/Projects';
import ArtWork from './pages/ArtWork';
import './App.css';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <NavBar />
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shayari" element={<Shayari />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/books" element={<Books />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/art-work" element={<ArtWork />} />
      </Routes>
    </Layout>
  );
}

export default App;
