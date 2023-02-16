<template>
  <div class="container">
    <h2 class="pt-5">Ejercico consumo Api</h2>
  </div>

  <div class="container">
    <table class="table-striped">
      <thead class="thead">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in datos" :key="usuario.id">
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ApiComponent",
  data() {
    return {
      datos: [],
    };
  },
  mounted() {
    this.MostrarInformacion();
  },
  methods: {
    MostrarInformacion() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          this.datos = data;
        });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.thead {
  background: #0a3143;
  color: #fff;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  margin-top: 5%;
  padding: 0;
}
.table {
  padding: 0;
  margin: 0;
}
</style>
