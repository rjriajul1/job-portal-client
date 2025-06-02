import axios from "axios";
import React from "react";
import AuthHook from "./AuthHook";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-seven-iota.vercel.app/",
});
const useAxiosSecure = () => {
  const { user, signOutUser,setUser } = AuthHook();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.status === 401 || error?.status === 403) {
        signOutUser()
        .then(()=> {
          console.log('sing out  user');
          setUser(null)
        })
        .catch(err => {
       console.log(err);
        })
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
export default useAxiosSecure;
