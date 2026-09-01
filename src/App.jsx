import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from "./layouts/MainLayout";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useLenis from "./hooks/useLenis";
import useIsScrolled from "./hooks/useIsScrolled";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

function App() {

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );

}

function AppContent() {

  useSmoothScroll();
  // useLenis();
  useIsScrolled(360);

  return (
    
    <>
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>     

        <Route path="*" element={<NotFound />} />  

      </Routes>
    </>

  );

}

export default App
