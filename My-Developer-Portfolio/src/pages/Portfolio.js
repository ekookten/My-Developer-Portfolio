import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      imageUrl: "/image/Employee-Payrol-Tracker-Project.png",
      deployedLink: " https://ekookten.github.io/Employee-Payroll-Tracker/",
      repoLink: "https://github.com/ekookten/Employee-Payroll-Tracker",
    },

    {
      title: "Project 1",
      imageUrl: "/image/Employee-Payrol-Tracker-Project.png",
      deployedLink: " https://ekookten.github.io/Employee-Payroll-Tracker/",
      repoLink: "https://github.com/ekookten/Employee-Payroll-Tracker",
    },

    {
      title: "Project 1",
      imageUrl: "/image/Employee-Payrol-Tracker-Project.png",
      deployedLink: " https://ekookten.github.io/Employee-Payroll-Tracker/",
      repoLink: "https://github.com/ekookten/Employee-Payroll-Tracker",
    },

    {
      title: "Project 1",
      imageUrl: "/image/Employee-Payrol-Tracker-Project.png",
      deployedLink: " https://ekookten.github.io/Employee-Payroll-Tracker/",
      repoLink: "https://github.com/ekookten/Employee-Payroll-Tracker",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
