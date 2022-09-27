import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="about text ">
        <h1>Hi,I am Ketan</h1>
        <h3>Career Objective :</h3>
        <p>
          Looking forward to an opportunity for working in a dynamic,challenging
          environment, where I can utilize my skills for developing my career
          and for the growth of the organization.
        </p>
        <h3>Skills :</h3>
        <div>
          <label>Html</label>
          <progress id="file" value="90" max="100"></progress>
          <span>90%</span>
       
          <label>Javascript</label>
          <progress id="file" value="80" max="100"></progress>
          <span>80%</span>
        </div>

        <div>
          <label>Angular</label>
          <progress id="file" value="80" max="100"></progress>
          <span>80%</span>
       
          <label>React</label>
          <progress id="file" value="70" max="100"></progress>
          <span>70%</span>
        </div>

      

        <h3>Language :</h3>
      <div>
          <label>Marathi</label>
          <progress id="file" value="100" max="100"></progress>
      
      
          <label>Hindi</label>
          <progress id="file" value="90" max="100"></progress>      
      </div>
      <div>
          <label>English</label>
          <progress id="file" value="60" max="100"></progress>
      </div>

        <div>
          <h3>Academics :</h3>
          <table id="academics">
            <tr>
              <th>Qualification </th>
              <th>College</th>
              <th>Year</th>
              <th>Percentage</th>
            </tr>
            <tr>
              <td>SSC </td>
              <td>H.V.T.K</td>
              <td>2016</td>
              <td>80.80</td>
            </tr>
            <tr>
              <td>HSC </td>
              <td>H.V.T.K</td>
              <td>2018</td>
              <td>64.00</td>
            </tr>
            <tr>
              <td>BSC(c.s) </td>
              <td>Pemraj Sarda College</td>
              <td>2018</td>
              <td>73.53</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="about image ">
        <img src="./assets/login.png" className="image" alt=""></img>
      </div>
    </div>
 
  );
}

export default About