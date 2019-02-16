const withSass = require('@zeit/next-sass')
const withProgressBar = require('next-progressbar')
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const Visualizer = require('webpack-visualizer-plugin');
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

let config = {
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 99,
  },

  webpack: (config, { dev }) => {
      config.module.rules.push({
        test: /\.glsl$/,
        use: ["raw-loader"]
      })
      config.plugins = config.plugins || []

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      ]

    if(dev) {
      config.devtool = 'cheap-module-source-map'
      config.output.crossOriginLoading = 'anonymous'
    }


    return config
  },

  webpackDevMiddleware: config => {
    config.watchOptions = {
      ignored: [
        /\.git\//,
        /\.next\//,
        /node_modules/
      ]
    }
    return config
  },
  plugins: [new Visualizer({
    filename: './statistics.html'
  })],
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
}


config = withSass(config)
config = withProgressBar(config)
config = withBundleAnalyzer(config)

module.exports = config

