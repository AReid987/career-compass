const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin')
// import { RunScriptWebpackPlugin } from 'run-script-webpack-plugin'
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  target: 'node',
  entry: ['webpack/hot/poll?100', './src/index.ts'],
  resolve: {
    extensions: ['...', '.ts', 'tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: true,
          jsc: {
            parser: {
              syntax: 'typescript',
              decorators: true
            },
            transform: {
              legacyDecorators: true,
              decoratorMetadata: true
            }
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  },
  externalsType: 'commonjs',
  plugins: [
    !process.env.BUILD &&
      new RunScriptWebpackPlugin({ name: 'main.js', autorestart: false })
  ].filter(Boolean),
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  externals: [
    function (obj) {
      const resource = obj.request
      const lazyImports = [
        '@nestjs/core',
        '@nestjs/microservices',
        '@nestjs/platform-express',
        'cache-manager',
        'class-validator',
        'class-transformer',
        '@nestjs/microservices/microservices-module',
        '@nestjs/websockets',
        'socket.io-adapater',
        'utf-8-validate',
        'bufferutil',
        'kerberos',
        '@mongodb-js/zstd',
        'snappy',
        '@aws-sdk/credential-providers',
        'mongodb-client-encryption',
        '@nestjs/websockets/socket-module',
        'bson-ext',
        'snappy/package.json',
        'aws4'
      ]
      if (!lazyImports.includes(resource)) {
        return callback()
      }
      try {
        require.resolve(resource)
      } catch (err) {
        callback(null, resource)
      }
      callback()
    }
  ]
}
