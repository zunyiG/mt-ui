module.exports = {
  assetsDir: 'static',

  devServer: {
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/styles/common/_var.scss';
              @import '@/styles/mixin/_mixins.scss';`
      }
    }
  },

  lintOnSave: undefined
}
