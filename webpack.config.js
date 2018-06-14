const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: env || 'production',
        entry: './src/index.js',
            output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        //zadaniem obiektu module jest wpływanie na moduły, które bezpośrednio ładujemy jako zależności naszej apliakcji
        module: {
            //wartośc parametru rules bedzie tablicą loaderów, które bedą automoatycznie aplikowane na nasze moduły
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    options: {
                        plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [new HtmlWebpackPlugin({
          template: 'index.html',
          filename: 'index.html',
          inject: 'body'
        })]
    }
};