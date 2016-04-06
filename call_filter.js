var filter = require("./filterlib");
var path = require("path");

var dir_path = path[0]
var ext = "."+process.argv[3];


filter.filter_dir(dir_path, ext, function(e, res) { console.log(e) });

// filter.tester();

