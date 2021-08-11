<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="footer_box">
          <h4>SOLUTIONS</h4>
          <ul>
            <li><a href="#">FINTECH WALLET</a></li>
            <li><a href="#">SOCIAL MEDIA APP </a></li>
            <li><a href="#">WECHAT APPLET</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">FAQ / Contact</a></li>
          </ul>
        </div>
        <div class="footer_box">
          <h4>SERVICES</h4>
          <ul>
              <router-link tag="li" to="/about" active-class="is-active" exact>
              <a>ABOUT</a>
            </router-link>
            <router-link tag="li" to="/" active-class="is-active" exact>
              <a>HOME</a>
            </router-link>
            <router-link tag="li" to="/" active-class="is-active" exact>
              <a>SERVICES</a>
            </router-link>
            <router-link tag="li" to="/" active-class="is-active" exact>
              <a>CAREER</a>
            </router-link>
            <router-link tag="li" to="/" active-class="is-active" exact>
              <a>INTERSHIP</a>
            </router-link>
            <router-link tag="li" to="/" active-class="is-active" exact>
              <a>UI & UX TRAINING</a>
            </router-link>  
            <router-link tag="li" to="/" active-class="is-active" exact>
              <a>BLOG</a>
            </router-link>

          </ul>
        </div>
        <div class="footer_box">
          <h4>OFFICE</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="footer_box">
          <ul class="social_icon">
            <li>
              <a href="#"><img src="/public/assets/fb.svg" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="/public/assets/twitter.svg" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="/public/assets/linkdin.svg" alt="" /></a>
            </li>
          </ul>
          <h4>Sabedoria</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div class="news_letter_box">
            <input type="text" class="form-control" />
            <a href="#" class="btn btn-border">SUBSCRIBE</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="container-fluid">
        <div class="footer_content">
          <span>Copyright 2016 @sabedoria.team</span>
          <a href="#">Back To Top </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},

};
</script>
