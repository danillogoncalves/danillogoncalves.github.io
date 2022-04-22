import React, { useContext } from "react";
import Loading from "../components/Loading";
import GithubAPIDataContext from "../context/GithubAPIDataContext";

function Projects() {
  const { gitHubRepos, loading } = useContext(GithubAPIDataContext);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {gitHubRepos.map(
            ({ node_id: nodeId, name, html_url: htmlUrl, topics }) => {
              if (topics.includes("portfolio")) {
                return (
                  <li key={nodeId}>
                    <a href={htmlUrl} target="_blank" rel="noreferrer">
                      {name}
                    </a>
                  </li>
                );
              }
              return null;
            }
          )}
        </ul>
      )}
    </div>
  );
}

export default Projects;
