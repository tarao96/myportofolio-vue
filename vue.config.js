const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: 'docs',
  assetsDir: './src',
  publicPath: process.env.NODE_ENV === 'production'
  ? '/myportofolio-vue/'   //任意
  : '/',
})
