<template>
  <NavBar></NavBar>
  <h1>This is Catogry Page</h1>

  <main class="mt-5 pt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h4>Category Page</h4>
        </div>
      </div>

      <!-- FROM -->
      <div class="row">
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            placeholder="Catogry Name"
            v-model="newcatogry.name"
          />
        </div>

        <div class="col-3" style="display: none">
          <input
            type="text"
            class="form-control"
            placeholder="Catogry ID"
            v-model="newcatogry.catogry_id"
          />
        </div>
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
            @click="deleteCatogry(newcatogry.catogry_id)"
          >
            Delete
          </button>
        </div>

        <div class="col-1 mt-3">
          <button
            type="button"
            class="btn btn-dark"
            @click="updateCatogry(newcatogry.catogry_id)"
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
              <span><i class="bi bi-table me-2"></i></span> Category Table
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
                      <th>catogry Id</th>
                      <th>catogry name</th>
                    </tr>
                  </thead>
                  <!-- Tbody -->
                  <tbody>
                    <tr
                      v-for="catogry in catogrys"
                      :key="catogry.catogry_id"
                      @click="handleRowClick(catogry)"
                    >
                      <td>{{ catogry.catogry_id }}</td>
                      <td>{{ catogry.name }}</td>
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
</template>

<script>
import NavBar from "../components/NavBar.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import axiosInstance from "../axiosFile";

export default {
  name: "Admin",

  components: {
    NavBar,
  },

  setup() {
    const catogrys = ref([]);
    const newcatogry = ref({ name: "" });

    onMounted(() => {
      get();
    });
    // const url = "https://jsonplaceholder.typicode.com/posts";
    // const url = "http://localhost:3000/catogry";

    // GET
    const get = () => {
      axiosInstance
        .get("/catogry")
        .then((resp) => {
          console.log("data received", resp.data);
          catogrys.value = resp.data;
          console.log("catogry value", catogrys.value);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // POST
    const create = () => {
      if (!newcatogry.value.name || newcatogry.value.name == null) {
        alert("Somthing Went wrong Try again");
        clearTextFields();
        return;
      }

      axiosInstance
        .post("/catogry", newcatogry.value)
        .then((resp) => {
          console.log("newCatogry", newcatogry.value);
          console.log("post req response", resp);
          get();
          clearTextFields();
          alert("Item Added Successful!!!");
        })
        .catch((err) => {
          console.log(err);
        });
      //  }
    };

    // // UPDATE
    const updateCatogry = (catogry_id) => {
      console.log(catogry_id, "catogry_id");
      axiosInstance
        .put(`/catogry/${catogry_id}`, newcatogry.value)
        .then((resp) => {
          clearTextFields();
          get();
          alert("Update Successful");
          console.log("updated", resp);
        })
        .catch((err) => {
          clearTextFields()
          alert("Value Not Found Try Again");
          console.log(err);
        });
    };

    //DELETE
    const deleteCatogry = (catogry_id) => {
      console.log(catogry_id, "catogry id");
      //  const deleteUrl = `http://localhost:3000/catogry/${1}`;
      axiosInstance
        .delete(`/catogry/${catogry_id}`)
        .then((resp) => {
          get();
          clearTextFields();
          alert("Catogry Delete Sucsesful");
          console.log("delted", resp);
        })
        .catch((err) => {
          clearTextFields();
          alert("Value Not Found Try Again")
          console.log(err);
        });
    };

    const clearTextFields = () => {
      newcatogry.value = { name: "" };
      newcatogry.catogry_id = { catogry_id: "" };
    };

    const handleRowClick = (catogry) => {
      newcatogry.value.name = catogry.name;
      newcatogry.value.catogry_id = catogry.catogry_id;
    };

    return {
      catogrys,
      newcatogry,
      create,
      deleteCatogry,
      handleRowClick,
      updateCatogry,
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
