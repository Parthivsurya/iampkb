import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const Contact = [
        {
            title: 'LinkeLN',
            link: 'https://linkedin.com/in/parthivsuryakb'
        },
        {
            title: 'Github',
            link: 'https://github.com/parthivsuryakb'
        }
        , {
            title: 'Gmail',
            link: 'mailto:parthivsuryakb@gmail.com'
        }
    ];

    return (
        <main>
            <div className="container">
                <h1 className="slide-up">CONTACT <strong>ME</strong></h1>
                <p className="slide-up-delay" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', textAlign: 'center' }}>
                    HEHEE Waana connect with me

                </p>
                <div className="projects-grid slide-up-delay" style={{ animationDelay: '0.1s' }}>
                    {Contact.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <a href={project.link} className="btn-small" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 'bold' }}>
                                hehe click here
                            </a>
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

export default Contact;
