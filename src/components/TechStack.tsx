import { motion } from 'framer-motion';
import './TechStack.css';

interface Technology {
  id: number;
  name: string;
  icon: string;
  category: string;
}

export const TechStack = () => {
  const technologies: Technology[] = [
    { id: 1, name: 'React.js', icon: '⚛️', category: 'Frontend' },
    { id: 2, name: 'JavaScript', icon: '✨', category: 'Language' },
    { id: 3, name: 'TypeScript', icon: '📘', category: 'Language' },
    { id: 4, name: 'HTML5', icon: '🏗️', category: 'Markup' },
    { id: 5, name: 'CSS3', icon: '🎨', category: 'Styling' },
    { id: 6, name: 'Framer Motion', icon: '🎬', category: 'Animation' },
    { id: 7, name: 'Git & GitHub', icon: '🔧', category: 'Tools' },
    { id: 8, name: 'Figma', icon: '🖌️', category: 'Design' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="tech-stack" className="tech-stack">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Tech Stack</h2>
        <p className="tech-subtitle">
          Professional technologies for modern web development and design
        </p>
      </motion.div>

      <motion.div 
        className="tech-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {technologies.map((tech) => (
          <motion.div 
            key={tech.id}
            className="glass-card tech-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.7)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="tech-icon">{tech.icon}</div>
            <h3>{tech.name}</h3>
            <p className="tech-category">{tech.category}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="tech-highlight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          I'm constantly expanding my skill set. Currently exploring advanced React patterns, 
          backend development, and full-stack applications.
        </p>
      </motion.div>
    </section>
  );
};
