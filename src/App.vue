<template>
  <NavComponent></NavComponent>
 <!--   <img alt="Vue logo" src="./assets/logo.png">  -->
  <router-view></router-view>
 <!--  <MainComponentVue></MainComponentVue> -->
  
 <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
 <FooterComponentVue></FooterComponentVue>
 
 
 </template>

<script>
/*  import HelloWorld from './components/HelloWorld.vue'  */
import NavComponent from './components/NavComponent.vue';
/* import MainComponentVue from './components/MainComponent.vue'; */
import FooterComponentVue from './components/FooterComponent.vue';
/* import router from './router'; */


export default {
  name: 'App',
  components: {
    NavComponent,
    /* MainComponentVue,
    HelloWorld, */
   
    FooterComponentVue,
    /* router */
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
