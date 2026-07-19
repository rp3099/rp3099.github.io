import React from 'react';
import './CFDDetailsStyles.css';
import { FaFileDownload, FaArrowLeft, FaServer, FaCogs, FaCheckCircle, FaChartLine, FaDraftingCompass } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox.js';

// Import authentic images from the PDF report
import propellerRender from '../assets/cfd/propeller_render.jpg';
import propellerFoils from '../assets/cfd/propeller_foils.png';
import fluidDomainDims from '../assets/cfd/fluid_domain_dims.png';
import rotatingDomainDims from '../assets/cfd/rotating_domain_dims.png';
import fluidDomainMesh from '../assets/cfd/fluid_domain_mesh.png';
import propellerMesh from '../assets/cfd/propeller_mesh.png';
import prismLayer from '../assets/cfd/prism_layer.png';
import residualPlot from '../assets/cfd/residual_plot.png';
import thrustPlot from '../assets/cfd/thrust_plot.png';
import ctPlot from '../assets/cfd/ct_plot.png';
import efficiencyPlot from '../assets/cfd/efficiency_plot.png';

const CFDDetails = () => {
  return (
    <Lightbox>
    <div className="cfd-details-section">
      <div className="cfd-details-container">
        
        {/* Back Link */}
        <Link to="/project" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header Metadata */}
        <div className="report-meta">
          <span><strong>Course:</strong> AOE 4114 Project</span>
          <span><strong>Institution:</strong> Virginia Tech</span>
          <span><strong>Author:</strong> Rudra Patel</span>
          <span><strong>Date:</strong> May 11, 2022</span>
        </div>

        {/* Main Title */}
        <h1 className="report-title">Simulation Of A Rotating Propeller Using StarCCM+</h1>

        {/* Download Box & Presentation Slides */}
        <div className="downloads-wrapper">
          <div className="download-card">
            <div className="download-text">
              <h3>Full Technical Report</h3>
              <p>Get the complete 21-page PDF document detailing full StarCCM+ meshing grids, residual plots, and validation comparisons.</p>
            </div>
            <a href="/CFD_Propeller_Report.pdf" target="_blank" rel="noopener noreferrer" className="button download-btn">
              <FaFileDownload /> Download PDF (9.3 MB)
            </a>
          </div>

          <div className="download-card">
            <div className="download-text">
              <h3>Presentation Slides</h3>
              <p>Download the original Applied CFD project defense PowerPoint presentation containing active flow simulation videos and analysis slides.</p>
            </div>
            <a href="/Applied_CFD_Project_Presentation.pptx" download className="button download-btn">
              <FaFileDownload /> Download PPTX (54 MB)
            </a>
          </div>
        </div>

        {/* Featured Video Snippet from Presentation */}
        <div className="featured-video-container">
          <video className="featured-video" controls autoPlay loop muted playsInline>
            <source src="/cfd_media3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span className="fig-caption">Simulation Snippet: Transient flow velocity magnitude contours around the rotating propeller blades (extracted from project presentation).</span>
        </div>

        {/* Section 1: Introduction */}
        <section className="report-section">
          <h2>0.1 Introduction</h2>
          <p>
            Computational Fluid Dynamics plays an important role today in aerodynamic analysis, enabling general flow field predictions before committing to costly physical experimental validation. This project models an <strong>APC 10x7E propeller</strong> rotating at <strong>6000 rpm</strong> at an advanced ratio of <strong>J = 0.6</strong> using Siemens StarCCM+ software. The simulation aims at obtaining thrust, torque, and propulsive efficiency data to validate against the University of Illinois Urbana-Champaign (UIUC) Propeller Database.
          </p>
        </section>

        {/* Section 2: Methodology */}
        <section className="report-section">
          <h2>0.2 Methodology & Geometry</h2>
          <p>
            The <strong>APC 10x7E propeller</strong> was modeled with a total diameter of <strong>0.254 m</strong>. The hub specifications dictate a diameter of <em>0.149 × Radius</em> and a hub thickness of <em>0.075 × R</em>.
          </p>

          <div className="images-row">
            <div className="image-frame">
              <img src={propellerRender} alt="Propeller Render" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 1: Propeller Render</span>
            </div>
            <div className="image-frame">
              <img src={propellerFoils} alt="Propeller Foil Sections" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 2: Propeller with Foil Sections</span>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Formula / Ratio</th>
                  <th>Value (m)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Propeller Radius (R)</strong></td>
                  <td>Diameter / 2</td>
                  <td>0.127</td>
                </tr>
                <tr>
                  <td><strong>Hub Diameter</strong></td>
                  <td>0.149 × R</td>
                  <td>0.018923</td>
                </tr>
                <tr>
                  <td><strong>Hub Thickness</strong></td>
                  <td>0.075 × R</td>
                  <td>0.0009525</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>0.2.2 Geometry Setup & Domain Parameters</h3>
          <p>
            The geometry setup was split into three bodies to accurately capture propeller rotation:
          </p>
          <ul className="details-list">
            <li><strong>Fluid Domain:</strong> The static outer volume enclosing the entire fluid flow path.</li>
            <li><strong>Rotating Domain:</strong> A circular volume enclosing the propeller that rotates rigidly, allowing the mesh inside to rotate without dynamic cell re-generation.</li>
            <li><strong>Propeller Body:</strong> The solid boundary representing the APC 10x7 Thin Electric Propeller.</li>
          </ul>

          <div className="images-row">
            <div className="image-frame">
              <img src={fluidDomainDims} alt="Fluid Domain Dimensions" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 3: Fluid Domain Design & Dimensions</span>
            </div>
            <div className="image-frame">
              <img src={rotatingDomainDims} alt="Rotating Domain Dimensions" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 4: Rotating Domain Design & Dimensions (6mm gap)</span>
            </div>
          </div>
        </section>

        {/* Section 3: Mesh Operations */}
        <section className="report-section">
          <h2>0.3 Mesh Operations</h2>
          <p>
            The fluid domain and the rotating domain were meshed independently. The static fluid domain uses a <strong>Trimmed Cell Mesher</strong> (comprising hexahedral cells) with a base size of <strong>0.60 m</strong>. Volumetric controls refined the wake area downstream to 0.3% of the base size.
          </p>
          <p>
            The rotating domain uses a <strong>Polyhedral Mesher</strong> to accommodate the complex blade surface curvature.
          </p>

          <div className="images-row">
            <div className="image-frame">
              <img src={fluidDomainMesh} alt="Fluid Domain Mesh" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 5: Static Fluid Domain Mesh Layout</span>
            </div>
            <div className="image-frame">
              <img src={propellerMesh} alt="Propeller Polyhedral Mesh" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 6: Propeller Surface Polyhedral Mesh View</span>
            </div>
          </div>

          <div className="grid-2col mt-2">
            <div className="card-box">
              <div className="card-title-icon"><FaServer /> <h4>Fluid Domain Mesh</h4></div>
              <ul>
                <li><strong>Base Size:</strong> 0.60 m</li>
                <li><strong>Target Surface Size:</strong> 10% (Relative to Base)</li>
                <li><strong>Minimum Surface Size:</strong> 1% (Relative to Base)</li>
                <li><strong>Volumetric Custom Control:</strong> Refined to 0.3% in the wake zone.</li>
              </ul>
            </div>
            <div className="card-box">
              <div className="card-title-icon"><FaCogs /> <h4>Rotating Domain Mesh</h4></div>
              <ul>
                <li><strong>Prism Layer Mesher:</strong> 5 prismatic layers (1mm total thickness) to capture boundary layer separation.</li>
                <li><strong>y<sup>+</sup> Target:</strong> Maintained between 30 and 50 using friction velocity wall equations:</li>
              </ul>
              
              <div className="equation-block">
                <div className="equation-math">
                  y<sup>+</sup> = <span className="fraction"><span className="num">y · u<sub>*</sub></span><span className="den">ν</span></span>
                </div>
                <div className="equation-num">(1)</div>
              </div>

              <div className="equation-block">
                <div className="equation-math">
                  u<sub>*</sub> = <span className="sqrt">√<span className="radicand"><span className="fraction"><span className="num">τ<sub>w</sub></span><span className="den">ρ</span></span></span></span>
                </div>
                <div className="equation-num">(2)</div>
              </div>
            </div>
          </div>

          <div className="single-image-frame mt-2">
            <img src={prismLayer} alt="Propeller Prism Layer View" className="report-img-full" loading="lazy" />
            <span className="fig-caption">Figure 7: Prism layer cell visualization along the propeller surface boundary.</span>
          </div>

          <p className="mt-2">
            The final grid generated comprised approximately <strong>6.5 million cell elements</strong> (2.76 million cells in the static fluid domain and 3.11 million cells in the rotating domain).
          </p>
        </section>

        {/* Section 4: Physics Setup */}
        <section className="report-section">
          <h2>0.4 Physics Setup & Solver Settings</h2>
          <p>
            The simulation setup utilized a rotational speed of <strong>6000 RPM (n = 100 rev/s)</strong>. To compare with experimental data, an advanced ratio of <strong>J = 0.6</strong> was evaluated, yielding a freestream inlet velocity of <strong>V<sub>a</sub> = 15.24 m/s</strong>:
          </p>

          <div className="equation-block main-eq">
            <div className="equation-math">
              J = <span className="fraction"><span className="num">V<sub>a</sub></span><span className="den">n · D</span></span>
            </div>
            <div className="equation-num">(3)</div>
          </div>

          <p>
            Where:
          </p>
          <ul className="details-list text-indent">
            <li><strong>V<sub>a</sub>:</strong> Freestream fluid velocity = 15.24 m/s</li>
            <li><strong>n:</strong> Propeller rotational speed = 100 rev/s</li>
            <li><strong>D:</strong> Propeller diameter = 0.254 m</li>
          </ul>

          <p>
            A <strong>3° rotation angle per time-step</strong> (equivalent to a time-step of <strong>8.333 × 10<sup>−5</sup> s</strong>) was used to ensure solver convergence. The solver ran for 1,200 steps to reach a total physical flow time of 0.1 s.
          </p>
          
          <div className="physics-models">
            <h4>Solver Physics Models:</h4>
            <div className="tags-grid">
              <span>Three Dimensional</span>
              <span>Implicit Unsteady</span>
              <span>Ideal Gas (Low Reynolds)</span>
              <span>K-Omega Turbulence (RANS)</span>
              <span>All y+ Wall Treatment</span>
              <span>Coupled Energy</span>
            </div>
          </div>
        </section>

        {/* Section 5: Results & Validation */}
        <section className="report-section">
          <h2>0.5 Results & Validation</h2>
          <p>
            The simulation was computed utilizing <strong>96 cores</strong>, requiring approximately <strong>15 hours</strong> of runtime. Outputs from the thrust and torque monitor plots converged successfully.
          </p>

          <div className="equations-grid">
            <div className="eq-card">
              <h5>Thrust Coefficient</h5>
              <div className="equation-block">
                <div className="equation-math">
                  C<sub>T</sub> = <span className="fraction"><span className="num">T</span><span className="den">ρ · n<sup>2</sup> · D<sup>4</sup></span></span>
                </div>
                <div className="equation-num">(4)</div>
              </div>
            </div>

            <div className="eq-card">
              <h5>Torque Coefficient</h5>
              <div className="equation-block">
                <div className="equation-math">
                  C<sub>Q</sub> = <span className="fraction"><span className="num">Q</span><span className="den">ρ · n<sup>2</sup> · D<sup>5</sup></span></span>
                </div>
                <div className="equation-num">(5)</div>
              </div>
            </div>

            <div className="eq-card">
              <h5>Propulsive Efficiency</h5>
              <div className="equation-block">
                <div className="equation-math">
                  η = <span className="fraction"><span className="num">V<sub>a</sub> · T</span><span className="den">2π · Q · n</span></span>
                </div>
                <div className="equation-num">(7)</div>
              </div>
            </div>
          </div>

          <div className="images-row mt-2">
            <div className="image-frame">
              <img src={residualPlot} alt="Residual Plot" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 8: Iterative Residual Convergence Plot</span>
            </div>
            <div className="image-frame">
              <img src={thrustPlot} alt="Thrust Monitor Plot" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 9: Thrust Force Monitor Convergence (N)</span>
            </div>
          </div>

          <h3 className="mt-2">Validation Summary</h3>
          <p>
            The computed aerodynamic coefficients match the experimental wind tunnel data from the UIUC Propeller Database with high accuracy:
          </p>

          <div className="results-grid">
            <div className="result-metric-card">
              <span className="metric-label">Thrust (T)</span>
              <span className="metric-value">2.186 N</span>
              <div className="metric-comparison">
                <span>Simulation C<sub>T</sub>: 0.04463</span>
                <span>UIUC Database C<sub>T</sub>: 0.04500</span>
              </div>
              <span className="metric-error green"><FaCheckCircle /> Error: 0.82%</span>
            </div>

            <div className="result-metric-card">
              <span className="metric-label">Torque (Q)</span>
              <span className="metric-value">0.0743 N·m</span>
              <div className="metric-comparison">
                <span>Simulation C<sub>Q</sub>: 0.00598</span>
                <span>UIUC Database C<sub>Q</sub>: 0.00590</span>
              </div>
              <span className="metric-error green"><FaCheckCircle /> Error: 1.29%</span>
            </div>

            <div className="result-metric-card">
              <span className="metric-label">Propulsive Efficiency (η)</span>
              <span className="metric-value">71.31%</span>
              <div className="metric-comparison">
                <span>Simulation η: 0.7131</span>
                <span>UIUC Database η: 0.7000</span>
              </div>
              <span className="metric-error green"><FaCheckCircle /> Error: 1.87%</span>
            </div>
          </div>

          <div className="images-row mt-2">
            <div className="image-frame">
              <img src={ctPlot} alt="Coefficient of Thrust Validation Plot" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 10: Thrust Coefficient (C_T) vs Advanced Ratio (J)</span>
            </div>
            <div className="image-frame">
              <img src={efficiencyPlot} alt="Efficiency Validation Curve" className="report-img" loading="lazy" />
              <span className="fig-caption">Figure 11: Efficiency (η) Curve vs Advanced Ratio (J)</span>
            </div>
          </div>
        </section>

        {/* Section 6: Future Work */}
        <section className="report-section">
          <h2>0.6 Future Work</h2>
          <p>
            To further improve residual convergence (specifically for continuity and energy equations) and capture the complex helical tip vortex trails with higher fidelity, future runs will implement:
          </p>
          <ul className="details-list">
            <li>Decreasing the time-step (e.g., to 1° or 1.5° rotation per step) to reduce temporal discretization errors.</li>
            <li>Local adaptive mesh refinement at the interface and propeller blade edges.</li>
            <li>Applying larger domain boundaries to eliminate potential blockage effect errors.</li>
          </ul>
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

export default CFDDetails;
