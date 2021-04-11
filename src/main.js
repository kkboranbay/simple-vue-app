import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import Health from './components/Health.vue'
import Users from './components/Users.vue'
import About from './components/About.vue'
import Version from './components/Version.vue'
import Profile from './components/Profile.vue'

const routes = [
  { path: '/students', component: Users },
  { path: '/health', component: Health },
  { path: '/about', component: About },
  { path: '/version', component: Version },
  { path: '/profile', component: Profile },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
