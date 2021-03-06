import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./plugins/element.js"
import "./assets/css/global.css"
import axios from "axios"

Vue.prototype.$http = axios
// 用户名：admin， 密码：1234456
axios.defaults.baseURL = "http://timemeetyou.com:8889/api/private/v1/"
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
