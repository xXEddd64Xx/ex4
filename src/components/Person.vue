<template>
  <div class="Person">
    <h5>Nombre: {{ name }}<br>Llinatge: {{ llin1 }} {{ llin2 }}<br>DNI: {{ dni }}</h5>
    <button v-on:click="$emit('eliminarElement')">Esborrar</button>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    name: String,
    llin1: String,
    llin2: String,
    dni: String
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
