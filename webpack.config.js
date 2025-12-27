const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // точка входа сборщика webpack
  output: {
    clean: true,
    path: path.resolve(__dirname, "prod")
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: { sources: true },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|svg|png|jpg|jpeg|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // HtmlWebpackPlugin создает index.html в директории с бандлом и автоматически добавляет в него ссылку на бандл.
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"), // откуда брать шаблон
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "prod"),
    hot: true,
    port: 5500,
  },
};
