import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import NotFound from "./pages/NotFound/NotFound";


function App() {

  return (
    
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<Project />} />

        </Route>     

        <Route path="*" element={<NotFound />} />  


      </Routes>
    </BrowserRouter>

  );

}

export default App
