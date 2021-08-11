import Home from './pages/Home/Home.vue';
import About from './pages/About/About.vue';
import Work from './pages/Work/Work.vue';
import Contact from './pages/Contact/Contact.vue';
import Services from './pages/Services/Services.vue'

export default [
    { name: 'home', path: '/', component: Home },
    { name: 'about', path: '/about', component: About },
    { name: 'work', path: '/work', component: Work },
    { name: 'contact', path: '/contact', component: Contact },
    { name: 'service', path: '/service', component: Services },
  ]
  