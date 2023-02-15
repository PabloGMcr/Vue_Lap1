<template>
  <NavComponent></NavComponent>
  <MainComponentVue></MainComponentVue>
  <img alt="Vue logo" src="./assets/logo.png">
 <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
 <FooterComponentVue></FooterComponentVue>
 
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import NavComponent from './components/NavComponent.vue';
import MainComponentVue from './components/MainComponent.vue';
import FooterComponentVue from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
   NavComponent,
    MainComponentVue,
    FooterComponentVue
}
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
