module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      'kr-postposition.js',
      'kr-postposition.spec.js'
    ]
  })
}