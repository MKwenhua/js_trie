var browserify = require('browserify');
var babelify = require("babelify");
var fs = require('fs');
var jsxify = require('jsx-transform').browserifyTransform;

 browserify('./demos/nametag/main.js', {
      debug: false
    })
    .transform(jsxify, {
      factory: "EX.node",
      arrayChildren: false
    })
    .transform(babelify, {
      presets: ["es2015"]
    })
    .bundle()
    .on('error', function(err) {
      console.log(`Error : ${ err.message }`);
    })
    .pipe(fs.createWriteStream('./demos/nametag/bundle.js'));