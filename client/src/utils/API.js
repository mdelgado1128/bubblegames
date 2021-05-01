/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getAuth: function(authData) {
    return axios.post("/api/auth/login", authData);
  },
  saveAuth: function(authData) {
    return axios.post("/api/auth/signup", authData);
  },
  checkAuth: function (authData) {
    const token = localStorage.getItem("token")
    return axios.post("/api/auth/isAuth", {token}, authData)
  },

  setScores: function(scoreData) {
    return axios.post("api/scores/showScores", scoreData)
  }
  
}