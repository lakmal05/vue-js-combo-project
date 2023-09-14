import { useAuthStore } from "../authentication/auth";
import { useRouter } from "vue-router";
import { useLocalStorage } from "../authentication/userDataFile";
import { defineStore } from "pinia";

const router = useRouter();

// const  uas=useAuthStore();
// const t = uas.setToken();

export const myMiddleware = (to, from, next) => {
  const token = localStorage.getItem("localToken");
  console.log(token, "AUth function");
  const isAuthenticated = token == "null" ? false : true;
  console.log(isAuthenticated, "isAuthenticated");
  //const isAuthenticated =true

  if (isAuthenticated) {
    next();
  } else {
    console.log(" not authenticated");
    next("/login");
  }

  // if (from.name === "dashboard" ) {
  //   console.log("authenticated");
  //   //next();
  //   next("/productPage");
  //   // navDashboard();
  // } else {
  //   next();
  // }

  // if (to.name === "login" && isAuthenticated()) {
  //    router.push(`/dashboard`);
  //   next({ name: "dashboard" });
  // } else if (to.name !== "login" && !isAuthenticated) {
  //   next({ name: "login" });
  // } else {
  //   router.push(`/login`);
  //   next();
  // }
};

export const rollBack = (to, from, next) => {
  const token = localStorage.getItem("localToken");
  const isAuthenticated = token == "null" ? false : true;
  if (isAuthenticated) {
    next("/dashboard");
  } else {
    next();
  }
};

export const tokenAvailable = (token) => {
  const Token = token;
  if (!Token) {
    return false;
  } else {
    return true;
  }
};

// const navDashboard = () => {
//   router.push(`/dashboard`);
// };
