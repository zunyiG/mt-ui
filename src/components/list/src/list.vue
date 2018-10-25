 <template>
  <div class="mt-list">
    <div class="mt-list__header">
      <slot name="header"></slot>
    </div>
    <div class="mt-list__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MtList',

  props: {
    type: String
  }
}
</script>
