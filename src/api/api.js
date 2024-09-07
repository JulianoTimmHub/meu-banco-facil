import axios from "axios";

const {
  EXPO_PUBLIC_API_PROTOCOL: protocol,
  EXPO_PUBLIC_API_HOST: host,
  EXPO_PUBLIC_API_PORT: port,
  EXPO_PUBLIC_API_BASE_PATH: basePath
} = process.env;

export const apiPath = axios.create({
  baseURL: `${protocol}://${host}:${port}${basePath}`
});

export const concatUrl = (urlPath) => {
  console.log({urlPath: apiPath.defaults.baseURL.concat(urlPath)})
  return axios.create({
    baseURL: apiPath.defaults.baseURL.concat(urlPath)
  })
};