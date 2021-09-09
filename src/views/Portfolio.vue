<template>
  <div>
      
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
            Love to create things <i class="fa fa-heart"></i>
          </div>
          <div class="porolio__porject__cnt">
            <div class="row">
              <div v-for="project in projects" :key="project.id" class="project__item col-md-6 col-12 mb-4">
                  <router-link :to="'/portfolio/'+project.id">
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
        <section class="mt-5">
          <div class="portfolio">
            <div class="portfolio__header">
              <span class="highlight">
                technology stack
              </span>
            </div>
            <div class="portfolio__sub-header">
              My technical background & skills
            </div>
          </div>
          <h3 class="heading mt-5">Everyday Toolkit</h3>
          <div class="logos">
            <img class=" lazyloaded white-bg" alt="JavaScript" src="@/assets/img/logos/nodejs.svg">
            <img class=" lazyloaded" alt="JavaScript" src="@/assets/img/logos/javascript.svg">
            <img class=" lazyloaded" alt="HTML5" src="@/assets/img/logos/html5.svg">
            <img class=" lazyloaded" alt="CSS3" src="@/assets/img/logos/css3.svg">
            <img class=" lazyloaded" alt="Vue" src="@/assets/img/logos/vue.png">
            <img class=" lazyloaded" alt="React" src="@/assets/img/logos/react.svg">
            <img class=" lazyloaded" alt="TypeScript" src="@/assets/img/logos/typescript.svg">
            <img class=" lazyloaded" alt="Sass" src="@/assets/img/logos/sass.svg">
          </div>
          <h3 class="heading mt-5">Supporting Power Pack</h3>
          <div class="logos">
            <img class=" lazyloaded" alt="webpack" src="@/assets/img/logos/webpack.png">
            <img class=" lazyloaded white-bg" alt="git" src="@/assets/img/logos/git.svg">
            <img class=" lazyloaded white-bg" alt="github" src="@/assets/img/logos/github.png">
            <img class=" lazyloaded" alt="bootstrap" src="@/assets/img/logos/bootstrap.svg">
            <img class=" lazyloaded white-bg" alt="jquery" src="@/assets/img/logos/jquery.png">
            <img class=" lazyloaded" alt="eslint" src="@/assets/img/logos/eslint.png">
            <img class=" lazyloaded" alt="Github Action" src="@/assets/img/logos/gh_action.png">
            <img class=" lazyloaded" alt="GraphQL" src="@/assets/img/logos/graphql.png">
            <img class=" lazyloaded" alt="babel" src="@/assets/img/logos/babel.png">
            <img class=" lazyloaded white-bg" alt="Sass" src="@/assets/img/logos/feathers.png">
          </div>
          <h3 class="heading mt-5">Learning In progress</h3>
          <div class="logos">
            <img class=" lazyloaded" alt="redux" src="@/assets/img/logos/redux.png">
            <img class=" lazyloaded" alt="loopback" src="@/assets/img/logos/loopback.png">
            <img class=" lazyloaded" alt="loopback" src="@/assets/img/logos/nest.svg">
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
      <div class="next-btn__bg">
         <router-link to="/contact"></router-link>
        <p>contact</p>
      </div>
      <div class="prev-btn__bg">
        <router-link to="/"></router-link>
        <p>about</p>
      </div>
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

<style lang="scss" scoped>
.logos img {
    height: auto;
    width: 100px;
    margin: 2rem;
}
.heading {
  font-family: "Archivo Black", sans-serif;
}

.white-bg {
  background-color: white;
  padding: 6px;
  transform: scale(1.5);
  border-radius: 4px;
}
</style>
