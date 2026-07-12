import React  from "react";
import "./index.css";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Contact from "./routes/Contact.js";
import Project from "./routes/Project.js";
import CFDProject from "./routes/CFDProject.js";
import AIAAProject from "./routes/AIAAProject.js";
import VFRAssistantProject from "./routes/VFRAssistantProject.js";
import MLvsDLProject from "./routes/MLvsDLProject.js";
import ThesisProject from "./routes/ThesisProject.js";
import {Route,Routes} from "react-router-dom";


function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/project" element={<Project />}/>
    <Route path="/project/cfd" element={<CFDProject />}/>
    <Route path="/project/aiaa" element={<AIAAProject />}/>
    <Route path="/project/vfr-assistant" element={<VFRAssistantProject />}/>
    <Route path="/project/ml-vs-dl" element={<MLvsDLProject />}/>
    <Route path="/project/lvad-thesis" element={<ThesisProject />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
   </Routes>
   </>
  );
}

export default App;
