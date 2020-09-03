import axios from "axios";

export default {
  // Login
  login: function(userInfo) {
    return axios.post("/api/users/login",userInfo);
  },
  // Signup
  signup: function(userInfo) {
    return axios.post("/api/users/signup",userInfo);
  },
  getUserInfo: function() {
    return axios.get("/api/users/user/");
  },
  getCities: function() {
    return axios.get("/api/cities/allcities");
  },
  lookFlights: function(flightInfo) {
    return axios.get("/api/flightInfo/flight", flightInfo);
  }
};