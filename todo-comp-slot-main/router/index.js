import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";
import { createRouter , createWebHistory } from "vue-router";
import TodoMenager from "@/components/TodoMenager.vue";
import TodoDetail from "@/components/TodoDetail.vue";
//set history when forward , goback
const history = createWebHistory()

//router
const routes = [
    {
        path : '/login' , name : 'Login' , component : Login
    },
    {
        path : '/About' , name : 'About' , component : About
    },
    {
        path : '/' , name : 'Home' , component : TodoMenager
    },
    {
        path : '/:notfoundpath(.*)' , name : 'NotFound' , component : NotFound
    },
    {
        path : '/todo-detail/:todoId' , name : 'TodoDetail' , component : TodoDetail
    },
]

const router = createRouter({ history , routes , linkActiveClass : 'text-purple-600' , linkExactActiveClass : 'text-red-600'})
// linkActiveClass : 'text-purple-600' , linkExactActiveClass : 'text-red-600'} บอกว่าถ้าลิ้งไหนที่ทำงานอยู่ในเปลี่ยนสี
export default router