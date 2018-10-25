import service from './src/index'

export default {
  install (Vue) {
    // Vue.use(directive)
    Vue.prototype.$loading = service
  },
  service
}
