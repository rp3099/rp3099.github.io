import React from 'react';
import './VFRAssistantDetailsStyles.css';
import { FaArrowLeft, FaFileDownload, FaExternalLinkAlt, FaRobot, FaBullseye, FaBookOpen, FaClipboardList, FaCogs, FaToolbox, FaShieldAlt, FaLightbulb, FaGem } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox.js';

// Import assets
import assistantUi from '../assets/vfr/vfr_assistant_feature.svg';

const VFRAssistantDetails = () => {
  return (
    <Lightbox>
    <div className="vfr-details-section">
      <div className="vfr-details-container">

        {/* Back Link */}
        <Link to="/project" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header Metadata */}
        <div className="report-meta">
          <span><strong>Project:</strong> VFR PPL AI Assistant</span>
          <span><strong>Type:</strong> Class Assignment</span>
          <span><strong>Platform:</strong> Chatbase (Custom GPT)</span>
          <span><strong>Scope:</strong> FAA VFR Regulations &amp; PPL Prep</span>
        </div>

        {/* Main Title */}
        <h1 className="report-title">VFR PPL ASSISTANT: Domain-Reliable AI Flight Partner</h1>

        {/* ─── Field: Link to Assistant ─── */}
        <div className="try-card">
          <div className="try-text">
            <h3><FaRobot /> Link to the Assistant</h3>
            <p>Access the live custom GPT chat assistant deployed via Chatbase to test regulatory questions, request practice tests, or review general private-pilot topics.</p>
          </div>
          <a href="https://www.chatbase.co/gydZIJUcrbP7WF9NFGkSp/help" target="_blank" rel="noopener noreferrer" className="try-btn">
            Open Assistant <FaExternalLinkAlt />
          </a>
        </div>

        {/* Featured Image */}
        <div className="featured-image-container">
          <img src={assistantUi} alt="VFR PPL Assistant — AI Flight Partner" className="featured-image" />
          <p className="image-caption">Figure 1: The VFR PPL Assistant — an FAA-grounded, "cite or flag" AI study partner for private-pilot training.</p>
        </div>

        {/* ─── Field: Description ─── */}
        <section className="report-section">
          <h2><FaBookOpen /> Description</h2>
          <p>
            The <strong>VFR PPL Assistant</strong> is a custom GPT chatbot instructed to help a student
            private pilot with anything from regulations and practice tests to general aviation topics.
            It behaves like a Certified Flight Instructor (CFI), grounding its guidance in official FAA
            material while keeping explanations approachable.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h4><FaLightbulb /> Digestible Explanations</h4>
              <p>Breaks complex airspace, weather, or aircraft-systems topics into smaller pieces and checks understanding before moving on.</p>
            </div>
            <div className="feature-card">
              <h4><FaBookOpen /> Plain-to-Formal Language</h4>
              <p>Explains concepts in plain language first, then follows with formal regulatory wording (e.g. 14 CFR) to build comfort with FAA exam formats.</p>
            </div>
            <div className="feature-card">
              <h4><FaClipboardList /> Practice Question Mode</h4>
              <p>On request, generates FAA-style practice questions and then provides an answer key with explanations and references.</p>
            </div>
            <div className="feature-card">
              <h4><FaShieldAlt /> Safety Disclaimer</h4>
              <p>Reminds users it is a study aid — not a substitute for a certified flight instructor or current official documentation.</p>
            </div>
          </div>
        </section>

        {/* ─── Field: Objective ─── */}
        <section className="report-section">
          <h2><FaBullseye /> Objective</h2>
          <p>
            The objective of this assistant is to help student pilots prepare for their FAA Private Pilot
            written (knowledge) test and their practical checkride.
          </p>
        </section>

        {/* ─── Field: Process ─── */}
        <section className="report-section">
          <h2><FaCogs /> Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <span className="step-num">1</span>
              <div className="step-content">
                <h4>Research</h4>
                <p>Gathered useful materials to include in the GPT.</p>
              </div>
            </div>
            <div className="process-step">
              <span className="step-num">2</span>
              <div className="step-content">
                <h4>Definition</h4>
                <p>Defined the objectives, behavior, and resources the GPT must use.</p>
              </div>
            </div>
            <div className="process-step">
              <span className="step-num">3</span>
              <div className="step-content">
                <h4>Prompt Engineering</h4>
                <p>Wrote a detailed prompt that serves as the instructions for the bot.</p>
              </div>
            </div>
            <div className="process-step">
              <span className="step-num">4</span>
              <div className="step-content">
                <h4>Website Crawl</h4>
                <p>Crawled the FAA manuals and the Pilot Institute website for the GPT to reference when answering questions.</p>
              </div>
            </div>
            <div className="process-step">
              <span className="step-num">5</span>
              <div className="step-content">
                <h4>Iteration</h4>
                <p>Iterated and polished the prompt to ensure the assistant adheres to its constraints and maintains the expected behavior.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Field: Tools Used ─── */}
        <section className="report-section">
          <h2><FaToolbox /> Tools Used</h2>
          <div className="tools-grid">
            <div className="tool-item">
              <h4>Claude Opus 4.8</h4>
              <p>Used for prompt optimization and reference research.</p>
            </div>
            <div className="tool-item">
              <h4>FAA Website</h4>
              <p>Used to obtain published manuals for training (FARs, AIM, PHAK, and the Airplane Flying Handbook).</p>
            </div>
            <div className="tool-item">
              <h4>Pilot Institute Website</h4>
              <p>Used to obtain training content — <a href="https://pilotinstitute.com" target="_blank" rel="noopener noreferrer">pilotinstitute.com</a>.</p>
            </div>
            <div className="tool-item">
              <h4>Chatbase</h4>
              <p>Used for creating and deploying the chat assistant.</p>
            </div>
          </div>

          <div className="download-card">
            <div className="download-text">
              <h3>Custom Bot Process Document</h3>
              <p>Download the detailed engineering log and configuration notes outlining GPT parameters, RAG limits, prompt boundaries, and Chatbase Terms of Service summaries.</p>
            </div>
            <a href="https://drive.google.com/open?id=1brSD95xcUiH9JuxhEHPM30R5G7dlQKU4" target="_blank" rel="noopener noreferrer" className="button download-btn">
              <FaFileDownload /> Process Doc (Google Drive)
            </a>
          </div>
        </section>

        {/* ─── Field: Value Proposition ─── */}
        <section className="report-section">
          <h2><FaLightbulb /> Value Proposition</h2>
          <p>
            This project demonstrates how a general-purpose language model can be shaped into a
            domain-reliable study tool through structured prompting and source constraints. The VFR PPL
            Assistant helps student pilots prepare for their PPL by grounding every answer in FAA-published
            material — the FARs, the AIM, the PHAK, and the Airplane Flying Handbook — and generating
            exam-style practice on demand. It serves as a proof of concept that accuracy, citation
            discipline, and approachable instruction can coexist in a conversational assistant, turning
            scattered regulatory documents into guided, verifiable learning.
          </p>
        </section>

        {/* ─── Field: Unique Value ─── */}
        <section className="report-section">
          <h2><FaGem /> Unique Value</h2>
          <p>
            Unlike a generic chatbot, this assistant is engineered around a strict source hierarchy and a
            <strong> "cite or flag"</strong> rule: it prioritizes FAA sources, names the exact reference
            (e.g. <em>14 CFR 91.155</em>, <em>AIM 4-1-3</em>), and explicitly warns the user whenever
            information comes from outside official material.
          </p>
          <p>The assistant is governed by this prioritized list of knowledge sources:</p>
          <ol className="details-list">
            <li><strong>Regulations:</strong> FAA-published Federal Aviation Regulations (FARs / 14 CFR)</li>
            <li><strong>Procedures:</strong> FAA Aeronautical Information Manual (AIM)</li>
            <li><strong>General Concepts:</strong> Pilot's Handbook of Aeronautical Knowledge (PHAK), Airplane Flying Handbook (AFH), and other official FAA advisory circulars.</li>
            <li><strong>Secondary References:</strong> Pilot Institute publications — used only when the answer is not present in official FAA documents.</li>
          </ol>
          <p>
            If required information is not found in FAA or Pilot Institute sources, the assistant may search
            the web, but it <strong>must name the source and explicitly flag that the information is not
            FAA-published data.</strong>
          </p>
        </section>

        {/* Final Back Link */}
        <div className="bottom-nav">
          <Link to="/project" className="back-link">
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>

      </div>
    </div>
    </Lightbox>
  );
};

export default VFRAssistantDetails;
