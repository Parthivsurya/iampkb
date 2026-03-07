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
            icon: <FaLinkedin />,
            title: 'LinkedIn',
            link: 'https://linkedin.com/in/parthivsurya',
            text: 'linkedin.com/in/parthivsurya',
        },
        {
            icon: <FaGithub />,
            title: 'GitHub',
            link: 'https://github.com/parthivsurya',
            text: 'github.com/parthivsurya',
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            link: `mailto:${email}`,
            text: email,
            isEmail: true,
        }
    ];

    return (
        <main>
            <div className="container contact-container" style={{ position: 'relative', zIndex: 10 }}>
                <h1 className="slide-up mono" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                    &gt; ping contact<span className="text-accent">_</span>
                </h1>
                <p className="slide-up-delay mono text-accent" style={{ fontSize: '1rem', maxWidth: '650px', marginBottom: '3rem' }}>
                    Let's connect and build something.
                </p>

                <div className="contact-grid slide-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {contactLinks.map((item, index) => (
                        <div key={index} className="timeline-card" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', marginBottom: '0' }}>
                            <div style={{ fontSize: '1.5rem', marginRight: '1.5rem', color: 'var(--text-secondary)' }}>
                                {item.icon}
                            </div>

                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 className="mono" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{item.title}</h3>

                                {item.isEmail ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <a href={item.link} className="mono" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                                            {item.text}
                                        </a>
                                        <button
                                            onClick={handleCopyEmail}
                                            aria-label="Copy email address"
                                            style={{
                                                background: 'transparent',
                                                border: '1px solid var(--border-color)',
                                                color: 'var(--text-secondary)',
                                                padding: '0.3rem 0.6rem',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {copied ? <FaCheck color="var(--accent-green)" size={12} /> : <FaCopy size={12} />}
                                        </button>
                                        {copied && <span className="mono" style={{ color: 'var(--accent-green)', fontSize: '0.8rem' }}>Copied!</span>}
                                    </div>
                                ) : (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="mono" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                                        {item.text}
                                    </a>
                                )}
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

export default Contact;
