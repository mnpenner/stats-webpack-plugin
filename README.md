# Stats plugin for webpack [![Version](https://img.shields.io/npm/v/stats-webpack-plugin.svg)](https://www.npmjs.com/package/stats-webpack-plugin) [![Build Status](https://img.shields.io/travis/unindented/stats-webpack-plugin.svg)](http://travis-ci.org/unindented/stats-webpack-plugin) [![Dependency Status](https://img.shields.io/gemnasium/unindented/stats-webpack-plugin.svg)](https://gemnasium.com/unindented/stats-webpack-plugin)

Writes the stats of a build to a file.


## Installation

```sh
$ npm install --save stats-webpack-plugin
```


## Usage

```js
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  plugins: [
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/]
    })
  ]
};
```


## API

```js
new StatsPlugin(path: string, [options])
```

* `path`: The path of the result file, relative to your output folder.
* `options`: Options passed to [stats.toJson](http://webpack.github.io/docs/node.js-api.html#stats-tojson)


## Meta

* Code: `git clone git://github.com/unindented/stats-webpack-plugin.git`
* Home: <https://github.com/unindented/stats-webpack-plugin/>


## Contributors

* Daniel Perez Alvarez ([unindented@gmail.com](mailto:unindented@gmail.com))
* Izaak Schroeder ([izaak.schroeder@gmail.com](mailto:izaak.schroeder@gmail.com))


## License

Copyright (c) 2014 Daniel Perez Alvarez ([unindented.org](http://unindented.org/)). This is free software, and may be redistributed under the terms specified in the LICENSE file.
