import axios from "axios";
const client = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: `24997fed86518e9d29afc6b7f7510f37` },
});
export default client;
