import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTabActive } from './redux/actions';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

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
      const scrollPosition = window.scrollY + 200; // Increased offset for better trigger

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [dispatch]);

  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
