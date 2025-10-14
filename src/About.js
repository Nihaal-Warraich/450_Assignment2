// src/About.js
import { Component } from 'react';
import './About.css';
import profilePic from './profile-img.JPG';



class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h1 className="about-title">
          About Me 
        </h1>

        <div className="about-content">
          <div className="photo-card">
            <img src={profilePic} alt="Nihaal Warraich" className="profile-photo" />
          </div>
          <div className="about-text">
            <p>
              Hello! My name is Nihaal Warraich! I'm a senior at the New Jersey Institute of Technology where I am pursuing a Bachelors of Science in Computer Science 
              and a Minor in Applied Mathematics!
            </p>

            <p>
              I am passionate about exploring the realm of data science and machine learning and have worked with numerous real world problems yada yada . 
            </p>

            <h3 className="skills-title">Skills &amp; Technologies</h3>
            <div className="skills-list">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Statistics</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
