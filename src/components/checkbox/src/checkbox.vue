<template>
  <label class="mt-checkbox__wrapper">
    <span class="mt-checkbox"
      :class="[
        type ? 'mt-checkbox--' + type : '',
        {'is-disabled': disabled},
        {'is-checked': isChecked}
      ]">
      <span class="mt-checkbox__inner"></span>
      <input
        type="checkbox"
        :name="name"
        :disabled="disabled"
        v-model="model"
        @change="handleChange"
        class="mt-checkbox__input">
    </span>
    <span class="mt-checkbox__label"
      v-if="$slots.default || label">
      <slot/>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MtCheckbox',
  data () {
    return {
      selfModel: false
    }
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    type: String
  },

  computed: {
    model: {
      get () {
        return this.value !== undefined ? this.value : this.selfModel
      },
      set (val) {
        this.$emit('input', val)
        this.selfModel = val
      }
    },

    isChecked () {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1
      }
      return false
    }
  },

  methods: {
    handleChange (ev) {
      const value = ev.target.checked
      this.$emit('change', value, ev)
    }
  }
}
</script>
