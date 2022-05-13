/* eslint-disable */

import React from 'react';
import './styles.scss';

function Card({ job , className }) {
  return (
    <div className={className}>
      <h1>{job.company}</h1>
      <p>{job.period}</p>
      <h2>{job.role}</h2>
      <p>{job.description}</p>
    </div>
  );
}

export default Card;
