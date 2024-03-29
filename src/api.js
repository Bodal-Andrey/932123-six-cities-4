import axios from "axios";

const createApi = (onError) => {
  const api = axios.create({
    baseURL: `https://5.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.response && err.response.config.method === `post`) {
      throw err;
    }
    onError(err);
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;
