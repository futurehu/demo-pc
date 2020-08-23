import Vue from 'vue'
import {
  Button,
  Select,
  Row,
  Col,
} from 'element-ui';
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(Button).use(Select).use(Row).use(
  Col)
Vue.config.productionTip = false
import './common/css/index.less'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')