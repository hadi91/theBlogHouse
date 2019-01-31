import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.directive('colourful',{
  bind(el, binding){
    let colors = ["#E24E42", "#E98000", "#EB6E80", "#008F95"];
    let indexColor = Math.floor(Math.random() * colors.length);
    el.style.borderColor = colors[indexColor];
  }
});

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
