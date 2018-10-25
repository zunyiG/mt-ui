<script>
import TabNav from './tab-nav'

export default {
  name: 'MtTab',

  components: {
    TabNav
  },

  props: {
    type: String,
    activeName: String,
    value: {}
  },

  provide () {
    return {
      rootTab: this
    }
  },

  data () {
    return {
      currentName: this.value || this.activeName,
      panes: []
    }
  },

  watch: {
    activeName (value) {
      this.setCurrentName(value)
    },
    value (value) {
      this.setCurrentName(value)
    }
  },

  methods: {
    handleTabClick (tab, tabName, event) {
      if (tab.disabled) return
      this.setCurrentName(tabName)
      this.$emit('tab-click', tab, event)
    },
    setCurrentName (value) {
      this.currentName = value
    },
    addPanes (item) {
      const index = this.$slots.default.indexOf(item.$vnode)
      this.panes.splice(index, 0, item)
    },
    removePanes (item) {
      const panes = this.panes
      const index = panes.indexOf(item)
      if (index > -1) {
        panes.splice(index, 1)
      }
    }
  },

  render (h) {
    let {
      type,
      handleTabClick,
      currentName,
      panes
    } = this

    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        type,
        panes
      },
      ref: 'nav'
    }

    const header = (
      <div class='mt-tab__header'>
        <tab-nav { ...navData }></tab-nav>
      </div>
    )

    const panels = (
      <div class='mt-tab__content'>
        {this.$slots.default}
      </div>
    )

    // type set in class
    return (
      <div class='mt-tab'>
        {[header,
          panels]}
      </div>
    )
  },

  created () {
    if (!this.currentName) {
      this.setCurrentName('0')
    }
  }
}
</script>
