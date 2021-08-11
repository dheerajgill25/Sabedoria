<template>
  <div>
    
    <section class="sub_banner contact_banner">
        <div class="container">
            <div class="banner_inner">
                <div class="banner_left" data-aos="fade-left">
                    <h3>Let’s  start something 
                        completely new together</h3>
                    <p>Drop us a line, and we ‘ll get in touch .
                        We’ll see if we’re a match and how we can help each other. </p>
                    <div class="btn-group">
                        <a href="#" class="btn btn-primary">Designs</a>
                    </div>
                </div>
                <div class="banner_right" data-aos="fade-right">
                    <img src="/public/assets/Graphic.svg" alt=""/>
                </div>                
            </div>
        </div>
    </section>

    
    <section class="contact_im_wrap">
        <div class="container">
            <div class="contact_im_inner">
                <div class="contact_im_left" data-aos="slide-left">
                    <img src="/public/assets/left_contact.png" alt=""/>
                </div>
                <div class="contact_im_right" data-aos="slide-right">
                    <h3>We’re looking 
                        forward to 
                        working with you</h3>
                        <ul>
                            <li>
                                <label>NEW BUSINESS </label>
                                <p>business@sabedoria.team</p>
                            </li>
                            <li>
                                <label>Phone Number</label>
                                <p>+8613275027194</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </section>


    <section class="co_map_box">
        <div class="container-fluid" data-aos="fade-up">
            <div class="co_map_inner">
                <h4>Seventh floor at  Huzhou commercial Building inJimei. </h4>
                <ul>
                    <li>
                        <label>Phone Number</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <label>Wechat </label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="map_box_parent">
            <div class="map_box" data-aos="zoom-in"></div>
            <div class="map_box" data-aos="zoom-in"></div>
        </div>
    </section>

    <section class="social_wrap">
        <div class="container">
            <div class="social_inner">
                <h2 data-aos="fade-up">You can find our life and work at </h2>
                <ul  data-aos="slide-down">
                    <li>
                        <a href="#">
                            <div class="icon"></div>
                            <span>faceboook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"> 
                            <div class="icon"></div>
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="icon"></div>
                            <span>Linkedlin</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="icon"></div>
                            <span>Dribble</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="about_wrap">
        <div class="container">
            <div class="about_inner"  data-aos="fade-in">
                <h2>Enough about us,
                    what about you</h2>
                    <div class="contact_box">
                        <h5>Drop us a line, and we’ll get in touch. <br/>We’ll see if we’re a match and how we can help each other.</h5>
                        <a href="#" class="btn btn-primary">Contact us</a>
                    </div>
                    <div class="contact_box">
                        <div class="email_details">
                            <span>Email</span>
                            <h5>business@sabedoria.team</h5>
                        </div>
                        <div class="phone_details">
                            <span>Phone Number</span>
                            <h5>+8613275027194</h5>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";
export default {
  name: "Contact",
  components: {
    Footer,
    Header,
  },
  data: function () {
    return {};
  },
};
</script>
