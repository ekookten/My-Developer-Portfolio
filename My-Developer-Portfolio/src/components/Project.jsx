import React from 'react';
import '../index.css'; // Import the CSS file

function Project({ project }) {
  return (
    <div className="project-box">
      <h3 className={`project-title ${project.titleClass}`}>{project.title}</h3>
      <img className="project-image" src={project.image} alt={project.title} />
      <div className="project-links">
        <p>
          <a href={project.deployedLink}>Deployed Application</a> | 
          <a href={project.githubLink}>GitHub Repository</a>
        </p>
      </div>
    </div>
  );
}

export default Project;