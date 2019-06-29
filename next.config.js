const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
module.exports = withSass(withCSS({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: false,
                name: '[name].[ext]'
              }
            }
          })
          config.module.rules.push({
            test: /\.(svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: false,
                name: '[name].[ext]'
              }
            }
          })
        return config
      },
    exportPathMap: function() {
        return {
          '/': { page: '/' },
    }
    },
    assetPrefix: './',
}))
