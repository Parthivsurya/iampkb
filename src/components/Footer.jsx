import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-content">
                <div>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        © {currentYear} Parthivsurya. Built with React.
                    </p>
                </div>
                <div className="social-links">
                    <a href="https://github.com/parthivsurya" className="social-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/parthivsurya" className="social-link" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:contact@parthivsurya.com" className="social-link">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
