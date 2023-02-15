import{createWebHistory, createRouter} from "vue-router"
import FormComponent from '@/components/FormComponent.vue'
import MainComponent from '@/components/MainComponent.vue'
import ArrayComponent from '@/components/ArrayComponent.vue'
import ApiComponent from '@/components/ApiComponent.vue'



const routes = [
{
    path:"/form",
    name:"FormComponent",
    component:FormComponent
},

{
    path:"/",
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


]

const router=createRouter({

    history: createWebHistory(),
    routes,

}

   

);

export default router;