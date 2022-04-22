import React, { useState } from "react";
import PropTypes from "prop-types";
import GithubAPIDataContext from "./GithubAPIDataContext";
import gitHubAPI from "../api/gitHubAPI";

function GithubAPIDataProvider(props) {
  const [gitHubRepos, setGitHubRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getDataGitHubRepos() {
    setLoading(true);
    const result = await gitHubAPI();
    setGitHubRepos(result);
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
