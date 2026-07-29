import React from 'react';
import PageLayout from '../components/PageLayout.js';
import DataChallengesDetails from '../components/DataChallengesDetails.js';

const DataChallengesProject = () => (
  <PageLayout heading="DATA CHALLENGES IN ML." text="Nineteen ways the data breaks a model, with the documented failures behind each one.">
    <DataChallengesDetails />
  </PageLayout>
);

export default DataChallengesProject;
