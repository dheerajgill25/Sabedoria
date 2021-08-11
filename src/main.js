import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
  },
  mode:"hash"
})
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted() {
    AOS.init({
      duration: 3000,
    })
  },
})