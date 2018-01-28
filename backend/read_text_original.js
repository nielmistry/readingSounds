var fs = require('fs');

fs.readFile('Chapter_1.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});
