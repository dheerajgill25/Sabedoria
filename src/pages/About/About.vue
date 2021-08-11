<template>
  <div>
    <section class="sub_banner about_banner">
      <div class="container">
        <div class="banner_inner">
          <div class="banner_left" data-aos="fade-left">
            <h3>
              We create websites and brands that are seen and heard.Loud and
              clear
            </h3>
            <p>
              Our design and engineering services are transparent, flexible and
              ccollaborative. Tell us what you need, we’ll get it done. Simple
            </p>
            <div class="btn-group">
              <a href="#" class="btn btn-primary">Designs</a>
            </div>
          </div>
          <div class="banner_right" data-aos="fade-right">
            <img src="/public/assets/about.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="our_values">
      <div class="container">
        <div class="heading" data-aos="fade-up">
          <span>OUR VALUES</span>
          <h2>“What do you expect working with us?”</h2>
        </div>
        <div class="values_inner" data-aos="slide-up">
          <div class="value_box">
            <h2>1</h2>
            <h4>Impactful</h4>
            <p>
              Building a resource of humans, talents, and skills that creates
              more than opportunities but the impact and unlimited solution
              drives us at Sabedoria to be the best.
            </p>
          </div>
          <div class="value_box">
            <h2>2</h2>
            <h4>Innovative</h4>
            <p>
              Trendsetting a solution and skill-based hub in China do not only
              bring to play the unrivalled strength of innovation and execution
              but create a standard that allows great outcomes while offering
              our best to our clients. At Sabedoria, there are no limits.
            </p>
          </div>
          <div class="value_box">
            <h2>3</h2>
            <h4>Dynamic</h4>
            <p>
              We work with precision, freedom, agility, and effective
              communication to achieve our goals.
            </p>
          </div>
          <div class="value_box">
            <h2>4</h2>
            <h4>Bold</h4>
            <p>
              Being empowered to make accurate decisions and goal-oriented
              actions is our key secret to smashing insurmountable limits,
              imagined restrictions and the feeling of impossibility. We create
              success stories beyond the box.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="team_box_wrap">
      <div class="container">
        <div class="heading" data-aos="fade-up">
          <span>TEAM</span>
          <h2>We love adfa adfasdf sfaff sfsfd kalhfd kshalfd</h2>
        </div>
        <div class="team_wrap_inner" data-aos="slide-up">
          <div class="team_box">
            <div
              class="user_thumbnail"
              style="background: url(/public/assets/team-1.png)"
            ></div>
            <div class="user_details">
              <h4>Abisoye Bello</h4>
              <span>Founder & Head of Development</span>
            </div>
          </div>
          <div class="team_box">
            <div
              class="user_thumbnail"
              style="background: url(/public/assets/team-1.png)"
            ></div>
            <div class="user_details">
              <h4>Abisoye Bello</h4>
              <span>Founder & Head of Development</span>
            </div>
          </div>
          <div class="team_box">
            <div
              class="user_thumbnail"
              style="background: url(/public/assets/team-1.png)"
            ></div>
            <div class="user_details">
              <h4>WanGuo Chao</h4>
              <span>Founder & Head of Development</span>
            </div>
          </div>
          <div class="team_box">
            <div
              class="user_thumbnail"
              style="background: url(/public/assets/team-1.png)"
            ></div>
            <div class="user_details">
              <h4>Hetty Wu</h4>
              <span>Founder & Head of Development</span>
            </div>
          </div>
          <div class="team_box">
            <div
              class="user_thumbnail"
              style="background: url(/public/assets/team-1.png)"
            ></div>
            <div class="user_details">
              <h4>Francis Akindipe</h4>
              <span>Founder & Head of Development</span>
            </div>
          </div>
          <div class="team_box">
            <div
              class="user_thumbnail"
              style="background: url(/public/assets/team-1.png)"
            ></div>
            <div class="user_details">
              <h4>Maria Wong</h4>
              <span>Founder & Head of Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery_wrap">
      <div class="container">
        <div class="heading" data-aos="fade-up">
          <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h2>
        </div>
        <div class="gallery_wrap_inner" data-aos="slide-up">
          <ul>
            <li><img src="/public/assets/gallery-1.png" alt="" /></li>
            <li><img src="/public/assets/gallery-2.png" alt="" /></li>
            <li><img src="/public/assets/gallery-3.png" alt="" /></li>
            <li><img src="/public/assets/gallery-4.png" alt="" /></li>
            <li><img src="/public/assets/gallery-5.png" alt="" /></li>
            <li><img src="/public/assets/gallery-3.png" alt="" /></li>
          </ul>
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
export default {
  name: "About",
  components: {
    Footer,
    Header,
  },
  data: function () {
    return {};
  },
};
</script>
