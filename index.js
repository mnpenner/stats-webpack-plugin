var fs = require('fs');
var path = require('path');

/**
 * Create a new StatsPlugin that causes webpack to generate a stats file as
 * part of the emitted assets.
 * @constructor
 * @param {String} output Path to output file.
 * @param {Object} options Options passed to the stats' `.toJson()`.
 */
function StatsPlugin (output, options) {
  this.output = output;
  this.options = options;
}

StatsPlugin.prototype.apply = function apply (compiler) {
  var output = this.output;
  var options = this.options;

  compiler.plugin('emit', function onEmit (compilation, done) {
    var json = JSON.stringify(compilation.getStats().toJson(options));
    if(options.forceWrite) {
      fs.writeFile(path.resolve(compiler.context, compiler.outputOptions.path, output), json, done);
    } else {
      compilation.assets[output] = {
        size: function getSize() {
          return Buffer.byteLength(json, 'utf8');
        },
        source: function getSource() {
          return json;
        }
      };
      done();
    }
  })
};

module.exports = StatsPlugin;
