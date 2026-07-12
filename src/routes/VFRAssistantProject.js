import React from 'react';
import PageLayout from '../components/PageLayout.js';
import VFRAssistantDetails from '../components/VFRAssistantDetails.js';

const VFRAssistantProject = () => (
  <PageLayout heading="AI FLIGHT ASSISTANT." text="Grounded study aid for Private Pilot study & FAA exam preparation.">
    <VFRAssistantDetails />
  </PageLayout>
);

export default VFRAssistantProject;
