import React from "react";

import ExperimentCheckbox from "../ExperimentCheckbox";

import s from "./ExperimentList.module.scss";

const ExperimentList = ({ experimentIds, selectedExperiments, onChange }) => {
  const toggleExperiment = (id) => {
    if (selectedExperiments.includes(id)) {
      onChange(selectedExperiments.filter((e) => e !== id));
    } else {
      onChange([...selectedExperiments, id]);
    }
  };

  return (
    <div className={s.expList}>
      <h3>Choose experiment(s):</h3>
      {experimentIds.map((id) => (
        <ExperimentCheckbox
          key={id}
          id={id}
          checked={selectedExperiments.includes(id)}
          onToggle={() => toggleExperiment(id)}
        />
      ))}
    </div>
  );
};

export default ExperimentList;
