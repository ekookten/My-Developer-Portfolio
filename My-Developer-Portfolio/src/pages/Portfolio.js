Portfolio.js

import React from 'react';
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Employee-Payrol-Tracker",
      imageUrl: "/image/Employee-Payrol-Tracker-Project.png",
      deployedLink: " https://ekookten.github.io/Employee-Payroll-Tracker/",
      repoLink: "https://github.com/ekookten/Employee-Payroll-Tracker",
    },

    {
      title: "Employee-Payrol-Tracker",
      imageUrl: "/image/Employee-Payrol-Tracker-Project.png",
      deployedLink: " https://ekookten.github.io/Employee-Payroll-Tracker/",
      repoLink: "https://github.com/ekookten/Employee-Payroll-Tracker",
    },

    {
      title: "PEmployee-Payrol-Tracker",
      imageUrl: "/image/Employee-Payrol-Tracker-Project.png",
      deployedLink: " https://ekookten.github.io/Employee-Payroll-Tracker/",
      repoLink: "https://github.com/ekookten/Employee-Payroll-Tracker",
    },

    {
      title: "Employee-Payrol-Tracker",
      imageUrl: "/image/Employee-Payrol-Tracker-Project.png",
      deployedLink: " https://ekookten.github.io/Employee-Payroll-Tracker/",
      repoLink: "https://github.com/ekookten/Employee-Payroll-Tracker",
    },
  ];

  return (
    <section>
    <h2 className="pageh2">Portfolio</h2>
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </section>
  );
}

export default Portfolio;

