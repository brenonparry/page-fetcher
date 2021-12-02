const request = require('request');
const fs = require('fs');


const arr = process.argv.slice(2);
const URL = arr[0];
const path = arr[1];



request(URL, (error, response, body) => {
  console.log('error:', error);  
  console.log('statusCode:', response && response.statusCode); 
   

  fs.writeFile(path, body, err => {
    if(err) {
      console.log(err)
      return;
    }

  });
  console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
});

