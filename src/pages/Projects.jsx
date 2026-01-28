import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [];

    return (
        <main>
            <div className="container">
                <h1 className="slide-up">My <strong>Projects</strong></h1>
                <p className="slide-up-delay" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', textAlign: 'center' }}>
                    Here are some of the things I've been working on. Each project taught me something new.
                </p>

                <div className="projects-grid slide-up-delay" style={{ animationDelay: '0.2s' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    to="/"
                    className="btn btn-secondary slide-up-delay"
                    style={{ marginTop: '3rem', animationDelay: '0.4s' }}
                >
                    <span className="arrow" style={{ transform: 'rotate(180deg)' }}>→</span>
                    Back Home
                </Link>
            </div>
        </main>
    );
};

export default Projects;
