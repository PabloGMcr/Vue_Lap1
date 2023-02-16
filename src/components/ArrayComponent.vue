<template>
    <div>

        <h2 class="pt-5">Ejercicios Array con v-for & v-if</h2>
        <h2>{{mensaje}}</h2>


        
            <div class="p-2">
                <ul class="" v-for="item of Frutas" v-bind:key="item.nombre">
                    {{ item.nombre }} = {{ item.cantida }}
               </ul>
            </div>

            <hr>

            <span></span>

            
                

    </div>
</template>

<script>
    export default {

        name:"ArrayComponent",

        props: {
            mensaje: String
        } ,

        data(){
            return{
                Frutas:[
                    {nombre:"Manzana", cantida:"10"},
                    {nombre:"Mango", cantida:"5"},
                    {nombre:"Uva", cantida:"15"},
                    {nombre:"Pera", cantida:"0"},
                ]
            }


        },
        
    }
</script>

<style lang="scss" scoped>

</style>

<!-- Notas

    props: {
    mensaje: String
} , 

-->