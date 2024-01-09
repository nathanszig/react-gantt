const path = require('path');

module.exports = {
  entry: './src/components/gantt.js', // Point d'entrée de votre composant
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
    filename: 'gantt.js', // Nom du fichier de sortie
    libraryTarget: 'umd', // Format de module universel
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Appliquer le loader aux fichiers .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Résoudre les extensions .js et .jsx
  },
};
