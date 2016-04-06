var fs = require('fs');

function filter_list(list, ext, cb) {
    // filters list by ext name
    // console.log(list)
    // filtered = list.filter(function(text) {if (text.endsWith(ext)) return text;});
    // where v is val, i is index, a is array
    console.log(callback);
    cb(null, list);
    }

function filter_dir(dir_path, ext, cb) {
    ext = "." + ext
    console.log(dir_path)
    fs.readdir(dir_path, filter_list);
    // filter_list(dir_list, filter_list, callback);
}

module.exports.filter_dir = filter_dir;


