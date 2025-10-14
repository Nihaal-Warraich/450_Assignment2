import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "New Jersey Institute of Technology",
      year: "2022-2026",
      gpa: "3.8/4.0"
    }
  ];

  const experience = [
    {
      title: "Data Analyst Intern",
      company: "AT&T",
      period: "Summer 2025",
      responsibilities: [
        "Applied context engineering to improve TXT-to-SQL LLM performance.",
        "Present results to senior leaderhsip, demonstrating the effectiveness of context engineering",
        "Developed SQL filter in Google BigQuery to extract and refine critical datasets."
      ]
    },
    {
      title: "Data Science Intern",
      company: "EOS Energy Enterprises",
      period: "Summer 2024",
      responsibilities: [
        "Designed and implemented machine learning models (DBSCAN, fuzzy clustering, Decision Trees) to analyze experimental data",
        "Designed a robust down sampling algorithm for PostgreSQL data streams"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C++"],
    "Frameworks & Libraries": ["Plotly", "Dash", "Pandas", "Keras"],
    "Tools & Technologies": ["Tableau", "PostgreSQL", "Snowflake", "DataBricks"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;