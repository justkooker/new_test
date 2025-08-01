import React from "react";

import s from "./ExperimentCheckbox.module.scss";

const ExperimentCheckbox = ({ id, checked, onToggle }) => {
  return (
    <label className={s.checkboxWrapper}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className={s.hiddenCheckbox}
      />
      <span className={s.customCheckbox} />
      <span className={s.labelText}>{id}</span>
    </label>
  );
};

export default ExperimentCheckbox;
