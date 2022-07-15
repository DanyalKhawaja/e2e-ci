var fs = require('fs'); 
console.log("dev firefly ddgit addexchnage not equality not equal dadad")
fs.writeFile(`file-${(new Date()).toString()}.txt`, "---",function (err) {
    if (err) throw err;
    console.log('Savasdased!');
  }); 