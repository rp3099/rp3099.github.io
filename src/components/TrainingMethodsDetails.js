import React from 'react';
import './TrainingMethodsDetailsStyles.css';
import { FaArrowLeft, FaComments, FaThLarge, FaCogs, FaQuestionCircle, FaProjectDiagram, FaLink, FaGamepad, FaListOl, FaSearch, FaLightbulb, FaGem } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import assets
import tmFeature from '../assets/mltm/training_methods_feature.svg';

const Eq = ({ children }) => <span className="tm-eq">{children}</span>;

const TrainingMethodsDetails = () => {
  return (
    <div className="tm-details-section">
      <div className="tm-details-container">

        {/* Back Link */}
        <Link to="/project" className="tm-back-link">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header Metadata */}
        <div className="tm-meta">
          <span><strong>Course:</strong> AIML-500</span>
          <span><strong>Type:</strong> Class Assignment</span>
          <span><strong>Platform:</strong> SchoolAI</span>
          <span><strong>Topic:</strong> Machine Learning Training Methods</span>
        </div>

        {/* Main Title */}
        <h1 className="tm-title">Machine Learning Training Methods: From Paradigms to Practice</h1>

        {/* Provenance */}
        <div className="tm-intro-card">
          <h3><FaComments /> How This Guide Was Made</h3>
          <p>
            This guide was distilled from a multi-turn working session with the AIML-500 course
            chatbot on SchoolAI. Rather than asking one broad question, I drove the conversation
            progressively deeper — starting from "what are the primary training methods?", drilling
            into the mechanics of each, challenging the bot with follow-up questions about
            hyperparameters and stopping criteria, and finally requesting that every paradigm and
            flagship algorithm be explained through the <em>same seven-step structure</em> so they
            could be compared side by side. The result of that conversation is organized here as a
            reference.
          </p>
        </div>

        {/* Featured Image */}
        <div className="tm-figure">
          <img src={tmFeature} alt="The four machine learning training paradigms" />
          <p className="tm-caption">Figure 1: The four training paradigms covered in this guide — supervised, unsupervised, semi-supervised, and reinforcement learning.</p>
        </div>

        {/* ─── The Four Paradigms ─── */}
        <section className="tm-section">
          <h2><FaThLarge /> The Four Training Paradigms</h2>
          <p>
            Training methods are categorized by how the algorithm receives data and updates its
            model parameters. Each paradigm answers the same question differently: <em>where does
            the learning signal come from?</em>
          </p>
          <div className="tm-grid">
            <div className="tm-card">
              <h4>Supervised Learning</h4>
              <p>The model learns from labeled data — input pairs where the correct output is known. You're essentially teaching by example.</p>
              <span className="tm-card-label">Use Cases</span>
              <p>Image classification, spam detection, medical diagnosis, predictive maintenance.</p>
              <span className="tm-card-label">Popular Algorithms</span>
              <p>Linear/Logistic Regression, SVM, Random Forest, Neural Networks (CNNs, RNNs).</p>
              <span className="tm-card-label">Origins</span>
              <p>Statistical learning theory formalized in the 1950s (e.g., the Perceptron, 1957).</p>
            </div>
            <div className="tm-card">
              <h4>Unsupervised Learning</h4>
              <p>The model works with unlabeled data to find hidden structures or patterns on its own.</p>
              <span className="tm-card-label">Use Cases</span>
              <p>Customer segmentation, anomaly detection (fraud), recommendation systems, dimensionality reduction.</p>
              <span className="tm-card-label">Popular Algorithms</span>
              <p>K-Means, Hierarchical Clustering, PCA, Autoencoders.</p>
              <span className="tm-card-label">Origins</span>
              <p>K-Means developed in 1957 by Hugo Steinhaus; the field expanded significantly in the 1990s.</p>
            </div>
            <div className="tm-card">
              <h4>Semi-Supervised Learning</h4>
              <p>A hybrid approach using a small amount of labeled data with a larger amount of unlabeled data to improve learning accuracy.</p>
              <span className="tm-card-label">Use Cases</span>
              <p>Web page classification, speech recognition, protein sequence classification — where labels are scarce but raw data is abundant.</p>
              <span className="tm-card-label">Popular Algorithms</span>
              <p>Self-training, Co-training, Graph-based methods, Semi-Supervised SVMs.</p>
              <span className="tm-card-label">Origins</span>
              <p>Gained research traction in the mid-1990s.</p>
            </div>
            <div className="tm-card">
              <h4>Reinforcement Learning</h4>
              <p>An agent learns to make decisions by performing actions in an environment and receiving feedback through rewards or penalties.</p>
              <span className="tm-card-label">Use Cases</span>
              <p>Robotics, game playing (e.g., AlphaGo), autonomous driving, resource management.</p>
              <span className="tm-card-label">Popular Algorithms</span>
              <p>Q-Learning, Deep Q-Networks (DQN), PPO, Actor-Critic methods.</p>
              <span className="tm-card-label">Origins</span>
              <p>Markov Decision Processes formalized in the 1950s; Q-Learning breakthrough in 1989.</p>
            </div>
          </div>
        </section>

        {/* ─── The Training Loop ─── */}
        <section className="tm-section">
          <h2><FaCogs /> The Training Loop, Step by Step</h2>
          <p>
            Supervised training is at its core an optimization process: searching for the set of
            parameters (weights) that make the model's predictions match the target labels as
            closely as possible. These seven steps are the reference skeleton — the later sections
            show how each other paradigm reinterprets them.
          </p>
          <div className="tm-steps">
            <div className="tm-step">
              <span className="tm-step-num">1</span>
              <div className="tm-step-content">
                <h4>Data Preparation and Splitting</h4>
                <p>Prepare the dataset <Eq>{'D = {(x⁽ⁱ⁾, y⁽ⁱ⁾)}, i = 1…N'}</Eq>, where <Eq>x</Eq> is the input features and <Eq>y</Eq> the target label. Split into training, validation, and test sets — the model only "sees" the training data. Features are normalized or standardized so optimization converges efficiently.</p>
              </div>
            </div>
            <div className="tm-step">
              <span className="tm-step-num">2</span>
              <div className="tm-step-content">
                <h4>Initialization</h4>
                <p>Weights <Eq>θ</Eq> are initialized with small random numbers. Starting from all zeros would make the model symmetric and unable to learn distinct features.</p>
              </div>
            </div>
            <div className="tm-step">
              <span className="tm-step-num">3</span>
              <div className="tm-step-content">
                <h4>The Forward Pass (Inference)</h4>
                <p>Inputs are combined linearly with the weights, <Eq>{'z = θᵀx + b'}</Eq>, then passed through a non-linear activation (ReLU, Sigmoid, Tanh) to produce the prediction <Eq>ŷ</Eq>. The output layer formats the result for the task — a probability distribution for classification, a continuous value for regression.</p>
              </div>
            </div>
            <div className="tm-step">
              <span className="tm-step-num">4</span>
              <div className="tm-step-content">
                <h4>Loss Calculation (The Error)</h4>
                <p>The prediction <Eq>ŷ</Eq> is compared against the ground truth <Eq>y</Eq> with a loss function — MSE <Eq>{'L = (1/N) Σ (y − ŷ)²'}</Eq> for regression, Cross-Entropy <Eq>{'L = −Σ y·log(ŷ)'}</Eq> for classification. Training aims to minimize this value.</p>
              </div>
            </div>
            <div className="tm-step">
              <span className="tm-step-num">5</span>
              <div className="tm-step-content">
                <h4>The Backward Pass (Backpropagation)</h4>
                <p>The gradient of the loss with respect to each weight is computed via the chain rule, recursively from the output layer back to the input layer. The gradient is the "direction of steepest ascent."</p>
              </div>
            </div>
            <div className="tm-step">
              <span className="tm-step-num">6</span>
              <div className="tm-step-content">
                <h4>Parameter Update (Optimization)</h4>
                <p>Weights move opposite the gradient: <Eq>{'θ_new = θ_old − η·∇L(θ)'}</Eq>, where <Eq>η</Eq> is the learning rate controlling the step size.</p>
              </div>
            </div>
            <div className="tm-step">
              <span className="tm-step-num">7</span>
              <div className="tm-step-content">
                <h4>Iteration (Epochs)</h4>
                <p>One update per <strong>batch</strong>; one full pass through the data is an <strong>epoch</strong>. Training continues until the loss stops decreasing (convergence) or a stopping criterion is met.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Practitioner's Questions ─── */}
        <section className="tm-section">
          <h2><FaQuestionCircle /> Practitioner's Questions</h2>
          <p>Five decisions every implementation has to make — and the conventions that guide them.</p>
          <div className="tm-grid">
            <div className="tm-card">
              <h4>How much data goes in each split?</h4>
              <p>No hard rule — conventions scale with dataset size. Small datasets (thousands of examples): 60/20/20 Train/Validation/Test. Large datasets (millions): 98/1/1 or even 99/0.5/0.5, since 1% is still statistically significant. For classification, use stratified sampling so class proportions are preserved across splits.</p>
            </div>
            <div className="tm-card">
              <h4>Are initial weights just random?</h4>
              <p>Yes, but strategically. Weights that are too large saturate activations and kill gradients (the "vanishing gradient" problem). <strong>Xavier/Glorot</strong> initialization suits Sigmoid/Tanh; <strong>He</strong> initialization suits ReLU, accounting for its zeroed negative values.</p>
            </div>
            <div className="tm-card">
              <h4>Which activation function where?</h4>
              <ul>
                <li><strong>ReLU</strong> <Eq>{'f(x) = max(0, x)'}</Eq> — default for hidden layers; efficient, mitigates vanishing gradients.</li>
                <li><strong>Sigmoid</strong> <Eq>{'f(x) = 1 / (1 + e⁻ˣ)'}</Eq> — output layer for binary classification.</li>
                <li><strong>Softmax</strong> — output layer for multi-class; produces a probability distribution summing to 1.</li>
                <li><strong>Tanh</strong> — squashes to (−1, 1); common in RNNs or zero-centered data.</li>
              </ul>
            </div>
            <div className="tm-card">
              <h4>MSE or Cross-Entropy?</h4>
              <p><strong>MSE</strong> for regression — continuous values like house prices. <strong>Cross-Entropy</strong> for classification — it penalizes confident wrong answers much more heavily than MSE, giving better convergence.</p>
            </div>
            <div className="tm-card">
              <h4>Who sets the learning rate?</h4>
              <p>The developer — it's a hyperparameter, but rarely static. Start around 0.001–0.01 depending on the optimizer (Adam, SGD), then let a scheduler adjust it: <strong>decay</strong> (start high, decrease to fine-tune) or <strong>warm-up</strong> (start low to prevent early instability).</p>
            </div>
          </div>
        </section>

        {/* ─── Unsupervised ─── */}
        <section className="tm-section">
          <h2><FaProjectDiagram /> How Unsupervised Learning Differs</h2>
          <p>
            The fundamental difference is the objective. Supervised learning is about
            <strong> prediction</strong> — mapping inputs to known labels. Unsupervised learning is
            about <strong>representation</strong> — discovering the underlying structure of the data
            with no guidance on what "correct" looks like. Walking the same seven steps shows
            exactly what changes:
          </p>
          <ul>
            <li><strong>Data:</strong> The dataset is <Eq>{'D = {x⁽ⁱ⁾}'}</Eq> — no labels <Eq>y</Eq>. A traditional test set for "accuracy" doesn't exist; splits are used to check stability and tune hyperparameters instead.</li>
            <li><strong>Initialization:</strong> For clustering, randomly select <Eq>k</Eq> points as starting centroids; for autoencoders, use Xavier/He weight initialization as usual.</li>
            <li><strong>Forward pass:</strong> The model transforms rather than predicts — an autoencoder compresses input to a code <Eq>z</Eq>; K-Means measures each point's distance to the centroids.</li>
            <li><strong>Loss:</strong> Reconstruction error for autoencoders (<Eq>{'L = ‖x − x̂‖²'}</Eq>) or cluster compactness (inertia) for clustering.</li>
            <li><strong>Optimization:</strong> Autoencoders still use backpropagation; K-Means uses Expectation-Maximization — assign points (E-step), move centroids to the mean of their assigned points (M-step).</li>
            <li><strong>Convergence:</strong> Reconstruction error stops improving, or points stop switching clusters.</li>
          </ul>
          <p>
            In short: supervised gets <em>external</em> feedback (the label); unsupervised gets
            <em> internal</em> feedback (the structure of the data itself).
          </p>
        </section>

        {/* ─── Semi-supervised ─── */}
        <section className="tm-section">
          <h2><FaLink /> Semi-Supervised: The Bridge</h2>
          <p>
            Semi-supervised learning addresses a real-world constraint: labeled data is expensive
            and scarce, while unlabeled data is cheap and abundant. It uses the unlabeled mass to
            learn the shape of the input space, and the small labeled set to anchor what the classes
            mean. Training combines a small labeled set <Eq>L</Eq> with a large unlabeled set{' '}
            <Eq>U</Eq> (<Eq>{'u ≫ l'}</Eq>) under a hybrid objective:
          </p>
          <p><Eq>{'L_total = L_supervised + λ·L_unsupervised'}</Eq></p>
          <ul>
            <li><strong>Supervised term:</strong> standard Cross-Entropy on the labeled examples.</li>
            <li><strong>Unsupervised term:</strong> a regularizer enforcing two assumptions — <strong>smoothness</strong> (nearby points share labels) and <strong>low-density separation</strong> (decision boundaries should pass through sparse regions). In consistency regularization, a noisy/augmented copy of an unlabeled input must produce the same prediction as the original.</li>
            <li><strong>λ:</strong> a hyperparameter weighting how much influence the unlabeled data has.</li>
          </ul>
          <p>
            As the model improves, confident predictions on unlabeled data can be promoted to
            <strong> pseudo-labels</strong> and folded into the training set — effectively growing
            the labeled data each epoch (Self-Training).
          </p>
        </section>

        {/* ─── Reinforcement ─── */}
        <section className="tm-section">
          <h2><FaGamepad /> Reinforcement Learning: The Dynamic Paradigm</h2>
          <p>
            The first three paradigms are <strong>static</strong> — they learn from a fixed dataset.
            Reinforcement learning is <strong>dynamic</strong>: an <strong>agent</strong> interacts
            with an <strong>environment</strong>, learning a <strong>policy</strong> <Eq>{'π(a|s)'}</Eq> that
            maximizes cumulative reward through trial and error. There is no dataset — data is
            generated on the fly, and its distribution shifts as the policy improves.
          </p>
          <ul>
            <li><strong>Interaction loop:</strong> observe state <Eq>sₜ</Eq> → select action <Eq>aₜ</Eq> → environment transitions to <Eq>{'sₜ₊₁'}</Eq> and returns reward <Eq>rₜ</Eq>.</li>
            <li><strong>The goal:</strong> maximize the return <Eq>{'Gₜ = rₜ + γ·rₜ₊₁ + γ²·rₜ₊₂ + …'}</Eq>, where the discount factor <Eq>γ</Eq> (0 to 1) sets how farsighted the agent is.</li>
            <li><strong>The learning signal:</strong> a Critic network estimates state value <Eq>{'V(s)'}</Eq>; the temporal-difference error against the target <Eq>{'y = rₜ + γ·V(sₜ₊₁)'}</Eq> drives updates (MSE or Huber loss).</li>
            <li><strong>Policy improvement:</strong> policy gradients increase the probability of actions that beat expectations, with occasional random actions (exploration) to avoid locking into sub-optimal strategies.</li>
            <li><strong>The hard part:</strong> rewards are delayed and scalar, so the agent must figure out which past actions earned them — the "credit assignment problem."</li>
          </ul>

          <h3>When Do You Stop Training? (The Chess Problem)</h3>
          <p>
            Chess has roughly <Eq>10¹²⁰</Eq> possible game states — exhaustive exploration is
            impossible, so stopping is a judgment call balancing performance, compute, and stability:
          </p>
          <ul>
            <li><strong>Reward plateau:</strong> the moving-average reward over the last N episodes stabilizes within a small variance.</li>
            <li><strong>Target beaten:</strong> AlphaGo Zero-style self-play — stop promoting a new champion when it can't beat the old one; or stop at a known expert threshold (e.g., a 3000 Stockfish rating).</li>
            <li><strong>Value-function stability:</strong> with sparse rewards (+1 win / −1 loss), stop when TD error stops decreasing — the agent evaluates positions accurately.</li>
            <li><strong>Compute budget:</strong> a hard stop ("40 days" or "10 million steps"), keeping the checkpoint that scored best on validation games.</li>
            <li><strong>Instability:</strong> if performance collapses and doesn't recover (catastrophic forgetting), revert to a checkpoint and adjust hyperparameters.</li>
          </ul>
        </section>

        {/* ─── Algorithm Landscape ─── */}
        <section className="tm-section">
          <h2><FaListOl /> The Algorithm Landscape, by Popularity</h2>
          <div className="tm-grid">
            <div className="tm-card">
              <h4>Supervised</h4>
              <ul>
                <li><strong>Gradient Boosted Trees</strong> (XGBoost, LightGBM, CatBoost) — the king of structured data; credit scoring, fraud, churn.</li>
                <li><strong>Random Forest</strong> — robust out-of-the-box; hard to overfit.</li>
                <li><strong>Logistic Regression</strong> — the interpretable, cheap baseline.</li>
                <li><strong>SVM</strong> — smaller, complex datasets where margin matters.</li>
                <li><strong>CNNs</strong> — the computer-vision standard (ResNet, EfficientNet).</li>
              </ul>
            </div>
            <div className="tm-card">
              <h4>Unsupervised</h4>
              <ul>
                <li><strong>K-Means</strong> — the "Hello World" of clustering; segmentation.</li>
                <li><strong>PCA</strong> — the go-to for dimensionality reduction and noise removal.</li>
                <li><strong>Hierarchical Clustering</strong> — data taxonomies (dendrograms); biology and genomics.</li>
                <li><strong>Autoencoders</strong> — deep approach; anomaly detection, denoising.</li>
                <li><strong>DBSCAN</strong> — irregular cluster shapes; treats outliers as noise.</li>
              </ul>
            </div>
            <div className="tm-card">
              <h4>Semi-Supervised</h4>
              <ul>
                <li><strong>Self-Training (Pseudo-Labeling)</strong> — simplest; wraps any supervised model.</li>
                <li><strong>Label Propagation / Spreading</strong> — graph-based; labels "flow" to similar neighbors.</li>
                <li><strong>Consistency Regularization</strong> (FixMatch, Pi-Model) — the modern deep standard.</li>
                <li><strong>Semi-Supervised GANs</strong> — the discriminator doubles as a classifier.</li>
              </ul>
            </div>
            <div className="tm-card">
              <h4>Reinforcement</h4>
              <ul>
                <li><strong>PPO</strong> — the default (and how ChatGPT was fine-tuned); stable and sample-efficient.</li>
                <li><strong>DQN</strong> — the Deep-Learning-meets-RL breakthrough (Atari).</li>
                <li><strong>Soft Actor-Critic</strong> — dominant for continuous control in robotics.</li>
                <li><strong>Q-Learning</strong> — the classic tabular foundation of modern deep RL.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Flagship Deep Dives ─── */}
        <section className="tm-section tm-algo-detail">
          <h2><FaSearch /> Flagship Algorithms Through the Same Lens</h2>
          <p>
            Each paradigm's most popular algorithm, walked through the identical seven-step
            structure. Seeing them side by side makes the differences concrete: what replaces the
            label, what replaces the gradient, and what "convergence" means in each world.
          </p>

          <h3>Supervised — Gradient Boosted Trees (XGBoost)</h3>
          <ol>
            <li><strong>Data:</strong> structured/tabular; Train/Validation/Test split; missing values handled internally.</li>
            <li><strong>Initialization:</strong> a trivial first prediction — the target mean (regression) or log-odds (classification).</li>
            <li><strong>Forward pass:</strong> the prediction is the sum of all trees, <Eq>{'ŷ = Σ fᵢ(x)'}</Eq>.</li>
            <li><strong>Loss:</strong> differentiable loss (LogLoss / MSE); the key concept is the <em>residual</em> — actual minus current cumulative prediction.</li>
            <li><strong>Backward pass:</strong> the negative gradient points along the residual; XGBoost uses a second-order Taylor expansion of the loss.</li>
            <li><strong>Update:</strong> a new tree is fit to predict the negative gradient; split "gain" is maximized while regularization prunes complexity.</li>
            <li><strong>Iteration:</strong> trees added one by one, each correcting the ensemble's errors; early stopping monitors validation loss.</li>
          </ol>

          <h3>Unsupervised — K-Means Clustering</h3>
          <ol>
            <li><strong>Data:</strong> unlabeled feature vectors, scaled (K-Means is distance-based).</li>
            <li><strong>Initialization:</strong> <Eq>k</Eq> random points as centroids (K-Means++ improves the choice).</li>
            <li><strong>Forward pass:</strong> each point is assigned to its nearest centroid by Euclidean distance.</li>
            <li><strong>Loss:</strong> within-cluster sum of squares, <Eq>{'J = Σ ‖x⁽ⁱ⁾ − μ⁽ⁱ⁾‖²'}</Eq>.</li>
            <li><strong>Optimization:</strong> no backpropagation — Expectation-Maximization: assign (E), recompute centroids (M).</li>
            <li><strong>Update:</strong> each centroid moves to the mean of its assigned points.</li>
            <li><strong>Iteration:</strong> repeat until centroids stop moving or max iterations reached.</li>
          </ol>

          <h3>Semi-Supervised — Self-Training (Pseudo-Labeling)</h3>
          <ol>
            <li><strong>Data:</strong> small labeled set <Eq>L</Eq>, large unlabeled set <Eq>U</Eq>, labeled hold-out for evaluation.</li>
            <li><strong>Initialization:</strong> train a standard supervised model on <Eq>L</Eq> only.</li>
            <li><strong>Forward pass:</strong> predict probabilities for every example in <Eq>U</Eq>.</li>
            <li><strong>Loss:</strong> Cross-Entropy on <Eq>L</Eq>; prediction confidence examined on <Eq>U</Eq>.</li>
            <li><strong>Pseudo-labeling:</strong> samples above a confidence threshold (e.g., &gt; 0.95) are treated as ground truth, forming an expanded set <Eq>L′</Eq>.</li>
            <li><strong>Update:</strong> retrain on <Eq>L′</Eq>, reinforcing confident decision boundaries.</li>
            <li><strong>Iteration:</strong> predict → select → add → retrain, until no samples remain, confidence drops, or validation performance saturates.</li>
          </ol>

          <h3>Reinforcement — Proximal Policy Optimization (PPO)</h3>
          <ol>
            <li><strong>Environment:</strong> a simulation — a robotic walker in PyBullet, an Atari game.</li>
            <li><strong>Initialization:</strong> an Actor network outputs <Eq>{'π(a|s)'}</Eq>; a Critic network estimates <Eq>{'V(s)'}</Eq>. Both start random.</li>
            <li><strong>Forward pass (rollout):</strong> the Actor interacts for a set number of steps, storing <Eq>{'(s, a, r, s′)'}</Eq> tuples without updating yet.</li>
            <li><strong>Loss:</strong> advantage estimates (how much better than average an action was), the new/old policy probability ratio, and a <em>clipped surrogate objective</em> that prevents destructive policy jumps.</li>
            <li><strong>Backward pass:</strong> gradients from three combined losses — clipped policy loss, value loss (MSE), and an entropy bonus that keeps exploring.</li>
            <li><strong>Update:</strong> multiple epochs of SGD/Adam on the same batch before discarding it — unusual among RL methods.</li>
            <li><strong>Iteration:</strong> collect → optimize → collect with the new policy, until average reward converges or hits target.</li>
          </ol>
        </section>

        {/* ─── Value Proposition ─── */}
        <section className="tm-section">
          <h2><FaLightbulb /> Value Proposition</h2>
          <p>
            This project demonstrates how a course AI tutor can be driven, through deliberate
            questioning, to produce a coherent reference rather than isolated answers. The value is
            in the method: each follow-up prompt pinned the bot to the same seven-step training-loop
            structure, forcing four very different paradigms — and their flagship algorithms — into
            a directly comparable format. The result turns a one-off chat session into a durable
            study guide covering the full training pipeline: data splitting, initialization,
            forward/backward passes, loss selection, optimization, and stopping criteria, from
            first principles down to XGBoost, K-Means, Self-Training, and PPO.
          </p>
        </section>

        {/* ─── Unique Value ─── */}
        <section className="tm-section">
          <h2><FaGem /> Unique Value</h2>
          <p>
            Unlike a textbook chapter or a generic chatbot answer, this guide is built on a single
            unifying lens: <strong>every training method is the same seven-step loop with different
            parts swapped out.</strong> Holding the structure constant makes the real differences
            unmissable —
          </p>
          <ol>
            <li><strong>What replaces the label:</strong> ground truth <Eq>y</Eq> (supervised) → the data's own structure (unsupervised) → pseudo-labels and consistency (semi-supervised) → delayed scalar rewards (reinforcement).</li>
            <li><strong>What replaces the gradient step:</strong> backpropagation → Expectation-Maximization → retraining on expanded data → clipped policy gradients.</li>
            <li><strong>What "convergence" means:</strong> validation loss plateaus → centroids stop moving → confidence saturates → reward plateaus or a champion stops being beaten.</li>
          </ol>
          <p>
            The guide also documents its own construction: it shows that careful, adversarially
            curious prompting — asking "why," "what if," and "keep the same structure" — is itself
            a learning technique that produces better material than passive reading.
          </p>
        </section>

        <p className="tm-transcript-note">
          Source conversation captured from SchoolAI (AIML-500 space) on 2026-07-19. AI can make
          mistakes; key details were reviewed against course material.
        </p>

        {/* Final Back Link */}
        <div className="tm-bottom-nav">
          <Link to="/project" className="tm-back-link">
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TrainingMethodsDetails;
