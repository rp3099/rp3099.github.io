import React from 'react';
import './TrainingMethodsDetailsStyles.css';
import { FaArrowLeft, FaRobot, FaUser, FaComments, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import assets
import tmFeature from '../assets/mltm/training_methods_feature.svg';

const Eq = ({ children }) => <span className="tm-eq">{children}</span>;

const Msg = ({ role, children }) => (
  <div className={`tm-msg ${role === 'user' ? 'tm-msg-user' : 'tm-msg-ai'}`}>
    <span className="tm-msg-role">
      {role === 'user' ? <><FaUser /> Me</> : <><FaRobot /> SchoolAI</>}
    </span>
    {children}
  </div>
);

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
        <h1 className="tm-title">Machine Learning Training Methods: A Guided Chat Exploration</h1>

        {/* Intro */}
        <div className="tm-intro-card">
          <h3><FaBookOpen /> About This Conversation</h3>
          <p>
            This is a transcript of a working session with the AIML-500 course chatbot on SchoolAI.
            Starting from a simple question — "what are the primary training methods?" — the
            conversation drills progressively deeper: from the four learning paradigms, into the
            step-by-step mechanics of training, through hyperparameter questions, and finally into
            the flagship algorithm of each paradigm (XGBoost, K-Means, Self-Training, and PPO).
          </p>
        </div>

        {/* Featured Image */}
        <div className="tm-figure">
          <img src={tmFeature} alt="The four machine learning training paradigms covered in the conversation" />
          <p className="tm-caption">Figure 1: The four training paradigms explored in the conversation — supervised, unsupervised, semi-supervised, and reinforcement learning.</p>
        </div>

        {/* ─── Transcript ─── */}
        <section className="tm-section">
          <h2><FaComments /> The Conversation</h2>
          <div className="tm-chat">

            <Msg role="ai">
              <p>Hello. Welcome to AIML-500. I'm here to help you navigate the training methods and optimization techniques we're covering. What's on your mind today?</p>
            </Msg>

            <Msg role="user">
              <p>Hello I wanted to learn about machine learning methods. Can you list out some primary training methods?</p>
            </Msg>

            <Msg role="ai">
              <p>In the context of this course, we generally categorize primary training methods based on how the algorithm receives data and updates its model parameters. The main categories are:</p>
              <ul>
                <li><strong>Supervised Learning:</strong> The model learns from labeled data — input pairs where the correct output is known. You're essentially teaching by example.</li>
                <li><strong>Unsupervised Learning:</strong> The model works with unlabeled data to find hidden structures or patterns on its own.</li>
                <li><strong>Semi-supervised Learning:</strong> A hybrid approach using a small amount of labeled data with a larger amount of unlabeled data to improve learning accuracy.</li>
                <li><strong>Reinforcement Learning:</strong> An agent learns to make decisions by performing actions in an environment and receiving feedback through rewards or penalties.</li>
              </ul>
            </Msg>

            <Msg role="user">
              <p>For these training methods I listed, I want you to list some popular use cases for each of these methods, how the training is performed and what are some of the popular algorithms. I also want you to list the date when the training method was invented.</p>
            </Msg>

            <Msg role="ai">
              <h4>1. Supervised Learning</h4>
              <ul>
                <li><strong>Popular Use Cases:</strong> Image classification, spam detection, medical diagnosis, predictive maintenance.</li>
                <li><strong>How Training is Performed:</strong> The algorithm is fed a dataset containing input features and corresponding correct labels (e.g., photos of cats labeled "cat"). It iteratively makes predictions, calculates the error between its prediction and the actual label, and adjusts its internal parameters (weights) to minimize that error.</li>
                <li><strong>Popular Algorithms:</strong> Linear Regression, Logistic Regression, Support Vector Machines (SVM), Random Forest, Neural Networks (CNNs, RNNs).</li>
                <li><strong>Invention Date:</strong> While the foundational concepts date back earlier, the formalization of statistical learning theory began in the 1950s (e.g., the Perceptron in 1957).</li>
              </ul>
              <h4>2. Unsupervised Learning</h4>
              <ul>
                <li><strong>Popular Use Cases:</strong> Customer segmentation, anomaly detection (fraud), recommendation systems, dimensionality reduction.</li>
                <li><strong>How Training is Performed:</strong> The algorithm is given data without labels. It attempts to learn the underlying structure or distribution of the data by finding similarities, clusters, or relationships between data points without explicit feedback on "correctness."</li>
                <li><strong>Popular Algorithms:</strong> K-Means Clustering, Hierarchical Clustering, Principal Component Analysis (PCA), Autoencoders.</li>
                <li><strong>Invention Date:</strong> Early clustering methods like K-Means were developed in the 1950s (specifically 1957 by Hugo Steinhaus), though the field expanded significantly in the 1990s.</li>
              </ul>
              <h4>3. Semi-Supervised Learning</h4>
              <ul>
                <li><strong>Popular Use Cases:</strong> Web page classification, speech recognition, protein sequence classification — scenarios where labeled data is scarce but unlabeled data is abundant.</li>
                <li><strong>How Training is Performed:</strong> It combines a small amount of labeled data with a large amount of unlabeled data. The model uses the labeled data to establish a baseline and leverages the unlabeled data to understand the structure of the input space (often using assumptions like continuity or low-density separation), improving generalization.</li>
                <li><strong>Popular Algorithms:</strong> Self-training, Co-training, Graph-based methods, Semi-Supervised SVMs.</li>
                <li><strong>Invention Date:</strong> Research gained traction in the mid-1990s, though theoretical discussions occurred earlier.</li>
              </ul>
              <h4>4. Reinforcement Learning</h4>
              <ul>
                <li><strong>Popular Use Cases:</strong> Robotics, game playing (e.g., AlphaGo), autonomous driving, resource management.</li>
                <li><strong>How Training is Performed:</strong> An agent interacts with an environment. It takes an action, observes the consequence (a new state and a reward or penalty), and updates its policy (strategy) to maximize the cumulative long-term reward. It learns through trial and error rather than being shown the "correct" action.</li>
                <li><strong>Popular Algorithms:</strong> Q-Learning, Deep Q-Networks (DQN), Proximal Policy Optimization (PPO), Actor-Critic methods.</li>
                <li><strong>Invention Date:</strong> The foundational concept, the "Markov Decision Process," was formalized in the 1950s, but major algorithmic breakthroughs like Q-Learning came in 1989.</li>
              </ul>
            </Msg>

            <Msg role="user">
              <p>Lets now dive into the topics. For a supervised learning how is the training performed. Can you explain in detail?</p>
            </Msg>

            <Msg role="ai">
              <p>At a high level, supervised training is an optimization process: we are searching for the set of parameters (weights) that make our model's predictions match the target labels as closely as possible.</p>
              <h4>1. Data Preparation and Splitting</h4>
              <p>We prepare our dataset <Eq>{'D = {(x⁽ⁱ⁾, y⁽ⁱ⁾)}, i = 1…N'}</Eq>, where <Eq>x</Eq> represents the input features and <Eq>y</Eq> represents the target label.</p>
              <ul>
                <li><strong>Train/Test Split:</strong> We typically split the data into training, validation, and test sets. The model only "sees" the training data during this process.</li>
                <li><strong>Preprocessing:</strong> Features are often normalized or standardized to ensure the optimization algorithm converges efficiently.</li>
              </ul>
              <h4>2. Initialization</h4>
              <p>The model parameters (weights <Eq>θ</Eq>) are initialized, usually with small random numbers. If we started with all zeros, the model would be symmetric and fail to learn distinct features.</p>
              <h4>3. The Forward Pass (Inference)</h4>
              <ul>
                <li><strong>Linear Combination:</strong> The inputs are multiplied by the weights and summed with biases: <Eq>{'z = θᵀx + b'}</Eq>.</li>
                <li><strong>Activation:</strong> A non-linear activation function (like ReLU, Sigmoid, or Tanh) is applied to <Eq>z</Eq> to produce the output prediction <Eq>ŷ</Eq>.</li>
                <li><strong>Output Layer:</strong> The final layer produces a prediction in the format required by the task (e.g., a probability distribution for classification, a continuous value for regression).</li>
              </ul>
              <h4>4. Loss Calculation (The Error)</h4>
              <p>We compare the model's prediction <Eq>ŷ</Eq> against the actual ground truth label <Eq>y</Eq> using a Loss Function.</p>
              <ul>
                <li><strong>For Regression:</strong> Mean Squared Error (MSE): <Eq>{'L = (1/N) Σ (y − ŷ)²'}</Eq>.</li>
                <li><strong>For Classification:</strong> Cross-Entropy Loss: <Eq>{'L = −Σ y·log(ŷ)'}</Eq>.</li>
              </ul>
              <p>The goal of training is to minimize this loss value.</p>
              <h4>5. The Backward Pass (Backpropagation)</h4>
              <ul>
                <li><strong>Gradient Calculation:</strong> We calculate the gradient of the loss function with respect to each weight using the chain rule of calculus. This tells us the "direction of steepest ascent."</li>
                <li><strong>Backpropagation:</strong> This gradient is computed recursively from the output layer back to the input layer.</li>
              </ul>
              <h4>6. Parameter Update (Optimization)</h4>
              <p>Once we have the gradients, we update the weights in the opposite direction of the gradient using an Optimizer (like Gradient Descent).</p>
              <ul>
                <li><strong>Update Rule:</strong> <Eq>{'θ_new = θ_old − η·∇L(θ)'}</Eq></li>
                <li><Eq>η</Eq> (eta) is the Learning Rate, a hyperparameter that controls the size of the step.</li>
                <li><Eq>{'∇L(θ)'}</Eq> is the gradient.</li>
              </ul>
              <h4>7. Iteration (Epochs)</h4>
              <ul>
                <li><strong>Batch:</strong> One update step is performed after processing a subset (batch) of data.</li>
                <li><strong>Epoch:</strong> One full pass through the entire training dataset.</li>
                <li>Training continues for multiple epochs until the loss stops decreasing (convergence) or meets a predefined stopping criterion.</li>
              </ul>
            </Msg>

            <Msg role="user">
              <p>Couple of questions. 1. How is the amount of data to be split determined? Are the initial weights just randomly assigned? How are activation functions determined, can you show a simple example of where each of these functions are used? For the loss calculation how do I decide if to use MSE or cross entropy? For updating the parameters is the learning rate pre-determined or something set by the developer?</p>
            </Msg>

            <Msg role="ai">
              <h4>1. How is the data split determined?</h4>
              <p>There isn't a hard mathematical rule, but there are standard conventions based on dataset size:</p>
              <ul>
                <li><strong>Small Datasets</strong> (a few thousand examples): a split like 60/20/20 (Train/Validation/Test). You need more data for testing to get a reliable metric.</li>
                <li><strong>Large Datasets</strong> (millions of examples): 98/1/1 or even 99/0.5/0.5. Even 1% is thousands of examples, statistically significant for evaluation.</li>
                <li><strong>Stratification:</strong> For classification tasks, you usually perform stratified sampling so the proportion of classes is preserved across all three splits.</li>
              </ul>
              <h4>2. Are initial weights just randomly assigned?</h4>
              <p>Yes, but with a specific strategy. You rarely initialize from a wide range.</p>
              <ul>
                <li><strong>Why not pure random?</strong> If weights are too large, activations can saturate and gradients become zero (the "vanishing gradient" problem).</li>
                <li><strong>Xavier/Glorot Initialization:</strong> Designed for Sigmoid/Tanh activations. Keeps output variance consistent with input variance.</li>
                <li><strong>He Initialization:</strong> Designed for ReLU activations. Accounts for ReLU zeroing out negative values.</li>
              </ul>
              <h4>3. How are activation functions determined? (Examples)</h4>
              <ul>
                <li><strong>ReLU:</strong> <Eq>{'f(x) = max(0, x)'}</Eq> — default choice for most hidden layers, especially computer vision. Computationally efficient and mitigates vanishing gradients.</li>
                <li><strong>Sigmoid:</strong> <Eq>{'f(x) = 1 / (1 + e⁻ˣ)'}</Eq> (squashes output between 0 and 1) — output layer for binary classification. Provides a clear probability score.</li>
                <li><strong>Softmax:</strong> generalizes Sigmoid for multiple classes — output layer for multi-class classification. Converts outputs into a probability distribution that sums to 1.</li>
                <li><strong>Tanh:</strong> <Eq>{'f(x) = (eˣ − e⁻ˣ) / (eˣ + e⁻ˣ)'}</Eq> (squashes between −1 and 1) — often used in RNNs or when data is centered around zero.</li>
              </ul>
              <h4>4. How to decide between MSE and Cross Entropy?</h4>
              <ul>
                <li><strong>MSE:</strong> Use for <strong>Regression</strong> problems. Example: predicting house prices ($350,000 vs $355,000) — a continuous numerical value.</li>
                <li><strong>Cross-Entropy Loss:</strong> Use for <strong>Classification</strong> problems. Example: predicting if an email is spam. Cross-entropy penalizes confident wrong answers much more heavily than MSE, leading to better convergence for classification.</li>
              </ul>
              <h4>5. Is the learning rate pre-determined?</h4>
              <p>It is a hyperparameter set by the developer, but rarely static.</p>
              <ul>
                <li><strong>Initial Setting:</strong> Pick a starting value (e.g., 0.001, 0.01) based on the optimizer used (Adam or SGD).</li>
                <li><strong>Learning Rate Schedulers:</strong> Often used to change the rate during training — <strong>Decay</strong> (start high to learn fast, then decrease to fine-tune) and <strong>Warm-up</strong> (start low and increase to prevent instability in the early stages).</li>
              </ul>
            </Msg>

            <Msg role="user">
              <p>Yes that clarifies it. Can you now explain unsupervised learning? How is it different from supervised learning? Consider the past conversation we had with supervised learning and the follow up questions. I want your explanation to be in depth and preserve same structure.</p>
            </Msg>

            <Msg role="ai">
              <p>The fundamental difference lies in the objective. In Supervised Learning, the objective is <strong>prediction</strong> — mapping inputs to known labels. In Unsupervised Learning, the objective is <strong>representation</strong> — discovering the underlying structure, patterns, or relationships in the data without any guidance on what the "correct" output looks like.</p>
              <h4>1. Data Preparation and Splitting</h4>
              <ul>
                <li><strong>Dataset:</strong> <Eq>{'D = {x⁽ⁱ⁾}, i = 1…N'}</Eq>. Notice the absence of <Eq>y</Eq> (labels).</li>
                <li><strong>Splitting:</strong> Since we don't have labels to verify accuracy against, a "Test Set" for performance metrics is different. We still split data (Train/Validation) to check stability or tune hyperparameters, but we don't calculate "accuracy" in the traditional sense.</li>
              </ul>
              <h4>2. Initialization</h4>
              <ul>
                <li><strong>Centroid Initialization (Clustering):</strong> For K-Means, we might randomly select <Eq>k</Eq> data points as the starting centroids.</li>
                <li><strong>Weight Initialization (Neural Networks):</strong> For autoencoders or self-organizing maps, we use strategies like Xavier or He initialization.</li>
              </ul>
              <h4>3. The Forward Pass (Encoding/Mapping)</h4>
              <p>Instead of predicting a label, the model transforms the data.</p>
              <ul>
                <li><strong>Example (Autoencoder):</strong> The input passes through an "encoder" network to produce a compressed code <Eq>z</Eq>.</li>
                <li><strong>Example (K-Means):</strong> Each data point calculates its distance to the current centroids to determine which cluster it belongs to.</li>
              </ul>
              <h4>4. Loss Calculation (Reconstruction or Intra-Cluster Distance)</h4>
              <ul>
                <li><strong>Reconstruction Loss (Autoencoders):</strong> The model recreates its own input. Loss is the difference between input <Eq>x</Eq> and reconstruction <Eq>x̂</Eq> (e.g., MSE: <Eq>{'L = ‖x − x̂‖²'}</Eq>).</li>
                <li><strong>Inertia/Compactness (Clustering):</strong> The sum of squared distances between each point and the centroid of its assigned cluster. The goal is to make clusters as tight as possible.</li>
              </ul>
              <h4>5. The Backward Pass (or Optimization Step)</h4>
              <ul>
                <li><strong>Backpropagation (Autoencoders):</strong> Since autoencoders are neural networks, we use backpropagation to update the encoder and decoder simultaneously.</li>
                <li><strong>Expectation-Maximization (Clustering):</strong> In K-Means we use an iterative process — <strong>Assignment Step (E):</strong> assign points to the nearest centroid; <strong>Update Step (M):</strong> move the centroid to the mean position of assigned points. Repeats until centroids stop moving.</li>
              </ul>
              <h4>6. Parameter Update</h4>
              <ul>
                <li><strong>Neural Approaches:</strong> Weights updated using optimizers (SGD, Adam) based on reconstruction gradients.</li>
                <li><strong>Clustering Approaches:</strong> Centroid locations updated by taking the mean of assigned data points.</li>
              </ul>
              <h4>7. Iteration (Convergence)</h4>
              <ul>
                <li><strong>For Autoencoders:</strong> When reconstruction error stops improving.</li>
                <li><strong>For Clustering:</strong> When data points stop switching clusters between iterations.</li>
              </ul>
              <h4>Summary of Differences</h4>
              <ul>
                <li><strong>Labels:</strong> Supervised uses <Eq>y</Eq>; Unsupervised does not.</li>
                <li><strong>Goal:</strong> Supervised minimizes prediction error; Unsupervised minimizes reconstruction error or maximizes separation between data groups.</li>
                <li><strong>Feedback:</strong> Supervised gets external feedback (the label); Unsupervised gets internal feedback (the structure of the data itself).</li>
              </ul>
            </Msg>

            <Msg role="user">
              <p>Yes lets move to semi-supervised learning</p>
            </Msg>

            <Msg role="ai">
              <p>This method sits at the intersection of the two. It addresses a common real-world constraint: labeled data is expensive and scarce, but unlabeled data is cheap and abundant. The core idea is to leverage the massive amount of unlabeled data to uncover the structure of the input space (like Unsupervised Learning) and use that structure to improve how the model learns from the small amount of labeled data (like Supervised Learning).</p>
              <h4>1. Data Preparation and Splitting</h4>
              <ul>
                <li><strong>Dataset:</strong> A small labeled set <Eq>L</Eq> and a large unlabeled set <Eq>U</Eq> (where <Eq>{'u ≫ l'}</Eq>).</li>
                <li><strong>Splitting:</strong> We reserve a purely labeled test set for final evaluation, but during training the model consumes both <Eq>L</Eq> and <Eq>U</Eq>.</li>
              </ul>
              <h4>2. Initialization</h4>
              <ul>
                <li><strong>Model Initialization:</strong> Weights initialized randomly, as in supervised learning.</li>
                <li><strong>Pseudo-Labeling (Optional):</strong> Some methods first train a basic model on only <Eq>L</Eq> to generate "pseudo-labels" for <Eq>U</Eq>, which are then refined.</li>
              </ul>
              <h4>3. The Forward Pass</h4>
              <ul>
                <li><strong>Supervised Stream:</strong> Labeled inputs are passed through the network to generate predictions.</li>
                <li><strong>Unsupervised Stream:</strong> Unlabeled inputs are passed through the network to enforce consistency. In <strong>Consistency Regularization</strong>, we take an unlabeled image, add noise (crop, rotate), and pass both versions through — the model should predict the same output for both.</li>
              </ul>
              <h4>4. Loss Calculation (The Hybrid Objective)</h4>
              <p><Eq>{'L_total = L_supervised + λ·L_unsupervised'}</Eq></p>
              <ul>
                <li><strong>Supervised Loss:</strong> e.g. Cross-Entropy, calculated only on labeled data <Eq>L</Eq>. Ensures the model learns the correct mapping for known examples.</li>
                <li><strong>Unsupervised Loss:</strong> Acts as a regularizer using <Eq>U</Eq> to enforce assumptions — <strong>Smoothness</strong> (points close in input space should have similar labels) and <strong>Low-Density Separation</strong> (the decision boundary should lie in a region with few data points).</li>
                <li><strong><Eq>λ</Eq> (Lambda):</strong> Hyperparameter controlling how much influence the unlabeled data has.</li>
              </ul>
              <h4>5. The Backward Pass</h4>
              <ul>
                <li><strong>Combined Signal:</strong> Gradients from the labeled loss pull the model toward correct answers, while gradients from the unsupervised loss pull it toward a smooth decision boundary that respects the geometry of the whole dataset.</li>
              </ul>
              <h4>6. Parameter Update</h4>
              <ul>
                <li><strong>Update Rule:</strong> <Eq>{'θ_new = θ_old − η·∇L_total'}</Eq>. Informed by both explicit labels and implicit structure.</li>
              </ul>
              <h4>7. Iteration</h4>
              <ul>
                <li>As the model improves, its predictions on unlabeled data become more confident. In Self-Training, these confident predictions are added to the labeled set (as pseudo-labels) for the next epoch, effectively growing the training data.</li>
              </ul>
              <h4>Summary of the "Bridge"</h4>
              <ul>
                <li><strong>Borrows from Supervised:</strong> Still requires some labels to anchor the meaning of the classes.</li>
                <li><strong>Borrows from Unsupervised:</strong> Uses the shape and density of the data to generalize better than it could on the limited labels alone.</li>
              </ul>
            </Msg>

            <Msg role="user">
              <p>Yes explain reinforcement learning.</p>
            </Msg>

            <Msg role="ai">
              <p>This is a fundamental departure. Supervised, Unsupervised, and Semi-Supervised learning are all <strong>static</strong> — they learn from a fixed dataset. Reinforcement Learning is <strong>dynamic</strong> — it learns by interacting with an environment. In RL, we have an Agent that must learn a Policy (a strategy) to maximize a numerical Reward signal, through trial and error.</p>
              <h4>1. Environment and State Definition</h4>
              <ul>
                <li><strong>State Space (S):</strong> The agent observes the current state <Eq>sₜ</Eq>.</li>
                <li><strong>Action Space (A):</strong> The agent takes actions <Eq>aₜ</Eq>.</li>
                <li><strong>No Dataset:</strong> Data is generated on the fly as the agent interacts with the environment.</li>
              </ul>
              <h4>2. Initialization</h4>
              <ul>
                <li><strong>Policy (π):</strong> Initialized, often as a Neural Network taking state <Eq>sₜ</Eq> and outputting action probabilities. Initially random.</li>
                <li><strong>Value Function (V) / Q-Function (Q):</strong> A "Critic" network that estimates how good a state or state-action pair is.</li>
              </ul>
              <h4>3. The Forward Pass (Interaction Loop)</h4>
              <p>In each step of an episode: the agent <strong>observes</strong> state <Eq>sₜ</Eq>, uses policy <Eq>π</Eq> to <strong>select</strong> action <Eq>aₜ</Eq>, <strong>executes</strong> it, the environment <strong>transitions</strong> to new state <Eq>{'sₜ₊₁'}</Eq>, and provides a scalar <strong>reward</strong> <Eq>rₜ</Eq>.</p>
              <h4>4. Return Calculation (The Goal)</h4>
              <ul>
                <li><strong>Return (Gₜ):</strong> The sum of all future rewards: <Eq>{'Gₜ = rₜ + γ·rₜ₊₁ + γ²·rₜ₊₂ + …'}</Eq></li>
                <li><strong>Discount Factor (γ):</strong> Between 0 and 1; determines how much we care about future vs. immediate rewards. <Eq>γ</Eq> close to 1 means the agent is farsighted.</li>
              </ul>
              <h4>5. Loss Calculation (The Temporal Difference)</h4>
              <ul>
                <li><strong>TD Target:</strong> <Eq>{'y = rₜ + γ·V(sₜ₊₁)'}</Eq>.</li>
                <li><strong>TD Error:</strong> The difference between predicted value and the TD target.</li>
                <li><strong>Loss Function:</strong> Minimize the difference between the Critic's prediction and the TD Target (often MSE or Huber Loss).</li>
              </ul>
              <h4>6. The Backward Pass</h4>
              <ul>
                <li><strong>Policy Gradient:</strong> Update the Policy to increase the probability of actions that led to higher-than-expected rewards.</li>
              </ul>
              <h4>7. Parameter Update</h4>
              <ul>
                <li><strong>Update Rule:</strong> Use optimizers (like Adam) to update weights of both the Policy (Actor) and Value (Critic) networks.</li>
                <li><strong>Exploration vs. Exploitation:</strong> Force the agent to take random actions occasionally (exploration) to avoid sub-optimal strategies, reducing randomness over time.</li>
              </ul>
              <h4>8. Iteration (Episodes)</h4>
              <ul>
                <li>Training continues over thousands or millions of episodes. As the policy updates, behavior changes, generating new data — a feedback loop. Stops when the agent achieves a consistent high score or converges to an optimal policy.</li>
              </ul>
              <h4>Summary of the Paradigm Shift</h4>
              <ul>
                <li><strong>Feedback:</strong> RL uses delayed, scalar rewards rather than immediate, instructional labels.</li>
                <li><strong>Consequence:</strong> The agent must associate a reward with the sequence of actions that caused it (the "credit assignment problem").</li>
                <li><strong>Data:</strong> The data distribution changes as the policy improves (non-stationary).</li>
              </ul>
            </Msg>

            <Msg role="user">
              <p>For reinforcement learning, e.g. chess board there are so many possibilities. When do we decide when to stop iterating?</p>
            </Msg>

            <Msg role="ai">
              <p>In a game like chess, the state space is so vast (<Eq>10¹²⁰</Eq> possible game states) that you can never truly explore every possibility. You are usually balancing performance against compute constraints and stability.</p>
              <h4>1. Convergence of the Reward (The Performance Plateau)</h4>
              <ul>
                <li><strong>Moving Average:</strong> Track the average reward over the last N episodes (e.g., last 100 games). If it stabilizes within a small variance, the agent has likely learned the optimal strategy for its architecture.</li>
                <li><strong>Threshold:</strong> If a known "expert" level exists (e.g., a Stockfish rating of 3000), stop when the agent consistently reaches or exceeds it.</li>
              </ul>
              <h4>2. The "Target" is Beaten (AlphaGo Zero Example)</h4>
              <ul>
                <li><strong>Self-Play Tournament:</strong> The current agent periodically plays the best previous agent.</li>
                <li><strong>Stop Condition:</strong> When the current agent wins &gt;55% of games against the champion, it becomes the new champion. If it fails to beat the champion after a set number of games, training is halted.</li>
              </ul>
              <h4>3. Stability of the Value Function</h4>
              <ul>
                <li>Since chess rewards are sparse (+1 win, −1 loss, 0 draw at the very end), we look at the Value Function <Eq>V</Eq>.</li>
                <li><strong>Stop Condition:</strong> When the TD Error (difference between predicted value and actual result) stops decreasing, the agent has learned to accurately evaluate positions.</li>
              </ul>
              <h4>4. Computational Budget (The Hard Stop)</h4>
              <ul>
                <li><strong>Wall Time / Steps:</strong> e.g., "40 days of compute" or "10 million steps."</li>
                <li><strong>Checkpointing:</strong> Save the model periodically. Even if you stop on time, select the checkpoint that performed best on a validation set of grandmaster games.</li>
              </ul>
              <h4>5. Catastrophic Forgetting or Instability</h4>
              <ul>
                <li>The agent might learn to beat its current opponent but "forget" older edge cases.</li>
                <li><strong>Stop Condition:</strong> If performance drops drastically and doesn't recover, halt training, revert to a previous checkpoint, and adjust hyperparameters.</li>
              </ul>
            </Msg>

            <Msg role="user">
              <p>Yes that makes sense. What are different algorithms used for each of the 4 methods you mentioned. Can you pick multiple examples sorted by popularity for each of them</p>
            </Msg>

            <Msg role="ai">
              <h4>1. Supervised Learning</h4>
              <ul>
                <li><strong>Gradient Boosted Trees (XGBoost, LightGBM, CatBoost):</strong> The undisputed king of structured data. Wins Kaggle competitions; standard for credit scoring, fraud detection, churn prediction.</li>
                <li><strong>Random Forest:</strong> A robust out-of-the-box workhorse. Harder to overfit than a single decision tree, handles high-dimensional data, little tuning needed.</li>
                <li><strong>Logistic Regression:</strong> The baseline for binary classification. Highly interpretable, computationally cheap.</li>
                <li><strong>Support Vector Machines (SVM):</strong> Standard for smaller, complex datasets where maximizing the margin between classes is critical.</li>
                <li><strong>Convolutional Neural Networks (CNNs):</strong> The standard for computer vision. Architectures like ResNet and EfficientNet dominate.</li>
              </ul>
              <h4>2. Unsupervised Learning</h4>
              <ul>
                <li><strong>K-Means Clustering:</strong> The "Hello World" of clustering. Simple, fast, effective for partitioning data (e.g., customer segmentation).</li>
                <li><strong>Principal Component Analysis (PCA):</strong> The go-to for dimensionality reduction; essential for visualizing high-dimensional data and removing noise.</li>
                <li><strong>Hierarchical Clustering:</strong> Used to understand the taxonomy of data (dendrograms); popular in biology and genomics.</li>
                <li><strong>Autoencoders:</strong> The deep learning approach; widely used for anomaly detection and denoising images.</li>
                <li><strong>DBSCAN:</strong> Preferred over K-Means when clusters have irregular shapes or when there is noise (identifies outliers as "noise").</li>
              </ul>
              <h4>3. Semi-Supervised Learning</h4>
              <ul>
                <li><strong>Self-Training (Pseudo-Labeling):</strong> Simplest and most intuitive; easy to implement on top of any supervised model.</li>
                <li><strong>Label Propagation / Label Spreading:</strong> Graph-based methods; effective when labels need to "flow" to similar neighbors.</li>
                <li><strong>Consistency Regularization (FixMatch, Pi-Model):</strong> The modern standard for deep semi-supervised learning; state-of-the-art for image classification with few labels.</li>
                <li><strong>GANs for Semi-Supervised Learning:</strong> Modify the discriminator to output class labels, leveraging the generator to create synthetic data.</li>
              </ul>
              <h4>4. Reinforcement Learning</h4>
              <ul>
                <li><strong>Proximal Policy Optimization (PPO):</strong> The default for many applications (including how ChatGPT was fine-tuned). Balances ease of implementation, sample efficiency, and stability.</li>
                <li><strong>Deep Q-Networks (DQN):</strong> The breakthrough that combined Deep Learning with RL (Atari games); foundational for discrete action spaces.</li>
                <li><strong>Soft Actor-Critic (SAC):</strong> The dominant algorithm for continuous control (robotics); maximizes reward and entropy.</li>
                <li><strong>Q-Learning:</strong> The classic model-free algorithm; theoretical foundation for modern Deep RL, still used for tabular state spaces.</li>
              </ul>
            </Msg>

            <Msg role="user">
              <p>Using the same structure explain in detail each of these methods</p>
            </Msg>

            <Msg role="ai">
              <h4>1. Supervised Learning: Gradient Boosted Trees (e.g., XGBoost)</h4>
              <ol>
                <li><strong>Data Preparation:</strong> Structured/Tabular data. Train/Validation/Test split. XGBoost handles missing values internally.</li>
                <li><strong>Initialization:</strong> Starts with a simple initial prediction — usually the mean of the target values (regression) or a log-odds probability (classification).</li>
                <li><strong>The Forward Pass:</strong> The final prediction is the sum of the outputs from all trees: <Eq>{'ŷ = Σ fᵢ(x)'}</Eq>, where <Eq>fᵢ</Eq> is the prediction of the i-th tree.</li>
                <li><strong>Loss Calculation:</strong> A differentiable loss (LogLoss for classification, MSE for regression). The core concept is the "residual" — the difference between the actual label and the current cumulative prediction.</li>
                <li><strong>The Backward Pass (Gradient Approximation):</strong> The negative gradient of the loss points in the direction of the residual. XGBoost uses a second-order Taylor expansion of the loss to approximate the update.</li>
                <li><strong>Parameter Update (Tree Building):</strong> A new tree is built to predict the negative gradient. Split finding maximizes the "gain." A regularization term penalizes complex trees (pruning).</li>
                <li><strong>Iteration (Boosting Rounds):</strong> Trees are added one by one, each correcting the errors of the previous ensemble. Early stopping monitors validation loss.</li>
              </ol>
              <h4>2. Unsupervised Learning: K-Means Clustering</h4>
              <ol>
                <li><strong>Data Preparation:</strong> Unlabeled feature vectors. Features must be scaled (StandardScaler) because K-Means is distance-based.</li>
                <li><strong>Initialization:</strong> Randomly select <Eq>k</Eq> data points as initial centroids (K-Means++ optimizes this selection).</li>
                <li><strong>The Forward Pass (Assignment):</strong> For every point, calculate the Euclidean distance to each centroid; assign to the closest.</li>
                <li><strong>Loss Calculation (Inertia):</strong> Minimize Within-Cluster Sum of Squares: <Eq>{'J = Σ ‖x⁽ⁱ⁾ − μ⁽ⁱ⁾‖²'}</Eq>, where <Eq>μ</Eq> is the centroid of the assigned cluster.</li>
                <li><strong>The Backward Pass (Optimization Step):</strong> No calculus-based backpropagation. Expectation-Maximization (EM): <strong>E-Step</strong> = assigning points; <strong>M-Step</strong> = re-calculating centroids.</li>
                <li><strong>Parameter Update (Centroid Recalculation):</strong> New centroid = mean of all points assigned to that cluster; it shifts to the geometric center.</li>
                <li><strong>Iteration (Convergence):</strong> Steps repeat until centroids no longer move significantly or the max iterations are reached.</li>
              </ol>
              <h4>3. Semi-Supervised Learning: Self-Training (Pseudo-Labeling)</h4>
              <ol>
                <li><strong>Data Preparation:</strong> A small labeled set <Eq>L</Eq> and a large unlabeled set <Eq>U</Eq>; a hold-out test set for evaluation.</li>
                <li><strong>Initialization:</strong> Initialize a standard supervised model using only labeled data <Eq>L</Eq>.</li>
                <li><strong>The Forward Pass:</strong> Use the current model to generate predictions (probabilities) for the unlabeled set <Eq>U</Eq>.</li>
                <li><strong>Loss Calculation:</strong> Standard supervised loss (Cross-Entropy) on <Eq>L</Eq>; examine the confidence of predictions on <Eq>U</Eq>.</li>
                <li><strong>The Backward Pass (Pseudo-Labeling):</strong> Select unlabeled samples where the model is confident (e.g., predicted probability &gt; 0.95). Treat these as ground truth, adding them to create an expanded set <Eq>L′</Eq>.</li>
                <li><strong>Parameter Update:</strong> Retrain the model on the expanded set <Eq>L′</Eq>, reinforcing confident decision boundaries.</li>
                <li><strong>Iteration:</strong> Predict → Select confident samples → Add to training set → Retrain. Stops when no unlabeled samples remain, confidence drops below threshold, or validation performance saturates.</li>
              </ol>
              <h4>4. Reinforcement Learning: Proximal Policy Optimization (PPO)</h4>
              <ol>
                <li><strong>Environment Setup:</strong> A simulation (e.g., a robotic walker in PyBullet or a game like Atari).</li>
                <li><strong>Initialization:</strong> <strong>Actor Network (Policy)</strong> — outputs action probabilities <Eq>{'π(a|s)'}</Eq>; <strong>Critic Network (Value)</strong> — outputs a scalar value <Eq>{'V(s)'}</Eq> estimating expected return. Both randomly initialized.</li>
                <li><strong>The Forward Pass (Data Collection):</strong> Rollout — the Actor interacts with the environment for a set number of steps. Store the tuple <Eq>{'(s, a, r, s′)'}</Eq> in a buffer without updating weights yet.</li>
                <li><strong>Loss Calculation (The PPO Objective):</strong> <strong>Advantage Estimation</strong> (how much better an action was compared to the average), the <strong>Probability Ratio</strong> (probability of the action under the new policy vs. the old policy), and the <strong>Clipped Surrogate Objective</strong> (encourages the policy to improve but clips the loss if the new policy deviates too drastically from the old, preventing collapse).</li>
                <li><strong>The Backward Pass:</strong> Gradients for three combined losses — Policy Loss (the clipped objective), Value Loss (MSE between Critic prediction and actual return), and an Entropy Bonus (keeps the policy exploring).</li>
                <li><strong>Parameter Update:</strong> Unlike standard RL, PPO performs multiple epochs of SGD/Adam on the same batch of collected data before discarding it and collecting new trajectories.</li>
                <li><strong>Iteration:</strong> Collect data → Optimize → Collect new data with the updated policy. Stops when the average reward per episode reaches a target or converges.</li>
              </ol>
            </Msg>

          </div>

          <p className="tm-transcript-note">
            Captured from SchoolAI (AIML-500 space) on 2026-07-19. AI can make mistakes; verify important details.
          </p>
        </section>

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
