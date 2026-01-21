import { motion } from 'framer-motion';
import './Growth.css';

export const Growth = () => {
  const learningItems = [
    { id: 1, title: 'Advanced React Patterns', description: 'Custom hooks, render props, compound components' },
    { id: 2, title: 'UI/UX Principles', description: 'Design systems, accessibility, user research' },
    { id: 3, title: 'Animation Libraries', description: 'Framer Motion, GSAP, advanced CSS animations' },
    { id: 4, title: 'Backend Fundamentals', description: 'Node.js, Express, REST APIs, databases' },
    { id: 5, title: 'DevOps & Deployment', description: 'CI/CD pipelines, GitHub Actions, Vercel' },
    { id: 6, title: 'Web Performance', description: 'Optimization, lazy loading, code splitting' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="growth" className="growth">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Currently Learning</h2>
        <p className="growth-subtitle">
          Continuously expanding knowledge in modern web development and design practices
        </p>
      </motion.div>

      <motion.div 
        className="growth-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {learningItems.map((item, index) => (
          <motion.div 
            key={item.id}
            className="glass-card learning-card"
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.5)'
            }}
          >
            <div className="learning-number">{String(index + 1).padStart(2, '0')}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="learning-indicator">
              <motion.div 
                className="progress-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${60 + Math.random() * 30}%` }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
