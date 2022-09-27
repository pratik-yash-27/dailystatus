import "./App.css";

import Home from "./components/Home/Home";

import About from "./pages/About";

import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { useRef } from "react";

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hero">
        <header>
          <nav>
            <h2 class="logo">Portfolio</h2>
            <ul>
              <li onClick={() => scrollToSection(home)}>Home</li>
              <li onClick={() => scrollToSection(about)}>About</li>

              <li onClick={() => scrollToSection(portfolio)}>Portfolio</li>

              <li onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>
          </nav>
        </header>

        <div ref={home}>
          <Home />
        </div>
      
        <div ref={about}>
          <About />
        </div>
        <div ref={portfolio}>
          <Portfolio />
        </div>
        <div ref={contact}>
          <Contact />
        </div>

       
      </div>
    </>
  );
};

export default App;
