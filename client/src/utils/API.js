import axios from "axios";

export default {
  // Login
  login: function(userInfo) {
    return axios.post("/api/users/login",userInfo);
  },
  // Signup
  signup: function(userInfo) {
    return axios.post("/api/users/signup",userInfo);
  }
};