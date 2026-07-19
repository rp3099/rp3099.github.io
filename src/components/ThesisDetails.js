import React from 'react';
import './ThesisDetailsStyles.css';
import { FaFileDownload, FaArrowLeft, FaHeartbeat, FaCogs, FaSearch, FaWrench, FaTools, FaMicroscope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox.js';

// Import extracted images from the thesis PDF
import tankDesign from '../assets/thesis/page_29_img_1.png';
import valveConnector from '../assets/thesis/page_27_img_1.png';
import moldFabrication from '../assets/thesis/page_34_img_1.png';
import surfaceRoughness from '../assets/thesis/page_40_img_1.png';
import flowMeter from '../assets/thesis/page_48_img_1.png';
import pivSetup from '../assets/thesis/page_58_img_1.jpg';
import glycerolMatching from '../assets/thesis/page_62_img_1.png';

const ThesisDetails = () => {
  return (
    <Lightbox>
    <div className="thesis-details-section">
      <div className="thesis-details-container">

        {/* Back Link */}
        <Link to="/project" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header Metadata */}
        <div className="report-meta">
          <span><strong>Degree:</strong> Master of Science in Aerospace Engineering</span>
          <span><strong>Institution:</strong> Virginia Tech</span>
          <span><strong>Date:</strong> May 4, 2023</span>
          <span><strong>Author:</strong> Rudra D. Patel</span>
          <span><strong>Advisor:</strong> Dr. Olivier Coutier-Delgosha (Chair)</span>
        </div>

        {/* Main Title */}
        <h1 className="report-title">LEFT VENTRICLE ASSIST DEVICE: Mock Circulatory Loop Design, Fabrication, and PIV Flow Validation</h1>

        {/* Download Box */}
        <div className="download-card">
          <div className="download-text">
            <h3>Full Master's Thesis Document</h3>
            <p>Download the complete 71-page Master of Science thesis covering the design, development, optical clarity optimization, refractive index matching, and flow characteristics of the mock circulatory loop.</p>
          </div>
          <a href="/MS_Aero_Thesis.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
            <FaFileDownload /> Download Thesis PDF (34.3 MB)
          </a>
        </div>

        {/* Main Featured Image */}
        <div className="featured-image-container">
          <img src={pivSetup} alt="PIV Experimental Setup" className="featured-image" />
          <p className="image-caption">Figure 1: Full Particle Image Velocimetry (PIV) test setup showcasing the camera, laser, and mock circulatory loop integration.</p>
        </div>

        {/* ─── Section 1: Executive Summary ─── */}
        <section className="report-section">
          <h2><FaHeartbeat /> Executive Summary & Abstract</h2>
          <p>
            Heart disease remains the leading cause of death in America. For patients suffering from severe coronary artery disease who are not eligible for heart transplants, <strong>Left Ventricle Assist Devices (LVADs)</strong> offer an effective life-saving solution. However, before these mechanical pumps can be tested in-vivo, extensive performance and reliability testing is required to meet strict Food and Drug Administration (FDA) guidelines.
          </p>
          <p>
            This thesis presents the design, development, and experimental validation of a <strong>Mock Circulatory Loop (MCL)</strong>. The MCL serves as a benchtop simulator that accurately recreates the human cardiac cycle and captures critical pressure and flow rate characteristics. To validate the internal fluid dynamics and shear stress profiles, a transparent cardiac phantom was fabricated, and <strong>Particle Image Velocimetry (PIV)</strong> was conducted using refractive index matching techniques.
          </p>

          <h3>Key Research Contributions</h3>
          <div className="key-drivers-grid">
            <div className="driver-card">
              <span className="driver-icon"><FaCogs /></span>
              <div>
                <h4>MCL Development</h4>
                <p>Designed and built a benchtop simulator capable of replicating systemic resistance and compliance parameters of the human cardiovascular system.</p>
              </div>
            </div>
            <div className="driver-card">
              <span className="driver-icon"><FaWrench /></span>
              <div>
                <h4>Phantom Fabrication</h4>
                <p>Experimented with various elastomers (ClearFlex 30) to construct optically clear heart models, identifying that an average surface roughness of 0.186 µm is optimal.</p>
              </div>
            </div>
            <div className="driver-card">
              <span className="driver-icon"><FaSearch /></span>
              <div>
                <h4>Refractive Index Matching</h4>
                <p>Developed an aqueous glycerol mixture matching the refractive index of urethane phantoms to eliminate optical distortion during laser imaging.</p>
              </div>
            </div>
            <div className="driver-card">
              <span className="driver-icon"><FaMicroscope /></span>
              <div>
                <h4>PIV Flow Diagnostics</h4>
                <p>Validated the loop flow structures and velocity profiles during simulated cardiac pulses, establishing a baseline for pre-clinical LVAD evaluations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: Mock Circulatory Loop Design ─── */}
        <section className="report-section">
          <h2><FaTools /> Mock Circulatory Loop Design & Components</h2>
          <p>
            The Mock Circulatory Loop was designed to reproduce the physiological pressures and flow distributions of the human cardiovascular system. It is composed of a heart test chamber, compliance tanks (simulating arterial elasticity), reservoir tanks, and mechanical aortic/mitral one-way check valves.
          </p>

          <div className="images-row">
            <div className="image-frame">
              <img src={tankDesign} alt="Compliance and Reservoir Tank Designs" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 2: CAD blueprints for compliance and reservoir tank designs.</span>
            </div>
            <div className="image-frame">
              <img src={valveConnector} alt="Aortic and Mitral Valve Connectors" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 3: Custom mechanical connectors and valve adapters.</span>
            </div>
          </div>

          <p>
            By adjusting the flow resistance and air-pocket volume in the compliance tanks, the loop can replicate both healthy and pathological hemodynamics. For instance, modifying the loop resistance allows for elevated pressure in the aortic outlet, mimicking hypertensive states.
          </p>
        </section>

        {/* ─── Section 3: Phantom Fabrication & Clarity ─── */}
        <section className="report-section">
          <h2><FaWrench /> Materials & Fabrication Techniques</h2>
          <p>
            To perform non-intrusive optical flow measurements inside the simulated ventricle, the test chamber walls must be completely transparent. Various silicone elastomers and a urethane-based material, <strong>ClearFlex 30</strong>, were tested for mold castings. 
          </p>

          <div className="images-row">
            <div className="image-frame">
              <img src={moldFabrication} alt="CNC Mold Assemblies" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 4: CNC-milled aluminum mold assemblies used to cast the transparent phantoms.</span>
            </div>
            <div className="image-frame">
              <img src={surfaceRoughness} alt="Surface Profiler Roughness Data" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 5: Profilometer scan showing surface finish comparisons of different molds.</span>
            </div>
          </div>

          <p>
            The study highlighted the critical importance of surface roughness on optical clarity. Casts formed against raw 3D-printed molds suffered from severe refraction due to layer ridges. The research determined that polishing mold inserts to an average surface roughness (Ra) of <strong>0.186 µm</strong> (achieved using an 800 grit sandpaper finish) resulted in optimal transparency, allowing clear laser sheet penetration.
          </p>
        </section>

        {/* ─── Section 4: Sensor Integration and Data Acquisition ─── */}
        <section className="report-section">
          <h2><FaCogs /> Sensors & Data Acquisition</h2>
          <p>
            The MCL is instrumented with dynamic pressure sensors (measuring ventricular, aortic, and atrial pressures) and an ultrasonic flow meter. Signals are routed through a <strong>National Instruments USB-6216</strong> data acquisition (DAQ) board and processed using custom code to capture the real-time cardiac pressure-volume waveforms.
          </p>

          <div className="featured-image-container">
            <img src={flowMeter} alt="Transonic Ultrasonic Flow Meter Module" className="report-img" loading="lazy" />
            <p className="image-caption">Figure 6: Transonic ultrasonic flow meter module used to capture real-time volumetric flow rate.</p>
          </div>

          <p>
            Through calibration of the voltage-to-pressure conversions and adjusting flow resistance controls, the system successfully resolved the standard cardiac cycles: diastole, isovolumetric contraction, systole, and isovolumetric relaxation.
          </p>
        </section>

        {/* ─── Section 5: Refractive Index Matching & PIV Experimentation ─── */}
        <section className="report-section">
          <h2><FaSearch /> Refractive Index Matching & PIV Validation</h2>
          <p>
            Particle Image Velocimetry (PIV) utilizes a high-power laser sheet and high-speed camera to track fluorescent seeding particles suspended in the fluid. Any mismatch in refractive index (RI) between the solid phantom wall and the liquid medium causes refraction and optical distortion, masking flow behavior near the boundaries.
          </p>

          <div className="featured-image-container">
            <img loading="lazy" src={glycerolMatching} alt="Phantom Submerged in Glycerol-Water Matching Fluid" className="featured-image" />
            <p className="image-caption">Figure 7: Phantom submerged in the glycerol-water matching fluid — the wall becomes nearly optically invisible against the PIV speckle background, confirming refractive index matching.</p>
          </div>

          <p>
            The refractive index of ClearFlex 30 was measured and matched using a custom-blended <strong>glycerol-water mixture</strong>. At the correct concentration, the phantom wall becomes optically invisible, permitting undistorted laser imaging. PIV measurements resolved the complex vortex structures, recirculation zones, and shear stresses occurring in the ventricle chamber, providing invaluable data for verifying that future LVAD installations minimize blood cell damage (hemolysis).
          </p>
        </section>

        {/* ─── Section 6: Committee & Defense Details ─── */}
        <section className="report-section">
          <h2>Committee Members</h2>
          <p>
            This thesis was defended successfully on <strong>May 4, 2023</strong> in Blacksburg, Virginia, before the Kevin T. Crofton Department of Aerospace and Ocean Engineering committee:
          </p>
          <ul className="details-list">
            <li><strong>Dr. Olivier Coutier-Delgosha</strong> (Committee Chair / Advisor)</li>
            <li><strong>Dr. Kevin T. Lowe</strong> (Committee Member)</li>
            <li><strong>Dr. Michael K. Philen</strong> (Committee Member)</li>
          </ul>
        </section>

      </div>
    </div>
    </Lightbox>
  );
};

export default ThesisDetails;
