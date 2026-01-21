import { motion } from 'framer-motion';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'What I Know',
      category: 'Core Skills',
      description: 'Professional portfolio demonstrating expertise in modern web development. Showcases responsive design, component architecture, and clean code practices with React.js and CSS3.',
      tech: ['React.js', 'CSS3', 'Responsive Design'],
      github: 'https://github.com/joshuaadante',
      demo: '#'
    },
    {
      id: 2,
      title: 'What I Learned',
      category: 'Growth & Development',
      description: 'Full-featured web application showcasing proficiency with React hooks, state management patterns, and API integration. Demonstrates practical application of advanced JavaScript concepts.',
      tech: ['React Hooks', 'State Management', 'API Integration'],
      github: 'https://github.com/joshuaadante',
      demo: '#'
    },
    {
      id: 3,
      title: 'What I Aspire To',
      category: 'Vision & Future',
      description: 'Modern SaaS application prototype with advanced UI/UX patterns, performance optimization, and scalable architecture. Represents potential for full-stack development and enterprise-level solutions.',
      tech: ['React.js', 'Framer Motion', 'Full-Stack Ready'],
      github: 'https://github.com/joshuaadante',
      demo: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Featured Projects</h2>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="glass-card project-card neon-border"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="project-category">{project.category}</div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
