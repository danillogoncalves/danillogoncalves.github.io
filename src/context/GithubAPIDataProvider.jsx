import React, { useState } from "react";
import PropTypes from "prop-types";
import GithubAPIDataContext from "./GithubAPIDataContext";
import { gitHubLanguagesAPI, gitHubReposAPI } from "../api/gitHubAPI";

function GithubAPIDataProvider(props) {
  const [gitHubRepos, setGitHubRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  function buildingTheReposGitHub(array) {
    const result = array.reduce(
      async (
        acc,
        { id, name, html_url: htmlUrl, languages_url: languagesUrl }
      ) => {
        const newAcc = await acc;
        const languages = await gitHubLanguagesAPI(languagesUrl);
        const object = {
          id,
          name,
          htmlUrl,
          languages,
        };
        return [...newAcc, object];
      },
      []
    );
    return result;
  }

  async function getDataGitHubRepos() {
    setLoading(true);
    const result = await gitHubReposAPI();
    const result2 = await buildingTheReposGitHub(result);
    setGitHubRepos(result2);
    setLoading(false);
  }

  const { Provider } = GithubAPIDataContext;
  const { children } = props;

  const value = {
    gitHubRepos,
    getDataGitHubRepos,
    loading,
    setLoading,
  };

  return <Provider value={value}>{children}</Provider>;
}

GithubAPIDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubAPIDataProvider;
