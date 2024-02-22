module.exports = {
  module: {
    rules: [
      { test: /\.css$/i, type: 'css' }, // this is enabled by default for .css, so you don't need to specify it
      {
        test: /\.module\.css$/i,
        type: 'css/module' // this is enabled by default for module.css,   so you don't need to specify it
      },
      {
        test: /\.(j|t)s$/,
        exclude: [/[\\/]node_modules[\\/]/],
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: true,
          jsc: {
            parser: {
              syntax: 'typescript'
            },
            externalHelpers: true,
            transform: {
              react: {
                runtime: 'automatic',
                development: !prod,
                refresh: !prod
              }
            }
          },
          env: {
            targets: 'Chrome >= 48'
          }
        }
      },
      {
        test: /\.(j|t)sx$/,
        loader: 'builtin:swc-loader',
        exclude: [/[\\/]node_modules[\\/]/],
        options: {
          sourceMap: true,
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true
            },
            transform: {
              react: {
                runtime: 'automatic',
                development: !prod,
                refresh: !prod
              }
            },
            externalHelpers: true
          },
          env: {
            targets: 'Chrome >= 48' // browser compatibility
          }
        },
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {}
                }
              }
            }
          }
        ],
        type: 'css'
      }
    ]
  }
}
