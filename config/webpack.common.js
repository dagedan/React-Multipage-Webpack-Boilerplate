const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const getEntry = require("./utils");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const recursiveIssuer = (m) => {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
};

const commonConfig = {
  context: path.resolve(path.dirname(__dirname), "src"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules\/antd/,
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resourcePath) => resourcePath.endsWith(".module.css"),
                localIdentName: '[name]-[local]-[hash:base64:5]',
              },
            }
          }, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')],
                config: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: '/[hash]-[name].[ext]'
          }
        }]
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".json", ".jsx", ".ts", ".tsx"],
    alias: {
      '@': path.resolve(__dirname, "../src"),
    }
  },

  plugins: [
    new ProvidePlugin({
      React: "react",
    }),
  ],
};

getEntry().forEach((pathname) => {
  let conf = {
    filename: path.join(path.dirname(__dirname), "dist", pathname, "index") + ".html",
    template: path.join(
      path.dirname(__dirname),
      "src",
      pathname,
      "template",
      "index.html"
    ),
    publicPath: "/",
    // publicPath: "../",
    chunks: ["manifest", "vendor", pathname],
  };
  commonConfig.plugins.push(new HtmlWebpackPlugin(conf));
});

module.exports = commonConfig;
