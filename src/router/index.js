import{createWebHistory, createRouter} from "vue-router"
import FormComponent from '@/components/FormComponent.vue'
import MainComponent from '@/components/MainComponent.vue'
import ArrayComponent from '@/components/ArrayComponent.vue'
import ApiComponent from '@/components/ApiComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'



const routes = [
{
    path:"/form",
    name:"FormComponent",
    component:FormComponent
},

{
    path:"/Main",
    name:"MainComponent",
    component:MainComponent
},

{
    path:"/Array",
    name:"ArrayComponent",
    component: ArrayComponent
},

{
    path:"/Api",
    name:"ApiComponent",
    component: ApiComponent
},

{
    path:"/",
    name:"HomeComponent",
    component: HomeComponent
},



]

const router=createRouter({

    history: createWebHistory(),
    routes,

}

   

);

export default router;