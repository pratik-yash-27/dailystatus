
import './App.css';
import Clock from './components/Clock/Clock';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Homes from './pages/Homes';
import Resume from './pages/Resume';
import Portfolio from "./pages/Portfolio";
import Contact from './pages/Contact';

const App=()=> {
 
  return (
    <>
      <div className="hero">
        {/* <Header />/ */}
        <Home />

        <BrowserRouter>
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="Homes" element={<Homes />} />
            <Route path="About" element={<About />} />
            <Route path="Resume" element={<Resume />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* <Clock/> */}
    </>
  );
}

export default App;
