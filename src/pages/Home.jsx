import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <div className="container">
                <h1 className="fade-in">hey its <span className="gradient-text">parthivsurya</span></h1>
                <div className="button-group fade-in-delay">
                    <Link to="/projects" className="project-btn">
                        Projects <span className="arrow">→</span>
                    </Link>
                    <Link to="/about" className="project-btn secondary">
                        About
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Home;
