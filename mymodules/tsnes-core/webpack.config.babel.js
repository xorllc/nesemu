import path from 'path'
import webpack from 'webpack'

module.exports = {
  mode: 'production',
  entry: {
    "tsnes-core": './index.ts',
  },
  output: {
    path: path.resolve(__dirname, '.'),
    library: 'TsNesCore',
    libraryTarget: 'umd',
    filename: '[name].js',
    sourceMapFilename: '[name].map',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {test: /\.ts$/, include: /src/, exclude: /node_modules/, use: {loader: 'ts-loader'}},
    ],
  },
}
