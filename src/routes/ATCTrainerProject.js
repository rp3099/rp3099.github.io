import React from 'react';
import PageLayout from '../components/PageLayout.js';
import ATCTrainerDetails from '../components/ATCTrainerDetails.js';

const ATCTrainerProject = () => (
  <PageLayout heading="ATC TRAINER GPT." text="Adversarial evaluation of a custom GPT for FAA phraseology & procedures.">
    <ATCTrainerDetails />
  </PageLayout>
);

export default ATCTrainerProject;
