<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <center>
          <br><div>Nom: <input v-model="name" required></div><br>
          <div>Llinatge 1: <input v-model="llin1" required></div><br>
          <div>Llinatge 2: <input v-model="llin2" required></div><br>
          <div>DNI: <input v-model="dni" required></div><br>
          <button v-on:click="afegeixElement()">Afegir persona</button>
          <br><h4>Llista: </h4>
          <Person v-on:eliminarElement="eliminarElement(idx)" v-for="(a, idx) in this.$store.getters.getLlista" :key="idx" :name="a.name" :llin1="a.llin1" :llin2="a.llin2" :dni="a.dni"></Person>
      </center>
  </div>
</template>

<script>
import Person from './components/Person.vue'

export default {
  name: 'App',
  data() {
    return {
      name : "",
      llin1 : "",
      llin2 : "",
      dni : ""
    }
  },
  components: {
    Person
  },
  methods: {
    afegeixElement() {
          var persona = {
              name : this.name,
              llin1 : this.llin1,
              llin2 : this.llin2,
              dni : this.dni
          }
          /* this.persones.push(this.persona); */
          this.$store.commit("afegeixElement", persona);
          this.name = "";
          this.llin1 = "";
          this.llin2 = "";
          this.dni = "";
    },
    eliminarElement : function(idx) {
        /* this.persones.splice(idx, 1); */
        this.$store.commit("eliminarElement", idx)
    }
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
