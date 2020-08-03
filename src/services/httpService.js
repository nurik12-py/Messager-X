import axios from "axios";
import auth from "./authService";

axios.defaults.headers.common["Authorization"] = "Bearer " + auth.getJwt();
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log(error);
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
