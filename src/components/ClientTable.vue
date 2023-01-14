<template>
  <div class="container">
    <table class="table-client">
      <tr class="title">
        <th>Código</th>
        <th>Nome</th>
        <th>Cidade</th>
        <th>Telefone</th>
      </tr>
      <!-- <tr v-for="client in clients" :key="client.id">
        <td class="product-number" @click="getId(client.id)">
          {{ client.id }}
        </td>
        <td>{{ client.name }}</td>
        <td>{{ client.local }}</td>
        <td>{{ client.phone }}</td>
      </tr> -->
    </table>
  </div>
</template>

<script>
// export default {
//   name: "ClientList",
//   data() {
//     return {
//       clients: null,
//       clients_id: null,
//     };
//   },
//   methods: {
//     async getClients() {
//       const req = await fetch("http://localhost:3000/clients");
//       const data = await req.json();

//       this.clients = data;
//     },
//   },
//   mounted() {
//     this.getClients();
//   },
// };
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
