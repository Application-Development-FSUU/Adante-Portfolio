import { motion } from 'framer-motion';
import './About.css';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
      </motion.div>

      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="glass-card neon-border" variants={itemVariants}>
          <h3>Professional Background</h3>
          <p>
            I'm a Web Developer and Graphic Designer dedicated to creating digital products that 
            are intuitive, visually appealing, and user-centered. With strong technical skills and 
            design thinking, I transform ideas into functional, beautiful web applications.
          </p>
        </motion.div>

        <motion.div className="glass-card neon-border" variants={itemVariants}>
          <h3>Technical Expertise</h3>
          <p>
            Proficient in React.js, HTML5, CSS3, and JavaScript (ES6+). I build responsive web 
            applications with clean, maintainable code. Strong understanding of component-based 
            architecture, performance optimization, and modern development best practices.
          </p>
        </motion.div>

        <motion.div className="glass-card neon-border" variants={itemVariants}>
          <h3>Design Philosophy</h3>
          <p>
            I believe in simplicity, clarity, and user-first thinking. Every design decision is 
            intentional—focused on accessibility, performance, and visual coherence. Committed to 
            continuous learning and implementing industry standards.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="about-highlight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          I specialize in solving problems through thoughtful design and clean code. 
          My approach combines technical excellence with creative problem-solving to deliver 
          digital solutions that make a real impact.
        </p>
      </motion.div>
    </section>
  );
};
