import React from 'react';
import './ArtifactStatsStyles.css';

// Shared "at a glance" strip used at the top of every AI/ML artifact page.
// Reviewers asked for measurable outcomes, so each artifact leads with the
// countable facts about it before the prose starts.
const ArtifactStats = ({ items, caption }) => (
  <div className="artifact-stats">
    <div className="artifact-stats-grid">
      {items.map((item) => (
        <div className="artifact-stat" key={item.label}>
          <span className="artifact-stat-num">{item.value}</span>
          <span className="artifact-stat-label">{item.label}</span>
        </div>
      ))}
    </div>
    {caption && <p className="artifact-stats-caption">{caption}</p>}
  </div>
);

export default ArtifactStats;
