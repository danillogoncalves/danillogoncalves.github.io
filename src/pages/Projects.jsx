import React, { useContext } from "react";
import Loading from "../components/Loading";
import GithubAPIDataContext from "../context/GithubAPIDataContext";
import "../scss/Projects.scss";

const languageColor = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Dockerfile: "#384d54",
};

function Projects() {
  const { gitHubRepos, loading } = useContext(GithubAPIDataContext);
  return (
    <div className="projects-container">
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {gitHubRepos.map(({ id, name, htmlUrl, languages }) => {
            return (
              <li key={id}>
                <p>{name}</p>
                <a href={htmlUrl} target="_blank" rel="noreferrer">
                  Repositório
                </a>
                <div className="languages">
                  <div className="language-graphic">
                    {Object.entries(languages).map(
                      (language, _index, array) => {
                        const sum = array.reduce((acc, curr) => {
                          const newAcc = acc + curr[1];
                          return newAcc;
                        }, 0);
                        return (
                          <div
                            style={{
                              backgroundColor: languageColor[language[0]],
                              width: `${(language[1] / sum) * 100}%`,
                              height: "12px",
                            }}
                          />
                        );
                      }
                    )}
                  </div>
                  <div className="percentage-of-language">
                    {Object.entries(languages).map(
                      (language, _index, array) => {
                        const sum = array.reduce((acc, curr) => {
                          const newAcc = acc + curr[1];
                          return newAcc;
                        }, 0);
                        return (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginRight: "8px",
                            }}
                          >
                            <div
                              style={{
                                marginRight: "8px",
                                backgroundColor: languageColor[language[0]],
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                              }}
                            />
                            <span
                              style={{
                                height: "12px",
                              }}
                            >{`${language[0]} ${(
                              (language[1] / sum) *
                              100
                            ).toFixed(2)}%`}</span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Projects;
