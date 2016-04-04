var fs = require('fs');

// here we assume that readFile will return 2 args
function count_file(e,f) {
    file_string = f.toString()
    line_count = file_string.split("\n").length -1;
    console.log(line_count);
    return line_count;
}


fs.readFile(process.argv[2], count_file);

