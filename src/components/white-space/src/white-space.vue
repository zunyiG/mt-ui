<template>
  <div :class="`mt-white-space--${size}`"></div>
</template>
<script>
export default {
  name: 'MtWhiteSpace',

  props: {
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>
