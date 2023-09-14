import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import App from "./App.vue";
import { createApp } from "vue";
import router from "./routers";
import { createPinia } from "pinia";
import axios from "axios";

const pinia = createPinia();

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.BASE_URL,
// });

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");

//export default axiosInstance;
