import Vue from 'vue'
import loadingVue from './loading.vue'
import merge from '../../../util/merge'

const LoadingConstructor = Vue.extend(loadingVue)

const defaults = {
  text: null,
  fullscreen: true,
  body: false
}

let fullscreenLoading

LoadingConstructor.prototype.close = function () {
  if (this.fullscreen) {
    fullscreenLoading = undefined
  }
  if (this.$el && this.$el.parentNode) {
    this.$el.parentNode.removeChild(this.$el)
  }
  this.visable = false
  setTimeout(() => {
    this.$destroy()
  }, 300)
}

const Loading = (options = {}) => {
  if (fullscreenLoading) {
    return fullscreenLoading
  }

  options = merge({}, defaults, options)
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target)
  }
  options.target = options.target || document.body
  // if (options.target !== document.body) {
  //   options.fullscreen = false
  // } else {
  //   options.body = true
  // }
  let parent = options.body ? document.body : options.target
  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  })
  parent.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visable = true
    if (options.delay) {
      setTimeout(() => {
        instance.close()
      }, options.delay)
    }
  })
  if (options.fullscreen) {
    fullscreenLoading = instance
  }
  return instance
}

export default Loading
