import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Terminal Theme Capsule Navigation */}
      <nav className="capsule-nav">
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>~<span className="nav-text">/home</span></Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>~<span className="nav-text">/about</span></Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>~<span className="nav-text">/projects</span></Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>~<span className="nav-text">/contact</span></Link>
        </div>
      </nav>

      {/* Main App Content */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
