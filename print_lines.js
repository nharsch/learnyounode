var fs = require('fs');

var file_contents = fs.readFileSync(process.argv[2]).toString();

line_count = file_contents.split("\n").length -1;

console.log(line_count);
