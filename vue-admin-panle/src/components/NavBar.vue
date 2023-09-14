<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Pages
      </button>
      <button
      
        @click="logout"
        class="bg-danger"
        style="margin-left: 88%"
      >
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

      <!-- <div class="collapse navbar-collapse" id="topNavBar">
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
      </div> -->
    </div>
  </nav>

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
        Select Page !!
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
        Main Page
      </button>
      <button class="col-12 cat" @click="handleItemClick('Catogry')">
        Category
      </button>
      <button class="col-12 cat" @click="handleItemClick('Product')">
        Products
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useAuthStore } from "../authentication/auth";

export default {
  setup() {
    const router = useRouter();

    const handleItemClick = (item) => {
      const ClickItem = item;
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

    const logout = () => {
      router.push(`/login`)
      const authStore = useAuthStore();
      authStore.clearAuthData();
    };

    return { handleItemClick, logout };
  },
};
</script>
