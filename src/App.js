import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
