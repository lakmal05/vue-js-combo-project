import { defineStore } from "pinia";
import axios from "axios";
import { Permission } from "./userDataFile";
import axiosInstance from "../axiosFile";
import { tokenAvailable } from "../middleware/middlewareFile";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    user: null,
  }),
  getters: {
    isAuthenticated: () => {
      const token = localStorage.getItem("localToken");
      console.log(token, "AUth function");
      return token != null;
    },
  },
  actions: {
    async setToken(newToken) {
      localStorage.setItem("localToken", newToken);
      const token = localStorage.getItem("localToken");
      console.log(token, "new Taaa");
      tokenAvailable(token);
    },

    async login(email, password) {
      try {
        const response = await axiosInstance.post("/auth/signin", {
          email: email,
          password: password,
        });
        console.log("response", response);
        const T = (this.token = response.data);
        this.user = response.data.user;
        const UserData = response.config.data;
        // console.log("user form backend", response.config.data);
        // console.log("user form backend", UserData);

        this.setToken(T);
        console.log("toekn", response.data);
        if (!UserData) {
          return false;
        } else {
          return Permission(UserData);
        }
      } catch (error) {
        return false;
      }
    },

    async clearAuthData() {
      localStorage.setItem("localToken", null);
      const token = localStorage.getItem("localToken");
      console.log(token);
      console.log("logOut");
      this.token = null;
      this.user = null;
    },
  },
});
