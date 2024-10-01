import React from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content">
          {description}
          <br />
          <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
