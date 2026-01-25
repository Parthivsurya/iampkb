import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <main>
            <div className="container">
                <h1 className="fade-in">Coming <span className="gradient-text">Soon</span></h1>
                <Link to="/" className="project-btn fade-in-delay" style={{ animationDelay: '0.5s' }}>
                    <span className="arrow" style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>→</span> Back Home
                </Link>
            </div>
        </main>
    );
};

export default Projects;
