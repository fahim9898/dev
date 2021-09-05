<template>
  <div>
    <div class="profile__page">
      <div class="prev-btn__bg">
        <router-link to="/portfolio"></router-link>
        <p>portfolio</p>
      </div>
      <div class="page__cnt">
        <section>
          <div class="portfolio">
            <div class="portfolio__header">
              <span class="highlight" id="pos-1"> Get in touch</span>
            </div>
            <div class="portfolio__sub-header">
             If you wanna get in touch, talk to me about a project collaboration or just say hi,
            fill up the awesome form below or send an email to 
            sanghariyatfahim99@gmail.com
            and ~let's talk.
             </div>
          </div>
        </section>
            <div class="portfolio__sub-header mt-5" v-if="messageSend">
             Thank you <i class="fa fa-heart"></i>, I will respond as soon as possible
             </div>
        <section class="mt-5">
          <form class="form" @submit.prevent="function(){messageSend = true}">
            
            <div class="input-cnt">
              <label class="icon">
                <i class="fa fa-user"></i>
              </label>
              <input required type="text" placeholder="Enter Your Name">
            </div>
            <div class="input-cnt">
              <label class="icon">
                <i class="fa fa-envelope"></i>
              </label>
              <input required type="emaol" placeholder="Enter Your Email">
            </div>
            <div class="input-cnt">
              <label class="icon">
                <i class="fa fa-sticky-note"></i>
              </label>
              <textarea placeholder="Your Message" cols="30" rows="2"></textarea>
            </div>

            <label for="form-submit" class="tilt-btn info" style="width: fit-content;float: left;">
              <div class="tilt-btn__cnt"> <i class="mr-2 fa fa-paper-plane"></i> Submit Your Message</div>
              <span></span>
            </label>
            <input type="submit" class="d-none" id="form-submit">
            
          </form>
        </section>

        <section class="project mt-5">
          <div class="portfolio__header">
              <span class="highlight" id="pos-1" style="font-size: 25px; color: #e1e1e195"> Let's get social</span>
            </div>
          <div class="contact__icons mt-3" style="position: relative;left: unset; bottom: unset;">
            <div class="items">
              <a href="https://github.com/fahim9898" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <div class="cst-tooltip">Github</div>
            </div>
            <div class="items">
              <a href="https://www.linkedin.com/in/fahim-sanghariyat-37132a17b/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <div class="cst-tooltip">Linked In</div>
            </div>
            <div class="items">
              <a href="https://codepen.io/fahim-sanghariyat" target="_blank">
                <i class="fab fa-codepen"></i>
              </a>
              <div class="cst-tooltip">Codepen</div>
            </div>
            <div class="items nextBtn">
              <router-link to="/portfolio">
                <a href="#">
                  <i class="fas fa-chevron-right"></i>
                </a>
                <div class="cst-tooltip">Portfolio</div>
              </router-link>
            </div>
          </div>
        </section>
      </div>
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
    
  },
  mounted() {

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
      messageSend: false
    };
  },
};
</script>

<style scoped lang="scss">
  .input-cnt {
    position: relative;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    label {
      position: absolute;
      left: 0px;
      color: #e1e1e198;
      top: 5px;
      /* top: 50%;
      transform: translateY(-50%); */
    }
     input, textarea {
       width: 100%;
       background-color: transparent;
       color: #e1e1e198;
       border: 0;
       border-bottom: 1px solid #e1e1e169;
       padding: 5px 30px 5px 30px;
       &:focus{
            outline: none;
        }

     }
  }
</style>

