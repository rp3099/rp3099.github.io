import React, { Suspense, lazy } from "react";
import "./index.css";
import Home from "./routes/Home.js";
import {Route,Routes} from "react-router-dom";

// Route-level code splitting: each page loads as its own chunk on demand,
// so the initial bundle only carries the Home page.
const About = lazy(() => import("./routes/About.js"));
const Contact = lazy(() => import("./routes/Contact.js"));
const Project = lazy(() => import("./routes/Project.js"));
const CFDProject = lazy(() => import("./routes/CFDProject.js"));
const AIAAProject = lazy(() => import("./routes/AIAAProject.js"));
const VFRAssistantProject = lazy(() => import("./routes/VFRAssistantProject.js"));
const MLvsDLProject = lazy(() => import("./routes/MLvsDLProject.js"));
const TrainingMethodsProject = lazy(() => import("./routes/TrainingMethodsProject.js"));
const ThesisProject = lazy(() => import("./routes/ThesisProject.js"));

function App() {
  return (
   <>
   <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#0b0c10" }} />}>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/project" element={<Project />}/>
    <Route path="/project/cfd" element={<CFDProject />}/>
    <Route path="/project/aiaa" element={<AIAAProject />}/>
    <Route path="/project/vfr-assistant" element={<VFRAssistantProject />}/>
    <Route path="/project/ml-vs-dl" element={<MLvsDLProject />}/>
    <Route path="/project/ml-training-methods" element={<TrainingMethodsProject />}/>
    <Route path="/project/lvad-thesis" element={<ThesisProject />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
   </Routes>
   </Suspense>
   </>
  );
}

export default App;
