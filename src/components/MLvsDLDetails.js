import React from 'react';
import './MLvsDLDetailsStyles.css';
import { FaArrowLeft, FaBookOpen, FaBullseye, FaChartLine, FaCarSide, FaBalanceScale, FaCogs, FaToolbox, FaLightbulb, FaListOl, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox.js';

import svmMargin from '../assets/ml/svm_margin.svg';
import cnnHierarchy from '../assets/ml/cnn_hierarchy.svg';

const MLvsDLDetails = () => {
  return (
    <Lightbox>
      <div className="ml-details-section">
        <div className="ml-details-container">

          <Link to="/project" className="ml-back-link">
            <FaArrowLeft /> Back to Projects
          </Link>

          <h1 className="ml-title">Machine Learning vs. Deep Learning</h1>

          {/* ─── Overview ─── */}
          <section className="ml-section">
            <h2><FaBookOpen /> Overview</h2>
            <p>
              Machine learning (ML) and deep learning (DL) both learn from data, but it is crucial to
              identify which method to use when. Traditional ML relies on human-defined features fed into
              algorithms such as logistic regression or support vector machines, and works well on
              structured data with modest sample sizes. Deep learning uses multi-layer neural networks that
              learn features directly from raw, high-dimensional input, and dominates when the signal is
              buried in pixels, audio, or unstructured sequences.
            </p>
            <p>
              This report examines two examples from the course lecture — <strong>customer churn
              prediction</strong>, a simple ML task solved with a support vector machine (SVM), and
              <strong> autonomous driving</strong>, a deep learning task built on convolutional neural
              networks (CNNs). For both, I identify a real-world application and justify why the chosen
              approach fits the problem and why the alternative does not.
            </p>
          </section>

          {/* ─── Objective ─── */}
          <section className="ml-section">
            <h2><FaBullseye /> Objective</h2>
            <p>
              I created this report for AIML-500 Machine Learning Fundamentals (Assignment 2.3) to
              develop and demonstrate the judgment needed to decide when a problem calls for classical
              machine learning versus deep learning. Rather than treating one method as universally
              better, the goal was to justify each choice against the structure of the data, the volume
              available, and the cost the problem can bear.
            </p>
          </section>

          {/* ─── Example 1: Customer Churn — SVM ─── */}
          <section className="ml-example">
            <h2><FaChartLine /> Example 1 — Customer Churn Prediction (Simple ML: SVM)</h2>

            <h3>Real-World Application</h3>
            <p>
              Telecommunications carriers use churn models to identify postpaid subscribers who are likely
              to cancel service, then target them with retention offers before they leave. A carrier trains
              a model on historical account records — customer tenure, contract type, monthly charges, data
              usage, number of support tickets, and payment history — labeled by whether each customer
              eventually churned. The trained SVM scores active customers so the retention team can
              prioritize outreach.
            </p>

            <div className="ml-figure">
              <img loading="lazy" src={svmMargin} alt="SVM maximum-margin separating hyperplane with support vectors" />
              <div className="ml-caption">
                Figure 1: An SVM finds the maximum-margin boundary separating churners from non-churners;
                the closest points (support vectors) define the margin.
              </div>
            </div>

            <h3><FaCheckCircle className="ml-yes" /> Why SVM Is Suitable</h3>
            <p>
              The data is structured and tabular, with a small set of features that can be defined directly
              (tenure, charges, contract length). An SVM finds the maximum-margin boundary that separates
              churners from non-churners, capturing nonlinear relationships — for example, an interaction
              between short tenure and high monthly charges — without the massive data volumes a neural
              network demands. Formally, a linear SVM solves the convex optimization
            </p>
            <div className="ml-equation">
              min ½‖w‖²&nbsp;&nbsp;subject to&nbsp;&nbsp;y<sub>i</sub>(w·x<sub>i</sub> + b) ≥ 1
            </div>
            <p>
              which has a stable, repeatable solution — an advantage when the model is retrained frequently
              as the customer base shifts. Training and inference are cheap, so the carrier can rebuild the
              model on commodity hardware. Because the features are already meaningful, the interpretability
              of a linear-kernel SVM also helps the business justify why a given customer was flagged, which
              matters for retention budgeting and regulatory review.
            </p>

            <h3><FaTimesCircle className="ml-no" /> Why Deep Learning Is Not Suitable</h3>
            <p>
              Deep networks need large, labeled datasets and substantial compute to reach their potential,
              and on structured tabular data they rarely beat a well-tuned SVM. The features here are
              already engineered and informative, so the automatic feature learning that is the main
              advantage of deep learning provides little benefit. A deep model would add training cost,
              extensive hyperparameter tuning, and a real risk of overfitting on the limited churn history,
              all without a measurable accuracy gain. It would also reduce transparency: explaining a
              multi-layer network to a retention manager is far harder than explaining SVM feature weights.
            </p>
          </section>

          {/* ─── Example 2: Autonomous Driving — CNN ─── */}
          <section className="ml-example">
            <h2><FaCarSide /> Example 2 — Autonomous Driving (Deep Learning: CNN &amp; Deep RL)</h2>

            <h3>Real-World Application</h3>
            <p>
              Self-driving systems such as Tesla Autopilot and Waymo's driver use deep neural networks to
              perceive the road from raw sensor data. Cameras and LIDAR stream high-resolution images and
              point clouds, which are fused together. CNN-based perception models detect and classify
              pedestrians, vehicles, lane markings, traffic lights, and road signs in real time, and a
              learned policy uses those detections to plan steering, acceleration, and braking. The system
              must operate across changing lighting, weather, occlusion, and unfamiliar scenes, and it is
              trained on the large volume of driving data these fleets collect.
            </p>

            <div className="ml-figure">
              <img loading="lazy" src={cnnHierarchy} alt="CNN feature hierarchy: raw pixels to edges to object parts to whole objects" />
              <div className="ml-caption">
                Figure 2: A CNN learns a hierarchy of features directly from raw input — edges, then object
                parts, then whole objects — removing the need for hand-engineered detectors.
              </div>
            </div>

            <h3><FaCheckCircle className="ml-yes" /> Why Deep Learning Is Suitable</h3>
            <p>
              The input is raw, high-dimensional pixel and point-cloud data in which the relevant objects
              have no fixed, hand-codable signature. A pedestrian looks different to a sensor at night, in
              rain, partially hidden behind a car, or wearing any color of clothing. A CNN learns a
              hierarchy of features directly from the raw input: early layers detect edges and textures,
              deeper layers assemble them into object parts and whole objects. This automatic feature
              extraction is exactly what the problem requires, because no engineer could enumerate by hand
              the visual features that distinguish every object under every condition. Deep models also
              scale with data, so performance improves as the fleet gathers more real-world miles, and deep
              reinforcement learning can optimize the driving policy against a reward for safe, smooth
              progress. Perception accuracy is the binding safety constraint, and deep learning is the only
              approach that reaches the required performance on raw sensor input.
            </p>

            <h3><FaTimesCircle className="ml-no" /> Why Simple Machine Learning Is Not Suitable</h3>
            <p>
              A traditional ML pipeline depends on humans defining the features in advance, which is not
              practical for open-world driving. Feeding raw pixels straight into an SVM or logistic-regression
              model fails because those algorithms have no mechanism to model the spatial hierarchy and local
              structure of an image. They treat each pixel as an independent input and scale poorly to the
              millions of pixels in a single frame. They also cannot capture the temporal context needed to
              track a moving object across frames. To make classical ML work at all, engineers would have to
              hand-build detectors for every object class and condition — the manual bottleneck deep learning
              removes. On this problem the accuracy ceiling of hand-engineered features is far below what
              safe driving demands, so simple ML is not viable.
            </p>
          </section>

          {/* ─── Trade-offs ─── */}
          <section className="ml-section">
            <h2><FaBalanceScale /> Engineering Trade-Offs</h2>
            <p>
              The two cases show the same principle from opposite ends. Churn prediction has structured
              features, modest data, and a strong need for cheap retraining and interpretability, so a
              low-cost SVM is the right fit and deep learning would waste compute for no accuracy gain.
              Autonomous driving has raw high-dimensional input, effectively unlimited data, and accuracy as
              the binding constraint, so the high computational cost of deep networks is justified because
              nothing simpler can reach the required performance. The decision is not which method is better
              in the abstract, but matching model complexity to the structure and dimensionality of the data
              and to the cost the problem can bear.
            </p>
          </section>

          {/* ─── Process ─── */}
          <section className="ml-section">
            <h2><FaCogs /> Process</h2>
            <p>
              I started from the course lecture on machine learning versus deep learning, then selected
              two contrasting real-world applications — customer churn prediction and autonomous driving.
              For each, I researched why the chosen approach fits and why the alternative fails, grounding
              every claim in peer-reviewed and primary industry sources. I created original diagrams to
              illustrate the SVM decision margin and the CNN feature hierarchy, and organized the analysis
              into a structured report with a clear trade-off summary and citations.
            </p>
          </section>

          {/* ─── Tools ─── */}
          <section className="ml-section">
            <h2><FaToolbox /> Tools</h2>
            <ul className="ml-tools">
              <li><strong>Microsoft Word</strong> — writing and formatting the report.</li>
              <li><strong>Academic &amp; industry sources</strong> — IBM, Nature, NVIDIA, Tesla, and arXiv for evidence and citations.</li>
              <li><strong>React portfolio</strong> — presenting the artifact on this website, with original SVG diagrams.</li>
            </ul>
          </section>

          {/* ─── Value Proposition ─── */}
          <section className="ml-section">
            <h2><FaLightbulb /> Value Proposition</h2>
            <p>
              This artifact demonstrates my ability to match model complexity to a problem rather than
              defaulting to the most powerful method available. It shows that I can analyze a problem's
              data type, scale, and constraints, justify an engineering decision with evidence, and
              communicate the trade-offs clearly — the same judgment required to choose cost-effective,
              maintainable solutions in real machine-learning work.
            </p>
          </section>

          {/* ─── References ─── */}
          <section className="ml-section">
            <h2><FaListOl /> References</h2>
            <ol className="ml-refs">
              <li>IBM. "What Is a Support Vector Machine (SVM)?" IBM Think Topics. <a href="https://www.ibm.com/think/topics/support-vector-machine" target="_blank" rel="noopener noreferrer">ibm.com/think/topics/support-vector-machine</a></li>
              <li>C. Cortes and V. Vapnik, "Support-Vector Networks," <em>Machine Learning</em>, vol. 20, no. 3, pp. 273–297, 1995. <a href="https://doi.org/10.1007/BF00994018" target="_blank" rel="noopener noreferrer">doi.org/10.1007/BF00994018</a></li>
              <li>Y. LeCun, Y. Bengio, and G. Hinton, "Deep Learning," <em>Nature</em>, vol. 521, pp. 436–444, 2015. <a href="https://doi.org/10.1038/nature14539" target="_blank" rel="noopener noreferrer">doi.org/10.1038/nature14539</a></li>
              <li>L. Grinsztajn, E. Oyallon, and G. Varoquaux, "Why Do Tree-Based Models Still Outperform Deep Learning on Tabular Data?" NeurIPS Datasets and Benchmarks, arXiv:2207.08815, 2022. <a href="https://arxiv.org/abs/2207.08815" target="_blank" rel="noopener noreferrer">arxiv.org/abs/2207.08815</a></li>
              <li>Tesla. "AI &amp; Robotics." Tesla, Inc. <a href="https://www.tesla.com/AI" target="_blank" rel="noopener noreferrer">tesla.com/AI</a></li>
              <li>M. Bojarski et al., "End to End Learning for Self-Driving Cars," NVIDIA Corporation, arXiv:1604.07316, 2016. <a href="https://arxiv.org/abs/1604.07316" target="_blank" rel="noopener noreferrer">arxiv.org/abs/1604.07316</a></li>
            </ol>
          </section>

          <div className="ml-bottom-nav">
            <Link to="/project" className="ml-back-link">
              <FaArrowLeft /> Back to Projects
            </Link>
          </div>

        </div>
      </div>
    </Lightbox>
  );
};

export default MLvsDLDetails;
