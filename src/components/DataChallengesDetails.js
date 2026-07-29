import React from 'react';
import './DataChallengesDetailsStyles.css';
import {
  FaArrowLeft, FaBookOpen, FaLayerGroup, FaSearchPlus, FaTable,
  FaBalanceScale, FaLightbulb, FaGem, FaListOl
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import assets
import dcFeature from '../assets/dc/data_challenges_feature.svg';

// Inline citation marker linking down to the reference list.
const Cite = ({ n }) => (
  <sup className="dc-cite">
    {n.map((num, i) => (
      <React.Fragment key={num}>
        {i > 0 && ','}
        <a href={`#dc-ref-${num}`}>[{num}]</a>
      </React.Fragment>
    ))}
  </sup>
);

// One challenge block: numbered badge + title + labelled sub-sections.
const Challenge = ({ num, title, children }) => (
  <div className="dc-challenge">
    <div className="dc-challenge-head">
      <span className="dc-num">{num}</span>
      <h3>{title}</h3>
    </div>
    {children}
  </div>
);

const DataChallengesDetails = () => {
  return (
    <div className="dc-details-section">
      <div className="dc-details-container">

        {/* Back Link */}
        <Link to="/project" className="dc-back-link">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header Metadata */}
        <div className="dc-meta">
          <span><strong>Course:</strong> AI500</span>
          <span><strong>Type:</strong> Research Report</span>
          <span><strong>Assignment:</strong> 4.2</span>
          <span><strong>Topic:</strong> Data Challenges in Machine Learning</span>
        </div>

        {/* Main Title */}
        <h1 className="dc-title">Data Challenges in Machine Learning</h1>

        {/* Purpose and Scope */}
        <div className="dc-intro-card">
          <h3><FaBookOpen /> Purpose and Scope</h3>
          <p>
            Most published ML failures are not model failures. The architecture is usually fine;
            the data underneath it is not. This report documents the data challenges that arise
            when training and deploying machine learning applications, using the fourteen
            challenges outlined in the AI500 4.2 lesson as the base structure, extended with five
            additional challenges that appear consistently in the research literature but are not
            in the lesson list.
          </p>
          <p>
            Every challenge is documented in the same four-part format: <strong>what the
            challenge is</strong> (the mechanism, stated precisely enough to be actionable),{' '}
            <strong>impact</strong> (what breaks downstream and how it shows up in metrics),{' '}
            <strong>real-world evidence</strong> (a documented, cited incident or peer-reviewed
            finding), and <strong>mitigations</strong> (concrete techniques, with the engineering
            trade-off named). A summary table and a governance/standards section follow the
            catalog.
          </p>
        </div>

        {/* Featured Image */}
        <div className="dc-figure">
          <img src={dcFeature} alt="Data challenges mapped across the ML pipeline: collect, label, train, deploy" />
          <p className="dc-caption">
            Figure 1: Where the nineteen challenges live. A defect introduced upstream stays
            invisible at training time and compounds downstream, which is the defining property of a data
            cascade.
          </p>
        </div>

        {/* ─── Framing ─── */}
        <section className="dc-section">
          <h2><FaLayerGroup /> A Framing Number</h2>
          <p>
            Andrew Ng's data-centric AI campaign popularized the estimate that roughly 80% of an
            ML practitioner's time goes to data preparation rather than modeling.<Cite n={[1]} />{' '}
            Sambasivan et al. (Google Research, CHI 2021) put empirical structure behind that:
            interviewing 53 AI practitioners across India, East and West Africa, and the US, they
            defined <strong>data cascades</strong>, compounding downstream failures originating in
            upstream data problems, and found that 92% of practitioners had experienced at least
            one.<Cite n={[2]} /> The defining property of a cascade is that it is invisible at
            training time and expensive at deployment time. Every challenge below is a cascade
            trigger.
          </p>

          <div className="dc-stats">
            <div className="dc-stat">
              <span className="dc-stat-num">92%</span>
              <span className="dc-stat-label">of practitioners hit at least one data cascade</span>
            </div>
            <div className="dc-stat">
              <span className="dc-stat-num">6%+</span>
              <span className="dc-stat-label">label errors in the ImageNet validation set</span>
            </div>
            <div className="dc-stat">
              <span className="dc-stat-num">294</span>
              <span className="dc-stat-label">papers across 17 fields affected by leakage</span>
            </div>
            <div className="dc-stat">
              <span className="dc-stat-num">$304M</span>
              <span className="dc-stat-label">Zillow write-down from undetected drift</span>
            </div>
          </div>
        </section>

        {/* ═══ PART I ═══ */}
        <div className="dc-part">
          <h2><FaLayerGroup /> Part I: The Fourteen Core Data Challenges</h2>
          <p>The challenges named in the AI500 4.2 lesson, each documented against a cited incident or peer-reviewed finding.</p>
        </div>

        {/* 1 */}
        <Challenge num="1" title="Data Availability">
          <span className="dc-label">What the challenge is</span>
          <p>
            Sufficient, relevant, and legally usable data does not exist for many problems. This is
            acute in three situations: rare-event domains where the phenomenon itself is scarce
            (machine failure, rare disease, adversarial attack); novel applications where no
            historical process was generating labeled data; and regulated or proprietary domains
            where the data exists but cannot cross institutional boundaries. Availability is not
            the same as volume; a dataset can be enormous and still fail to cover the operational
            design domain.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li><strong>Overfitting.</strong> With too few samples relative to model capacity, the model memorizes training noise.</li>
            <li><strong>Coverage gaps become silent failure modes.</strong> The model has no calibrated behavior on inputs it never saw. It does not abstain; it extrapolates confidently.</li>
            <li><strong>Statistical power for evaluation collapses.</strong> With 30 positive examples in a test set, a 5% accuracy difference between two candidate models is noise.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              The March 2018 Uber ATG fatality in Tempe, Arizona is the clearest documented case of
              a coverage gap in a safety-critical system. The NTSB investigation found the
              automated driving system did not include a classification for a pedestrian crossing
              outside a crosswalk, so jaywalking was not represented as a scenario. The ADS
              reclassified the pedestrian repeatedly between "vehicle," "bicycle," and "other," and
              because each reclassification reset the object's tracked history, the system could
              not project a consistent path. It recognized an imminent collision only 1.2 seconds
              before impact.<Cite n={[3, 4]} />
            </p>
            <p>
              The engineering lesson is that the gap was not in the perception model's accuracy on
              its own test set. It was in the definition of what the test set was supposed to cover.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <div className="dc-table-wrap">
            <table className="dc-table">
              <thead>
                <tr><th>Technique</th><th>What it does</th><th>Trade-off</th></tr>
              </thead>
              <tbody>
                <tr><td>Transfer learning</td><td>Reuse representations learned on a large source dataset; adapt on a small target set</td><td>Source-domain bias transfers along with the features</td></tr>
                <tr><td>Data augmentation</td><td>Synthesize valid variants (rotation, noise injection, time warping, SpecAugment)</td><td>Only expands within invariances you already believe in; cannot invent a missing class</td></tr>
                <tr><td>Simulation</td><td>Generate rare scenarios directly (common in AV, robotics, HIL testing)</td><td>Sim-to-real gap; synthetic distributions rarely match tail behavior</td></tr>
                <tr><td>Federated learning</td><td>Train across institutions without moving raw data</td><td>Communication cost, non-IID client data, harder debugging</td></tr>
                <tr><td>Active learning</td><td>Spend the labeling budget on the most informative samples</td><td>Requires an uncertainty estimate that is itself trustworthy</td></tr>
                <tr><td>Weak supervision</td><td>Programmatically generate noisy labels at scale (Snorkel-style labeling functions)</td><td>Introduces correlated label noise</td></tr>
              </tbody>
            </table>
          </div>

          <div className="dc-tradeoff">
            <p>
              <strong>Trade-off:</strong> simulation is cheap per sample and expensive to validate.
              A synthetic dataset that has not been correlated against real measurements is an
              assumption, not evidence.
            </p>
          </div>
        </Challenge>

        {/* 2 */}
        <Challenge num="2" title="Data Quality">
          <span className="dc-label">What the challenge is</span>
          <p>
            Data quality is a multi-dimensional property, and treating it as one number hides the
            failure. The dimensions that matter for ML: <strong>completeness</strong> (missing
            values, records, time ranges), <strong>accuracy</strong> (values that do not reflect
            physical or business reality, such as sensor drift, unit errors, or entry mistakes),{' '}
            <strong>consistency</strong> (the same entity represented differently across sources or
            time), <strong>timeliness</strong> (correct when recorded, stale at inference),{' '}
            <strong>validity</strong> (values outside possible ranges), and{' '}
            <strong>uniqueness</strong> (duplicates that silently reweight the training
            distribution).
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Noisy features inflate irreducible error and force the model to spend capacity fitting artifacts.</li>
            <li>Missing-not-at-random data injects bias: if a sensor drops out preferentially under high load, "missing" encodes a condition, and naive mean imputation destroys that signal.</li>
            <li>Duplicates straddling a train/test split produce inflated test metrics, a form of leakage (Challenge 15).</li>
            <li>A defect introduced at collection is far cheaper to fix at collection than after three downstream transformations.<Cite n={[2]} /></li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              Northcutt, Athalye, and Mueller (NeurIPS 2021 Datasets and Benchmarks Track) audited
              the test sets of ten of the most-used ML benchmarks using confident learning, then had
              humans validate the flagged samples. They found an average of at least 3.3% label
              errors across the ten datasets, and <strong>at least 6% in the ImageNet validation
              set</strong>. Critically, on the corrected test sets model rankings change: lower-capacity
              models sometimes outperform higher-capacity models that had been "winning" partly by
              fitting the errors.<Cite n={[5]} />
            </p>
            <p>
              If the reference benchmarks the field calibrates against contain 3-6% errors, a
              typical production dataset assembled under schedule pressure is unlikely to do better.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Automated validation at ingest.</strong> Schema and distribution assertions (Great Expectations, TensorFlow Data Validation, Deequ) run as a pipeline gate, not a notebook step. Fail the pipeline on violation rather than logging a warning.</li>
            <li><strong>Confident learning / cleanlab-style label auditing</strong> to surface probable label errors for human review.</li>
            <li><strong>Outlier and drift detection on inputs</strong> before they reach training.</li>
            <li><strong>Deduplication with near-duplicate detection</strong> (perceptual hashing for images, MinHash/LSH for text), applied <em>before</em> the train/test split.</li>
            <li><strong>Principled missing-data handling.</strong> Encode missingness as an explicit indicator when it is informative; use multiple imputation when it is not.</li>
            <li><strong>Data contracts</strong> between producing and consuming teams, so an upstream schema change is a breaking-change negotiation rather than a surprise.</li>
          </ul>

          <div className="dc-tradeoff">
            <p>
              <strong>Trade-off:</strong> aggressive cleaning removes real tail behavior. In test
              and reliability data, the outliers are frequently the events of interest. Quarantine
              and review beats automatic deletion.
            </p>
          </div>
        </Challenge>

        {/* 3 */}
        <Challenge num="3" title="Data Labeling">
          <span className="dc-label">What the challenge is</span>
          <p>
            Supervised learning requires labels, and labels are a manufactured product with their
            own defect rate. The challenge has three parts: obtaining enough labels, obtaining{' '}
            <em>correct</em> labels, and obtaining <em>consistent</em> labels across annotators and
            over time. Ambiguous class boundaries and under-specified annotation guidelines produce
            disagreement that no amount of model capacity can resolve.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Label noise sets a ceiling on achievable accuracy. If 8% of labels are wrong, a model that fits them perfectly is 8% wrong by construction.</li>
            <li>Systematic label noise, such as one annotator team consistently misinterpreting a guideline, is worse than random noise, because the model learns the misinterpretation as signal.</li>
            <li>Inter-annotator disagreement that is never measured means the reported test accuracy has no error bar.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              The ImageNet audit above is direct evidence of labeling failure at scale in a curated
              academic dataset.<Cite n={[5]} /> In medicine, label ambiguity is structural rather
              than careless: for many imaging tasks the "ground truth" is a radiologist's read, and
              radiologists disagree with each other and with themselves on re-read. Any model
              trained against a single-reader label inherits that reader's idiosyncrasies as ground
              truth.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Written, versioned annotation guidelines with adjudicated edge-case examples.</strong> Treat the guideline as a controlled document; when it changes, re-label affected data or record the guideline version alongside each label.</li>
            <li><strong>Measure inter-annotator agreement</strong> (Cohen's or Fleiss' κ, Krippendorff's α) and report it as a headline metric. Model accuracy above the human agreement ceiling is a sign of leakage, not skill.</li>
            <li><strong>Consensus labeling with adjudication</strong> for high-stakes classes; single-pass for low-stakes. Spend the budget where disagreement is highest.</li>
            <li><strong>Gold-standard probe items</strong> seeded into annotation batches to score annotators continuously.</li>
            <li><strong>Programmatic/weak supervision</strong> to bootstrap, with a human-labeled evaluation set kept clean and separate.</li>
            <li><strong>Active learning</strong> to route only high-uncertainty samples to expensive expert annotators.</li>
          </ul>
        </Challenge>

        {/* 4 */}
        <Challenge num="4" title="Data Privacy and Security">
          <span className="dc-label">What the challenge is</span>
          <p>
            Training data frequently contains personal, health, biometric, or otherwise regulated
            information. GDPR, HIPAA, CCPA/CPRA, and the EU AI Act each constrain what can be
            collected, how long it can be kept, what it can be used for, and who it can be shared
            with. Two properties of ML make this harder than conventional data protection: models
            memorize training examples and can leak them under membership-inference or extraction
            attacks, and the "right to erasure" is difficult to honor once a record has influenced
            model weights.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Legal exposure. GDPR penalties reach €20M or 4% of global turnover; the EU AI Act reaches €35M or 6% for the most serious violations.<Cite n={[6]} /></li>
            <li>Restricted access reduces effective dataset size and forces working with less-representative proxies.</li>
            <li>Anonymization is weaker than commonly assumed. The US Census Bureau ran a database reconstruction attack against its own published 2010 tabulations and reconstructed confidential microdata for <strong>144 million people, 46% of the US population</strong>, reidentifying roughly 52 million (17%) when combined with commercial data.<Cite n={[7]} /> Aggregate publication is not automatically safe.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              Clearview AI built a facial recognition system on billions of images scraped from the
              public web without consent. European regulators found no valid legal basis under GDPR
              and issued fines across four jurisdictions: €20M in Italy (Feb 2022), €20M in France
              (Oct 2022), £7.5M in the UK (May 2022), and €30.5M in the Netherlands (2024), with a
              further €5.1M in periodic penalties for continued non-compliance.<Cite n={[8, 9]} />{' '}
              The training data was technically available on the open internet and legally unusable.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Differential privacy.</strong> Formal, composable guarantee bounded by a privacy budget ε. Adopted by the US Census Bureau for the 2020 Disclosure Avoidance System specifically because traditional swapping/suppression could not defend against reconstruction.<Cite n={[7]} /> DP-SGD applies the same idea to model training.</li>
            <li><strong>Federated learning.</strong> Gradients leave the device or institution; raw records do not. Pair with secure aggregation, since raw gradients themselves leak.</li>
            <li><strong>Data minimization and purpose limitation.</strong> Collect the fields required for the stated purpose, nothing more. Cheapest control available and the most often skipped.</li>
            <li><strong>Pseudonymization, tokenization, k-anonymity/l-diversity</strong> for lower-risk releases, understood as heuristics rather than guarantees.</li>
            <li><strong>Synthetic data generation</strong> for development and test environments, with a membership-inference privacy audit on the generator itself.</li>
            <li><strong>Access control, encryption, audit logging, retention schedules</strong> applied to training corpora, which are often the least-governed data store in an organization.</li>
          </ul>

          <div className="dc-tradeoff">
            <p>
              <strong>Trade-off:</strong> privacy budget directly costs utility. At the 2020 Census,
              small-geography counts became noticeably noisier, a real, quantified accuracy loss
              accepted deliberately in exchange for a provable confidentiality guarantee. That is
              the correct way to frame the trade: an engineering decision with a number attached,
              not a compliance checkbox.
            </p>
          </div>
        </Challenge>

        {/* 5 */}
        <Challenge num="5" title="Data Bias">
          <span className="dc-label">What the challenge is</span>
          <p>
            Bias in the ML sense is a systematic mismatch between the training distribution and the
            distribution the model claims to represent. It has several distinct origins, and the
            mitigation differs by origin: <strong>historical bias</strong> (the world that generated
            the data was itself unequal), <strong>representation bias</strong> (some groups
            undersampled relative to the deployment population), <strong>measurement bias</strong>{' '}
            (the feature or label is a proxy that means different things for different groups),{' '}
            <strong>aggregation bias</strong> (one model fit where subgroups have genuinely
            different relationships), and <strong>deployment bias</strong> (the model used for a
            purpose it was not validated for).
          </p>

          <span className="dc-label">Impact</span>
          <p>
            Unfair or discriminatory outcomes in hiring, lending, healthcare, and criminal justice;
            regulatory action; reputational damage; and, the point most often missed by engineers,
            degraded accuracy. A biased model is usually also a less accurate model on the
            underrepresented segment, so this is a performance defect, not only an ethics problem.
          </p>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              <strong>Measurement bias: Obermeyer et al., <em>Science</em>, 2019.</strong> A
              commercial risk-prediction algorithm applied to roughly 200 million people annually
              used <em>predicted healthcare cost</em> as a proxy for <em>healthcare need</em>.
              Because less money is historically spent on Black patients at equal levels of illness,
              the algorithm systematically scored equally sick Black patients as healthier.
              Correcting the target variable raised the proportion of Black patients flagged for
              additional care from <strong>17.7% to 46.5%</strong>. The features were not the
              problem; the label was.<Cite n={[10]} />
            </p>
            <p>
              <strong>Representation bias: Buolamwini and Gebru, "Gender Shades," FAT* 2018.</strong>{' '}
              Commercial gender-classification APIs from IBM, Microsoft, and Face++ showed error
              rates under 1% for lighter-skinned males (0.8% max) and up to <strong>34.7% for
              darker-skinned females</strong>. Aggregate accuracy on the vendors' own benchmarks
              looked acceptable; the disparity was only visible under intersectional
              disaggregation.<Cite n={[11, 12]} />
            </p>
            <p>
              <strong>Historical bias: Amazon's recruiting model, 2014-2017.</strong> Trained on
              ten years of resumes submitted to a male-dominated engineering organization, the model
              learned to penalize resumes containing "women's" (as in "women's chess club captain")
              and to favor male-coded verbs. Amazon neutralized the specific terms it found, could
              not gain confidence that no other proxies remained, and scrapped the
              project.<Cite n={[13, 14]} /> The instructive part is the ending: the correct
              engineering decision was to stop, because proxy variables for a protected attribute
              are effectively unbounded in high-dimensional text.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Disaggregated evaluation as a release gate.</strong> Report metrics per subgroup, including intersections. Aggregate accuracy is the metric that hid all three cases above.</li>
            <li><strong>Interrogate the label, not just the features.</strong> Ask what the target variable actually measures and for whom it measures something different. The Obermeyer fix was a target-variable change, not a fairness constraint.</li>
            <li><strong>Representative sampling and targeted collection</strong> for under-covered groups; reweighting or resampling where collection is not possible.</li>
            <li><strong>Pre-processing</strong> (reweighing, disparate-impact remover), <strong>in-processing</strong> (adversarial debiasing, fairness-constrained optimization), and <strong>post-processing</strong> (per-group threshold adjustment). Note that different fairness definitions (demographic parity, equalized odds, calibration) are mathematically incompatible in general, so the choice must be made explicitly and justified.</li>
            <li><strong>Documentation</strong>: datasheets for datasets and model cards recording composition, collection process, and known limitations.<Cite n={[15, 16]} /></li>
            <li><strong>Independent audit.</strong> External review found all three cases above; internal review found none of them.</li>
          </ul>

          <div className="dc-tradeoff">
            <p>
              <strong>Trade-off:</strong> removing a protected attribute from the feature set does
              not remove bias, and it removes the ability to measure it. Fairness auditing generally
              requires collecting the sensitive attribute for evaluation while excluding it from the
              model input, itself a privacy trade-off (Challenge 4).
            </p>
          </div>
        </Challenge>

        {/* 6 */}
        <Challenge num="6" title="Data Imbalance">
          <span className="dc-label">What the challenge is</span>
          <p>
            Class imbalance occurs when the target distribution is heavily skewed. In fraud
            detection, industrial defect detection, rare disease diagnosis, and safety-critical
            anomaly detection, the positive class is often well under 1%. The standard ULB
            credit-card fraud benchmark contains 492 frauds in 284,807 transactions, or{' '}
            <strong>0.172%</strong>.<Cite n={[17]} /> The problem is that most loss functions
            optimize aggregate error, and aggregate error is minimized by ignoring the minority
            class.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>A trivial always-negative classifier achieves 99.83% accuracy on the fraud dataset above while catching zero fraud. Accuracy is the wrong metric and actively misleads.</li>
            <li>Decision thresholds calibrated on the training prior are wrong for the deployment prior.</li>
            <li>Test-set statistical power is low for the minority class, so the metric that matters most has the widest confidence interval.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              Class imbalance is a defining constraint in production fraud detection and in
              industrial reliability work. In hardware test and validation the same structure
              appears: a test campaign generates thousands of nominal runs and a handful of genuine
              fault signatures, and a naive classifier trained on that campaign will learn "nominal"
              and report excellent accuracy while missing the failures the campaign existed to find.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Change the metric first.</strong> Precision-recall AUC, F-beta weighted toward recall, Matthews correlation coefficient, cost-sensitive expected loss. Report the confusion matrix. ROC-AUC is optimistic under extreme imbalance because the false-positive-rate denominator is dominated by the majority class.</li>
            <li><strong>Resampling.</strong> Random undersampling of the majority, random oversampling of the minority, or synthetic oversampling. SMOTE (Chawla et al., 2002) interpolates between a minority sample and its k nearest minority neighbors rather than duplicating.<Cite n={[18]} /> Variants: Borderline-SMOTE, ADASYN, SMOTE-Tomek.</li>
            <li><strong>Cost-sensitive learning / class weighting</strong> in the loss function. Often simpler and better-behaved than resampling, and it does not fabricate samples.</li>
            <li><strong>Anomaly detection framing.</strong> When the minority class is heterogeneous, one-class SVM or isolation forest on the majority may beat binary classification.</li>
            <li><strong>Threshold tuning against operating cost</strong>, not against 0.5.</li>
          </ul>

          <div className="dc-tradeoff">
            <p>
              <strong>Critical implementation detail:</strong> resample only inside the training
              fold, after the train/test split and inside each cross-validation fold. Applying SMOTE
              before splitting places synthetic points derived from test samples into the training
              set, a documented and common source of inflated results.<Cite n={[19]} />
            </p>
          </div>
        </Challenge>

        {/* 7 */}
        <Challenge num="7" title="Data Scalability">
          <span className="dc-label">What the challenge is</span>
          <p>
            Dataset size can exceed what a single machine can store, load, or process in an
            acceptable time. Beyond raw volume, the challenge includes I/O throughput to keep
            accelerators fed, shuffle cost across a distributed store, and the fact that per-epoch
            wall-clock time governs how many experiments a team can run, which governs how fast the
            model improves.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Training time becomes the binding constraint on iteration speed. A team that can run two experiments per week will converge on a worse model than one that can run twenty, independent of talent.</li>
            <li>Infrastructure cost scales with data volume and model size, and cloud egress charges make multi-region data movement expensive.</li>
            <li>Distributed training adds real complexity: synchronization, stragglers, fault tolerance, non-determinism that complicates reproducibility.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              The "big data" framing of volume, velocity, variety, and veracity referenced in the
              course lesson captures the operational shape of this. In practice, most organizations
              hit the I/O and cost walls well before they hit an algorithmic wall; the model would
              train fine if the data could be delivered to it fast enough and affordably.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Efficient storage formats.</strong> Columnar (Parquet, ORC) with compression and predicate pushdown; sharded record formats (TFRecord, WebDataset) for sequential accelerator feeding. Avoid CSV at scale.</li>
            <li><strong>Data lakehouse table formats</strong> (Delta Lake, Apache Iceberg, Hudi) for ACID semantics, schema evolution, and time travel over object storage.</li>
            <li><strong>Distributed processing</strong> (Spark, Dask, Ray Data), with the caveat that distribution has fixed overhead and is often slower than a single large machine below roughly 100 GB.</li>
            <li><strong>Sampling and coreset selection.</strong> Train on a statistically representative subset for architecture search and hyperparameter exploration; use the full dataset only for final runs.</li>
            <li><strong>Streaming/incremental learning</strong> where a full pass is infeasible.</li>
            <li><strong>Feature stores</strong> to compute expensive features once and reuse across models and between training and serving.</li>
          </ul>

          <div className="dc-tradeoff">
            <p>
              <strong>Trade-off:</strong> distributed infrastructure adds operational complexity,
              cost, and failure modes. Vertical scaling first is usually the right engineering call;
              distribute when a single node genuinely cannot hold the working set.
            </p>
          </div>
        </Challenge>

        {/* 8 */}
        <Challenge num="8" title="Data Versioning and Management">
          <span className="dc-label">What the challenge is</span>
          <p>
            Model behavior is a function of code, hyperparameters, <em>and</em> data. Version
            control conventions treat the first two as first-class artifacts and the third as an
            implementation detail. When a dataset is mutated in place (rows appended, labels
            corrected, a source system backfilled), the experiment that produced last quarter's
            model can no longer be reproduced, and there is no way to attribute a regression to a
            data change versus a code change.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Loss of reproducibility. A result that cannot be reproduced cannot be debugged or defended.</li>
            <li>Training/serving skew: the feature transformation in the training pipeline diverges from the one in the serving path, and the divergence is invisible until accuracy drops in production.</li>
            <li>Regulatory exposure. EU AI Act Article 10 requires providers of high-risk systems to document data collection processes, origin, and preparation operations including annotation, labeling, cleaning, updating, enrichment, and aggregation.<Cite n={[6]} /> Undocumented mutation of a training set is not a defensible position under that requirement.</li>
            <li>Inability to answer a basic audit question: which exact data produced the model currently in production?</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              This is the failure mode behind a large share of "the model performed worse in
              production than in the notebook" reports. Kapoor and Narayanan's leakage survey
              (Challenge 15) found 294 affected papers across 17 scientific fields, and a recurring
              contributing factor was that the exact data preparation that produced a published
              result could not be reconstructed or independently checked.<Cite n={[19]} />
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Immutable, content-addressed datasets.</strong> Never mutate in place; write a new version with a hash. DVC, LakeFS, Delta Lake time travel, or Iceberg snapshots all provide this.</li>
            <li><strong>Log a complete provenance record with every training run:</strong> dataset version hash, code commit, container image digest, hyperparameters, random seeds, library versions (MLflow, Weights &amp; Biases, or equivalent).</li>
            <li><strong>Feature stores with point-in-time-correct joins</strong> to guarantee training and serving compute identical features and to prevent temporal leakage.</li>
            <li><strong>Datasheets and data cards</strong> as the human-readable companion to the machine-readable version.<Cite n={[15, 16]} /></li>
            <li><strong>Automated lineage capture</strong> so "what upstream table fed this model?" has an answer that does not depend on someone's memory.</li>
          </ul>
        </Challenge>

        {/* 9 */}
        <Challenge num="9" title="Data Integration">
          <span className="dc-label">What the challenge is</span>
          <p>
            Production ML rarely runs on one clean table. It runs on the join of a transactional
            database, an event stream, a third-party enrichment feed, a set of documents, and a
            historical warehouse, each with its own schema, update cadence, identity convention,
            and definition of a business concept. Entity resolution (is customer 4471 in system A
            the same person as cust_4471_x in system B?) and temporal alignment (which value of this
            slowly-changing dimension was true at the moment of the event?) are the hard parts.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Inconsistent or contradictory inputs reduce model reliability in ways that are hard to trace back to a source.</li>
            <li>Incorrect temporal joins are one of the most common causes of leakage: joining a customer attribute as of <em>today</em> onto an event from <em>last year</em> imports future information into the training set.</li>
            <li>Semantic mismatches, such as two systems defining "active user" differently, produce labels that mean different things for different rows.</li>
            <li>Integration work dominates project schedules and is chronically under-estimated.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              Sambasivan et al.'s data cascade taxonomy explicitly identifies problems originating in
              "conflicting reward systems" and hand-offs between data-producing and data-consuming
              teams as a primary cascade trigger, with the resulting defects surfacing only after
              deployment.<Cite n={[2]} /> In healthcare specifically, integrating EHR data across
              systems with different coding practices is a recognized barrier to transportable
              clinical models, and part of why the Epic sepsis model performed differently at Michigan
              Medicine than the vendor reported (Challenge 10).
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>A canonical data model and a shared semantic layer.</strong> Define the business concepts once; make every pipeline conform.</li>
            <li><strong>Master data management / entity resolution</strong> with probabilistic matching and a human review queue for low-confidence matches.</li>
            <li><strong>Point-in-time-correct joins as the default:</strong> the feature value as of the event timestamp, never the current value.</li>
            <li><strong>Schema registry with compatibility enforcement</strong> (Avro/Protobuf + Confluent Schema Registry or equivalent) so upstream changes cannot silently break downstream consumers.</li>
            <li><strong>Data contracts:</strong> explicit, tested agreements about schema, semantics, freshness, and null behavior between producing and consuming teams.</li>
            <li><strong>Orchestration with dependency awareness</strong> (Airflow, Dagster, Prefect) so a stale upstream table blocks rather than silently propagates.</li>
          </ul>
        </Challenge>

        {/* 10 */}
        <Challenge num="10" title="Data Drift">
          <span className="dc-label">What the challenge is</span>
          <p>
            Models assume the deployment distribution matches the training distribution. That
            assumption decays. Three distinct forms, with different detection strategies:{' '}
            <strong>covariate shift</strong> (P(X) changes, P(Y|X) stable, so the input mix changes
            but the underlying relationship holds), <strong>concept drift</strong> (P(Y|X) changes, meaning
            the relationship itself changes; the dangerous one, because inputs can look entirely
            normal), and <strong>label/prior shift</strong> (P(Y) changes, so base rates move and
            calibrated probabilities and thresholds are wrong). Drift can be gradual (customer
            preferences), sudden (a policy change, a pandemic), or cyclical (seasonality).
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Silent, monotonic accuracy decay. There is no error thrown; the model keeps returning confident predictions.</li>
            <li>Calibration degrades before discrimination does, so probability outputs become unreliable earlier than rankings.</li>
            <li>In feedback-driven systems, drift and the model's own influence on the environment compound (Challenge 17).</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              <strong>Zillow Offers, 2021.</strong> Zillow's iBuying business used its valuation
              model to make automated cash offers on homes. The model was fit on a comparatively
              stable pre-pandemic market and did not track the volatility and regional divergence of
              the 2020-2021 housing market, systematically overpaying. Zillow announced exit from
              the business in November 2021 with a <strong>$304 million Q3 inventory
              write-down</strong>, total losses in the range of $500M+, and a 25% workforce
              reduction (roughly 2,000 jobs).<Cite n={[20, 21]} /> The SEC 8-K attributes it to
              "unintentionally purchasing homes at higher prices than our current estimates of
              future selling prices."<Cite n={[22]} />
            </p>
            <p>
              <strong>Google Flu Trends.</strong> GFT estimated influenza prevalence from search
              query volume. In the 2012-13 season it overestimated CDC-reported influenza-like
              illness by roughly a factor of two. Lazer et al. (<em>Science</em>, 2014) attributed
              the failure partly to the model being "part flu detector, part winter detector,"
              fitting seasonal correlates rather than flu, and partly to drift in the search
              platform itself, since Google continuously changed autocomplete and related-search
              behavior, altering the input distribution beneath a static model.<Cite n={[23, 24]} />{' '}
              The second mechanism is worth noting: the <em>measurement instrument</em> drifted, not
              only the world.
            </p>
            <p>
              <strong>Epic Sepsis Model.</strong> Wong et al. (<em>JAMA Internal Medicine</em>, 2021)
              externally validated a widely deployed proprietary sepsis prediction model on 27,697
              patients and 38,455 hospitalizations at Michigan Medicine. The vendor reported AUC
              0.76-0.83; measured AUC was <strong>0.63</strong>. The model missed 67% of sepsis
              patients (1,709 of 2,552) while firing alerts on 18% of all hospitalizations,
              generating substantial alert fatigue.<Cite n={[25, 26]} /> This is population shift
              plus the absence of local revalidation: a model validated on one population deployed
              unchanged on another.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Monitor inputs, outputs, and outcomes separately.</strong> Input distribution tests (PSI, KS, Jensen-Shannon divergence, KL), prediction-distribution monitoring, and (where labels eventually arrive) delayed ground-truth accuracy tracking.</li>
            <li><strong>Drift detection algorithms</strong> for streaming settings: DDM, EDDM, ADWIN, Page-Hinkley.</li>
            <li><strong>Scheduled retraining with a rolling window</strong>, plus event-triggered retraining when a drift alarm fires. Both, not either.</li>
            <li><strong>Champion/challenger and shadow deployment</strong> so a retrained candidate is validated on live traffic before promotion.</li>
            <li><strong>External and local revalidation before deployment on a new population.</strong> This is the explicit lesson of the Epic case.</li>
            <li><strong>Circuit breakers and human-in-the-loop escalation</strong> on high-value automated decisions. Zillow's model was making unbounded capital commitments without a drift-triggered kill switch.</li>
          </ul>

          <div className="dc-tradeoff">
            <p>
              <strong>Trade-off:</strong> retraining frequency versus stability. Frequent retraining
              tracks drift but risks chasing noise and makes behavior harder to audit; infrequent
              retraining is stable and stale. Tie the cadence to a measured drift signal rather than
              to the calendar.
            </p>
          </div>
        </Challenge>

        {/* 11 */}
        <Challenge num="11" title="Data Annotation Costs">
          <span className="dc-label">What the challenge is</span>
          <p>
            Annotation is a direct, per-sample cost in money and expert time. The cost scales with
            the granularity of the label: an image-level tag is cheap, a bounding box is more, a
            pixel-level segmentation mask is far more, and a 3D LiDAR point-cloud annotation or a
            specialist medical read is more again. In domains requiring credentialed experts
            (radiology, pathology, law, aerospace failure analysis), the annotator's hourly rate, not
            the tooling, dominates.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Budget caps dataset size, which caps achievable performance.</li>
            <li>Cost pressure pushes teams toward cheaper, lower-quality annotation sources, converting a budget problem into a quality problem (Challenge 14).</li>
            <li>Long annotation lead times delay iteration, and the delay compounds if a guideline change forces re-annotation.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              The economics are visible in the structure of the industry: a commercial
              data-annotation sector exists precisely because this cost is large enough to
              outsource. In autonomous driving, annotating multi-sensor scenes at the fidelity
              required for perception training is a recurring, significant line item, and a principal
              reason simulation and auto-labeling pipelines receive heavy investment.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Active learning.</strong> Label only the samples the model is most uncertain about, or that maximize expected model change. Frequently reduces labeling volume substantially for the same accuracy.</li>
            <li><strong>Semi-supervised and self-supervised pre-training.</strong> Learn representations from unlabeled data (contrastive methods, masked modeling), then fine-tune on a small labeled set.</li>
            <li><strong>Programmatic weak supervision.</strong> Encode domain heuristics as labeling functions, model their accuracies and correlations, and generate probabilistic labels.</li>
            <li><strong>Model-assisted / auto-labeling with human verification.</strong> The model proposes, the human corrects. Verification is much faster than annotation from scratch; guard against the reviewer anchoring on the model's proposal.</li>
            <li><strong>Transfer learning</strong> to reduce the labeled sample requirement.</li>
            <li><strong>Tiered annotation.</strong> Cheap annotators on unambiguous cases, experts only on ambiguous ones routed by an uncertainty estimate.</li>
          </ul>

          <div className="dc-tradeoff">
            <p>
              <strong>Trade-off:</strong> every technique here trades label <em>quality</em> or{' '}
              <em>independence</em> for label <em>volume</em>. Whatever the strategy, a clean,
              independently human-labeled evaluation set must be preserved. If the test set is
              auto-labeled by the model, the evaluation is circular.
            </p>
          </div>
        </Challenge>

        {/* 12 */}
        <Challenge num="12" title="Real-Time Data Processing">
          <span className="dc-label">What the challenge is</span>
          <p>
            Some applications require inference on streaming data under a hard or soft latency
            budget: autonomous vehicles, algorithmic trading, industrial control, real-time fraud
            authorization. Features must be computable within the latency budget, which excludes
            expensive aggregations unless pre-materialized. Events arrive out of order and late.
            Ground-truth labels arrive after a delay, so online evaluation lags. And the batch
            pipeline that produced the training features is usually a different codebase from the
            streaming pipeline that produces the serving features, which is the classic source of
            training/serving skew.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Models trained on clean, complete batch data underperform on partial, out-of-order streaming inputs.</li>
            <li>Training/serving skew produces a model that is correct offline and wrong online, with no error message.</li>
            <li>Late-arriving data forces a choice between waiting (blowing the latency budget) and predicting on incomplete input (accepting degraded accuracy).</li>
            <li>Infrastructure requirements differ substantially from batch training, so the cost and operational burden are additive, not shared.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              The Uber ATG case is again instructive on the real-time dimension specifically: the ADS
              had to classify, track, and predict a path within a fraction of a second, and the
              repeated reclassification of the pedestrian reset the object's tracking history each
              time, destroying the temporal context needed for path prediction.<Cite n={[3]} /> The
              failure was not only "the class was missing from training." It was the interaction of
              a missing class with a real-time tracking pipeline that could not maintain state
              across a classification change.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Unified feature computation.</strong> A feature store serving both offline training and online inference from a single definition is the strongest structural defense against training/serving skew.</li>
            <li><strong>Event-time processing with watermarking</strong> (Flink, Beam, Kafka Streams) to handle out-of-order and late data explicitly rather than implicitly.</li>
            <li><strong>Lambda or kappa architecture:</strong> a documented, deliberate choice about whether batch and streaming paths share code.</li>
            <li><strong>Train on data with realistic degradation.</strong> Simulate dropped packets, sensor dropouts, and truncated windows during training so the model sees deployment-like inputs.</li>
            <li><strong>Online/incremental learning</strong> where the concept moves faster than a retraining cycle.</li>
            <li><strong>Continuous online validation.</strong> Log serving features and compare their distribution against the training features, not just the predictions.</li>
          </ul>
        </Challenge>

        {/* 13 */}
        <Challenge num="13" title="Data Interoperability">
          <span className="dc-label">What the challenge is</span>
          <p>
            Datasets arrive in incompatible formats, encodings, units, coordinate frames, time
            zones, and vocabularies. This is Challenge 9's problem viewed at the syntactic and
            representational level rather than the semantic level: not "do these two records refer
            to the same customer" but "does this column mean millimeters or inches, and is this
            timestamp UTC or local." In engineering and scientific domains this is acute:
            instrument-specific binary formats, proprietary vendor exports, and domain ontologies
            that overlap without matching.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Preprocessing effort dominates the schedule and is the least visible work in the project.</li>
            <li>Silent unit and frame errors produce models that are wrong in a physically systematic way. The class of error that destroyed the Mars Climate Orbiter (pound-force-seconds versus newton-seconds) is exactly this failure mode; in an ML pipeline it manifests as a feature that is off by a constant factor for one data source.</li>
            <li>Deployment across heterogeneous environments requires re-implementing preprocessing, and each re-implementation is a chance to diverge.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              Standardization efforts exist because the problem is expensive: FHIR and OMOP in
              healthcare, ISO 8601 for timestamps, ONNX for cross-framework model portability, and
              MLCommons' DataPerf for benchmarking data-centric operations.<Cite n={[27]} /> Each of
              these is a response to interoperability cost measured in real project delays.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Adopt a domain standard</strong> rather than inventing an internal one where a standard exists (FHIR/OMOP for clinical data, ASAM/MDF for automotive measurement, ISO 8601 everywhere for time).</li>
            <li><strong>Canonicalize at ingest.</strong> Convert everything to a single internal representation (SI units, UTC, one coordinate frame) at the boundary, and validate the conversion with assertion tests.</li>
            <li><strong>Carry units and frames in the schema</strong>, not in a column name or a comment. Enforce them.</li>
            <li><strong>Package preprocessing with the model</strong> as a single serialized artifact (ONNX graph, sklearn pipeline, containerized transform) so it cannot be re-implemented differently at deployment.</li>
            <li><strong>Schema registry and format validation</strong> as pipeline gates.</li>
          </ul>
        </Challenge>

        {/* 14 */}
        <Challenge num="14" title="Data Annotation Quality">
          <span className="dc-label">What the challenge is</span>
          <p>
            Distinct from Challenge 3 (getting labels at all) and Challenge 11 (paying for them):
            this is the variance and systematic error <em>within</em> the annotation process.
            Crowd-sourced annotators differ in skill, attention, and interpretation. Guidelines are
            ambiguous at exactly the boundary cases that matter most. Annotator fatigue degrades
            quality within a session. And when annotation is outsourced, the annotators often lack
            the domain context required to resolve ambiguity correctly.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Random label noise raises the achievable error floor and slows convergence.</li>
            <li>Systematic annotator bias is learned as signal, so the model reproduces the annotator's misinterpretation with high confidence.</li>
            <li>Uneven quality across batches creates non-stationarity within the training set itself, so a model may behave differently on data annotated in different months.</li>
            <li>Test-set annotation errors make the evaluation itself untrustworthy, worse than training-set errors, because it removes the ability to detect the problem.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              Northcutt et al.'s finding of 6%+ label errors in the ImageNet validation set is
              annotation-quality failure in the field's most scrutinized dataset. Their human
              validation step found that 51% of algorithmically-flagged candidates were confirmed as
              genuinely mislabeled.<Cite n={[5]} />
            </p>
            <p>
              The DeGrave et al. (<em>Nature Machine Intelligence</em>, 2021) study on COVID-19 chest
              radiograph classifiers is a related and subtler case. Models reported strong
              performance but were shown by explainable-AI analysis to be keying on{' '}
              <strong>shortcuts</strong> (laterality markers, text annotations, patient positioning,
              and other dataset-specific artifacts) rather than pulmonary pathology, and
              consequently failed when tested on data from new hospitals.<Cite n={[28]} /> Here the
              labels were correct; the <em>data collection procedure</em> introduced a confound
              (COVID-positive and COVID-negative images sourced from different repositories) that
              made a spurious feature perfectly predictive. Annotation quality and dataset assembly
              quality are the same category of defect.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Measure agreement continuously</strong>, not once at the start. Track per-annotator agreement against gold items over time and retire or retrain annotators whose quality drops.</li>
            <li><strong>Redundant annotation with adjudication</strong> on a sampled subset even when single-pass annotation is the norm, so the error rate is always known.</li>
            <li><strong>Guideline iteration with a documented edge-case registry.</strong> Every adjudicated disagreement becomes a guideline example.</li>
            <li><strong>Confident learning / cleanlab</strong> to surface probable errors for targeted re-review rather than re-reviewing everything.</li>
            <li><strong>Explainability checks on the trained model</strong> (Grad-CAM, saliency, counterfactual generation) specifically to detect shortcut learning. This is what caught the COVID radiograph problem.</li>
            <li><strong>Held-out external validation on data from a different source</strong> as a standard release gate. Shortcut learning is invisible on an internal split and obvious on an external one.</li>
          </ul>
        </Challenge>

        {/* ═══ PART II ═══ */}
        <div className="dc-part">
          <h2><FaSearchPlus /> Part II: Additional Challenges Identified Through Research</h2>
          <p>
            Not in the course lesson list, but appearing consistently in the peer-reviewed
            literature and in post-mortems of deployed systems. A portfolio-level treatment of data
            challenges is incomplete without them.
          </p>
        </div>

        {/* 15 */}
        <Challenge num="15" title="Data Leakage">
          <span className="dc-label">What the challenge is</span>
          <p>
            Information that will not be available at prediction time leaks into the training
            process, producing evaluation results that cannot be reproduced in deployment. Kapoor
            and Narayanan give a taxonomy of eight types, including no clean separation of training
            and test sets, features that are proxies for the target, and test data used illegitimately
            during preprocessing or feature selection. Common concrete forms:
          </p>
          <ul>
            <li>Applying scaling, imputation, feature selection, or resampling to the full dataset before splitting.</li>
            <li><strong>Temporal leakage:</strong> random splits on time-series data, so the model trains on the future and tests on the past.</li>
            <li><strong>Group leakage:</strong> records from the same patient, device, or user appearing on both sides of a split.</li>
            <li><strong>Target leakage:</strong> a feature that is a downstream consequence of the label (e.g., "case_closed_reason" as a predictor of case outcome).</li>
            <li>Duplicate records straddling the split.</li>
          </ul>

          <span className="dc-label">Impact</span>
          <p>
            Overstated performance that collapses on deployment. Because the failure appears only
            after release, it burns credibility along with budget.
          </p>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              Kapoor and Narayanan (<em>Patterns</em>, 2023) surveyed the literature and found leakage
              documented in <strong>17 scientific fields, collectively affecting 294 papers</strong>,
              in some cases producing "wildly overoptimistic conclusions." Their headline finding is
              that in every case they examined where the errors were corrected, complex ML models did
              not substantively outperform decades-old logistic regression baselines.<Cite n={[19]} />
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Split first. Always.</strong> Every fit-transform operation (scaler, imputer, encoder, feature selector, SMOTE) is fit on the training fold only and applied to validation and test.</li>
            <li><strong>Use pipeline objects</strong> (<code>sklearn.pipeline.Pipeline</code> inside <code>cross_val_score</code>) so the fit/transform boundary is enforced structurally rather than by discipline.</li>
            <li><strong>Split by time for temporal data</strong> and by group (<code>GroupKFold</code>, <code>StratifiedGroupKFold</code>) when records cluster by entity.</li>
            <li><strong>Audit features for target proxies.</strong> Ask, for each feature, "would this value exist and be known at the moment I need the prediction?"</li>
            <li><strong>Deduplicate before splitting.</strong></li>
            <li><strong>Model info sheets</strong> as proposed by Kapoor and Narayanan, documenting explicitly how each leakage type was excluded.</li>
            <li><strong>Treat a suspiciously high result as a bug report.</strong> If a model beats the human agreement ceiling, look for leakage before celebrating.</li>
          </ul>
        </Challenge>

        {/* 16 */}
        <Challenge num="16" title="Data Provenance, Licensing, and Legal Admissibility">
          <span className="dc-label">What the challenge is</span>
          <p>
            Where the training data came from, whether the collector had the right to collect it,
            and whether the model developer has the right to train on it. This has moved from a
            background concern to a primary constraint with the growth of web-scale scraped corpora.
            A dataset can be technically accessible, high quality, and legally unusable, and the
            illegality may only surface after the model is deployed.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Regulatory fines and enforcement orders (see Challenge 4).</li>
            <li>Litigation risk from copyright holders over scraped training material.</li>
            <li>Forced dataset withdrawal or model retraining, the most expensive possible remediation, because it invalidates every downstream artifact.</li>
            <li>Contamination: illegal or harmful content in the corpus that no one audited for.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              In December 2023, the Stanford Internet Observatory reported that{' '}
              <strong>LAION-5B</strong>, a 5.85-billion-pair image-text index used to train widely
              deployed text-to-image models, contained links to at least 1,008 verified and roughly
              3,200 suspected instances of child sexual abuse material, ingested through
              indiscriminate Common Crawl scraping. LAION withdrew the dataset from distribution and
              later republished a cleaned Re-LAION-5B produced in partnership with the Internet Watch
              Foundation, the Canadian Centre for Child Protection, and SIO, removing 2,236
              identified links.<Cite n={[29, 30, 31]} />
            </p>
            <p>
              The generalizable point for any engineer assembling a dataset: at web scale, "we
              scraped what was publicly available" is not a provenance record, and the absence of an
              audit is not evidence of an absence of problems.
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Provenance tracking as a first-class dataset field.</strong> Record source, collection date, license, and consent basis per record or per source, not per dataset.</li>
            <li><strong>License compliance scanning</strong> before ingestion; maintain an allowlist rather than a blocklist.</li>
            <li><strong>Content safety filtering with third-party hash matching</strong> (e.g., IWF/NCMEC hash lists) for any web-scraped corpus.</li>
            <li><strong>Datasheets for datasets</strong> documenting motivation, composition, collection process, and recommended uses.<Cite n={[15]} /></li>
            <li><strong>Legal review as a pipeline gate for external data</strong>, at ingestion rather than at launch.</li>
            <li><strong>Retention of the right to delete:</strong> architecture that can identify and remove a source's contribution without a full retrain from scratch where possible.</li>
          </ul>
        </Challenge>

        {/* 17 */}
        <Challenge num="17" title="Feedback Loops and Self-Fulfilling Data">
          <span className="dc-label">What the challenge is</span>
          <p>
            When a model's predictions influence the environment that generates its next training
            batch, the model stops observing the world and starts observing itself. This breaks the
            IID assumption in a way that no amount of additional data corrects. More data makes it
            worse, because more data means more of the model's own output.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Errors are reinforced rather than corrected. Confidence rises while accuracy does not.</li>
            <li>Coverage collapses onto the region the model already favors.</li>
            <li>Offline evaluation on logged data is biased, because the logged data was generated under the current policy.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              <strong>Predictive policing.</strong> Ensign et al. (FAT* 2018) modeled the standard
              predictive policing loop: historical crime data determines patrol allocation, patrol
              allocation determines discovered crime, discovered crime updates the model. They proved
              mathematically that this produces a runaway feedback loop in which officers are sent
              repeatedly to the same neighborhoods regardless of the true underlying crime rate, and
              showed how modifying the system's inputs (accounting for the discovery process) allows
              the true rate to be learned instead.<Cite n={[32]} />
            </p>
            <p>
              <strong>Model collapse from synthetic data.</strong> Shumailov et al. (<em>Nature</em>,
              2024) showed that generative models trained recursively on the output of previous
              generations degrade in a characteristic way: early collapse loses the tails of the true
              distribution, late collapse converges to a distribution bearing little resemblance to
              the original. As web-scraped corpora increasingly contain machine-generated text and
              images, this becomes a live data-sourcing problem, not a theoretical
              one.<Cite n={[33, 34]} />
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Randomized exploration / holdout populations.</strong> Reserve a fraction of decisions for a randomized or non-model policy to obtain unbiased data. This has a direct short-term cost and is the only reliable source of counterfactual signal.</li>
            <li><strong>Log the full decision context</strong>, including what the model recommended and what action was actually taken, so the propensity is recoverable.</li>
            <li><strong>Off-policy evaluation</strong> with inverse propensity weighting or doubly robust estimators.</li>
            <li><strong>Model the discovery/selection process explicitly</strong>, as Ensign et al. do, rather than treating observed outcomes as ground truth.</li>
            <li><strong>Provenance tagging of synthetic content</strong> and deliberate injection of fresh human-generated data to prevent collapse.<Cite n={[33]} /></li>
            <li><strong>Monitor for distribution narrowing</strong> over successive retraining generations as a leading indicator.</li>
          </ul>
        </Challenge>

        {/* 18 */}
        <Challenge num="18" title="Data Documentation and Organizational Ownership">
          <span className="dc-label">What the challenge is</span>
          <p>
            The failure that has no technical name: nobody owns the data. Modeling work is
            high-status and data work is not, so data collection, cleaning, and documentation are
            chronically under-resourced and under-credited. The result is that the person who
            understands why a column is null in 2019 leaves the company, and the knowledge leaves
            with them.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Undocumented datasets are reused for purposes their collection design does not support.</li>
            <li>Institutional knowledge about known defects lives in individual memory and Slack history.</li>
            <li>Onboarding cost rises and iteration speed falls.</li>
            <li>Compounding defects. This is the organizational root cause behind most of the data cascades in Sambasivan et al.</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              Sambasivan et al.'s title states the finding: <em>"Everyone wants to do the model work,
              not the data work."</em> Their interviews with 53 high-stakes AI practitioners
              identified data cascades as pervasive, opaque, and delayed in their manifestation, with
              the incentive structure (model performance rewarded, data quality unrewarded) as a
              primary driver.<Cite n={[2, 35]} />
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>Datasheets for datasets, model cards, and data cards</strong> as required artifacts, reviewed like code.<Cite n={[15, 16, 36]} /></li>
            <li><strong>Named dataset owners</strong> with the same on-call and review expectations as service owners.</li>
            <li><strong>Data quality metrics on the same dashboards as model metrics</strong>, so degradation is visible to the same people who are accountable for outcomes.</li>
            <li><strong>Credit data work in performance review.</strong> This is not a soft recommendation; the incentive misalignment is the mechanism identified in the research.</li>
            <li><strong>Data catalogs with lineage</strong> so discoverability does not depend on tribal knowledge.</li>
          </ul>
        </Challenge>

        {/* 19 */}
        <Challenge num="19" title="Evaluation Data Design">
          <span className="dc-label">What the challenge is</span>
          <p>
            The test set is a measurement instrument, and most teams do not treat it as one. A test
            set drawn as a random split from the same collection process as the training data
            measures interpolation, not generalization. It will not detect distribution shift,
            shortcut learning, subgroup failure, or robustness gaps, because all of those are
            properties of the <em>difference</em> between the training distribution and the
            deployment distribution, and a random split has no such difference by construction.
          </p>

          <span className="dc-label">Impact</span>
          <ul>
            <li>Passing evaluation provides false assurance.</li>
            <li>Repeated hyperparameter tuning against a fixed test set overfits it; the reported number becomes optimistic through selection.</li>
            <li>Aggregate metrics hide subgroup failures (Challenge 5) and rare-class failures (Challenge 6).</li>
          </ul>

          <span className="dc-label">Real-world evidence</span>
          <div className="dc-evidence">
            <p>
              The Epic sepsis model is the definitive example: internal validation supported
              deployment across hundreds of hospitals; external validation at a single independent
              site found AUC 0.63 against a claimed 0.76-0.83, and 67% of sepsis cases
              missed.<Cite n={[25]} /> The DeGrave COVID radiograph work is the same lesson in a
              different domain: internal splits looked excellent, external hospital data exposed
              the shortcut.<Cite n={[28]} /> And Northcutt et al. showed that benchmark rankings
              themselves are unstable under test-set correction.<Cite n={[5]} />
            </p>
          </div>

          <span className="dc-label">Mitigations</span>
          <ul>
            <li><strong>External validation set from a genuinely different source</strong> (different site, different time period, different collection device) as a release gate.</li>
            <li><strong>Temporal holdout</strong> for any system deployed against a moving world: train on the past, test on the future, always.</li>
            <li><strong>Stratified/disaggregated reporting</strong> across subgroups and operating conditions, with confidence intervals.</li>
            <li><strong>Targeted behavioral test suites</strong> (CheckList-style): curated cases probing known failure modes and edge conditions, run like unit tests. This maps directly onto standard verification practice: the random test set is the regression suite; the behavioral suite is the requirements-based test.</li>
            <li><strong>A locked, single-use final test set</strong> separate from the development validation set.</li>
            <li><strong>Report the human agreement ceiling</strong> alongside model accuracy so the number has a scale.</li>
          </ul>
        </Challenge>

        {/* ─── Summary Table ─── */}
        <section className="dc-section">
          <h2><FaTable /> Summary Table</h2>
          <p>All nineteen challenges, with the single highest-leverage mitigation for each.</p>
          <div className="dc-table-wrap">
            <table className="dc-table dc-summary">
              <thead>
                <tr><th>#</th><th>Challenge</th><th>Primary impact</th><th>Highest-leverage mitigation</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Data availability</td><td>Overfitting; silent gaps in operational coverage</td><td>Coverage analysis against the operational design domain; transfer learning; targeted collection</td></tr>
                <tr><td>2</td><td>Data quality</td><td>Error floor raised; biased estimates</td><td>Automated validation gates at ingest; confident-learning label audit</td></tr>
                <tr><td>3</td><td>Data labeling</td><td>Accuracy ceiling set by label noise</td><td>Versioned guidelines; measured inter-annotator agreement</td></tr>
                <tr><td>4</td><td>Privacy &amp; security</td><td>Legal exposure; restricted access</td><td>Differential privacy; federated learning; data minimization</td></tr>
                <tr><td>5</td><td>Data bias</td><td>Discriminatory outcomes; degraded subgroup accuracy</td><td>Disaggregated evaluation; interrogate the target variable</td></tr>
                <tr><td>6</td><td>Data imbalance</td><td>Minority class ignored; accuracy misleads</td><td>PR-AUC + cost-sensitive loss; resample inside the fold only</td></tr>
                <tr><td>7</td><td>Data scalability</td><td>Iteration speed and cost become binding</td><td>Columnar/sharded formats; sample for exploration, full data for final runs</td></tr>
                <tr><td>8</td><td>Versioning &amp; management</td><td>Irreproducibility; training/serving skew</td><td>Immutable content-addressed datasets; full provenance per run</td></tr>
                <tr><td>9</td><td>Data integration</td><td>Inconsistent inputs; temporal leakage</td><td>Point-in-time-correct joins; data contracts; schema registry</td></tr>
                <tr><td>10</td><td>Data drift</td><td>Silent monotonic decay in production</td><td>Input + output + outcome monitoring; triggered retraining; circuit breakers</td></tr>
                <tr><td>11</td><td>Annotation cost</td><td>Budget caps dataset size</td><td>Active learning; self-supervised pre-training; model-assisted labeling</td></tr>
                <tr><td>12</td><td>Real-time processing</td><td>Training/serving skew; latency-accuracy conflict</td><td>Unified feature store; event-time processing; train on degraded inputs</td></tr>
                <tr><td>13</td><td>Interoperability</td><td>Preprocessing dominates schedule; unit/frame errors</td><td>Canonicalize at ingest; units in the schema; package preprocessing with the model</td></tr>
                <tr><td>14</td><td>Annotation quality</td><td>Systematic noise learned as signal</td><td>Continuous agreement measurement; explainability checks for shortcuts</td></tr>
                <tr><td>15</td><td>Data leakage</td><td>Overstated results that collapse on deployment</td><td>Split first; pipeline objects; group and temporal splits</td></tr>
                <tr><td>16</td><td>Provenance &amp; licensing</td><td>Fines, litigation, forced dataset withdrawal</td><td>Per-source provenance records; license and content scanning at ingest</td></tr>
                <tr><td>17</td><td>Feedback loops</td><td>Self-reinforcing error; distribution narrowing</td><td>Randomized exploration holdout; off-policy evaluation</td></tr>
                <tr><td>18</td><td>Documentation &amp; ownership</td><td>Compounding invisible defects</td><td>Datasheets and data cards as required artifacts; named dataset owners</td></tr>
                <tr><td>19</td><td>Evaluation data design</td><td>False assurance from a non-diagnostic test set</td><td>External and temporal validation as release gates</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Governance ─── */}
        <section className="dc-section">
          <h2><FaBalanceScale /> Cross-Cutting Governance and Standards</h2>
          <p>
            Individual mitigations do not survive schedule pressure unless a process requires them.
            Three reference frameworks are worth knowing by name.
          </p>

          <h3>NIST AI Risk Management Framework (AI RMF 1.0)</h3>
          <p>
            Voluntary US framework organized around four functions (GOVERN, MAP, MEASURE, MANAGE)
            applied across the AI lifecycle and mapped to trustworthiness characteristics including
            validity, reliability, safety, security, accountability, transparency, and fairness. MAP
            establishes context and identifies risks; MEASURE applies quantitative and qualitative
            metrics. The data challenges above map cleanly onto MAP (identifying coverage gaps, bias
            sources, provenance) and MEASURE (drift monitoring, disaggregated
            evaluation).<Cite n={[37]} />
          </p>

          <h3>EU AI Act, Article 10: Data and Data Governance</h3>
          <p>
            Legally binding for high-risk systems, with obligations enforceable from{' '}
            <strong>August 2, 2026</strong>. It requires that training, validation, and testing
            datasets be "relevant, sufficiently representative, and to the best extent possible, free
            of errors and complete in view of the intended purpose," that datasets reflect the
            geographic, contextual, behavioural and demographic conditions of the deployment setting,
            and that providers document data collection processes, data origin, and preparation
            operations including annotation, labelling, cleaning, updating, enrichment and
            aggregation. Providers must actively examine datasets for bias and document both the
            examination and the mitigation. Penalties reach €35 million or 6% of global
            turnover.<Cite n={[6]} /> In practical terms, Article 10 converts most of the mitigations
            in this report from good practice into a compliance requirement for anyone deploying a
            high-risk system in the EU market.
          </p>

          <h3>Documentation artifacts</h3>
          <p>
            Datasheets for Datasets (Gebru et al.), Model Cards (Mitchell et al.), and Data Cards
            (Pushkarna et al., Google) provide standard templates for recording dataset motivation,
            composition, collection process, preprocessing, recommended uses, and known
            limitations.<Cite n={[15, 16, 36]} /> They are the cheapest control in this report and
            the most frequently skipped.
          </p>
        </section>

        {/* ─── Value Proposition ─── */}
        <section className="dc-section">
          <h2><FaLightbulb /> Value Proposition</h2>
          <p>
            This report demonstrates the judgment that separates a working ML engineer from someone
            who can only train models: the ability to look at a system and predict where it will
            fail before it does. Rather than listing challenges as abstractions, every one of the
            nineteen is tied to a documented, cited failure with a number attached: the NTSB finding
            on the Uber ATG fatality, the 6% label-error rate in ImageNet, the Epic sepsis model's
            measured AUC of 0.63 against a claimed 0.76-0.83, Zillow's $304M write-down. That is a
            deliberate discipline: a claim about how ML fails is only useful if it can be traced to
            evidence.
          </p>
          <p>
            The report is also written to be <em>used</em>. Each challenge names the mechanism
            precisely enough to be actionable, states how the failure shows up in metrics, and gives
            mitigations with the engineering trade-off attached, because "apply differential
            privacy" is not advice until someone says what it costs. The summary table condenses all
            nineteen into a single review checklist, and the governance section maps them onto NIST
            AI RMF and EU AI Act Article 10, which becomes enforceable in August 2026. It functions
            as a pre-deployment review artifact, not a term paper.
          </p>
        </section>

        {/* ─── Unique Value ─── */}
        <section className="dc-section">
          <h2><FaGem /> Unique Value</h2>
          <p>
            Most treatments of this topic stop at the assigned list. This one extends the fourteen
            course challenges with <strong>five more drawn from the peer-reviewed literature</strong>{' '}
            (leakage, provenance and licensing, feedback loops, organizational ownership, and
            evaluation data design), because the post-mortems of real deployed systems keep landing
            there. Three specific arguments run through the report that a standard summary would
            miss:
          </p>
          <ol>
            <li>
              <strong>The label is a design decision, not a given.</strong> The Obermeyer healthcare
              case was not fixed with a fairness constraint; it was fixed by changing the target
              variable from predicted cost to predicted need, which moved the proportion of Black
              patients flagged for extra care from 17.7% to 46.5%. Interrogating what the target
              actually measures is the highest-leverage and least-practiced audit step in ML.
            </li>
            <li>
              <strong>The test set is a measurement instrument, and a random split is a broken
              one.</strong> Shift, shortcut learning, and subgroup failure are all properties of the
              gap between training and deployment distributions, a gap a random split eliminates by
              construction. Epic and the COVID radiograph classifiers passed internal validation and
              failed externally for exactly this reason.
            </li>
            <li>
              <strong>Most data failures are organizational before they are technical.</strong>{' '}
              Sambasivan et al. found 92% of practitioners had hit a data cascade, and identified the
              incentive structure (model work rewarded, data work invisible) as the driver. No
              amount of tooling fixes an ownership vacuum.
            </li>
          </ol>
          <p>
            The framing throughout comes from an engineering-verification background rather than a
            pure data-science one, and that shows up in the vocabulary: coverage against an
            operational design domain, behavioral test suites as requirements-based testing against
            the random test set's regression suite, circuit breakers on automated decisions, and
            units carried in the schema because the Mars Climate Orbiter failure mode is alive and
            well inside feature pipelines. The result is a document that reads as a risk register for
            an ML system, not a literature review.
          </p>
        </section>

        {/* ─── References ─── */}
        <section className="dc-section">
          <h2><FaListOl /> References</h2>
          <ol className="dc-refs">
            <li id="dc-ref-1">Press, G. "Andrew Ng Launches A Campaign For Data-Centric AI." <em>Forbes</em>, June 16, 2021. <a href="https://www.forbes.com/sites/gilpress/2021/06/16/andrew-ng-launches-a-campaign-for-data-centric-ai/" target="_blank" rel="noopener noreferrer">forbes.com</a></li>
            <li id="dc-ref-2">Sambasivan, N., Kapania, S., Highfill, H., Akrong, D., Paritosh, P., Aroyo, L. "'Everyone wants to do the model work, not the data work': Data Cascades in High-Stakes AI." <em>CHI 2021</em>. <a href="https://dl.acm.org/doi/10.1145/3411764.3445518" target="_blank" rel="noopener noreferrer">dl.acm.org/doi/10.1145/3411764.3445518</a></li>
            <li id="dc-ref-3">National Transportation Safety Board. <em>Collision Between Vehicle Controlled by Developmental Automated Driving System and Pedestrian, Tempe, Arizona, March 18, 2018.</em> NTSB/HAR-19/03. <a href="https://www.ntsb.gov/investigations/AccidentReports/Reports/HAR1903.pdf" target="_blank" rel="noopener noreferrer">ntsb.gov</a></li>
            <li id="dc-ref-4">NPR. "Feds Say Self-Driving Uber SUV Did Not Recognize Jaywalking Pedestrian." November 7, 2019. <a href="https://www.npr.org/2019/11/07/777438412/feds-say-self-driving-uber-suv-did-not-recognize-jaywalking-pedestrian" target="_blank" rel="noopener noreferrer">npr.org</a></li>
            <li id="dc-ref-5">Northcutt, C.G., Athalye, A., Mueller, J. "Pervasive Label Errors in Test Sets Destabilize Machine Learning Benchmarks." <em>NeurIPS 2021 Datasets and Benchmarks Track</em>. <a href="https://arxiv.org/abs/2103.14749" target="_blank" rel="noopener noreferrer">arxiv.org/abs/2103.14749</a></li>
            <li id="dc-ref-6">EU Artificial Intelligence Act, Article 10: Data and Data Governance. <a href="https://artificialintelligenceact.eu/article/10/" target="_blank" rel="noopener noreferrer">artificialintelligenceact.eu/article/10</a></li>
            <li id="dc-ref-7">US Census Bureau. <em>Disclosure Avoidance for the 2020 Census: An Introduction.</em> November 2021. <a href="https://www2.census.gov/library/publications/decennial/2020/2020-census-disclosure-avoidance-handbook.pdf" target="_blank" rel="noopener noreferrer">census.gov</a></li>
            <li id="dc-ref-8">European Data Protection Board. "The French SA fines Clearview AI EUR 20 million." October 2022. <a href="https://edpb.europa.eu/news/national-news/2022/french-sa-fines-clearview-ai-eur-20-million_nl" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a></li>
            <li id="dc-ref-9">Hunton Andrews Kurth. "Dutch Regulator Fines Clearview AI 30.5 Million Euros." 2024. <a href="https://www.hunton.com/privacy-and-information-security-law/dutch-regulator-fines-clearview-ai-30-5-million-euros" target="_blank" rel="noopener noreferrer">hunton.com</a></li>
            <li id="dc-ref-10">Obermeyer, Z., Powers, B., Vogeli, C., Mullainathan, S. "Dissecting racial bias in an algorithm used to manage the health of populations." <em>Science</em> 366(6464):447-453, 2019. <a href="https://www.science.org/doi/10.1126/science.aax2342" target="_blank" rel="noopener noreferrer">science.org</a></li>
            <li id="dc-ref-11">Buolamwini, J., Gebru, T. "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." <em>PMLR</em> 81:77-91, 2018. <a href="https://proceedings.mlr.press/v81/buolamwini18a.html" target="_blank" rel="noopener noreferrer">proceedings.mlr.press</a></li>
            <li id="dc-ref-12">MIT News. "Study finds gender and skin-type bias in commercial artificial-intelligence systems." February 12, 2018. <a href="https://news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212" target="_blank" rel="noopener noreferrer">news.mit.edu</a></li>
            <li id="dc-ref-13">Dastin, J. "Amazon scraps secret AI recruiting tool that showed bias against women." Reuters, via CNBC, October 10, 2018. <a href="https://www.cnbc.com/2018/10/10/amazon-scraps-a-secret-ai-recruiting-tool-that-showed-bias-against-women.html" target="_blank" rel="noopener noreferrer">cnbc.com</a></li>
            <li id="dc-ref-14">MIT Technology Review. "Amazon ditched AI recruitment software because it was biased against women." October 10, 2018. <a href="https://www.technologyreview.com/2018/10/10/139858/amazon-ditched-ai-recruitment-software-because-it-was-biased-against-women/" target="_blank" rel="noopener noreferrer">technologyreview.com</a></li>
            <li id="dc-ref-15">Gebru, T. et al. "Datasheets for Datasets." <em>Communications of the ACM</em> 64(12), 2021. <a href="https://arxiv.org/abs/1803.09010" target="_blank" rel="noopener noreferrer">arxiv.org/abs/1803.09010</a></li>
            <li id="dc-ref-16">Mitchell, M. et al. "Model Cards for Model Reporting." <em>FAT* 2019</em>. <a href="https://arxiv.org/abs/1810.03993" target="_blank" rel="noopener noreferrer">arxiv.org/abs/1810.03993</a></li>
            <li id="dc-ref-17">Machine Learning Group, Université Libre de Bruxelles. Credit Card Fraud Detection dataset (492 frauds in 284,807 transactions; 0.172%). <a href="https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud" target="_blank" rel="noopener noreferrer">kaggle.com</a></li>
            <li id="dc-ref-18">Chawla, N.V., Bowyer, K.W., Hall, L.O., Kegelmeyer, W.P. "SMOTE: Synthetic Minority Over-sampling Technique." <em>Journal of Artificial Intelligence Research</em> 16:321-357, 2002. <a href="https://arxiv.org/abs/1106.1813" target="_blank" rel="noopener noreferrer">arxiv.org/abs/1106.1813</a></li>
            <li id="dc-ref-19">Kapoor, S., Narayanan, A. "Leakage and the reproducibility crisis in machine-learning-based science." <em>Patterns</em> 4(9), 2023. <a href="https://www.cell.com/patterns/fulltext/S2666-3899(23)00159-9" target="_blank" rel="noopener noreferrer">cell.com/patterns</a></li>
            <li id="dc-ref-20">CNBC. "Zillow plunges 25% to lowest since July 2020, after company exits home-buying business." November 3, 2021. <a href="https://www.cnbc.com/2021/11/03/zillow-stock-plunges-24percent-after-company-exits-home-buying-business.html" target="_blank" rel="noopener noreferrer">cnbc.com</a></li>
            <li id="dc-ref-21">GeekWire. "Why the iBuying algorithms failed Zillow, and what it says about the business world's love affair with AI." 2021. <a href="https://www.geekwire.com/2021/ibuying-algorithms-failed-zillow-says-business-worlds-love-affair-ai/" target="_blank" rel="noopener noreferrer">geekwire.com</a></li>
            <li id="dc-ref-22">Zillow Group, Inc. Form 8-K, Q3 2021. US Securities and Exchange Commission. <a href="https://www.sec.gov/Archives/edgar/data/1617640/000161764021000085/q32021991.htm" target="_blank" rel="noopener noreferrer">sec.gov</a></li>
            <li id="dc-ref-23">Lazer, D., Kennedy, R., King, G., Vespignani, A. "The Parable of Google Flu: Traps in Big Data Analysis." <em>Science</em> 343(6176):1203-1205, 2014.</li>
            <li id="dc-ref-24">Washington Post. "Google flu tracker overestimated cases, study argues, pointing to flaws in 'big data'." March 17, 2014. <a href="https://www.washingtonpost.com/national/health-science/google-flu-tracker-overestimated-cases-study-argues-pointing-to-flaws-in-big-data/2014/03/17/995c6656-adba-11e3-9627-c65021d6d572_story.html" target="_blank" rel="noopener noreferrer">washingtonpost.com</a></li>
            <li id="dc-ref-25">Wong, A. et al. "External Validation of a Widely Implemented Proprietary Sepsis Prediction Model in Hospitalized Patients." <em>JAMA Internal Medicine</em> 181(8):1065-1070, 2021. <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781307" target="_blank" rel="noopener noreferrer">jamanetwork.com</a></li>
            <li id="dc-ref-26">Michigan Medicine Health Lab. "Popular sepsis prediction tool less accurate than claimed." 2021. <a href="https://www.michiganmedicine.org/health-lab/popular-sepsis-prediction-tool-less-accurate-claimed" target="_blank" rel="noopener noreferrer">michiganmedicine.org</a></li>
            <li id="dc-ref-27">Mazumder, M. et al. "DataPerf: Benchmarks for Data-Centric AI Development." MLCommons. <a href="https://arxiv.org/abs/2207.10062" target="_blank" rel="noopener noreferrer">arxiv.org/abs/2207.10062</a></li>
            <li id="dc-ref-28">DeGrave, A.J., Janizek, J.D., Lee, S.-I. "AI for radiographic COVID-19 detection selects shortcuts over signal." <em>Nature Machine Intelligence</em> 3:610-619, 2021. <a href="https://www.nature.com/articles/s42256-021-00338-7" target="_blank" rel="noopener noreferrer">nature.com</a></li>
            <li id="dc-ref-29">Thiel, D. "Identifying and Eliminating CSAM in Generative ML Training Data and Models." Stanford Internet Observatory, December 2023.</li>
            <li id="dc-ref-30">404 Media. "Largest Dataset Powering AI Images Removed After Discovery of Child Sexual Abuse Material." 2023. <a href="https://www.404media.co/laion-datasets-removed-stanford-csam-child-abuse/" target="_blank" rel="noopener noreferrer">404media.co</a></li>
            <li id="dc-ref-31">LAION. "Releasing Re-LAION-5B: transparent iteration on LAION-5B with additional safety fixes." 2024. <a href="https://laion.ai/blog/relaion-5b/" target="_blank" rel="noopener noreferrer">laion.ai</a></li>
            <li id="dc-ref-32">Ensign, D., Friedler, S.A., Neville, S., Scheidegger, C., Venkatasubramanian, S. "Runaway Feedback Loops in Predictive Policing." <em>PMLR</em> 81:160-171, 2018. <a href="https://proceedings.mlr.press/v81/ensign18a.html" target="_blank" rel="noopener noreferrer">proceedings.mlr.press</a></li>
            <li id="dc-ref-33">Shumailov, I. et al. "AI models collapse when trained on recursively generated data." <em>Nature</em> 631:755-759, 2024.</li>
            <li id="dc-ref-34">IBM. "What Is Model Collapse?" <a href="https://www.ibm.com/think/topics/model-collapse" target="_blank" rel="noopener noreferrer">ibm.com/think/topics/model-collapse</a></li>
            <li id="dc-ref-35">Google Research Blog. "Data Cascades in Machine Learning." <a href="https://research.google/blog/data-cascades-in-machine-learning/" target="_blank" rel="noopener noreferrer">research.google</a></li>
            <li id="dc-ref-36">Pushkarna, M., Zaldivar, A., Kjartansson, O. "Data Cards: Purposeful and Transparent Dataset Documentation for Responsible AI." <em>ACM FAccT 2022</em>. <a href="https://dl.acm.org/doi/10.1145/3531146.3533231" target="_blank" rel="noopener noreferrer">dl.acm.org/doi/10.1145/3531146.3533231</a></li>
            <li id="dc-ref-37">National Institute of Standards and Technology. <em>Artificial Intelligence Risk Management Framework (AI RMF 1.0)</em>, NIST AI 100-1, January 2023. <a href="https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf" target="_blank" rel="noopener noreferrer">nvlpubs.nist.gov</a></li>
          </ol>
        </section>

        <p className="dc-source-note">
          Written for AI500, Fundamentals of Machine Learning, Assignment 4.2, July 2026. Fourteen
          challenges from the course lesson; five added from the research literature. All incident
          figures are traceable to the cited primary sources.
        </p>

        {/* Final Back Link */}
        <div className="dc-bottom-nav">
          <Link to="/project" className="dc-back-link">
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DataChallengesDetails;
