import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main style={{ alignItems: 'center', textAlign: 'center', paddingTop: '10rem' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <div className="slide-up" style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: '#111',
                    border: '1px dashed var(--border-color)',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    <img src="/P_FP.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <h1 className="slide-up-delay mono" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
                    Parthivsurya<span className="text-accent">_</span>
                </h1>

                <p className="slide-up-delay-2 mono text-accent" style={{ marginBottom: '2rem', fontSize: '1rem' }}>
                    &gt; Turning complex problems into elegant code.
                </p>

                <div className="pill-container slide-up-delay-2" style={{ justifyContent: 'center', marginBottom: '3rem', borderTop: 'none' }}>
                    <span className="pill">Developer</span>
                    <span className="pill">Problem Solver</span>
                    <span className="pill">Creative Thinker</span>
                    <span className="pill">Perpetual Learner</span>
                </div>

                <div className="button-group slide-up-delay-3" style={{ justifyContent: 'center', marginBottom: '4rem', marginTop: '0' }}>
                    <Link to="/projects" className="btn btn-primary mono" style={{ fontSize: '0.9rem' }}>
                        ./view_projects.sh
                    </Link>
                    <Link to="/contact" className="btn mono" style={{ fontSize: '0.9rem' }}>
                        cat contact.txt
                    </Link>
                </div>

                <div className="social-links slide-up-delay-3" style={{ marginTop: 'auto', paddingTop: '2rem', width: '100%', justifyContent: 'center' }}>
                    <a href="https://github.com/Parthivsurya" target="_blank" rel="noopener noreferrer" className="social-link mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        [ GitHub ]
                    </a>
                    <a href="mailto:parthivsuryakb@gmail.com" className="social-link mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        [ Email ]
                    </a>
                </div>

            </div>
        </main>
    );
};

export default Home;
