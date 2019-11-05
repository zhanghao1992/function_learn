/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'react-vue-loader',
            options: {
                output: true
            }
          }
        ]
      }
    ]
  }
}