import { motion } from 'framer-motion';
import { useState } from 'react';
import './Navigation.css';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Learning', href: '#growth' },
    { name: 'Tech', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' }
  ];

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

        <motion.ul 
          className={`nav-menu ${isOpen ? 'active' : ''}`}
          animate={isOpen ? { x: 0 } : { x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(false)}
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};
