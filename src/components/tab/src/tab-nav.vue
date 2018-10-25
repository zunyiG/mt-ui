<script>
import TabLine from './tab-line'

function noop () {}

export default {
  name: 'TabNav',

  components: {
    TabLine
  },

  inject: ['rootTab'],

  props: {
    panes: Array,
    currentName: String,
    onTabClick: {
      type: Function,
      default: noop
    },
    type: String
  },

  data () {
    return {
      touchable: true
    }
  },

  computed: {
    tabWidth () {
      const len = this.panes.length || 1
      return `${100 / len}%`
    }
  },

  methods: {
    changeTab () {
    }
  },

  render (h) {
    const {
      type,
      panes,
      onTabClick,
      changeTab,
      tabWidth
    } = this

    const tab = this._l(panes, (pane, index) => {
      let tabName = pane.name || pane.index || index

      pane.index = `${index}`

      const tabLabelContent = pane.$slots.label || pane.label
      const tabindex = pane.active ? 0 : -1

      return (
        <div
          class={['mt-tab__item', {
            'is-active': pane.active,
            'is-disabled': pane.disabled
          }]}
          id={ `tab-${tabName}` }
          role="tab"
          ref="tabs"
          style={{width: tabWidth}}
          tabindex={ tabindex }
          refInFor
          on-click={ (ev) => { onTabClick(pane, tabName, ev) } }
        >
          {tabLabelContent}
        </div>
      )
    })

    return (
      <div class='mt-tab__nav-warp'>
        <div
          class='mt-tab__nav'
          ref = "nav"
          role="tablist"
          on-keydown={ changeTab }>
          {tab}
          {!type ? <tab-line tabs={panes}></tab-line> : null}
        </div>
      </div>
    )
  }
}
</script>
