import { motion } from 'framer-motion';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <motion.div 
        className="hero-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="hero-profile"
          animate={{ 
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <img 
            src="/profile/joshua.jpg" 
            alt="Joshua Adante"
            className="profile-image"
          />
        </motion.div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="hero-title"
          animate={{ 
            textShadow: [
              '0 0 10px rgba(0, 229, 255, 0.5), 0 0 20px rgba(0, 229, 255, 0.3)',
              '0 0 20px rgba(0, 229, 255, 0.8), 0 0 30px rgba(0, 229, 255, 0.6)',
              '0 0 10px rgba(0, 229, 255, 0.5), 0 0 20px rgba(0, 229, 255, 0.3)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Joshua Adante
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Web Developer & Graphic Designer
        </motion.p>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I craft beautiful, responsive web experiences using modern technologies. Specializing in 
          frontend development with a focus on performance, accessibility, and exceptional user experience.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
      </motion.div>

      <motion.div 
        className="hero-glow"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};
