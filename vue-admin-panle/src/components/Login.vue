<!-- <script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const login = () => {
  router.push(`/dashboard`);
};
</script> -->

<template>
  <div class="container py-5 h-100" @submit.prevent="handleSubmit">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div
          class="card"
          style="border-radius: 2rem; box-shadow: 0 0px 3px rgb(41, 39, 39)"
        >
          <div class="row g-0">
            <div
              class="col-md-6 col-lg-7 d-flex align-items-center"
              style="width: 100%"
            >
              <div class="card-body p-4 p-lg-5 text-black">
                <form>
                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i
                      class="fas fa-cubes fa-2x me-3"
                      style="color: #ff6219"
                    ></i>
                    <span class="h1 fw-bold mb-0">LOGIN </span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                    Sign into your account
                  </h5>
                  <form @submit.prevent="loginUser">
                    <!-- E-MAIL -->
                    <div class="form-outline mb-6">
                      <input
                        type="email"
                        id="form2Example17"
                        class="form-control form-control-lg"
                        v-model="email"
                        :class="{ error: errors.email }"
                      />
                      <!-- <span v-if="errors.email" class="error-message">{{
                        errors.email[0]
                      }}</span> -->
                      <label class="form-label" for="form2Example17"
                        >Email address</label>
                      
                    </div>

                    <!-- PASSWORAD -->
                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example27"
                        class="form-control form-control-lg"
                        v-model="password"
                        :class="{ error: errors.password }"
                      />
                      <!-- <span v-if="errors.password" class="error-message">{{
                        errors.password[0]
                      }}</span> -->
                      <label class="form-label" for="form2Example27"
                        >Password</label
                      >
                    </div>

                    <!-- LOGIN BUTTON -->
                    <div class="pt-1 mb-7">
                      <button
                        id="btnLogin"
                        class="btn btn-dark btn-lg btn-block"
                        type="submit"
                        @click="loginUser"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <!-- <a class="small text-muted" href="#!">Forgot password?</a> -->
                  <p
                    class="mb-5 pb-lg-2"
                    style="color: #393f81 margin: top 1px;"
                  >
                    Don't have an account?
                    <a href="#!" style="color: #393f81">Register here</a>
                  </p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../authentication/auth";
import { useRouter } from "vue-router";
import { ref,computed } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { Permission } from "../authentication/userDataFile";


export default {
   name:"login",
  setup() {
    // const baseURL = procsess.env.BASE_URL;
    // console.log(baseURL.value);
    const email = ref("");
    const password = ref("");

    const schema = yup.object({
      email: yup.string().required("emial is required").email(),
      password: yup.string().required().min(3),
    });

    const { errors, handleSubmit } = useForm({
      validationSchema: schema,
    });

    const loginUser = (event) => {
      event.preventDefault();
      const permission = Permission();
      const authStore = useAuthStore();
      const successful = schema
        .validate({ email: email.value, password: password.value })
        .then(async () => {
          const UserEmail = email.value;
          const UserPassword = password.value;

          const success = await authStore.login(UserEmail, UserPassword);
          //console.log("success", { success });
          // console.log(Permission(), "permsision");
          //console.log(permission, "permiss : ");

          if (success == true) {
            console.log("per granted");
            navDashboard();
          } else {
            alert("Somthing went wrong try again");
          }
        })
        .catch((err) => {
          alert("Somthing went wrong try again");
        });
    };

    const router = useRouter();
    const navDashboard = () => {
      router.push(`/dashboard`);
    };

    return { email, password, loginUser, errors };
  },
};
</script>


