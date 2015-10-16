#!/usr/bin/env node

var ejs = require('ejs');
var fs = require('fs');

var layout = fs.readFileSync('./src/index.html').toString();

process.stdout.write(ejs.render(layout, {
  frames: require('./frames'),
  prefix: 'src/assets/',
  marked: require('marked'),
  require: require
}));
