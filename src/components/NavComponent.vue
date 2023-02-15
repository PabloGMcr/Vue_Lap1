<template>

  
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <img class="img-small p-1" alt="Vue logo" src='./assets/logo.png'>  
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/form">Formulario</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Array">Array</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Api">Api</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>




<style  scoped>
.img-small{
  width: 3%; 
}

</style>
