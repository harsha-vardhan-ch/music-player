import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "80cf0d95184c4be3a55a9de8510f5d23";
const redirectUri = "http://localhost:3000/";
const scopes=["user-library-read", "playlist-read-private"];
const REACT_APP_VERCEL_URL='https://music-player-ljwp6jyue-harsha-vardhan-ch.vercel.app'; 

//export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${REACT_APP_VERCEL_URL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

console.log(loginEndpoint);
const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;


  // BQBHatB6j2ZgVieNiyfQMyqH6kP75e78yIl9Mcj4peENJLG4b2ErM4M-pkzyAyqyVkYZt8N4khxvCRl22XelFtUnnekiszdMpWQHJrInGJjKpaWL5ChP4tucipgWiGi1AekN15_andV8c7iWq7nDi1cJtUXLW74VtOp9MmxthZnXA6D4hKEMHLg