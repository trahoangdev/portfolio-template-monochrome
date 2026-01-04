import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

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
