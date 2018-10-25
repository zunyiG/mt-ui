<template>
  <div class="mt-tab__pane"
    v-show="active"
    :id="`pane-${paneName}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MtTabpane',

  componentname: 'MtTabpane',

  props: {
    label: String,
    labelContent: Function,
    name: String,
    disabled: Boolean
  },

  data () {
    return {
      index: null
    }
  },

  computed: {
    active () {
      const active = this.$parent.currentName === (this.name || this.index)
      return active
    },
    paneName () {
      return this.name || this.index
    }
  },

  mounted () {
    this.$parent.addPanes(this)
  },

  destroyed () {
    if (this.$el && this.$el.parentNode) {
      this.$parent.removePanes(this)
    }
  },

  watch: {
    label () {
      this.$parent.$forceUpdate()
    }
  }
}
</script>
