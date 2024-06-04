import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import TodoManager from '../components/TodoManager.vue'
import TodoDetail from '../components/TodoDetail.vue'
import { getItemById } from '../libs/fetchUtils'
//set history object to store path when visiting
const history = createWebHistory()
//give route paths
const routes = [
  { path: '/todo-detail/:todoId', name: 'TodoDetail', component: TodoDetail },
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'AboutUs', component: About },
  //   { path: '/home', name: 'Home', redirect: { name: 'AboutUs' } },
  { path: '/home', name: 'Home', component: TodoManager },
  { path: '/todoManager', name: 'todoManager', component: TodoManager },
  { path: '/:notfoundpath(.*)', name: 'NotFound', component: NotFound },
]
async function validate() {
  await getItemById(`${import.meta.env.VITE_BASE_URL}/users`, user)
}
router.beforeEach((to, from) => {
  validate('guest')
})

const router = createRouter({
  history,
  routes,
  linkActiveClass: 'text-purple-500',
  linkExactActiveClass: 'text-blue-500',
})
export default router
