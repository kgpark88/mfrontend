
import 'babel-polyfill'
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import VueMoment from 'vue-moment'

import ECharts from 'vue-echarts'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'vuetify/dist/vuetify.min.css' 

import App from '@/App.vue'
import '@/App.css'

import router from "@/router"

Vue.config.productionTip = false

Vue.component('v-chart', ECharts)
Vue.use(VueSweetalert2)
Vue.use(VueMoment)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
