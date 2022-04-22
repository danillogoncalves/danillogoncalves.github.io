import axios from "axios";

const USER = "danillogoncalves";

async function gitHubAPI() {
  const ENDPOINT = `https://api.github.com/users/${USER}/repos`;
  try {
    const json = await axios.get(ENDPOINT);
    return json.data;
  } catch (error) {
    return error.message;
  }
}

export default gitHubAPI;
