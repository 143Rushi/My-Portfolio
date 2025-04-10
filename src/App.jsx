import './App.css';
import Navbar from './Componants/Navbar';
import Home from './Componants/Home';
import Skill from './Componants/Skill';
import Projects from './Componants/Projects';
import Contact from './Componants/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CursorGlow from './Componants/CursorGlow'; // 🆕 Add this

function App() {
  return (
    <Router>
      <CursorGlow /> {/* 🆕 Glowing cursor follows mouse */}

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skill />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* These can be removed if they’re already in Routes */}
      <Skill />
      <Contact />
    </Router>
  );
}

export default App;
