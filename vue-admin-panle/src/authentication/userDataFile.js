import { defineStore } from "pinia";
import { boolean } from "yup";
import { useAuthStore } from "./auth";
import { computed } from "vue";

export const useLocalStorage = () => {
  // const localS = useAuthStore();
  // const token = computed(() => {
  //   return localS.token || localStorage.getItem("localToken");
  // });
};

export const userObj = () => {
  const permission = Permission();
  if (permission == true) {
    return true;
  }
  return false;
};

export const Permission = (UserData) => {
  return new Promise((resolve, reject) => {
    console.log("permission user Data field", UserData);
    if (!UserData) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
};

// export default userDataFile;
