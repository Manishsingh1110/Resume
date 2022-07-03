
import './App.css';
import About from './components/About';
import Namesection from './components/namesection.js';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
    <Preloader/>
    <Namesection/>
    <About/>
    <Skills/> 
    <Education/>
    <Experience/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
