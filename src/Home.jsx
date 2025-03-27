import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="page-section">
      <div className="hero-section">
        <div className="left-column">
          <h1 className="name-title">
            <span className="greeting">Hello, I'm</span>
            VINESH VANGAPANDU
          </h1>
          <p className="description">
            Data Engineer & ETL Developer specializing in building scalable pipelines using Hadoop, Python, SQL 
            and deploying predictive models to drive data-driven decisions. 
            Passionate about transforming raw data into strategic assets that fuel innovation and efficiency.
          </p>
          
          <Link to="/about" className="about-me-link">
            About Me <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="right-column">
          <div className="image-placeholder">
            <img 
              src={`${import.meta.env.BASE_URL}IMG_5633.jpg`}
              alt="Vinesh Vangapandu"
              className="profile-photo"
            />
          </div>
          <h2 className="job-title">Data Engineer | ETL Developer</h2>
          <a 
            className="resume-button"
            href="/resume.pdf" 
            download="VineshResume.pdf"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;