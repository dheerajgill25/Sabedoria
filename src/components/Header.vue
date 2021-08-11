<template>
  <div>
    <header>
      <div class="container-fluid">
        <div class="header">
          <div class="logo">
            <a href="/">
              <img src="/public/assets/logo_icon.svg" alt="" />
              <span>Sabedoria</span>
            </a>
          </div>
          <div class="hamburger">
            <img
              src="/public/assets/hamburger.svg"
              @click="showHeader"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>

    <section v-if="isShowHeader" class="mobile_menu">
      <div class="container-fluid">
        <div class="mobile_menu_inner">
          <div class="menu_left" data-aos="fade-left">
            <ul class="menus">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="navigateToPage('service')"
                  >SERVICES</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="navigateToPage('about')"
                  >ABOUT US</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="navigateToPage('work')"
                  >WORK</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="navigateToPage('contact')"
                  >CONTACT US</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="showModal">Query</a>
              </li>
              <li class="o_link"><a href="#">Blog</a></li>
              <li class="o_link"><a href="#">Events</a></li>
            </ul>
            <div class="social_icon">
              <ul>
                <li>
                  <a href="#"><img src="/public/assets/f.svg" alt="" /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/public/assets/linked_in-m.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/public/assets/instagram.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/public/assets/twitter-m.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/public/assets/behance.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/public/assets/dribbble.svg" alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu_right" data-aos="fade-right">
            <img src="/public/assets/Saly-1 1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <div v-if="isShowModal">
      <FormModal v-bind:isShowModal="isShowModal" @onClose="closeModal"  />
    </div>
  </div>
</template>

<script>
import FormModal from "./Modal.vue";
export default {
  name: "Header",
  components: {
    FormModal,
  },
  props: true,
  data: function () {
    return {
      isShowHeader: false,
      isShowModal: false,
    };
  },
  methods: {
    showHeader: function () {
      if (!this.isShowHeader) {
        this.isShowHeader = true;
        document.body.classList.add("menu_active");
      } else {
        this.isShowHeader = false;
        document.body.classList.remove("menu_active");
      }
    },
    navigateToPage: function (pageName) {
      this.$router.push({ name: pageName });
      this.isShowHeader = false;
      document.body.classList.remove("menu_active");
    },
    showModal: function () {
      this.isShowModal = true;
    }, 
    closeModal:function(){
      this.isShowModal=false;
      this.isShowHeader=false;
      document.body.classList.remove("menu_active");
    }
  },
};
</script>
