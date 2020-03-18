/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
// const VueraBabel =require('vuera/babel');
const { 
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  addWebpackPlugin,
  addWebpackExternals
  // addBabelPlugin,
  // useBabelRc
} = require('customize-cra');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 添加一个module
// const addWebpackModules = (addModule) => (config, env) => {
//   config.module.rules.push(addModule)
//   return config
// }

module.exports = override(
  // addWebpackModules(),
  addWebpackExternals({
    'BMap': 'BMap',
  }),
  addDecoratorsLegacy(),
  // useBabelRc(),
  // addWebpackPlugin(new VueLoaderPlugin()),
  fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
  }),
  // addWebpackModules({
  //   rules: [{
  //     test: /\.vue$/,
  //     loader: 'vue-loader'
  //   }]
  // }),
);