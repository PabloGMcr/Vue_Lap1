<template>
  <h2 class="p-5">Ejercico Formulario</h2>
  <div class="container p-5">
    <form action="" class="row">
      <input class="m-2" type="text" v-model="nombre" placeholder="Nombre" />
      <input class="m-2" type="number" v-model="edad" placeholder="Edad" />
      <button @click="submit">Guardar</button>
    </form>

    <hr />

    <table>
      <tr>
        <td class="p-3">Nombre</td>
        <td class="p-3">Edad</td>
      </tr>
      <tr>
        <td>{{ nombre }}</td>
        <td>{{ edad }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "FormComponent",

  data() {
    return {
      nombre: "",
      edad: "",
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.nombre, this.edad);
      alert(this.nombre + this.edad);
    },
  },
};
</script>

<style lang="scss" scoped></style>
