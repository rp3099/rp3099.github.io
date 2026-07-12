import React from 'react';
import './AIAADetailsStyles.css';
import { FaFileDownload, FaArrowLeft, FaUsers, FaPlane, FaTable, FaShieldAlt, FaCrosshairs, FaDollarSign, FaCogs, FaFire, FaBullseye, FaWeight, FaGasPump } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox.js';

// Import authentic images from report
import lizardskinCad from '../assets/aiaa/aiaa_lizardskin_cad.png';
import systemLayout from '../assets/aiaa/aiaa_system_layout.png';
import designEvolution from '../assets/aiaa/aiaa_design_evolution.png';
import cgEnvelope from '../assets/aiaa/aiaa_cg_envelope.png';

const AIAADetails = () => {
  return (
    <Lightbox>
    <div className="aiaa-details-section">
      <div className="aiaa-details-container">

        {/* Back Link */}
        <Link to="/project" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header Metadata */}
        <div className="report-meta">
          <span><strong>Project:</strong> AIAA 2020–2021 Undergraduate Team Aircraft Design</span>
          <span><strong>Institution:</strong> Virginia Tech</span>
          <span><strong>RFP:</strong> Austere Field Light Attack Aircraft</span>
          <span><strong>Model:</strong> A-13 Lizardskin</span>
        </div>

        {/* Main Title */}
        <h1 className="report-title">A-13 LIZARDSKIN: Austere Field Light Attack Aircraft</h1>

        {/* Download Box */}
        <div className="download-card">
          <div className="download-text">
            <h3>Full Design Report</h3>
            <p>Download the complete final design proposal covering aerodynamic analysis, structural stress frames, propulsion integration, stability & control, survivability engineering, and lifecycle cost modeling.</p>
          </div>
          <a href="/AIAA_Austere_Light_Attack_Aircraft_Report.pdf" target="_blank" rel="noopener noreferrer" className="button download-btn">
            <FaFileDownload /> Download PDF
          </a>
        </div>

        {/* Main Featured Image */}
        <div className="featured-image-container">
          <img src={lizardskinCad} alt="A-13 Lizardskin CAD Model" className="featured-image" />
          <p className="image-caption">Figure 1: CAD render of the A-13 Lizardskin Austere Field Light Attack Aircraft.</p>
        </div>

        {/* ─── Section 1: Executive Summary ─── */}
        <section className="report-section">
          <h2>Executive Summary</h2>
          <p>
            In response to the 2020–2021 American Institute of Aeronautics and Astronautics (AIAA) Undergraduate Austere Field Light Attack Aircraft Competition Request for Proposal (RFP), LB Aerospace presents the <strong>A-13 Lizardskin</strong>. There is a significant need for a lightweight close air support (CAS) aircraft capable of taking off and landing on semi-prepared runways with a California Bearing Ratio (CBR) of 5, serving as a survivable and cost-effective alternative to helicopters that struggle with survivability criteria. The aircraft is designed to provide close air support to friendly ground forces with an entry into service by 2025.
          </p>
          <p>
            The A-13 Lizardskin is a single-engine turboprop aircraft with a tricycle landing gear configuration and a takeoff gross weight of 12,403 lbs. It improves upon the comparator aircraft — the Embraer EMB 314 Super Tucano — by optimizing survivability from ground attacks, improving endurance with reserve fuel capacity, and reducing unit cost from $18M to <strong>$11.5 million USD</strong> per airframe across a 300-unit production run.
          </p>

          <h3>Key Design Drivers</h3>
          <div className="key-drivers-grid">
            <div className="driver-card">
              <span className="driver-icon"><FaShieldAlt /></span>
              <div>
                <h4>Survivability</h4>
                <p>Armored cockpit tub, bulletproof canopy, twin-tail redundancy, and countermeasure systems to maximize pilot safety under ground fire.</p>
              </div>
            </div>
            <div className="driver-card">
              <span className="driver-icon"><FaGasPump /></span>
              <div>
                <h4>Endurance</h4>
                <p>4+ hours on-station loiter without external tanks and sufficient reserve fuel to climb 3,000 ft and loiter for 45 minutes — exceeding the Super Tucano's reserve capacity.</p>
              </div>
            </div>
            <div className="driver-card">
              <span className="driver-icon"><FaDollarSign /></span>
              <div>
                <h4>Cost-Effectiveness</h4>
                <p>Target unit cost under $18M and cost per flight hour below $1,125. Achieved $11.5M unit cost — 36% cheaper than the Super Tucano.</p>
              </div>
            </div>
            <div className="driver-card">
              <span className="driver-icon"><FaCogs /></span>
              <div>
                <h4>Powerplant Adaptability</h4>
                <p>Designed around the GE Catalyst™ turboprop with FADEC and 3D-printed components, with the PT6A as a proven backup engine.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: Team Members ─── */}
        <section className="report-section">
          <h2><FaUsers /> The Design Team</h2>
          <p>
            The project was completed at Virginia Polytechnic Institute and State University within the Kevin T. Crofton Department of Aerospace and Ocean Engineering under the advisement of <strong>Dr. Pat Artis</strong> (Professor), <strong>Dr. Pradeep Raj</strong> (Professor), and <strong>Mr. Brenton Morris</strong> (Teaching Assistant).
          </p>

          <div className="team-grid">
            <div className="team-member-card">
              <h4>Douglas Lamb</h4>
              <p>Team Lead, Handling & Control</p>
            </div>
            <div className="team-member-card">
              <h4>Josh Pelech</h4>
              <p>Airframe Propulsion Integration</p>
            </div>
            <div className="team-member-card">
              <h4>Thomas Hallock</h4>
              <p>Aerodynamic Design & Analysis</p>
            </div>
            <div className="team-member-card">
              <h4>Soumodeep Dutta</h4>
              <p>Structures & Materials</p>
            </div>
            <div className="team-member-card">
              <h4>Sam Jubon</h4>
              <p>Air Vehicle Performance & Mission Analysis</p>
            </div>
            <div className="team-member-card active-user">
              <h4>Rudra Patel</h4>
              <p>Cost & Manufacturing</p>
            </div>
            <div className="team-member-card">
              <h4>Omar Talaksi</h4>
              <p>Weight & Mass Properties</p>
            </div>
            <div className="team-member-card">
              <h4>Justin Sweat</h4>
              <p>Configuration, CAD Modeling & Visualization</p>
            </div>
            <div className="team-member-card">
              <h4>Jason Nichols</h4>
              <p>Chief Engineer, Air Vehicle Subsystems</p>
            </div>
          </div>
        </section>

        {/* ─── Section 3: RFP Performance Compliance ─── */}
        <section className="report-section">
          <h2><FaTable /> RFP Performance Compliance</h2>
          <p>
            The A-13 Lizardskin was designed to meet or exceed all requirements specified in the AIAA RFP. The compliance matrix below summarizes the aircraft's performance against each critical mission metric:
          </p>

          <div className="table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Mission Metric</th>
                  <th>RFP Requirement</th>
                  <th>A-13 Performance</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Takeoff Distance (6,000 ft Alt)</strong></td>
                  <td>≤ 4,000 ft (over 50 ft obstacle)</td>
                  <td><strong>2,700 ft</strong></td>
                  <td className="status-green">Compliant</td>
                </tr>
                <tr>
                  <td><strong>Landing Distance (Austere)</strong></td>
                  <td>≤ 4,000 ft (over 50 ft obstacle)</td>
                  <td><strong>2,680 ft</strong></td>
                  <td className="status-green">Compliant</td>
                </tr>
                <tr>
                  <td><strong>Loiter Time (On-Station)</strong></td>
                  <td>≥ 4.0 hours (without external tanks)</td>
                  <td><strong>4+ Hours</strong></td>
                  <td className="status-green">Compliant</td>
                </tr>
                <tr>
                  <td><strong>Mission Combat Radius</strong></td>
                  <td>≥ 200 n. mi.</td>
                  <td><strong>≥ 200 n. mi.</strong></td>
                  <td className="status-green">Compliant</td>
                </tr>
                <tr>
                  <td><strong>Ferry Mission Range</strong></td>
                  <td>≥ 900 n. mi. (full crew, 60% payload)</td>
                  <td><strong>≥ 900 n. mi.</strong></td>
                  <td className="status-green">Compliant</td>
                </tr>
                <tr>
                  <td><strong>Service Ceiling</strong></td>
                  <td>≥ 30,000 ft</td>
                  <td><strong>30,000 ft</strong></td>
                  <td className="status-green">Compliant</td>
                </tr>
                <tr>
                  <td><strong>Payload Capacity</strong></td>
                  <td>3,000 lb armament</td>
                  <td><strong>6 × 500 lb hardpoints</strong></td>
                  <td className="status-green">Compliant</td>
                </tr>
                <tr>
                  <td><strong>Service Life</strong></td>
                  <td>15,000 hours over 25 years</td>
                  <td><strong>18,000 hours</strong></td>
                  <td className="status-green">Exceeds</td>
                </tr>
                <tr>
                  <td><strong>Crew & Ejection Seats</strong></td>
                  <td>2 crew, zero-zero ejection seats</td>
                  <td><strong>Inline config, 2× Martin Baker MK16</strong></td>
                  <td className="status-green">Compliant</td>
                </tr>
                <tr>
                  <td><strong>Austere Field (CBR 5)</strong></td>
                  <td>Takeoff/landing on CBR 5 surface</td>
                  <td><strong>18 passes before re-prep</strong></td>
                  <td className="status-green">Compliant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Section 4: Aircraft Configuration & Sizing ─── */}
        <section className="report-section">
          <h2><FaPlane /> Aircraft Configuration & Sizing</h2>
          <p>
            Initial sizing estimates began by evaluating comparator aircraft — primarily the Embraer EMB 314 Super Tucano and the Beechcraft AT-6B Wolverine. The team targeted a TOGW 10% less than the Super Tucano (11,905 lbs) while maintaining a CBR of 5 for austere runway operations. The Preferred System Concept (PSC) positions the engine and propeller at the nose to ensure optimal tipback and ground rollover safety margins without requiring excessively heavy landing gear assemblies.
          </p>

          <div className="single-image-frame">
            <img src={systemLayout} alt="Aircraft System Layout" className="report-img-full" />
            <span className="fig-caption">Figure 2: Preferred System Concept — internal airframe structural layout showing self-sealing fuel tanks, armor tub, landing gear bay, and weapons stations.</span>
          </div>

          <h3>Wing Design</h3>
          <p>
            The wing uses a NACA 65(4)-421 airfoil selected for its high stalling angle (17°), low minimum drag coefficient, and high lift-to-drag ratio at cruise conditions. A low-wing configuration was chosen to improve takeoff performance, reduce structural weight, decrease wing-induced drag, and provide better field of view for the pilot. A single-slotted flap achieves the required C<sub>L,max</sub> of 2.13 for takeoff and landing — the simplest and cheapest high-lift device option, aligned with the cost design driver.
          </p>

          <div className="spec-grid">
            <div className="spec-item">
              <span className="spec-label">Airfoil</span>
              <span className="spec-value">NACA 65₄-421</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Wing Span</span>
              <span className="spec-value">38.18 ft</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Wing Area</span>
              <span className="spec-value">210 ft²</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Aspect Ratio</span>
              <span className="spec-value">6.94</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Taper Ratio</span>
              <span className="spec-value">0.714</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">M.A.C.</span>
              <span className="spec-value">6 ft</span>
            </div>
          </div>

          <h3>Propulsion</h3>
          <p>
            The primary engine selection is the <strong>GE Catalyst™</strong> turboprop, which incorporates 3D-printed components to reduce part count and overall weight. Its Full Authority Digital Engine Control (FADEC) allows all engine performance to be managed by a single lever, greatly reducing pilot workload. The GE Catalyst offers 4,000–6,000 hours between overhauls and 15% better power-specific fuel consumption than leading turboprops, minimizing operating costs. The minimum power required from the analysis was 1,100 shp. As a backup, the Pratt & Whitney PT6A (TRL 9) is ready for integration if the GE Catalyst does not reach production readiness by the technology freeze date.
          </p>
        </section>

        {/* ─── Section 5: Weapons, Sensors & Avionics ─── */}
        <section className="report-section">
          <h2><FaCrosshairs /> Weapons, Sensors & Avionics</h2>

          <div className="grid-2col">
            <div className="card-box">
              <div className="card-title-icon"><FaFire /> <h4>Integrated Weapons</h4></div>
              <ul className="list-unstyled">
                <li><strong>Guns:</strong> 2× M2 Browning .50 cal machine guns, 600 rounds each. Selected over the GAU-19B for lower ammunition weight (~480 lbs total vs 626 lbs), leaving more payload capacity for guided munitions.</li>
                <li><strong>Hardpoints:</strong> 6× external hardpoints, 500 lbs each (3,000 lb total payload). Connected via MIL-STD-1760 bus for compatibility with all standard NATO guided munitions including 500 lb JDAMs and AGM-65 Maverick missiles.</li>
              </ul>
            </div>
            <div className="card-box">
              <div className="card-title-icon"><FaBullseye /> <h4>Sensor Payload</h4></div>
              <p>
                The <strong>Raytheon AN/AAS-53 Common Sensor Payload</strong> features an externally mounted tracking ball equipped with an HD video camera and a FLIR camera for day and night operations. Includes a laser rangefinder and laser designator, enabling use of all standard NATO laser-guided munitions without ground crew assistance.
              </p>
            </div>
          </div>

          <div className="grid-2col mt-2">
            <div className="card-box">
              <div className="card-title-icon"><FaCogs /> <h4>Avionics Suite</h4></div>
              <p>
                <strong>Garmin G3000</strong> integrated modular architecture with Line Replaceable Units (LRUs), dual-redundancy for MIL-STD compliance, and the GFC 700 autopilot. Supports both pilot and WSO stations. Includes <strong>DTS-K Link 11</strong> encrypted data link for secure communications with ground stations.
              </p>
            </div>
            <div className="card-box">
              <div className="card-title-icon"><FaShieldAlt /> <h4>Countermeasures</h4></div>
              <p>
                <strong>M130 General Purpose Dispenser</strong> mounted at the rear of the aircraft, capable of deploying IR flares against heat-seeking weapons and chaff against radar-guided threats. Combined with the turboprop design, which breaks the aircraft's heat signature via propwash over the wings and tail, reducing IR lock probability.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 6: Survivability & Armor ─── */}
        <section className="report-section">
          <h2><FaShieldAlt /> Survivability & Armor</h2>
          <p>
            Survivability was the cornerstone of the A-13 Lizardskin design strategy. The aircraft is purpose-built for low-altitude close air support sorties where exposure to small arms fire is highly likely. The vulnerable engine area constitutes only approximately 2–5% of the total aircraft area, surrounded by light armor, and the turboprop configuration inherently reduces IR signature.
          </p>

          <div className="survivability-grid">
            <div className="surv-card">
              <h4><FaShieldAlt /> Titanium Armor Tub</h4>
              <p>Grade 5 titanium "bathtub" surrounds the cockpit floor and sidewalls, rated to <strong>Level 5 bulletproofing</strong> — protecting pilot and WSO from .50 BMG rounds. Fastened to the powerplant firewall and an aluminum bulkhead aft of the cockpit.</p>
            </div>
            <div className="surv-card">
              <h4><FaShieldAlt /> Bulletproof Canopy</h4>
              <p>Forward canopy constructed from <strong>Level 5 bulletproof plexiglass</strong>, maintaining full visibility while providing ballistic protection matching the armor tub rating.</p>
            </div>
            <div className="surv-card">
              <h4><FaPlane /> Twin-Tail Redundancy</h4>
              <p>Twin vertical stabilizers ensure that damage or shearing of a single tail does not compromise aircraft controllability — the aircraft can safely return to base on one tail.</p>
            </div>
            <div className="surv-card">
              <h4><FaGasPump /> Self-Sealing Fuel Tanks</h4>
              <p>Wing-mounted self-sealing fuel tanks (225-gallon capacity) prevent fuel loss from ballistic punctures, with tanks integrated into the wing structure between spars spaced 4 feet apart.</p>
            </div>
          </div>

          <p>
            The fuselage skin panels use <strong>2024-T3 aluminum</strong>, selected for its advantageous ductility under compression and surface strikes — critical for an aircraft operating from poorly-conditioned dirt runways where FOD exposure is likely. The structural airframe uses <strong>7075-T6 aluminum</strong> for maximum fatigue strength, validated through stress-per-cycle trade studies to confirm superior cycle-to-failure performance over alternative alloys.
          </p>
        </section>

        {/* ─── Section 7: Design Evolution & Weight Analysis ─── */}
        <section className="report-section">
          <h2><FaWeight /> Design Evolution & Weight Analysis</h2>
          <p>
            The A-13 Lizardskin evolved through iterative sizing optimizations using a bottom-to-top design approach. Initial viable concepts were evaluated through a downselection process using measures of merit — combat survivability, service life, lifetime cost, and TOGW — before refining the Preferred System Concept. As structural and survivability armor details were finalized, mass properties were updated to verify configuration balance, center-of-gravity stability, and static stability derivatives.
          </p>

          <div className="images-row">
            <div className="image-frame">
              <img src={designEvolution} alt="Design Evolution Steps" className="report-img" />
              <span className="fig-caption">Figure 3: Geometric design evolution of the PSC through iterative sizing and concept refinement.</span>
            </div>
            <div className="image-frame">
              <img src={cgEnvelope} alt="Center of Gravity Envelope" className="report-img" />
              <span className="fig-caption">Figure 4: A-13 Lizardskin CG.</span>
            </div>
          </div>

          <div className="results-grid mt-2">
            <div className="result-metric-card">
              <span className="metric-label">Takeoff Weight (TOGW)</span>
              <span className="metric-value">12,403 lbs</span>
              <span className="metric-comparison">Max TOGW with full fuel, crew, and ammunition. Empty weight: 7,427 lbs.</span>
            </div>

            <div className="result-metric-card">
              <span className="metric-label">Max Airspeed</span>
              <span className="metric-value">330 KTAS</span>
              <span className="metric-comparison">True airspeed at cruise altitude with service ceiling of 30,000 ft.</span>
            </div>

            <div className="result-metric-card">
              <span className="metric-label">Service Life</span>
              <span className="metric-value">18,000 Hrs</span>
              <span className="metric-comparison">Calculated fatigue life of critical 7075-T6 aluminum structures (30 yrs, 8.5 months).</span>
            </div>
          </div>
        </section>

        {/* ─── Section 8: Cost Analysis & Program Summary ─── */}
        <section className="report-section">
          <h2><FaDollarSign /> Cost Analysis & Program Summary</h2>
          <p>
            Cost estimation followed the methodology in Nicolai, with engineering, tooling, and manufacturing hours calculated for both the RDT&E phase and a 300-unit production run plus 6 developmental aircraft. Hourly wage rates were modeled at $145.52 (engineering), $157.66 (tooling), and $126.32 (manufacturing), with all values adjusted for inflation from the 1998 base year.
          </p>

          <div className="results-grid">
            <div className="result-metric-card">
              <span className="metric-label">Unit Cost</span>
              <span className="metric-value">$11.5M USD</span>
              <span className="metric-comparison">36% lower than the EMB-314 Super Tucano ($18M USD per unit).</span>
            </div>

            <div className="result-metric-card">
              <span className="metric-label">Total Project Cost</span>
              <span className="metric-value">~$3B USD</span>
              <span className="metric-comparison">Combined RDT&E ($669M) and production ($2.33B) for 300 aircraft.</span>
            </div>

            <div className="result-metric-card">
              <span className="metric-label">Production Run</span>
              <span className="metric-value">300 Units</span>
              <span className="metric-comparison">Plus 6 developmental aircraft for flight test operations.</span>
            </div>
          </div>

          <div className="table-wrapper mt-2">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Cost Category</th>
                  <th>Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Engineering</td>
                  <td>$328.7M</td>
                </tr>
                <tr>
                  <td>Manufacturing</td>
                  <td>$905.4M</td>
                </tr>
                <tr>
                  <td>Materials</td>
                  <td>$220.5M</td>
                </tr>
                <tr>
                  <td>Tooling</td>
                  <td>$146.4M</td>
                </tr>
                <tr>
                  <td>Engines (GE Catalyst × 306)</td>
                  <td>$76.5M</td>
                </tr>
                <tr>
                  <td>Avionics (Garmin G3000 × 306)</td>
                  <td>$114.8M</td>
                </tr>
                <tr>
                  <td>Development Support & Flight Test</td>
                  <td>$69.1M</td>
                </tr>
                <tr className="cost-total-row">
                  <td>Grand Total</td>
                  <td>$2,998.3M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-2">
            The A-13 Lizardskin entry into service was planned for June 2025, with the preliminary design phase concluding at report submission, followed by detailed design, prototype fabrication, flight testing, and deployment — all structured around quarterly milestones typical of military-based contracts.
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

export default AIAADetails;
