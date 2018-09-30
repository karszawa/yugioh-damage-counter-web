module.exports = function() {
  this.nuxt.options.extensions.push('ts');

  this.extendBuild(config => {
    config.module.rules.push({
      test: /((client|server)\.js)|(\.tsx?)$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    });
  });
}
