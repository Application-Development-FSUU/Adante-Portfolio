import { motion } from 'framer-motion';
import { useState } from 'react';
import './Navigation.css';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Learning', href: '#growth' },
    { name: 'Tech', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#home">
            <span></span>
          </a>
        </motion.div>

        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul 
          className={`nav-menu ${isOpen ? 'active' : ''}`}
        >
          {navLinks.map((link, index) => (
            <li 
              key={index}
              onClick={handleNavClick}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
