import axios from "axios";

const USER = "danillogoncalves";

export async function gitHubReposAPI() {
  const ENDPOINT = `https://api.github.com/users/${USER}/repos`;
  try {
    const json = await axios.get(ENDPOINT);
    const data = json.data.filter(({ topics }) => topics.includes("portfolio"));
    return data;
  } catch (error) {
    return error.message;
  }
}

export async function gitHubLanguagesAPI(endpoint) {
  try {
    const json = await axios.get(endpoint);
    return json.data;
  } catch (error) {
    return error.message;
  }
}
