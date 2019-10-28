/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = [
  {
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: { ie: '11' } }]],
              plugins: ['@babel/plugin-syntax-dynamic-import']
            }
          }
        },
        {
          test: /\.svg/,
          use: {
            loader: 'svg-url-loader',
            options: {}
          }
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        },
        {
          test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=\d\.\d\.\d)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.css|\.s(c|a)ss$/,
          use: [
            {
              loader: 'lit-scss-loader',
              options: {
                minify: true // Defaults to false
              }
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules', '../../node_modules']
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin(['images/**', 'node_modules/@webcomponents/webcomponentsjs/**', 'manifest.json']),
      new HtmlWebpackPlugin({
        chunksSortMode: 'none',
        template: 'index.html'
      }),
      new WorkboxWebpackPlugin.GenerateSW({
        include: ['index.html', 'manifest.json', /\.js$/],
        exclude: [/\/@webcomponents\/webcomponentsjs\//],
        navigateFallback: 'index.html',
        swDest: 'service-worker.js',
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /\/@webcomponents\/webcomponentsjs\//,
            handler: 'staleWhileRevalidate'
          },
          {
            urlPattern: /^https:\/\/fonts.gstatic.com\//,
            handler: 'staleWhileRevalidate'
          }
        ]
      })
    ]
  }
];
