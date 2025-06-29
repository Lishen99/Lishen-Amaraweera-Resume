import Header from '../components/Header';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}