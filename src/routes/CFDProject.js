import React from 'react';
import PageLayout from '../components/PageLayout.js';
import CFDDetails from '../components/CFDDetails.js';

const CFDProject = () => (
  <PageLayout heading="CFD ANALYSIS." text="Simulation Of A Rotating Propeller Using StarCCM+">
    <CFDDetails />
  </PageLayout>
);

export default CFDProject;
