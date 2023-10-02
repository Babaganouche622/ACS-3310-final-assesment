const path = require('path');

module.exports = [
  {
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      library: 'lib',
      libraryTarget: 'umd',
      globalObject: 'this',
    }
  },
	{
  entry: './src/index.ts',
	experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
		library: {
			type: "module"
		},
  },
}
];