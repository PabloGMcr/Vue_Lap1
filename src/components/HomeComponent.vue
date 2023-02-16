<template>
    <main class="containerHome">
        
        <div class="texcontainer  p-5 m-5">
            <div> <h2>Vue</h2></div>
           <div> <h3>Ejercicos Basicos</h3></div>
            
           
        </div>
      


    </main>
</template>

<script>
    export default {

        name:"HomeComponent"
        
    }
</script>


<style  scoped>

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.texcontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    
  }

  
.containerHome {
  background-image: url(https://wallpapercave.com/wp/wp6878944.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
 
 
}



    


</style>