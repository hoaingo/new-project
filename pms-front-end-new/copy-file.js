var fs = require('fs-extra');

var arr_file = [
        {name:'App.bundle.js', path:'portal-service-new'},
        {name:'3rd-library.bundle.js', path:'portal-service-new'},
        {name:'manifest.bundle.js', path:'portal-service-new'},
    ];
var suffix_name = '.bundle.js';
var source = './public/';
var dest = '/src/main/resources/static/js/'; 
for (let index = 0; index < arr_file.length; index++) {
    const element = arr_file[index];
    
    let entry_file = source + element.name;
    let output_file = `../${element.path}${dest}${element.name}`;

    fs.copy( entry_file, output_file, function (err) {
    
        if (err)
        {
            return console.error(err);
        }
    
        console.log(`Copied form ${entry_file} \tto \t${output_file}`);
    
    });
    
}
