const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Apply this rule to files ending in .css
                use: [
                    'style-loader', // Inject CSS into the DOM
                    'css-loader' // Parse CSS into JavaScript
                ]
            }
        ]
    }
}
