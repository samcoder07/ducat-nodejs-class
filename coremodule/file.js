const fs=require('fs');
const { it } = require('node:test');
// synchronous
// mkdirSync(): used to create a folder 
// fs.mkdirSync("testing");
// fs.mkdirSync(__dirname+'/testing');

// console.log(__dirname); //current folder path
// console.log(__filename); //current file path

// rmdirSync(): use to delete folder
// fs.rmdirSync("testing");

// writeFileSync():
// create a new file if file dosen't exist,
// and if file already exist it delete all content of 
// file and re-write data into it 

// fs.writeFileSync("testing.txt","hello-world");
// fs.writeFileSync(__dirname+'/testing.js','console.log("hello-world")');

// appendFileSync():
// create a new file if file dosen't exist,
// and if file already exist it write data after old data 

// fs.appendFileSync("testing.txt","testing is best practice");

// readFileSync()
// read a file  and return data 
// if we dont use any encoding then data is 
// return in buffer format to encode use 'utf-8'

// let response = fs.readFileSync("testing.txt","utf-8");
// console.log(response);

// renameSync(): used to rename a file 
// fs.renameSync('testing.txt','text.txt'); file name change
// fs.renameSync('testing','test'); folder name change

// unlikeSync(): used to delete file 
// fs.unlinkSync("text.txt");

// asynchronous 
// mkdir():
// used to create a foldder,
// it throw an error is folder exist or path is invalid 

// fs.mkdir("testing",(error)=>{
//     console.log("folder created");
//     console.log(error);
// })

// rmdir():
// used to delete a folder ,
// it throw an error is folder does not 
// exist or path is invalid or folder is not empty 

// fs.rmdir("testing",(error)=>{
// console.log(error); 
// })

// writeFile():
// used to write data into a file,
// if file dosen't exist is create a new 
// file, and if file already exist 
// it delete a old data from file and rewrite new data into file 

// fs.writeFile("testing.txt","testing",(error)=>{
//     console.log(error);
// })


// appendFile():
// used to append data into a file, if
// file dosen't exist is create a new file,
// and if file already exist , it write
// new data after old data into file  

// fs.appendFile("testing.txt","/tresult of after testing",()=>{
//     console.log("content is added");
// })

// readFile():
// used to read data from a file,
// if we not provide encryption it
// return buffer data so to decrypty provide utf-8

// fs.readFile("testing.txt","utf-8",(error,data)=>{
//     console.log(error);
//     console.log(data);
// })