module.exports = function (config) {
  config.set({
    preprocessors: {
      'origin.js': ['babel'],
      'origin.spec.js': ['babel']
    },
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      'origin.js',
      'origin.spec.js'
    ]
  })
}