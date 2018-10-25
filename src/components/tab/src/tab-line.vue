<template>
  <div class="mt-tab__underline" :style="barStyle()">
  </div>
</template>
<script>
export default {
  name: 'TabLine',

  props: {
    tabs: Array
  },

  inject: ['rootTab'],

  methods: {
    barStyle () {
      let style = {}
      let offset = 0
      let tabWidth = 0
      this.tabs.every((tab, index) => {
        let $el = this.$parent.$refs.tabs[index]
        if (!$el) return false

        if (!tab.active) {
          offset += $el.clientWidth
          return true
        } else {
          tabWidth = $el.clientWidth
          return false
        }
      })
      const transform = `translateX(${offset}px)`
      style.width = tabWidth + 'px'
      style.transform = transform
      return style
    }
  }
}
</script>
