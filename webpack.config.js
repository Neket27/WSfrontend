const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyCssPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/typescript/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true
  },
  devServer: {
    port: 8080,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.s*css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash].css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new MinifyCssPlugin()
    ]
  }
};
