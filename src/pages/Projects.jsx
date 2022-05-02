import React, { useContext } from "react";
import Loading from "../components/Loading";
import GithubAPIDataContext from "../context/GithubAPIDataContext";
import "../scss/Projects.scss";

function Projects() {
  const { gitHubRepos, loading } = useContext(GithubAPIDataContext);
  return (
    <div className="projects-container">
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {gitHubRepos.map(({ id, name, htmlUrl }) => {
            return (
              <li key={id}>
                <p>{name}</p>
                <a href={htmlUrl} target="_blank" rel="noreferrer">
                  Repositório
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Projects;
