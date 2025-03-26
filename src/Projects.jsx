import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Robot Arms Block Simulator',
      github: 'https://github.com/vinesh509/RobotArmsBlockSimulator',
      icon: 'fas fa-database'
    },
    {
      title: 'Project Two',
      description: 'Profit Maximizer of Wine Sales data using ML',
      github: 'https://github.com/vinesh509/WinesProfitMaximizer',
      icon: 'fas fa-brain'
    }
  ];

  const certificates = [
    { 
      title: 'Python',
      image: '/Certificates/PythonCertificate.png',
      fullImagePath: '/Certificates/PythonCertificate.png' 
    },
    { 
      title: 'Marchine Learning',
      image: '/Certificates/MLCertificate.png',
      fullImagePath: '/Certificates/MLCertificate.png'
    }
  ];
  
  {certificates.map((cert, index) => (
    <div key={index} className="certificate-card">
      <h3>{cert.title}</h3>
      <img 
        src={cert.image} 
        alt={cert.title} 
        className="certificate-image"
      />
      <a 
        href={cert.fullImagePath} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="view-certificate"
      >
        View Certificate
      </a>
    </div>
  ))}

  return (
    <main className="main-content">
      <div className="projects-certifications-container">
        <h1 className="section-title">Projects</h1>
        <div className="divider"></div>

        {/* Projects Grid */}
        <div className="grid-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <i className={`${project.icon} project-bg-icon`}></i>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.github} className="github-button">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

     
        {/* Certifications Grid */}
<h2 className="section-title" style={{ marginTop: '3rem' }}>Certificates</h2>
<div className="divider"></div>
<div className="grid-container">
  {certificates.map((cert, index) => (
    <div key={index} className="certificate-card">
      <img 
        src={cert.image} 
        alt={cert.title} 
        className="certificate-image"
      />
      <div className="certificate-overlay">
        <a 
          href={cert.fullImagePath} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="view-certificate"
        >
          {cert.title}
        </a>
      </div>
    </div>
  ))}
</div>

        {/* Navigation Link to Home Page */}
        <div className="projects-navigation">
          <Link to="/" className="nav-link">
            Home <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Projects;