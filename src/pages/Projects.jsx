import React from 'react';
import ProjectCard from '../components/ProjectCard';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';

const Projects = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Projects</h1>
        <div className="columns">
          <div className="column is-half">
            <ProjectCard
              image={project1}
              title="Project 1"
              description="This is a description of project 1."
              link="https://github.com/project1"
            />
          </div>
          <div className="column is-half">
            <ProjectCard
              image={project2}
              title="Project 2"
              description="This is a description of project 2."
              link="https://github.com/project2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
