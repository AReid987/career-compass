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
      new RunScriptWebpackPlugin({ name: main.js, autorestart: false }),
    new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean),
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  externals: [
    function (obj, callback) {
      const resource = obj.request
      const lazyImports = [
        '@nestjs/core',
        '@nestjs/microservices',
        '@nestjs/platform-express',
        'cache-manager'
      ]
    }
  ]
}
