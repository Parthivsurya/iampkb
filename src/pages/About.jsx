import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const languagesAndFrameworks = [
        'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS',
        'React.js', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Three.js'
    ];

    const toolsAndDatabases = [
        'Git', 'GitHub', 'Docker', 'MongoDB', 'PostgreSQL', 'Firebase', 'Vercel', 'Figma'
    ];

    return (
        <main>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <h1 className="slide-up mono" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                    &gt; whoami<span className="text-accent">_</span>
                </h1>

                <div className="about-content slide-up-delay" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                    <p className="mono" style={{ color: 'var(--text-primary)' }}>
                        Hey there! I'm Parthivsurya, a developer who loves turning ideas into working code.
                        I'm passionate about building clean, functional, and visually engaging applications while learning new technologies along the way.
                    </p>
                    <p className="mono mt-4" style={{ color: 'var(--text-secondary)' }}>
                        Every project is an opportunity to learn something new, improve my craft, and create digital experiences that leave a lasting impact.
                    </p>
                </div>

                <div className="slide-up-delay-2" style={{ marginBottom: '4rem' }}>
                    <h2 className="mono" style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-accent)' }}>
                        <span className="text-accent">#</span> Experience
                    </h2>

                    <div className="timeline-card">
                        <div className="timeline-header">
                            <span className="timeline-title mono">Full Stack Developer</span>
                            <span className="timeline-date">[ 2023 - Present ]</span>
                        </div>
                        <div className="timeline-subtitle">Self-Taught / Freelance</div>
                        <p style={{ fontSize: '0.95rem' }}>
                            Building personal projects, expanding knowledge in modern web frameworks, and contributing to open-source software. Developed platforms like Brain and Treely to solve real-world problems.
                        </p>
                    </div>
                </div>

                <div className="slide-up-delay-3" style={{ marginBottom: '4rem' }}>
                    <h2 className="mono" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                        <span className="text-accent">#</span> Skills_&_Tech
                    </h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 className="mono" style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Languages & Frameworks</h3>
                        <div className="pill-container">
                            {languagesAndFrameworks.map((skill, index) => (
                                <span key={`lang-${index}`} className="pill">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mono" style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Tools & Databases</h3>
                        <div className="pill-container">
                            {toolsAndDatabases.map((tool, index) => (
                                <span key={`tool-${index}`} className="pill">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="button-group slide-up-delay-3" style={{ marginTop: '4rem', justifyContent: 'center' }}>
                    <Link to="/" className="btn mono">
                        cd ..
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default About;
