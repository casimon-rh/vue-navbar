const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const vue = {
  test: /\.vue$/,
  loader: 'vue-loader'
}
const ts = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: file => (
    /node_modules/.test(file) &&
    !/\.vue\.js/.test(file)
  ),
  options: {
    appendTsSuffixTo: [/\.vue$/]
  }
}
const styles = [
  {
    test: /\.css$/,
    use: [
      'vue-style-loader',
      'css-loader'
    ]
  },
  {
    test: /\.s(c|a)ss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          fiber: require('fibers'),
          indentedSyntax: true
        }
      }
    ]
  }
]
const pug = {
  test: /\.pug$/,
  loader: 'pug-plain-loader'
}
const manifestmap = (file) => ({
  ...file,
  path: file.name.includes('/navbar/') ? file.path : '/navbar/' + file.path
})
module.exports = {
  context: __dirname,
  mode: 'development',
  entry: './src/main.ts',
  devtool: '#eval-source-map',
  module: {
    rules: [ vue, ts, [...styles], pug ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ManifestPlugin({ map: manifestmap }),
    new VuetifyLoaderPlugin()
  ]
}
