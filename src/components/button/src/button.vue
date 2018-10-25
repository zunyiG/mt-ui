<template>
  <a
    class="mt-button"
    @click="handleClick"
    @dblclick="handleClick"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchCancel"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mouseleave="onMouseLeave"
    :class="[
      type ? 'mt-button--' + type : '',
      buttonSize ? 'mt-button--' + buttonSize: '',
      {
        'mt-button--inline': inline,
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-ghost': ghost,
        'is-round': round,
        'is-circle': circle,
        'is-active': active
      }
    ]"
  >
    <i class="mt-icon-loading" v-if="loading"></i>
    <svg class="mt-icon" aria-hidden="true" v-if="icon && !loading">
      <use :xlink:href="'#mt-icon-' + icon"></use>
    </svg>
    <span v-if="$slots.default"><slot></slot></span>
  </a>
</template>

<script>
export default {
  name: 'MtButton',

  data () {
    return {
      active: false
    }
  },

  inject: {
    mtForm: {
      default: ''
    },
    mtFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    // nativeType: {
    //   type: String,
    //   default: 'button'
    // },
    inline: Boolean,
    loading: Boolean,
    disabled: Boolean,
    ghost: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    _mtFormItemSize () {
      return (this.mtFormItem || {}).mtFormItemSize
    },
    buttonSize () {
      return this.size || this._mtFormItemSize
    },
    buttonDisabled () {
      return this.disabled || (this.mtForm || {}).disabled
    }
  },

  methods: {
    handleClick (evt) {
      document.activeElement.blur() // 解决点击按钮后， 键盘再次呼出的问题
      this.$emit('click', evt)
    },
    triggerEvent (name, isActive, evt) {
      this.active = isActive
    },
    onTouchStart (e) {
      this.triggerEvent('TouchStart', true, e)
    },
    onTouchMove (e) {
      this.triggerEvent('TouchMove', false, e)
    },
    onTouchEnd (e) {
      this.triggerEvent('TouchEnd', false, e)
    },
    onTouchCancel (e) {
      this.triggerEvent('TouchCancel', false, e)
    },
    onMouseDown (e) {
      this.triggerEvent('MouseDown', true, e)
    },
    onMouseUp (e) {
      this.triggerEvent('MouseUp', false, e)
    },
    onMouseLeave (e) {
      this.triggerEvent('MouseLeave', false, e)
    }
  }
}
</script>
