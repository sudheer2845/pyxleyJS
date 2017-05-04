var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'pyxley.js',
        library: 'pxyley',
        libraryTarget: 'umd'
    },
    // resolve: {
    //     alias: {
    //         antd: path.resolve('./node_modules/antd')
    //     }
    // },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [ "transform-object-rest-spread",
                        ["import", {
                                "libraryName": "antd",
                                "style": "css"
                            }]
                        ]
                }
            },
            {
              test: /\.css$/,
              loaders: ['style', 'css', 'sass']
            },
            {
              test: /\.png$/,
              loader: "url-loader?mimetype=image/png"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.(woff|woff2)$/,
                loader:"url?prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }

        ]
    },
    externals: [
        {
            "plotly\.js": "Plotly"
        },
        {
            "datamaps": "Datamap"
        },
        {
            "metrics-graphics": "MG"
        },
        {
            "d3": "d3"
        },
        {
            "nvd3": "nv"
        },
        {
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        },
        {
          'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
          }
      },
      {
          "antd": "antd"
      },
      {
         "react-bootstrap": "react-bootstrap"
     },
     {
         "react-redux": "react-redux"
     },
     {
         "react-select": "react-select"
     },
     {
         "redux": "redux"
     }
    ],
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        }),
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("production")
          }
        })
    ]

};
