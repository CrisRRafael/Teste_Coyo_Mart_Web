<template>
  <div class="container">
    <table class="table-categories">
      <tr class="title">
        <th>Código</th>
        <th>Descrição</th>
      </tr>
      <tr v-for="category in categories" :key="category.id">
        <td class="category-number">
          {{ category.id }}
        </td>
        <td>{{ category.description }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CategoriyList",
  data() {
    return {
      categories: null,
      categories_id: null,
    };
  },
  methods: {
    async getCategories() {
      const response = await axios.get("http://127.0.0.1:3000/categories/");
      const categories = response.data;
      this.categories = categories;
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style scoped>
.container {
  height: auto;
  width: 55rem;

  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);

  margin-left: 16rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 750px) {
  .container {
    margin-left: 0;
  }
}

.table-categories {
  border-collapse: collapse;
}
.title {
  background: #d9d9d9;
  padding: 0.5rem;
}

td {
  padding: 0.5rem;
  width: 100vw;
  text-align: center;
}
</style>
