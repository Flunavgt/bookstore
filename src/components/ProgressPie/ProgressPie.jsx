import React from 'react';
import './progressPie.css';

// eslint-disable-next-line arrow-body-style
const ProgressPie = () => {
  return (
    <div className="circular">
      <div className="inner" />
      <div className="outer" />
      <div className="numb">65%</div>
      <div className="circle">
        <div className="dot">
          <span />
        </div>
        <div className="bar left">
          <div className="progress" />
        </div>
        <div className="bar right">
          <div className="progress" />
        </div>
      </div>
    </div>
  );
};

export default ProgressPie;
