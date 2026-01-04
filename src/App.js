import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTabActive } from './redux/actions';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import ProjectDetail from './components/ProjectDetail';
import Uses from './components/Uses';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Preloader from './components/Preloader';
import Footer from './components/Footer';

function App() {
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll Spy Logic
  const activeSectionRef = useRef(null); // Track locally to avoid re-renders

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'skills', 'projects', 'contacts'];
      // const scrollPosition = window.scrollY + 200; // Increased offset for better trigger

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();

          // Check if the section is currently in the active viewport zone
          // '200' is our offset trigger line
          if (rect.top <= 200 && rect.bottom > 200) {
            if (activeSectionRef.current !== sectionId) {
              activeSectionRef.current = sectionId;
              dispatch(changeTabActive(sectionId));
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);

    // Check immediately on mount to ensure correct state if page is reloaded or navigated to
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={
        <main>
          <Preloader />
          <NavBar />
          <Home />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
        </main>
      } />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/uses" element={<Uses />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
