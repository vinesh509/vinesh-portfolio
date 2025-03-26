import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const skillsData = {
    programming: [
      { name: 'Python', level: 'Experienced', icon: 'fab fa-python' },
      { name: 'Java', level: 'Experienced', icon: 'fab fa-java' },
      { name: 'C++', level: 'Intermediate', icon: 'fas fa-code' },
      { name: 'HTML5', level: 'Experienced', icon: 'fab fa-html5' },
      { name: 'JavaScript', level: 'Intermediate', icon: 'fab fa-js-square' },
      { name: 'SQL', level: 'Experienced', icon: 'fas fa-database' },
      { name: 'Advanced Excel', level: 'Intermediate', icon: 'fas fa-file-excel' }
    ],
    operatingSystems: [
      { name: 'Windows 7/10', level: 'Intermediate', icon: 'fab fa-windows' },
      { name: 'Linux', level: 'Intermediate', icon: 'fab fa-linux' },
      { name: 'Mac OS X', level: 'Experienced', icon: 'fab fa-apple' }
    ],
    software: [
      { name: 'Microsoft Office', level: 'Experienced', icon: 'fas fa-file-word' },
      { name: 'Orange 3.0', level: 'Intermediate', icon: 'fas fa-chart-pie' },
      { name: 'Jupyter Notebook', level: 'Experienced', icon: 'fas fa-book' },
      { name: 'Anaconda Navigator', level: 'Intermediate', icon: 'fas fa-cogs' },
      { name: 'Power BI', level: 'Intermediate', icon: 'fas fa-chart-line' },
      { name: 'IBM SPSS', level: 'Basic', icon: 'fas fa-chart-bar' },
      { name: 'VS Code', level: 'Experienced', icon: 'fas fa-code' },
      { name: 'X Code', level: 'Basic', icon: 'fab fa-apple' },
      { name: 'Android Studio', level: 'Intermediate', icon: 'fab fa-android' },
      { name: 'R Studio', level: 'Intermediate', icon: 'fas fa-chart-area' },
      { name: 'Terminal', level: 'Experienced', icon: 'fas fa-terminal' }
    ],
    otherSkills: [
      { name: 'Data Analysis', level: 'Experienced', icon: 'fas fa-chart-bar' },
      { name: 'ETL Pipelines', level: 'Intermediate', icon: 'fas fa-project-diagram' },
      { name: 'Machine Learning', level: 'Intermediate', icon: 'fas fa-brain' },
      { name: 'Data Visualization', level: 'Experienced', icon: 'fas fa-chart-line' },
      { name: 'Cloud Computing', level: 'Intermediate', icon: 'fas fa-cloud' }
    ]
  };

  return (
    <main className="main-content">
      <div className="skills-container">
        <h1 className="section-title">Skills & Expertise</h1>
        <div className="divider"></div>

        {/* 4-Grid Layout */}
        <div className="skills-grid">
          {/* Programming Languages */}
          <section className="skills-section">
            <h2>Programming Languages</h2>
            <div className="skills-list">
              {skillsData.programming.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </section>

          {/* Operating Systems */}
          <section className="skills-section">
            <h2>Operating Systems</h2>
            <div className="skills-list">
              {skillsData.operatingSystems.map((os, index) => (
                <SkillItem key={index} skill={os} />
              ))}
            </div>
          </section>

          {/* Software Applications */}
          <section className="skills-section">
            <h2>Software Applications</h2>
            <div className="skills-list">
              {skillsData.software.map((app, index) => (
                <SkillItem key={index} skill={app} />
              ))}
            </div>
          </section>

          {/* Other Skills */}
          <section className="skills-section">
            <h2>Other Skills</h2>
            <div className="skills-list">
              {skillsData.otherSkills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </section>
        </div>

        {/* Navigation Link to Projects Page */}
        <div className="skills-navigation">
          <Link to="/projects" className="nav-link">
            Projects <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </main>
  );
};

// Reusable SkillItem Component
const SkillItem = ({ skill }) => {
  return (
    <div className="skill-item">
      <i className={skill.icon}></i> {/* Skill icon */}
      <div className="skill-details">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}</span>
      </div>
    </div>
  );
};

export default Skills;