import Vue from 'vue'
import App from './App.vue'
// @ts-ignore
import vuetify from './plugins/vuetify.ts'
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#nav-menu')
