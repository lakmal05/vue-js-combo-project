<template>
  <body>
    <NavBar></NavBar>

    <!-- offcanvas -->
    <main class="mt-5 pt-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h4>Products Page</h4>
          </div>
        </div>

        <!-- FROM -->
        <div class="row">
          <!-- <form @submit.prevent="create"> -->

          <div class="col-3">
            <input
              type="text"
              class="form-control"
              placeholder="Product name"
              v-model="newproduct.name"
            />
          </div>
          <div class="col-3">
            <input
              type="number"
              class="form-control"
              placeholder="Product Price"
              v-model="newproduct.price"
              oninput="this.value = this.value.replace(/[^0-9]/g,'')"
            />
          </div>
          <div class="col-2">
            <input
              style="display: none"
              type="text"
              class="form-control"
              placeholder="Product id"
              v-model="newproduct.id"
            />
          </div>

          <!-- DROP BOX -->
          <div class="dropdown col-3" id="app">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{
                handleCategoryVlue || selectedCategoryName || "Select Category"
              }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li
                class="dropdown-item"
                v-for="category in catogrys"
                :key="category.catogry_id"
                @click="selectCategory(category)"
              >
                {{ category.name }}
                <!-- {{ category.catogry_id }} -->
              </li>
            </ul>
          </div>

          <!--</form> -->
        </div>

        <!-- BUTTONS -->
        <div class="row">
          <div class="col-1 mt-3">
            <button type="button" class="btn btn-primary" @click="create">
              Create
            </button>
          </div>
          <div class="col-1 mt-3">
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteProduct(newproduct.id)"
            >
              Delete
            </button>
          </div>

          <div class="col-1 mt-3">
            <button
              type="button"
              class="btn btn-dark"
              @click="updateProduct(newproduct.id)"
            >
              Update
            </button>
          </div>
        </div>

        <!-- DATA TABLE -->
        <div class="row" style="margin-top: 120px">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <span><i class="bi bi-table me-2"></i></span> ProductTable
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
                        <th>Product Id</th>
                        <!-- <th>Catogry Id</th> -->
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Catogry name</th>
                      </tr>
                    </thead>
                    <!-- Tbody -->
                    <tbody>
                      <tr
                        v-for="product in products"
                        :key="product.id"
                        @click="handleRowClick(product)"
                      >
                        <td>{{ product.id }}</td>
                        <!-- <td>{{ product.catogry_id }}</td> -->
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ getCategoryName(product.catogry_id) }}</td>
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
import NavBar from "../components/NavBar.vue";
import axios from "axios";
import { onMounted, ref, computed, watch } from "vue";
import axiosInstance from "../axiosFile";

export default {
  name: "Admin",

  components: {
    NavBar,
  },

  setup() {
    const products = ref([]);
    const catogrys = ref([]);

    const selectedCategoryName = ref("");
    const newproduct = ref({ name: "", price: "" });
    const selectedCategory = ref({ name: "", catogry_id: "" });
    const handleCategoryVlue = ref("");

    onMounted(() => {
      get();
      getCatogrys();
    });
    const getCatogrys = () => {
      axiosInstance
        .get("/catogry")
        .then((resp) => {
          console.log("cargory", resp.data);
          catogrys.value = resp.data;
          // console.log("catogry value", catogrys.value[0].name);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const selectCategory = (categoryValue) => {
      selectedCategory.value = categoryValue.catogry_id;
      selectedCategoryName.value = categoryValue.name;
      handleCategoryVlue.value = categoryValue;
      console.log(handleCategoryVlue.value, "this is slected catogry");
    };

    // GET
    const get = () => {
      axiosInstance
        .get("/product")
        .then((resp) => {
          console.log("data received", resp.data);
          products.value = resp.data;
          console.log("catogry value", products.value);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // POST
    const create = () => {
      const newData = newproduct.value;
      const selectedData = selectedCategory.value;
      const priceAsInt = parseInt(newData.price, 10);

      if (
        Number.isNaN(priceAsInt) ||
        !newData.name ||
        newData.name.trim() === "" ||
        newData == null
      ) {
        alert("Enter Valid Details");
        clearTextFields();
        return;
      }

      const postData = {
        ...newData,
        catogry_id: selectedData,
      };

      axiosInstance
        .post("/product", postData)
        .then((resp) => {
          alert("Item Added Success !!");
          get();
          clearTextFields();
          console.log("newCatogry", newproduct.value);
          console.log("post req response", resp);
        })
        .catch((err) => {
          clearTextFields();
          console.log(err);
        });
      //  }
    };

    // UPDATE
    const updateProduct = (id) => {
      //console.log(id);
      axiosInstance
        .put(`/product/${id}`, newproduct.value)
        .then((resp) => {
          get();
          clearTextFields();
          alert("Update Sucsessfull");
          console.log("updated", resp);
        })
        .catch((err) => {
          clearTextFields();
          alert("Value Not Found Try Again");

          console.log(err);
        });
    };

    //DELETE
    const deleteProduct = (id) => {
      //  const deleteUrl = `http://localhost:3000/product/${34}`;
      // console.log(deleteUrl);
      axiosInstance
        .delete(`/product/${id}`)
        .then((resp) => {
          get();
          clearTextFields();
          alert("Delete succsess");
          console.log("delted", resp);
        })
        .catch((err) => {
          clearTextFields();
          alert("Value Not Found Try Again");
          console.log(err);
        });
    };

    const handleRowClick = (product) => {
      //  console.log(product.catogry_id, "prdocut click");
      newproduct.value.name = product.name;
      newproduct.value.id = product.id;
      newproduct.value.price = product.price;
      const id = product.catogry_id;
      selectCategory(id);
      console.log(id, "selcetd value new");
    };
    var Cname;
    const getCategoryName = computed(() => (catogry_id) => {
      const category = catogrys.value.find(
        (catg) => catg.catogry_id === catogry_id
      );
      const a = category ? (Cname = category.name) : "Unknown Category";
      console.log(Cname);
      return a;
    });

    const clearTextFields = () => {
      newproduct.value = { name: "", price: "" };
      selectedCategory.value = "Select Catogry";
      selectedCategoryName.value = "Select Catogry";
    };

    return {
      products,
      newproduct,
      create,
      catogrys,
      selectCategory,
      selectedCategory,
      deleteProduct,
      selectedCategoryName,
      getCategoryName,
      handleRowClick,
      updateProduct,
      handleCategoryVlue,
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
