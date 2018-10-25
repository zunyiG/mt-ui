<template>
  <div :class="`mt-wing-blank--${size}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MtWingBlank',

  props: {
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>
