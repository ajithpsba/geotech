import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin';
import Menu from  './components/menu';
import Navbar from  './components/navbar';
import Slider from './components/Slider';
import About from  './components/Aboutus';
import Project from './components/Projects';
import Gallery from './components/gallery'
import  Contact from './components/Contact';
import  Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
      <Navbar />
      <Routes>
      <Route path="/admin" element={<Admin/>} />
      </Routes>
      </Router>
      <Slider />
      <About />
      <Project />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
