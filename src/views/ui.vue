<template>
  <div>
    <div class="profile__page">
      <div class="prev-btn__bg">
        <router-link to="/portfolio"></router-link>
        <p>portfolio</p>
      </div>
      <div class="next-btn__bg">
        <router-link to="/"></router-link>
        <p>contact</p>
      </div>
      <div class="page__cnt">
        <section>
          <div class="portfolio">
            <div class="portfolio__header">
              <span class="highlight" id="pos-1"> User Interface</span>
            </div>
            <div class="portfolio__sub-header">
             User Interface(UI) is the main part of a website. From UI you can target specific messages you want to share, target group of users, etc.  
             </div>
          </div>
        </section>

        <section class="project">
          <ul class="project__header">
            <li>
             <a href="#" target="_blank" style="color: white;">
              <div class="tilt-btn info">
                <div class="tilt-btn__cnt"> <i class="mr-2 fa fa-globe-asia"></i> Visit The Website</div>
                <span></span>
              </div>
              </a>
              <div></div>
            </li>
            <li>
              <div class="social__media__icon">
                <a href="#" target="_blank">
                  <img
                    src="../assets/img/icons8-github.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
          </ul>

          <div class="porfolio__project pt-2">
            <div class="porolio__porject__cnt">
              <div class="row">
                <div class="project__item col-12 mb-4">
                  <div class="main">
                    <div class="bar">
                      <h1>UI </h1>
                      <i></i>
                    </div>
                    <splide :options="options">
                      <splide-slide>
                        <img
                          class="img-height__single-project"
                          :src="require( `@/views/assets/${'junubi/junubi1'}.png`)"
                        />
                      </splide-slide>
                    </splide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="portfolio__footer">
        <p>
          Let’s Go <br />
          Contact
          <a class="highlight" href="#"> sanghariyatfahim99@gmail.com </a>
        </p>
      </section>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import content from './content';
export default {
  components: {
    Splide,
    SplideSlide,
  },
  methods: {
    getProductName(id){
      let project = content.projects.filter(p=>p.id==id)[0] || {};
      return project?.title || ''
    }
  },
  mounted() {
    console.log("Route Updated");
    $('.content').hover(function (){
        $(this).prev().addClass('active');
      },
      function (){
        $(this).prev().removeClass('active');
      }
    )
  },
  data() {
    return {
      project_id: 1,
      project: null,
      projects: [],
      options: {
        rewind: true,
        width: 800,
        perPage: 1,
        gap: "1rem",
      },
    };
  },
};
</script>

