import React from 'react';
import styles from './ColorBar.module.css';

const ColorBar = ({ bmi }) => {
  const getPointerPosition = () => {
    const minBmi = 15;
    const maxBmi = 40;
    const position = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
    return Math.min(Math.max(position, 0), 100); // Ensure position is within 0 to 100%
  };

  return (
    <div className={styles.colorBarContainer}>
      <div className={styles.colorBar}></div>
      <div className={styles.knob} style={{ left: `${getPointerPosition()}%` }}></div>
    </div>
  );
};

export default ColorBar;
