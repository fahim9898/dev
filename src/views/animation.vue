<template>
  <div>
    <div class="profile__page">
      
      <div class="page__cnt">
        <section class="project">
          <div class="portfolio">
            <div class="portfolio__header">
              <span class="highlight" id="pos-1"> Animations</span>
            </div>
            <div class="portfolio__sub-header">
             I break things & I make things.
             </div>
          </div>
        </section>

        <section class="project">
          <ul class="project__header">
            <li>
              <a href="https://codepen.io/fahim-sanghariyat" target="_blank" style="color: white;">
              <div class="tilt-btn info">
                <div class="tilt-btn__cnt"> <i class="mr-2 fa fa-globe-asia"></i> Visit The Website</div>
                <span></span>
              </div>
              </a>
            </li>
          </ul>
          <div class="porfolio__project pt-2">
            <div class="porolio__porject__cnt">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="BaRBZVb" data-user="fahim-sanghariyat" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
                    <span>See the Pen <a href="https://codepen.io/fahim-sanghariyat/pen/BaRBZVb">
                    Unfold Loading Animation</a> by Fahim Sanghariyat (<a href="https://codepen.io/fahim-sanghariyat">@fahim-sanghariyat</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                  </p>
                </div>
                <div class="col-md-6 mb-4">
                  <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="NWrMEQZ" data-user="fahim-sanghariyat" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
                    <span>See the Pen <a href="https://codepen.io/fahim-sanghariyat/pen/NWrMEQZ">
                    shoting star</a> by Fahim Sanghariyat (<a href="https://codepen.io/fahim-sanghariyat">@fahim-sanghariyat</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                  </p>
                </div>
                <div class="col-md-6 mb-4">
                  <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="VwbZBrr" data-user="fahim-sanghariyat" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
                    <span>See the Pen <a href="https://codepen.io/fahim-sanghariyat/pen/VwbZBrr">
                    Spin Loader with Gooey Effect( Bubble )</a> by Fahim Sanghariyat (<a href="https://codepen.io/fahim-sanghariyat">@fahim-sanghariyat</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                  </p>
                </div>
                <div class="col-md-6 mb-4">
                  <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="VwpEJXr" data-user="fahim-sanghariyat" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
                    <span>See the Pen <a href="https://codepen.io/fahim-sanghariyat/pen/VwpEJXr">
                    CSS Goey footer</a> by Fahim Sanghariyat (<a href="https://codepen.io/fahim-sanghariyat">@fahim-sanghariyat</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                  </p>
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
      <div class="prev-btn__bg">
        <router-link to="/portfolio/ui"></router-link>
        <p>UI</p>
      </div>
      <div class="next-btn__bg">
        <router-link to="/contact"></router-link>
        <p>contact</p>
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
    !function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://cpwebassets.codepen.io/assets/packs/",r(r.s=684)}({684:function(e,t,r){"use strict";r.r(t);var n={_HTML_TYPES:["html","xml","haml","markdown","slim","pug","application/x-slim"],_CSS_TYPES:["css","less","scss","sass","stylus","postcss","text/css","text/x-sass","text/x-scss","text/x-less","text/x-styl"],_JS_TYPES:["js","javascript","coffeescript","livescript","typescript","babel","text/javascript","text/x-coffeescript","text/x-livescript","text/typescript"],_CUSTOM_EDITOR_TYPES:{vue:"js",flutter:"js"},cmModeToType:function(e){var t=this._getSafeInputMode(e);return this._getType(t)},_getSafeInputMode:function(e){return("string"==typeof e?e:e.name).toLowerCase()},syntaxToType:function(e){return this._getType(e)},_getType:function(e){return-1!==this._HTML_TYPES.indexOf(e)?"html":-1!==this._CSS_TYPES.indexOf(e)?"css":-1!==this._JS_TYPES.indexOf(e)?"js":this._CUSTOM_EDITOR_TYPES[e]?this._CUSTOM_EDITOR_TYPES[e]:"unknown"}},i=function e(t){"loading"===document.readyState?setTimeout((function(){e(t)}),9):t()},a=["title","description","tags","html_classes","head","stylesheets","scripts"],o=function(e){for(var t={},r=e.attributes,n=0,i=r.length;n<i;n++){var a=r[n].name;0===a.indexOf("data-")&&(t[a.replace("data-","")]=r[n].value)}return t=l(t),u(t)?(t.user=s(t,e),t):null},s=function(e,t){if("string"==typeof e.user)return e.user;for(var r=0,n=t.children.length;r<n;r++){var i=(t.children[r].href||"").match(/codepen\.(io|dev)\/(\w+)\/pen\//i);if(i)return i[2]}return"anon"},u=function(e){return"prefill"in e||e["slug-hash"]},l=function(e){return e.href&&(e["slug-hash"]=e.href),e.type&&(e["default-tab"]=e.type),e.safe&&("true"===e.safe?e.animations="run":e.animations="stop-after-5"),e},c=function(e){var t=p(e),r=e.preview&&"true"===e.preview?"embed/preview":"embed";if("prefill"in e)return[t,r,"prefill"].join("/");var n=f(e);return[t,e.user?e.user:"anon",r,e["slug-hash"]+"?"+n].join("/").replace(/\/\//g,"//")},p=function(e){return e.host?d(e.host):"https://codepen.io"},d=function(e){return e.match(/^\/\//)||!e.match(/https?:/)?document.location.protocol+"//"+e:e},f=function(e){var t="";for(var r in e)"prefill"!==r&&(""!==t&&(t+="&"),t+=r+"="+encodeURIComponent(e[r]));return t},m=function(e){return e.height?e.height:300},h=function(e,t){var r,n=document.createDocumentFragment();n.appendChild(y(e)),"prefill"in e&&(r=v(e,t),n.appendChild(r)),g(t,n),r&&r.submit()},_=function(e,t){var r=document.createElement(e);for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.setAttribute(n,t[n]);return r},v=function(e,t){var r=_("form",{class:"cp_embed_form",style:"display: none;",method:"post",action:c(e),target:e.name});for(var i in e.data=function(e){if(e.hasAttribute("data-prefill")){var t={},r=e.getAttribute("data-prefill");for(var i in r=JSON.parse(decodeURI(r)||"{}"))a.indexOf(i)>-1&&(t[i]=r[i]);for(var o=e.querySelectorAll("[data-lang]"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-lang");u.getAttribute("data-options-autoprefixer")&&(t.css_prefix="autoprefixer");var c=n.syntaxToType(l);t[c]=u.innerText,l!==c&&(t[c+"_pre_processor"]=l);var p=u.getAttribute("data-lang-version");p&&(t[c+"_version"]=p)}return JSON.stringify(t)}}(t),e)"prefill"!==i&&r.appendChild(_("input",{type:"hidden",name:i,value:e[i]}));return r},y=function(e){var t,r=c(e);t=e["pen-title"]?e["pen-title"]:"CodePen Embed";var n={allowfullscreen:"true",allowpaymentrequest:"true",allowTransparency:"true",class:"cp_embed_iframe "+(e.class?e.class:""),frameborder:"0",height:m(e),width:"100%",name:e.name||"CodePen Embed",scrolling:"no",src:r,style:"width: 100%; overflow:hidden; display:block;",title:t};return"prefill"in e==!1&&(n.loading="lazy"),e["slug-hash"]&&(n.id="cp_embed_"+e["slug-hash"].replace("/","_")),_("iframe",n)},g=function(e,t){if(e.parentNode){var r=document.createElement("div");return r.className="cp_embed_wrapper",r.appendChild(t),e.parentNode.replaceChild(r,e),r}return e.appendChild(t),e};var b=1;function x(e){e="string"==typeof e?e:".codepen";for(var t=document.querySelectorAll(e),r=0,n=t.length;r<n;r++){var i=t[r],a=o(i);a&&(a.name="cp_embed_"+b++,h(a,i))}"function"==typeof __CodePenIFrameAddedToPage&&__CodePenIFrameAddedToPage()}x.readme="2019-01-18 - added version number back in.",window.__cp_eijs_version="3.1.0",window.__cp_domReady=i,window.__CPEmbed=x,i(x)}});
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



