import React from 'react';

const ProgressBar = ({ porcentaje }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated "
        role="progressbar"
        aria-valuenow={porcentaje}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: porcentaje + '%', backgroundColor: 'rgb(255, 153, 0)'}}
      ></div>
    </div>
  );
};

export default ProgressBar;