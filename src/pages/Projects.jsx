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
          {gitHubRepos.map(({ id, name, html_url: htmlUrl, topics }) => {
            if (topics.includes("portfolio")) {
              return (
                <li key={id}>
                  <a href={htmlUrl} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
    </div>
  );
}

export default Projects;
