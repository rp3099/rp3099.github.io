import React from 'react';
import './ATCTrainerDetailsStyles.css';
import { FaArrowLeft, FaExternalLinkAlt, FaRobot, FaBullseye, FaComments, FaSearch, FaGraduationCap, FaExclamationTriangle, FaCheckCircle, FaBookOpen, FaBalanceScale, FaCloudSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox.js';

// Import assets
import atcFeature from '../assets/atc/atc_trainer_feature.svg';

const ATCTrainerDetails = () => {
  return (
    <Lightbox>
    <div className="atc-details-section">
      <div className="atc-details-container">

        {/* Back Link */}
        <Link to="/project" className="atc-back-link">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header Metadata */}
        <div className="atc-meta">
          <span><strong>Project:</strong> ATC Trainer GPT Evaluation</span>
          <span><strong>Type:</strong> Class Assignment</span>
          <span><strong>Platform:</strong> ChatGPT (Custom GPT)</span>
          <span><strong>Scope:</strong> FAA Phraseology &amp; Procedures</span>
        </div>

        {/* Main Title */}
        <h1 className="atc-title">ATC TRAINER GPT: Stress-Testing a Custom GPT for Hallucinations</h1>

        {/* ─── Link to the GPT ─── */}
        <div className="atc-try-card">
          <div>
            <h3><FaRobot /> The Custom GPT Under Test</h3>
            <p>
              ATC Trainer (by Genevieve Caumartin) — an "ATC control expert specialized in FAA
              phraseology and procedures." I evaluated it over a seven-turn conversation designed
              to expose hallucinations behind fluent, authoritative-sounding answers.
            </p>
          </div>
          <a href="https://chatgpt.com/g/g-a2XbPncXy-atc-trainer" target="_blank" rel="noopener noreferrer" className="atc-try-btn">
            Open ATC Trainer <FaExternalLinkAlt />
          </a>
        </div>

        {/* Featured Image */}
        <div className="atc-figure">
          <img src={atcFeature} alt="ATC Trainer GPT — custom GPT evaluation" />
          <p className="atc-caption">Figure 1: Probing an ATC-phraseology GPT — verified facts (the real 120.55 departure frequency) next to a confidently fabricated SID ("GIPPR TWO").</p>
        </div>

        {/* ─── Task Framing ─── */}
        <section className="atc-section">
          <h2><FaBullseye /> Task Framing</h2>
          <p>
            I picked a domain where correctness is verifiable against public FAA sources
            (frequencies, procedure names, chart supplements). That let me push the model past
            surface plausibility and see whether it hallucinates when specifics are demanded.
          </p>
        </section>

        {/* ─── Conversation Log ─── */}
        <section className="atc-section">
          <h2><FaComments /> The Seven-Turn Conversation</h2>
          <div className="atc-convo">

            <div className="atc-turn">
              <div className="atc-turn-head">
                <h4>Turn 1 — Initial Ask</h4>
                <span className="atc-badge">Format Correct</span>
              </div>
              <p><span className="atc-prompt-label">Prompt:</span> Sample IFR departure clearance from KPWK (Chicago Executive) to KGRR (Grand Rapids), with pilot readback.</p>
              <p><span className="atc-prompt-label">Response:</span> A well-formatted clearance using the CRAFFT mnemonic (Clearance, Route, Altitude, Frequency, Fix, Transponder). Phraseology matched FAA conventions, but content used generic fix names ("Gipper") that I could not immediately verify.</p>
            </div>

            <div className="atc-turn atc-turn-fail">
              <div className="atc-turn-head">
                <h4>Turn 2 — Change Something</h4>
                <span className="atc-badge atc-badge-fail">Silent Hallucination</span>
              </div>
              <p><span className="atc-prompt-label">Prompt:</span> Swap the destination to KDTW and use a specific SID instead of radar vectors.</p>
              <p><span className="atc-prompt-label">Response:</span> Substituted "GIPPR TWO departure, GIPPR transition." This is where the model failed silently — it produced a fabricated SID name in the same authoritative format as the correct portion. If I had not known KPWK's departure procedures, I would have accepted it.</p>
            </div>

            <div className="atc-turn atc-turn-recover">
              <div className="atc-turn-head">
                <h4>Turn 3 — Push Back with Domain Knowledge</h4>
                <span className="atc-badge atc-badge-recover">Clean Correction</span>
              </div>
              <p><span className="atc-prompt-label">Prompt:</span> I pushed back that small GA airports like KPWK typically don't get their own named SIDs and that "GIPPR TWO" was likely invented.</p>
              <p><span className="atc-prompt-label">Response:</span> The model conceded both points cleanly. It admitted "GIPPR TWO was not a real SID" and re-explained that most KPWK IFR departures are runway heading plus radar vectors. This was the most useful moment — the correction was clean, no hedging.</p>
            </div>

            <div className="atc-turn atc-turn-recover">
              <div className="atc-turn-head">
                <h4>Turn 4 — Ask for More</h4>
                <span className="atc-badge atc-badge-recover">Self-Refined</span>
              </div>
              <p><span className="atc-prompt-label">Prompt:</span> A full pilot-controller exchange from clearance delivery through handoff to Chicago Approach, using the real KPWK departure frequency and the standard initial heading.</p>
              <p><span className="atc-prompt-label">Response:</span> A much richer scenario — clearance delivery, ground, tower, takeoff, handoff, radar contact, vectors, and climb. It also self-corrected mid-response, noting KPWK does have three published RNAV departures (JORJO THREE, MONKZ THREE, PAL-WAUKEE TWO) used mainly by turbine aircraft — refining its own earlier over-correction that KPWK had no SIDs at all.</p>
            </div>

            <div className="atc-turn">
              <div className="atc-turn-head">
                <h4>Turn 5 — Ask Why</h4>
                <span className="atc-badge">Fact Verified</span>
              </div>
              <p><span className="atc-prompt-label">Prompt:</span> Why did it specifically choose 120.55 MHz as the departure frequency?</p>
              <p><span className="atc-prompt-label">Response:</span> Confirmed 120.55 is the actual published Chicago Departure/Approach frequency for KPWK per FAA/AirNav data, with 128.575 as an alternate. It distinguished the correct fact (frequency) from the fabricated one (SID name), and added the realistic nuance that TRACON may reassign frequencies dynamically.</p>
            </div>

            <div className="atc-turn">
              <div className="atc-turn-head">
                <h4>Turn 6 — "What If…"</h4>
                <span className="atc-badge">Procedure Correct</span>
              </div>
              <p><span className="atc-prompt-label">Prompt:</span> What if the pilot missed only the squawk code during readback — what's the correct phraseology to request just that portion?</p>
              <p><span className="atc-prompt-label">Response:</span> Gave three acceptable phrasings ("Say again squawk," "Request repeat transponder code," etc.) and correctly noted the FAA preference for requesting only the missed element rather than the full clearance.</p>
            </div>

            <div className="atc-turn">
              <div className="atc-turn-head">
                <h4>Turn 7 — Summarize</h4>
                <span className="atc-badge">Honest Self-Audit</span>
              </div>
              <p><span className="atc-prompt-label">Prompt:</span> Summarize the entire conversation.</p>
              <p><span className="atc-prompt-label">Response:</span> A well-structured bullet summary of topics covered, corrections made, and phraseology practiced. Notably, it accurately flagged its own errors (the fictional SID) with red X markers and confirmations with green checks.</p>
            </div>

          </div>
        </section>

        {/* ─── Observations ─── */}
        <section className="atc-section">
          <h2><FaSearch /> Observations</h2>
          <div className="atc-obs-grid">
            <div className="atc-obs-card">
              <h4><FaExclamationTriangle /> Hallucination Pattern</h4>
              <p>The model is confident even when wrong. The invented "GIPPR TWO" SID was presented with the same formatting and tone as the correct portions — no textual signal separates fact from confabulation. Fluency correlates with confidence, not accuracy.</p>
            </div>
            <div className="atc-obs-card">
              <h4><FaCheckCircle /> Correction Behavior</h4>
              <p>Once challenged with a concrete counter-claim, the model corrected quickly and did not double down. It even over-corrected (implying KPWK has no SIDs) and then self-refined by naming the three real ones — suggesting the correction pathway pulls in retrieval the original prompt never triggered.</p>
            </div>
            <div className="atc-obs-card">
              <h4><FaBookOpen /> Sources &amp; Retrieval</h4>
              <p>From Turn 4 onward the model showed "Sources" attribution (AirNav appeared). Earlier responses cited nothing even while stating specific facts — retrieval seems to activate only for certain prompt shapes.</p>
            </div>
            <div className="atc-obs-card">
              <h4><FaBalanceScale /> Format Adherence</h4>
              <p>The CRAFFT mnemonic and standard phraseology were consistent across every turn. The model does very well on structural conventions.</p>
            </div>
            <div className="atc-obs-card">
              <h4><FaCloudSun /> Domain Limitations</h4>
              <p>Anything requiring a live check against sectional charts, NOTAMs, or current TRACON configuration is beyond what a chat model can guarantee — and the model was appropriately careful about this when asked about frequencies.</p>
            </div>
          </div>
        </section>

        {/* ─── Reflection ─── */}
        <section className="atc-section">
          <h2><FaGraduationCap /> Reflection for ML Coursework</h2>
          <p>
            <strong>Verification cost matters.</strong> The user has to know the domain well enough to
            spot fabricated specifics. This is the "trust but verify" problem in operational ML:
            outputs that look correct require an external oracle to validate. For safety-critical
            domains like aviation, this suggests LLMs are useful as drafting tools but not as
            authoritative references.
          </p>
          <p>
            <strong>Adversarial prompting is a legitimate evaluation technique.</strong> My Turn 3
            pushback with domain knowledge exposed a hallucination that Turn 2 alone would have
            missed. If I were designing an eval set for a domain-specific GPT, I would include
            prompts that require named entities — procedure names, frequencies, waypoints — rather
            than generic templates, because that is where hallucinations concentrate.
          </p>
          <p>
            The full conversation transcript is available at the ChatGPT thread linked above; the
            key exchanges are documented in the turn-by-turn breakdown.
          </p>
        </section>

        {/* Final Back Link */}
        <div className="atc-bottom-nav">
          <Link to="/project" className="atc-back-link">
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>

      </div>
    </div>
    </Lightbox>
  );
};

export default ATCTrainerDetails;
