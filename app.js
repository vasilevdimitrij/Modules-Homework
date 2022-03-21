const path = require('path');

var pathObj = path.parse(__filename);

//console.log(pathObj);

var fs = require('fs');
fs.writeFile('homework.txt','Hello from our first Node homework',function(err){
    console.log("File is created successfully")
})

fs.appendFile('homework.txt','FINISHED', function(err){
    console.log("Data is added successfully")
})

fs.readFile('homework.txt', function(err,data){
    
    console.log(data);
})
