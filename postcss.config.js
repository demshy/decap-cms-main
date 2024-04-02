const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: [
        './layouts/*.html',
        './layouts/**/*.html',
        './assets/scripts/*.js',
        './assets/scripts/**/*.js',
        './themes/**/layouts/*.html',
        './themes/**/layouts/**/*.html',
        './themes/**/assets/scripts/*.js',
        './themes/**/assets/scripts/**/*.js',
      ],
      safelist: [
        // add classes found only in js
      ],
    }),
  ],
}
