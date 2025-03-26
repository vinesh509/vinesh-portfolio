import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="main-content">
      <div className="about-container">
        <h1 className="section-title">About Me</h1>
        <div className="divider"></div>
        
        <div className="about-text-full">
          <p className="about-description">
            Hi, This is Vinesh Vangapandu! 👋🏼<br/><br/>
            A Data Engineer and ETL Developer with a Master’s in Computer Science 🎓, I transform raw data into strategic insights using Python, Hadoop, Hive, and Spark. My expertise spans building scalable ETL pipelines, designing MapReduce jobs for data optimization, and implementing machine learning models for fraud detection 🕵️♂️. I’ve engineered solutions like AI-driven robotic automation (C++), freight logistics optimization (Python/PuLP), and data-driven pricing strategies for retail Liquor, boosting profitability by 15%.<br/><br/>
            Proficient in AWS S3, Tableau, and Power BI, I thrive on solving complex challenges, from merging district-level datasets for Ohio school analytics 📊 to deploying cluster analysis for customer segmentation. Certified in Machine Learning and Python, I blend technical rigor with collaborative problem-solving 🧩 to turn data chaos into clarity.<br/><br/>
          </p>
        </div>

        {/* Navigation Link to Skills Page */}
        <div className="about-navigation">
          <Link to="/skills" className="nav-link">
            Skills <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;