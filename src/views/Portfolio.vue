<template>
  <div>
      <div class="next-btn__bg">
         <router-link to="/"></router-link>
        <p>contact</p>
      </div>
      <div class="prev-btn__bg">
        <router-link to="/"></router-link>
        <p>about</p>
      </div>
      <div class="page__cnt">
        <section>
          <div class="portfolio">
            <div class="portfolio__header">
              <span class="highlight">
                web developer portfolio
              </span>
            </div>
            <div class="portfolio__sub-header">
              From Web Components and UI/UX animations to <span class="highlight"> React.JS, Redux, Vue.JS, and Node.JS. </span> <span class="highlight"></span>  Check out my latest web software development portfolio projects.
            </div>
          </div>
        </section>
        <section class="porfolio__project mt-5">
          <div class="portfolio__project__header mb-4">
            show all projects
          </div>
          <div class="porolio__porject__cnt">
            <div class="row">
              <div v-for="project in projects" :key="project.id" class="project__item col-md-6 col-12 mb-4">
                  <router-link :to="'/project/'+project.id">
                  <div class="main">
                    <div class="bar">
                      <h1>{{project.title}}</h1>
                      <i></i>
                    </div>
                    <img 
                      :src="require( `@/views/assets/${project.images[0]}.png`)">
                    <div class="project__overlay">
                        <div class="project__overlay__cnt">
                            <div v-for="tech in project.tech_info" :key="tech">{{tech}}</div>
                        </div>
                    </div>
                  </div>
                  </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="portfolio__footer">
        <p>
          Let’s Go <br>
          Contact
          <a class="highlight" href="#">
           sanghariyatfahim99@gmail.com
          </a>
        </p>
      </section>
  </div>
</template>

<script>
import content from './content';
export default {
  data(){
    return {
      projects: content.projects
    }
  },
}
</script>
