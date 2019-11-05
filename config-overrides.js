/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
const { 
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  // addBabelPlugin
} = require('customize-cra');

// const webpackConfig = require('./webpack.config')
// const addWebpackModules = () => (config, env) => {
//   config.module.rules.push(...webpackConfig.module.rules)
//   return config
// }

module.exports = override(
  // addWebpackModules(),
  addDecoratorsLegacy(),
  // addBabelPlugin('vuera/babel'),
  fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
  }),
);