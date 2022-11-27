import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Gallery" element={<Gallery />}/>
      <Route path="/Services" element={<Services />}/>
      <Route path="/Blog" element={<Blog />}/>
      <Route path="/Contact" element={<Contact />}/>
    </Routes>
  </Router>
    );
}

export default App;
