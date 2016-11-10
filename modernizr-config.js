module.exports = {
  filename: 'assets/js/modernizr-bundle.js',
  "htmlWebpackPlugin": true,
  "minify": true,
  "options": [
    "setClasses"
  ],
  "feature-detects": [
    "test/svg",
    "test/touchevents",
    "test/css/transforms3d"
  ]
}