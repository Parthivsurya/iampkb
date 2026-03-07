import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            title: 'Treely',
            description: 'You give us $1 we plant a tree of your choice with that dollar.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://treely-tau.vercel.app/index.html',
            year: '2024',
            image: '/Treely.png'
        },
        {
            title: 'Brain',
            description: 'A STEM based learning platform for students.',
            tech: ['React.js', 'three.js', 'Tailwind', 'Node.js', 'MongoDB'],
            link: 'https://brain.iampkb.dev',
            year: '2026',
            image: '/Brain.png'
        }
    ];

    return (
        <main>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <h1 className="slide-up mono" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                    &gt; ls ./projects<span className="text-accent">_</span>
                </h1>
                <p className="slide-up-delay text-accent mono" style={{ fontSize: '1rem', maxWidth: '650px', marginBottom: '2.5rem' }}>
                    Things I've built.
                </p>

                <div className="projects-grid slide-up-delay-2">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <span className="year-badge">{project.year}</span>

                            <div className="project-image-placeholder">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} Preview`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.1 }}>
                                        <span className="mono" style={{ fontSize: '3rem' }}>&lt;/&gt;</span>
                                    </div>
                                )}
                            </div>

                            <div className="project-overlay">
                                <h3 className="mono">{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem', marginBottom: '0.5rem' }}>
                                            <span className="tech-dot"></span>
                                            <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{tech}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: '1.5rem' }}>
                                    <a href={project.link} className="btn btn-primary mono" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', width: '100%', textAlign: 'center' }}>
                                        run {project.title.toLowerCase()}.exe
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="button-group slide-up-delay-3" style={{ marginTop: '4rem' }}>
                    <Link to="/" className="btn mono">
                        cd ..
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Projects;
