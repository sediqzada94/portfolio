import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import ContactLinks from './components/ContactLinks';
function App() {
  return (
    <div className="App bg-slate-900">
         <Navbar />
         <Home />
         <ContactLinks/>
         <Skills />
         <Projects />
         <About />
         <Contact />
         <Footer />
    </div>
  );
}

export default App;
