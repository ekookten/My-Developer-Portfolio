resume.js
import React from "react";
import "../index.css"; // Import the CSS file

function Resume() {
  return (
    <section className="resume-container">
      <h2 className="pageh2">Resume</h2>
      <p>
        <a href="/resume/My_Resume.pdf" download>
          Download My Resume
        </a>
      </p>
      <h3 className="black">Skills</h3>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NodeJS</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Redux</li>
        <li>Git/GitHub</li>
        <li>API Development (REST and GraphQL)</li>
      </ul>
    </section>
  );
}

export default Resume;

