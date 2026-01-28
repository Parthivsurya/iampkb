import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const skills = [
        'JavaScript', 'React', 'Node.js', 'Python',
        'Git', 'REST APIs', 'SQL', 'HTML/CSS',
        'TypeScript', 'Express', 'MongoDB'
    ];

    return (
        <main>
            <div className="container">
                <h1 className="slide-up">About <strong>Me</strong></h1>

                <div className="about-content slide-up-delay">
                    <p>
                        Hey there! I'm Parthivsurya, a developer who loves turning ideas into working code.
                        I'm passionate about building clean, functional applications and learning new technologies along the way.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new frameworks, debugging mysterious errors at 2 AM,
                        or trying to convince myself that "it works on my machine" is a valid excuse.
                    </p>
                    <p>
                        I believe in writing code that's not just functional, but maintainable and elegant.
                        Every project is an opportunity to learn something new and improve my craft.
                    </p>
                </div>

                <div className="slide-up-delay" style={{ animationDelay: '0.3s' }}>
                    <h2 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1rem' }}>
                        Skills & Technologies
                    </h2>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
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

export default About;
