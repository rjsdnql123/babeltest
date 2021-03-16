const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'docs'),
    iife:false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: "11",
                  },
                },
              ],
              "@babel/preset-react",
            ],
            plugins: [
              require("@babel/plugin-transform-async-to-generator"),
              require("@babel/plugin-transform-arrow-functions"),
              require("@babel/plugin-transform-modules-commonjs"),
            ],
          }
        }
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon : './public/humanLogo.png'

    }),
  ],
};



// {
//   test: /\.(js|jsx)$/,
//   exclude: /node_modules/,
//   use: {
//     loader: "babel-loader",
//     options: {
//       presets: [
//         [
//           "@babel/preset-env",
//           {
//             targets: {
//               ie: "11",
//             },
//           },
//         ],
//         "@babel/preset-react",
//       ],
//       plugins: [
//         require("@babel/plugin-transform-async-to-generator"),
      