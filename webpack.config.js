// path — встроенный в Node.js модуль
const path = require('path');
const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  // Указываем путь до входной точки:
  entry: './src/index.js',
  // Описываем, куда следует поместить результат работы:
  output: {
    // Путь до директории (важно использовать path.resolve):
    path: path.resolve(__dirname, 'dist'),
    // Имя файла со сборкой:
  },
  devServer: {
    static:  {
      directory: path.join(__dirname, 'dist'), // путь к директории с index.html
      watch: true,
    },
    port: 9000,
    hot: true,
    open: true,
    liveReload: true,
    watchFiles: ['src/index.html'],
  },
  // В этом массиве будут перечислены все применяемые лоадеры:
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        // Это правило будет применяться ко всем файлам,
        // имя которых подойдет под регулярное выражение:
        test: /\.css$/,
        // Список лоадеров, которые применятся к файлу:
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    // При сборке этот плагин будет отображать прогресс в консоли:
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ]
}