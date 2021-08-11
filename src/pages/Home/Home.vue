<template>
  <div>
    <section class="banner">
      <div class="container">
        <div class="banner_inner" data-aos="fade-up">
          <h1>
            <strong>Next</strong> level
            <a href="#" class="btn btn-primary">GET A QUOTE</a>engineering &
            design
          </h1>
          <p>
            Welcome to Sabedoria, a technology-based solution and skills haven
            for tech enthusiasts and professionals across the globe.
          </p>
        </div>
      </div>
    </section>

    <section class="video_wrap">
      <div class="container">
        <div class="video_box" data-aos="zoom-in">
          <div class="play_icon">
            <img src="/public/assets/play.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="services_wrap">
      <div class="container">
        <div class="heading" data-aos="slide-down">
          <span>Services</span>
          <h2>We Love What we do. We don’t do what we’re not good at.</h2>
        </div>
        <div class="services_inner">
          <div class="services_box" data-aos="slide-left">
            <div class="services_thumb">
              <img src="/public/assets/dev.png" alt="" />
            </div>
            <div class="services_content">
              <h3>Design</h3>
              <ul>
                <li>UI & UX</li>
                <li>Brand Identity</li>
                <li>Mobile APPs</li>
                <li>3D Designs</li>
                <li>Packaging</li>
                <li>Motion Designs</li>
              </ul>
              <a href="#" class="btn-link">Explore</a>
            </div>
          </div>
          <div class="services_box" data-aos="slide-right">
            <div class="services_thumb">
              <img src="/public/assets/design.png" alt="" />
            </div>
            <div class="services_content">
              <h3>Development</h3>
              <ul>
                <li>UI & UX</li>
                <li>Brand Identity</li>
                <li>Mobile APPs</li>
                <li>3D Designs</li>
                <li>Packaging</li>
                <li>Motion Designs</li>
              </ul>
              <a href="#" class="btn-link">Explore</a>
            </div>
          </div>
          <div class="services_box" data-aos="slide-left">
            <div class="services_thumb">
              <img src="/public/assets/Marketing.png" alt="" />
            </div>
            <div class="services_content">
              <h3>Marketing</h3>
              <ul>
                <li>UI & UX</li>
                <li>Brand Identity</li>
                <li>Mobile APPs</li>
                <li>3D Designs</li>
                <li>Packaging</li>
                <li>Motion Designs</li>
              </ul>
              <a href="#" class="btn-link">Explore</a>
            </div>
          </div>
          <div class="services_box" data-aos="slide-right">
            <div class="services_thumb">
              <img src="/public/assets/Training.png" alt="" />
            </div>
            <div class="services_content">
              <h3>Training</h3>
              <ul>
                <li>UI & UX</li>
                <li>Brand Identity</li>
                <li>Mobile APPs</li>
                <li>3D Designs</li>
                <li>Packaging</li>
                <li>Motion Designs</li>
              </ul>
              <a href="#" class="btn-link">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio_wrap">
      <div class="container">
        <div class="portfolio_inner">
          <div class="heading" data-aos="zoom-out">
            <span>Creative Portfolio</span>
            <h2>Go from ideation to design and done</h2>
            <p>
              We help business to re-evaluate their digital potential and
              achieve greater results. Corporate level companies trust us to
              refresh and develop their ideas.
            </p>
          </div>
          <div class="portfolio_right" >
            <img src="/public/assets/Plant.png" alt="" data-aos="fade-up"/>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio_wrap_box " :style="{ position: 'relative;' }" data-aos="fade-left">
      <div class="container">
        <div class="work_details slider">
          <VueSlickCarousel
            v-bind="slickOptions"
            v-if="sliderData && sliderData.length > 0"
          >
            <div
              v-for="(item, index) in sliderData"
              v-bind:key="index"
              class="portfolio_box"
            >
              <div
                class="portfolio_image"
                :style="{ backgroundImage: `url(${item.image})` }"
              ></div>
              <div class="portfolio_details">
                <h4>{{ item.title }}</h4>
                <span>{{ item.subTitle }}</span>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="hand_image">
        <img src="/public/assets/hand_image.svg" alt="" />
      </div>
    </section>

    <section class="team_section" data-aos="fade-right">
      <div class="container">
      <div class="team_wrap">
        <div class="team_heading">
          <ul>
            <li>
              <h3>You get results</h3>
            </li>
            <li class="divider"></li>
            <li>
              <h3>We get Satisfaction</h3>
            </li>
          </ul>
        </div>
        <div class="team_box">
          <div class="team_inner">
             <VueSlickCarousel
            v-bind="slickOptions"
            v-if="teamsData && teamsData.length > 0"
          >
            <div class="team_content"  v-for="(item, index) in teamsData"
              v-bind:key="index">
              <div  :style="{ backgroundImage: `url(${item.image})` }" class="person_image" />
              <h5>{{item.name}}</h5>
              <span>{{item.position}}</span>
            </div>
             </VueSlickCarousel>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section class="about_wrap" data-aos="fade-in">
      <div class="container">
        <div class="about_inner">
          <h2>Enough about us, what about you</h2>
          <div class="contact_box">
            <h5>
              Drop us a line, and we’ll get in touch. <br />We’ll see if we’re a
              match and how we can help each other.
            </h5>
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Home",
  components: {
    Footer,
    Header,
    VueSlickCarousel,
  },
  data: function () {
    return {
      isShowModal: false,
      slickOptions: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 5e3,
        arrows: true,
        dots: true,
      },
      sliderData: [],
      teamsData:[]
    };
  },
  methods: {
    showModal: function () {
      this.isShowModal = true;
    },
  },
  mounted() {
    this.sliderData = [
      {
        title: "Fintech App",
        subTitle: "Idey24Pay",
        image: "/public/assets/port-1.svg",
      },
      {
        title: "Fintech App",
        subTitle: "Idey24Pay",
        image: "/public/assets/port-1.svg",
      },
      {
        title: "Fintech App",
        subTitle: "Idey24Pay",
        image: "/public/assets/port-1.svg",
      },
      {
        title: "Fintech App",
        subTitle: "Idey24Pay",
        image: "/public/assets/port-1.svg",
      },
      {
        title: "Fintech App",
        subTitle: "Idey24Pay",
        image: "/public/assets/port-1.svg",
      },
      {
        title: "Fintech App",
        subTitle: "Idey24Pay",
        image: "/public/assets/port-1.svg",
      },
      {
        title: "Fintech App",
        subTitle: "Idey24Pay",
        image: "/public/assets/port-1.svg",
      },
      {
        title: "Fintech App",
        subTitle: "Idey24Pay",
        image: "/public/assets/port-1.svg",
      },
    ];
    this.teamsData =[
      {
         name: "David Roger",
        position: "iOS Developer",
        image: "/public/assets/gallery-1.png",
      },
      {
         name: "David Roger",
        position: "iOS Developer",
        image: "/public/assets/gallery-1.png",
      },
      {
         name: "David Roger",
        position: "iOS Developer",
        image: "/public/assets/gallery-1.png",
      },
      {
         name: "David Roger",
        position: "iOS Developer",
        image: "/public/assets/gallery-1.png",
      },
      {
         name: "David Roger",
        position: "iOS Developer",
        image: "/public/assets/gallery-1.png",
      },
      {
         name: "David Roger",
        position: "iOS Developer",
        image: "/public/assets/gallery-1.png",
      },
      {
         name: "David Roger",
        position: "iOS Developer",
        image: "/public/assets/gallery-1.png",
      },
      {
         name: "David Roger",
        position: "iOS Developer",
        image: "/public/assets/gallery-1.png",
      },
    ]
  },
};
</script>
