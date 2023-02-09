<template>
  <div class="container">
    <table class="table-client">
      <tr class="title">
        <th>Código</th>
        <th>Nome</th>
        <th>Cidade</th>
        <th>Telefone</th>
      </tr>
      <tr v-for="client in clients" :key="client.id">
        <td class="client-number" @click="getId(client.id)">
          {{ client.id }}
        </td>
        <td>{{ client.name }}</td>
        <td>{{ client.city }}</td>
        <td>{{ client.telefone }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ClientList",
  data() {
    return {
      clients: null,
      clients_id: null,
    };
  },
  methods: {
    async getClients() {
      const response = await axios.get("http://localhost:3000/clients/");
      const clients = response.data;
      this.clients = clients;
    },
  },
  mounted() {
    this.getClients();
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

.table-client {
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
