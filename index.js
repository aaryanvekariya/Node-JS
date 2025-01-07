//task1:-

// const fs = require('fs');
// const folderName = 'space_project';
// fs.mkdirSync(folderName);

//asynchroniz

// const fs = require('fs');
// const folderName = 'space_project';

// fs.mkdir(folderName, { recursive: true }, (err) => {
//   if (err) {
//     console.error('Error creating folder:', err);
//   } else {
//     console.log('Folder created successfully!');
//   }
// });


// task2:-

//syncronous

// const fs = require('fs');
// const content = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.";
// const filePath = "space_project/log1.txt";

// fs.writeFileSync(filePath, content);

  
// //Asyncronous

// fs.writeFile(filePath, content, (err) => {
//     if (err) {
//         console.error("Error writing to file:", err);
//     } else {
//         console.log(`File '${filePath}' created successfully with the specified content.`);
//     }
// });


//3:-

//Syncrounous

// const fs = require('fs');
// const content = "ISRO has started working on Gaganyaan."
// const filePath = "space_project/log1.txt";

// fs.writeFileSync(filePath, content);

//Asyncronous

// const fs = require('fs');
// const content = "ISRO has started working on Gaganyaann"
// const filePath = "space_project/log1.txt";
// fs.writeFile(filePath, content, (err) => {
//         if (err) {
//             console.error("Error writing to file:", err);
//         } else {
//             console.log(`File '${filePath}' created successfully with the specified content.`);
//         }
//     });



//task4:-

//syncrounous

// const fs = require('fs');
// const content = "\n The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission"
// const filePath = "space_project/log1.txt";

// fs.appendFileSync(filePath, content);


//Asyncronous
const fs = require('fs');
 const content = "\n The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission"

fs.appendFile(filePath,content,(err)=>{
    if(err){
        throw err
    }
    console.log(`Content ${filePath} appended successfully`)
})

//task5:-

//syncrounous

// const fs = require('fs');

// const filePath = "space_project/update.txt";
// let data = fs.renameSync(filePath, "space_project/Update.txt");
// console.log(`file renamed successfully`)

//Asyncronous

// const fs = require('fs');

//  const filePath = "space_project/update.txt";

//  fs.rename(filePath, "space_project/update.txt", (err) => {
//     if(err){
//         throw err
//     }
//     console.log(`file renamed successfully`)


//  })


// task6:-

//syncrounous

// const fs = require('fs');
// const filePath = "space_project/update.txt";

// let data = fs.readFileSync(filePath)
// console.log(data.toString()) 
// console.log(`We are excited`)

//Asyncronous

// const fs = require('fs');
// const filePath = "space_project/update.txt";

//  fs.readFile(filePath,(err,data) => {
//     if(err){
//         throw err
//     }
//     console.log(data.toString())
    
// })
// console.log(`We are excited`)


//task7:-

//syncrounous

// const fs = require('fs');
// const filePath = "space_project/update.txt";
// fs.unlinkSync(filePath)

//Asyncronous

// const fs = require('fs');
// const filePath = "space_project/update.txt";
// fs.unlink(filePath,(err) =>{
//     if(err){
//         throw err
//     }
//     console.log(`file deleted successfully`)
 
// })

//Task8:-

//syncrounous

// const fs = require('fs');
// const space_project = 'space_project';
// fs.rmdirSync(space_project, { recursive: true })


//asyncronous

// const fs = require('fs');
// const space_project = 'space_project';
// fs.rmdir(space_project, { recursive: true }, (err) =>{
//     if(err){
//         throw err
//     }
//     console.log(`folder ${space_project} created successfully`)
// })



