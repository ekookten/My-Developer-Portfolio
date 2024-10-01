import React from 'react';

const Resume = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">My Resume</h1>
        <p>Download my resume below:</p>
        <a className="button is-primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
        <div className="content">
          <h2 className="subtitle">Experience</h2>
          <ul>
            <li>Job Title at Company (Year - Year)</li>
            <li>Another Job Title at Another Company (Year - Year)</li>
          </ul>
          <h2 className="subtitle">Education</h2>
          <ul>
            <li>Degree at University (Year)</li>
          </ul>
          <h2 className="subtitle">Skills</h2>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
