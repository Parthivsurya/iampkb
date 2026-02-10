import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <div className="container">
                <h1 className="slide-up">
                    Hi, I'm <strong>Parthivsurya</strong>
                </h1>
                <p className="slide-up-delay" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Developer, problem solver, and perpetual learner. I build things for the web and occasionally break them in the process.
                </p>
                <div className="button-group slide-up-delay">
                    <Link to="/projects" className="btn">
                        View Projects <span className="arrow">→</span>
                    </Link>
                    <Link to="/about" className="btn btn-secondary">
                        About Me
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        Contact me
                    </Link>
                    {/* <a href="/Parthivsurya.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a> */}
                </div>
            </div>
        </main>
    );
};

export default Home;
