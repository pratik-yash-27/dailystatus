import React from 'react';
import "./Portfolio.css"
const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio">
        <div className="portfolio bg ">
          <img src="./assets/main2.png" className="imageOne" alt="" />
        </div>

        <div className="portfolio content">
          <div className="experience">
            <h2>
              <i className="fa fa-suitcase"> </i> Work Experience
            </h2>
            <h5 className="w3-opacity">
              <b>Front End Developer</b>
            </h5>
            <h6>
              <i className="fa fa-calendar "></i> 2 years
            </h6>
            <p>
              Lorem ipsum dolor sit amet. Praesentium magnam consectetur
              <br /> vel in deserunt aspernatur est reprehenderit sunt hic.
              <br /> Nulla tempora soluta ea et odio, unde doloremque
              repellendus iure, iste.
            </p>
          </div>

          <hr />
          <div className="experience">
            <h2>
              <i className="fa fa-suitcase"> </i> Work Experience
            </h2>

            <h5 className="w3-opacity">
              <b>Back End Developer</b>
            </h5>

            <h6>
              <i className="fa fa-calendar "></i> 3 years
            </h6>
            <p>
              Lorem ipsum dolor sit amet. Praesentium magnam consectetur
              <br /> vel in deserunt aspernatur est reprehenderit sunt hic.
              <br /> Nulla tempora soluta ea et odio, unde doloremque
              repellendus iure, iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio