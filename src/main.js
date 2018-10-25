import Vue from 'vue'
import App from './App.vue'

import MtButton from './components/button'
import MtCheckbox from './components/checkbox'
import MtLoading from './components/loading'
import MtList from './components/list'
import MtListItem from './components/list-item'
import MtWhiteSpace from './components/white-space'
import MtWingBlank from './components/wing-blank'

Vue.config.productionTip = false

Vue.use(MtButton)
Vue.use(MtCheckbox)
Vue.use(MtLoading)
Vue.use(MtList)
Vue.use(MtListItem)
Vue.use(MtWhiteSpace)
Vue.use(MtWingBlank)

new Vue({
  render: h => h(App)
}).$mount('#app')
