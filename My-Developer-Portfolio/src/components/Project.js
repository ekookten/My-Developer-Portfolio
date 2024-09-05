function Project({ title, imageUrl, deployedLink, repoLink }) {
    return (
      <div>
        <h3>{title}</h3>
        <img src={imageUrl} alt={title} />
        <p>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Site</a> |{' '}
          <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </p>
      </div>
    );
  }
  
  export default Project;
  