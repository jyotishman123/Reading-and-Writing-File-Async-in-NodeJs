const fs = require('fs');
 


// Non-Blocking Asychronous.

const writeFile = `Ducati is a super bike`

// Callback hell..


fs.readFile("./txt/car.txt",  'utf-8', (err, data1)=>{
     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=>{
         console.log(data2)
         fs.writeFile('./txt/bike.txt', writeFile, 'utf-8', (err)=>{
            console.log('done 👍')
         })
     })
 
} )


console.log("Will read file");

 
