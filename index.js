require('dotenv').config()
var fs = require('fs'); 
console.log("dev firefly ddgit addexchnage not equality not equal dadad")
fs.writeFile(`file-${(new Date()).toString()}.txt`, process.env.MY_SECRET,function (err) {
    if (err) throw err;
    console.log('new main Savasdasdsdsdsed!');
  }); 