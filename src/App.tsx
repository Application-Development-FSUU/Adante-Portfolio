import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Growth } from './components/Growth';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Growth />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
