// path 
// the path module provides a way of working with directories and file path. 

// _dirname
// console.log(_dirname);

// _filename
// console.log(_filename);

// path.basename(filepath)
// return the file name with extension 

// let p="file path";
// console.log(path.base(_filename)); current file name
// console.log(path.basename(p));

// path.dirname(directorpath)
// return directory name of any this 
// console.log(path.dirname(__filename));
// console.log(path.dirname(p));

// path.extname(filepath)
// return file extension name
// console.log(path.extname(__filename));
// console.log(path.extname("testing.txt"));

// path.resolve(directoryname,'filename')
// return resolve path 

// console.log(path.resolve(_dirname,'../','testing.txt'));

// path.isAbsolute(path)
// return true if path is absoute and false if path is relative;

// console.log(path.isAbsolute("os.js")); //relative path
// console.log(path.isAbsolute("filepath")); //absolute path
// console.log(path.isAbsolute(_dirname)); //absolute