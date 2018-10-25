 <template>
  <div class="mt-list__item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MtListItem',

  props: {
    type: String
  }
}
</script>
