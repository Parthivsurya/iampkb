import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = 'parthivsuryakb@gmail.com';

    const handleCopyEmail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contactLinks = [
        {
            icon: <FaLinkedin size={24} />,
            title: 'LinkedIn',
            link: 'https://linkedin.com/in/parthivsurya',
            text: 'Connect on LinkedIn',
            color: '#0077b5'
        },
        {
            icon: <FaGithub size={24} />,
            title: 'GitHub',
            link: 'https://github.com/parthivsurya',
            text: 'Follow on GitHub',
            color: '#333'
        },
        {
            icon: <FaEnvelope size={24} />,
            title: 'Email',
            link: `mailto:${email}`,
            text: email,
            isEmail: true,
            color: '#ea4335'
        }
    ];

    return (
        <main>
            <div className="container contact-container">
                <h1 className="slide-up">Get in <strong>Touch</strong></h1>
                <p className="slide-up-delay" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="contact-grid slide-up-delay">
                    {contactLinks.map((item, index) => (
                        <div key={index} className="contact-card">
                            <div className="icon-box" style={{ color: 'var(--accent)' }}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>

                            {item.isEmail ? (
                                <div className="email-wrapper">
                                    <a href={item.link} className="contact-link">
                                        {item.text}
                                    </a>
                                    <button
                                        className="copy-btn"
                                        onClick={handleCopyEmail}
                                        aria-label="Copy email address"
                                    >
                                        {copied ? <FaCheck /> : <FaCopy />}
                                    </button>
                                    {copied && <span className="copied-tooltip">Copied!</span>}
                                </div>
                            ) : (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                                    {item.text} <span>→</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <Link
                    to="/"
                    className="btn btn-secondary slide-up-delay"
                    style={{ marginTop: '4rem' }}
                >
                    <span className="arrow" style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>→</span>
                    Back Home
                </Link>
            </div>
        </main>
    );
};

export default Contact;
