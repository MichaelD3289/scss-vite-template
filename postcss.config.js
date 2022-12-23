const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        'trigonometric-functions': true,
        'logical-properties-and-values': false,
        'opacity-percentage': true,
        'text-decoration-shorthand': true,
      },
    }),
  ],
}
