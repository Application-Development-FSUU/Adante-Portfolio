import { motion } from 'framer-motion';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          whileHover={{ y: -5 }}
        >
          <h3>Joshua Adante</h3>
          <p>Web Developer & Graphic Designer</p>
        </motion.div>

        <motion.div 
          className="footer-section"
          whileHover={{ y: -5 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          whileHover={{ y: -5 }}
        >
          <h3>Connect</h3>
          <ul>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </motion.div>
      </div>

      <div className="footer-divider"></div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} Joshua Adante. All rights reserved.</p>
        <p className="footer-credit">
          Built with <span className="highlight">React.js</span> & <span className="highlight">Framer Motion</span>
        </p>
      </motion.div>
    </motion.footer>
  );
};
