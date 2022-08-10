//Este arquivo é responsável por toda configuração do nosso Webpack.

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  /* ----- */
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/html/template.html"), // template file
      filename: "index.html", // output file
      
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],

    // mode: "development",
    // devServer: {
    //   historyApiFallback: true,
    //   contentBase: path.resolve(__dirname, "./dist"),
    //   open: true,
    //   compress: true,
    //   hot: true,
    //   port: 8080,
    // },
  },

 
};

/*
Entrada:
O primeiro passo da configuração do Webpack é definir um ponto de entrada, 
que arquivo ou arquivos o Webpack irá examinar e compilar. No nosso caso definiremos como 
ponto de entrada o nosso arquivo src/index.js.

Saída
O segundo passo da nossa configuração é o output, 
onde definiremos onde o bundle gerado pelo Webpack ficará. 
Teremos a saída na pasta ./dist , que é onde o código de produção é compilado. 
O [name] do nosso bundle de saída será main, 
conforme especificado no objeto de entrada.


PLUGINS:
html-webpack-plugin – Plugin que simplifica a criação de arquivos HTML para servir seus pacotes.


Clean
O clean-webpack-plugin, 
que limpa tudo na pasta dist antes de cada build. 
Isso é muito importante para garantirmos que nenhum dado antigo seja esquecido


Em seguida atualizamos nosso webpack.config.js para utilizar o babel-loader.

*/
