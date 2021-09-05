<template>
  <div>
    <div class="profile__page">
      <div class="prev-btn__bg">
        <router-link to="/portfolio"></router-link>
        <p>portfolio</p>
      </div>
      <div class="next-btn__bg">
        <router-link to="/contact"></router-link>
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
            </li>
            <li>
              <div class="social__media__icon">
                <a href="https://www.github.com/fahim9898" target="_blank">
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
                  <div class="grid">
                    <div class="grid-sizer"></div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/login1.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/login2.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/al-chat.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/jb1.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/jb2.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/jb3.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/jb4.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/my-reminder.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/Dashboard2.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/login3.png" />
                    </div>
                    <div class="grid-item">
                      <img src="@/views/assets/ui/jb5.png" />
                    </div>
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
    $(document).ready(function (){

      
      var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
      });
      // layout Masonry after each image loads
      $grid.imagesLoaded().progress( function() {
        $grid.masonry();
      }); 
      })

    // var images = wall.container.find('.brick');
    // images.find('img').load(function() {
    //   wall.fitWidth();
    // });

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

<style scoped lang="scss">
  /* ---- grid ---- */
 .project{ 
    position: relative;
    width: 75vw;
    left: 50%;
    transform: translateX(-50%);
}

.grid {
  background: transparent;
}

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- .grid-item ---- */

.grid-sizer,
.grid-item {
  position: relative;
  width: 33.333%;
  @media (max-width: 500px) {
    width: 100%;
  }
}
.grid-item-w2 {
  width: 66.666%;
}

.grid-item {
  float: left;
}

.grid-item img {
  padding: 5px;
  border-radius: 12px;
  display: block;
  width: 100%;
  object-fit: cover;
}

</style>

