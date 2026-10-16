import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

// Lazy-load pages for code splitting & better performance
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const Stories = lazy(() => import('./pages/Stories'));
const StoryDetail = lazy(() => import('./pages/StoryDetail'));
const Shayari = lazy(() => import('./pages/Shayari'));
const Thoughts = lazy(() => import('./pages/Thoughts'));
const Books = lazy(() => import('./pages/Books'));
const Projects = lazy(() => import('./pages/Projects'));
const ArtWork = lazy(() => import('./pages/ArtWork'));

// Minimal loading spinner
const PageLoader = () => (
  <div className="page-loader" role="status" aria-label="Loading page">
    <div className="page-loader-spinner" />
  </div>
);

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      {/* Skip Navigation - Accessibility */}
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <NavBar />
      <main id="main-content" style={{ minHeight: '80vh' }} role="main">
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
      </main>
      <Footer />
      <ThemeSwitcher />
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
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:slug" element={<StoryDetail />} />
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
