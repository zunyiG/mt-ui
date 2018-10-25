<template>
  <transition name="mt-loading-fade">
    <div
      v-show="visable"
      class="mt-loading-mask"
      :class="{'is-fullscreen': fullscreen}"
    >
      <div class="mt-loading-spinner">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="mt-loading-text">{{text}}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MtLoading',

  data () {
    return {
      text: null,
      fullscreen: true,
      visable: false,
      spinner: null
    }
  },

  methods: {
    setText (text) {
      this.text = text
    }
  }
}
</script>
