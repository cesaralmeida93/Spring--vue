import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8082'

axios.interceptors.request.use(config => {
  if(store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
})

axios.interceptors.response.use(res => {
    return res
  }, error => {
    if(error.response.status === 403) {
      alert('Não autorizado!')
      store.commit('logout')
      router.push('/login')
    }
    else if (error.response.status === 401) {
      store.commit('logout')
      router.push('/login')
    }
    throw error
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
