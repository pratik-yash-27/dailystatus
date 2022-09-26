import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {" "}
      <header>
        <nav>
          <h2 class="logo">Portfolio</h2>
          <ul>
            <li>
          
              <Link to="Homes">Home</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
           
              <Link to="Resume">Resume</Link>
            </li>
            <li>
                  <Link to="Portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
          
        </nav>
      </header>
    </div>
  );
}

export default Header