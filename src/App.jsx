import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import NotFound from "./pages/NotFound/NotFound";


function App() {

  return (
    
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />

        </Route>     

        <Route path="*" element={<NotFound />} />  


      </Routes>
    </BrowserRouter>

  );

}

export default App
