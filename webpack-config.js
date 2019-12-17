const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "./[name]-[contenthash].js",
    path: path.resolve(__dirname, "build")
  },
  watch: true,

  devServer: {
    open: true,
    contentBase: path.resolve(__dirname),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "nowa aplikacja"
    })
  ]
};
