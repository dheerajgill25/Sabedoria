<template>
  <div>
    <div
      class="custome-modal"
      id="custome-modal"
      v-if="this.isShowModal"
      v-bind:style="this.isShowModal ? 'display: block;' : 'display: none;'"
    >
      <div class="modal-content">
        <div class="modal-header">
          <div class="logo">
            <img src="/public/assets/logo.svg" alt="" />
          </div>
          <a href="javascript:void(0)" @click="closeModal" class="modal-close">
            <img src="/public/assets/close-white.svg" />
          </a>
        </div>
        <div class="modal-body">
          <div class="form-controle" data-aos="fade-up" v-if="step == 1">
            <label>Name</label>
            <input
              type="email"
              class="controle"
              placeholder="Your name"
               @keyup="handleKeyUpFunction"
            />
          </div>
          <div class="form-controle" data-aos="fade-up" v-if="step == 2">
            <label>E-mail</label>
            <input
              type="email"
              class="controle"
              placeholder="Your e-mail"
               @keyup="handleKeyUpFunction"
            />
          </div>
          <div class="form-controle" data-aos="fade-up" v-if="step == 3">
            <div class="upload">Upload your brief,if you have any</div>
          </div>
          <div class="form-controle" data-aos="fade-up" v-if="step == 4">
            <label>BUDGET</label>
            <input
              type="email"
              class="controle"
              placeholder="Your budget"
               @keyup="handleKeyUpFunction"
            />
          </div>
          <div class="form-controle" data-aos="fade-up"  v-if="step == 5">
            <label>DEADLINE</label>
            <input
              type="email"
              class="controle"
              placeholder="Your deadline"
               @keyup="handleKeyUpFunction"
            />
          </div>
          <div class="form-controle" data-aos="fade-up" v-if="step == 6">
            <label>Message or project’s description</label>
            <input
              type="email"
              class="controle"
              placeholder="Message or project’s description"
              @keyup="handleKeyUpFunction"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button @click="handleStep" type="button" class="continue">
            Continue <img src="/public/assets/right-arrow-icon.svg" />
          </button>
          <div class="progress-info">
            <a href="javascript:void(0)" @click="handlePrevButton" class="left-arrow"
              ><img src="/public/assets/left-arrow-icon.svg"
            /></a>
            <a href="javascript:void(0)" @click="handleStep" class="right-arrow"
              ><img src="/public/assets/right-arrow-icon.svg"
            /></a>
            <div class="step">{{ step }}/6</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormModal",
  components: {},
  data: function () {
    return {
      isShowModal: false,
      step: 1,
      form:{
        email:'',
        name:'',
        budget:'',
        deadline:'',

      }
    };
  },
  props: ["isShowModal"],
  mounted() {
    this.isShowModal = this.$emit().isShowModal;
    if (this.isShowModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  },
  methods: {
    closeModal: function () {
      this.isShowModal = false;
      this.$emit("onClose");
      document.body.style.overflowY = "auto";
    },
    handleStep: function () {
      if (this.step >= 6) {
        return;
      } else {
        this.step = this.step + 1;
      }
    },
    handlePrevButton:function(){
       if (this.step <= 1) {
        return;
      } else {
        this.step = this.step - 1;
      }
    },
    handleKeyUpFunction:function(event){
      if(event.target.value){
          document.getElementsByClassName("continue")[0].classList.add("active");
      }else{
         document.getElementsByClassName("continue")[0].classList.remove("active");
      }
    }
  },
};
</script>
