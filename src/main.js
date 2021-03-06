/*eslint-disable*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let db = {}

Vue.prototype.$db = db;
Vue.prototype.$composePromise =  (...fns) => fns.reduce((f, g) => x => g(x).then(f)) 
Vue.prototype.$compose = (...fns) => x => fns.reduce((y, f) => f(y) , x);
Vue.prototype.$composeFirestore = (...fns) => fns.reduce((f, g) => x => {
  const gx = g(x);
  console.log(x)
  if(gx?.get){
    return gx.get().then(f)
  }else if(gx?.then){
    return gx.then(f)
  }else{
    return f(gx, y);
  }
}) 
console.log("test");
Vue.prototype.$composeFirestore2 =  (...fns) => fns.reduceRight((f, g) => (x, y) => {
  let gxy = g(x, y);
  if(gxy?.get)
  {
    return gxy.get().then(res=>{
      return f(res,  gxy)
    })
  }else if(gxy?.then){
    return gxy.then(res=>f(res,  y))
  }else{
    return f(gxy)
  }
}) 

// eslint-ignore  
// eslint-disable-next-line no-used-vars
router.beforeEach(async (to, from, next) => {
  if($('#nav-toggle')[0]?.checked){
    $('.hamburger-box').click()
  }
  console.log(to, from)
  if( true && to.fullPath != from.fullPath){
    $('.loading-animation').removeClass('d-none')
    $('.next-btn__bg').css({right:"-50%",transitionDelay: '0.2s', transition: 'all 0.8s linear'})
    $('.prev-btn__bg').css({left:"-50%",transitionDelay: '0.2s', transition: 'all 0.8s linear'})
      setTimeout(() => {
        $('.loading-animation').addClass('d-none')
        next()
    }, 0)
  }else{
    next()
  }

})

new Vue({
  data() {
    return {
      db: db
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')



