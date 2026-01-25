import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main>
            <div className="container">
                <h1 className="fade-in">About <span className="gradient-text">Me</span></h1>
                <div className="about-content fade-in-delay">
                    <p>Hello! I'm Parthivsurya.</p>
                    <p style={{ marginTop: '1rem' }}>
                        I'm a developer passionate about coding. I love working on both backend
                        architectures and frontend interfaces.
                    </p>
                </div>
                <Link to="/" className="project-btn fade-in-delay" style={{ marginTop: '2rem', animationDelay: '0.5s' }}>
                    <span className="arrow" style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>→</span> Back Home
                </Link>
            </div>
        </main>
    );
};

export default About;
