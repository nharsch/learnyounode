var fs = require('fs');

var path = process.argv[2];
var ext = "."+process.argv[3];

function filter_dir(e, list) {
    filtered = list.filter(function(text) {if (text.endsWith(ext)) return text;})
    // where v is val, i is index, a is array
    filtered.forEach((v,i,a)=>console.log(v))
    }

fs.readdir(path, filter_dir);


