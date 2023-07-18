const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { bundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "development", // or "production"

  entry: {
    bundle: path.resolve(__dirname, "src", "index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
            ],
          },
        },
      },

      { // bu imglarni mabayd larnin kichkina qilib beradi
        test: /\.(jpe?g|png|webp|gif|svg|mp3)$/i,
        use: [
          {
            loader: "image-webpack-loader",

            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],

        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack02",
      filename: "index.html",
      template: "src/template.html",
      chunks: "index",
    }),

    new MiniCssExtractPlugin(),
    // new BundleAnalyzerPlugin(),
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },

    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
