import React from 'react';
import PageLayout from '../components/PageLayout.js';
import TrainingMethodsDetails from '../components/TrainingMethodsDetails.js';

const TrainingMethodsProject = () => (
  <PageLayout heading="ML TRAINING METHODS." text="A guided conversation through supervised, unsupervised, semi-supervised & reinforcement learning.">
    <TrainingMethodsDetails />
  </PageLayout>
);

export default TrainingMethodsProject;
