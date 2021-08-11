<template>
  <div id="app" v-cloak>
       <Header  />
     <router-view></router-view>
    <Footer />
  
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
   
  },
   data: function () {
    return {
      isShowModal: false,
    };
  },
  methods: {
    showModal: function () {
      this.isShowModal=true;
    },
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>