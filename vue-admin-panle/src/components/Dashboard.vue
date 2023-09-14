<template>
  <body>
    <!-- top navigation bar -->
    <!-- <NavBar></NavBar>  -->

    <div class="container-fluid">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        style="margin-bottom: -5%"
      >
        Pages
      </button>

      <button @click="logout" class="bg-danger" style="margin-left: 88%">
        Logout
      </button>

      <a
        class="navbar-brand me-auto text-uppercase fw-bold"
        href="#"
        style="margin-left: 13%"
      >
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topNavBar"
        aria-controls="topNavBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="topNavBar">
        <form class="d-flex ms-auto my-3 my-lg-0">
          <div class="input-group">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle ms-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-fill"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">Empolers</a>
              </li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-start"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
          Select Page
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <button class="col-12 cat" @click="handleItemClick('Main')">
          Main
        </button>

        <button class="col-12 cat" @click="handleItemClick('Catogry')">
          Category
        </button>
        <button class="col-12 cat" @click="handleItemClick('Product')">
          Products
        </button>
      </div>
    </div>

    <!-- top navigation bar -->

    <!-- offcanvas -->

    <!-- offcanvas -->
    <div class="row" style="margin-top: 4%">
      <div class="col-2">
        <input
          type="text"
          class="form-control"
          placeholder=" Home Address"
          v-model="newproduct.price"
        />
      </div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="Home City" />
      </div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="Price " />
      </div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="propertyType " />
      </div>

      <div class="col-2">
        <input type="file" class="form-control" placeholder="Image" />
      </div>
    </div>

    <!-- BUTTON -->
    <div class="row" style="margin-left: 1%">
      <div class="col-1 mt-4 mr-4">
        <button type="button" class="btn btn-dark" @click="create">
          Create
        </button>
      </div>
    </div>

    <main class="mt-5 pt-3">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-12"
            style="text-align: center; margin-bottom: 9%"
            v-if="isAuthenticated"
          >
            <h4>Hello</h4>
          </div>
        </div>
        <!--   <div class="row">
           PRIMARY CARD-BLUE CARD 
          <div class="col-md-3 mb-3">
            <div class="card bg-primary text-white h-100" @click="navCars">
              <div class="card-body py-5">Primary Card</div>
              <div class="card-footer d-flex">
                View Details
                <span class="ms-auto">
                  <i class="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
           WARNING CARD -YELLO CARD 
          <div class="col-md-3 mb-3">
            <div class="card bg-warning text-dark h-100">
              <div class="card-body py-5">Warning Card</div>
              <div class="card-footer d-flex">
                View Details
                <span class="ms-auto">
                  <i class="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
           SUCCSESS CARD- GREEN CARD 
          <div class="col-md-3 mb-3">
            <div class="card bg-success text-white h-100">
              <div class="card-body py-5">Success Card</div>
              <div class="card-footer d-flex">
                View Details
                <span class="ms-auto">
                  <i class="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
          SUCCSESS CARD- RED CARD 
          <div class="col-md-3 mb-3">
            <div class="card bg-danger text-white h-100">
              <div class="card-body py-5">Danger Card</div>
              <div class="card-footer d-flex">
                View Details
                <span class="ms-auto">
                  <i class="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div> -->
        <!-- AREA CHARET  -->
        <!-- <div class="row">
          AREA CHAR ONE -->
        <!-- <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-header">
                <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
                Area Chart Example
              </div>
              <div class="card-body">
                <canvas class="chart" width="400" height="200"></canvas>
              </div>
            </div>
          </div> -->
        <!-- AREA CHAR TWO 
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-header">
                <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
                Area Chart Example
              </div>
              <div class="card-body">
                <canvas class="chart" width="400" height="200"></canvas>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="col-md-2 mb-2 bg-red">
          <input />
        </div> -->

        <!-- DATA TABLE -->
        <div class="row" style="margin-top: 120px">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <span><i class="bi bi-table me-2"></i></span> ADMIN TABLE
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    id="example"
                    class="table table-striped data-table"
                    style="width: 100%"
                  >
                    <thead>
                      <tr>
                        <th>product Id</th>
                        <th>address</th>
                        <th>city</th>
                        <th>price</th>
                      </tr>
                    </thead>
                    <!-- Tbody -->
                    <tbody>
                      <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.address }}</td>
                        <td>{{ product.city }}</td>
                        <td>{{ product.price }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import NavBar from "./NavBar.vue";
import { useAuthStore } from "../authentication/auth";
import axiosInstance from "../axiosFile";
import { onMounted, ref, computed, watch } from "vue";

//const users = ref([]);

export default {
  name: "dashboard",
  components: {
    NavBar,
  },

  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const products = ref([]);
    const newproduct = ref({ id: "", address: "", city: "", price: "" });
    const imageFile = ref({ url: "aaaaa" });
    onMounted(() => {
      get();
    });

    // const url = "http://localhost:3000/home";
    // const selectedImage = (event) => {
    //   // const file = event.target.files[0];
    //   // image.value = file;
    //   // newuser.value = image.value;
    //   // console.log(newuser.value);
    // };
    const handleItemClick = (item) => {
      console.log("Clicked item:", item);
      if (item == "Catogry") {
        router.push(`/catogrysPage`);
      }
      if (item == "Product") {
        router.push(`/productPage`);
      }
      if (item == "Main") {
        router.push(`/dashboard`);
      }
    };
    // GET
    const get = () => {
      axiosInstance
        .get("/home")
        .then((resp) => {
          products.value = resp.data;
        })
        .catch((err) => {
          //   console.log(err);
        });
    };
    const formData = new FormData();
    formData.append("image", imageFile.value);

    // POST
    const create = () => {
      try {
        // const formData = new FormData();
        // formData.append("image", imageFile.value);
        axiosInstance
          .post("/catogry/userImage", imageFile.value, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((resp) => {
            console.log("post req response", resp);
          });
      } catch (error) {
        console.log("main Err", error);
      }
    };

    const logout = () => {
      router.push(`/login`);
      const authStore = useAuthStore();
      authStore.clearAuthData();
    };

    // // UPDATE
    // const update = () => {
    //   axios
    //     .put(url, {})
    //     .then((resp) => {
    //       console.log("updated", resp);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // //DELETE
    // const deleteUser = (productId) => {
    //   const deleteUrl = `https://jsonplaceholder.typicode.com/posts/${userid}`;
    //   axios
    //     .delete(deleteUrl, {})
    //     .then((resp) => {
    //       console.log("delted", resp);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    return {
      products,
      newproduct,
      create,
      // deleteUser,
      // navEmployer,
      // selectedImage,
      // image,
      handleItemClick,
      logout,
      isAuthenticated: authStore.isAuthenticated,
      // user: authStore.user
    };
  },
};
</script>

<style>
.cat {
  list-style: none;
  margin-top: 20px;
  font-size: 16px;
}
</style>
