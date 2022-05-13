/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Slider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Card from 'components/common/Card';
import './styles.scss';

const JOBS = [
  {
    period: 'Jun 2016 - Sep 2016 · 4 mos',
    company: 'Lynx',
    role: 'Junior Software Developer',
    description: '(Internship) Mantained & developed little features on few projects bound to gas & light batch sales'
  },
  {

    period: 'Dec 2016 - Jan 2019 · 2 yrs 2 mos',
    company: 'Topgraf',
    role: 'Junior Software Engineer',
    description: 'Mantained a document generation engine, made for a global leader company in the Elevator and escalators industry to generate sales contracts.'
  },
  {
    period: 'Jan 2019 - Dec 2020 · 2 yrs',
    company: 'Viasat',
    role: 'Software Engineer',
    description: 'Worked on several projects focused on Urban Hygiene Services, for garbage collection and disposal.'
  },
  {
    period: 'Dec 2020 - Present',
    company: 'Avanade',
    role: 'Senior Software Engineer',
    description: 'Assigned to a Fleet Monitoring Project, focuse on tracking and supervisioning healt status of Industrial vehicles world wide (Accenture Partnership)'
  }
];

const MARKS = [
  {
    value: 0,
    label: 'Lynx',
  },
  {
    value: 1,
    label: 'Topgraf',
  },
  {
    value: 2,
    label: 'Viasat',
  },
  {
    value: 3,
    label: 'Avanade',
  },

];
function Career() {
  const [selectedJob, setSelectedJob] = useState(JOBS[3]);
  const [changeCommit, setChangeCommit] = useState(true);

  const handleChange = (_, newValue) => {
    if (typeof newValue === 'number') {
      setSelectedJob(JOBS[newValue]);
      setChangeCommit(true);
    }
  };

  const handleInteraction = (_, e) => {
    if (changeCommit) { setChangeCommit(false); }
  };

  useEffect(() => {
  }, [selectedJob]);

  return (
    <div className="am-page" id="career-page">
      <div className="am-page__content">
        <h2>Career</h2>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={() => 'aa'}
          valueLabelDisplay="off"
          step={1}
          min={0}
          max={JOBS.length - 1}
          onChangeCommitted={handleChange}
          onChange={handleInteraction}
          marks={MARKS}
        />
        <Card
          className={changeCommit ? 'job-card' : 'job-card job-card--selection'}
          job={selectedJob}
        />
      </div>
    </div>
  );
}

export default Career;
