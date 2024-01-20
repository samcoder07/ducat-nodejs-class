const http=require( 'http');
const fs=require( 'fs' );
const path=require( 'path' );

let server= http.createServer((req,res)=>{
//    let data= fs.readFileSync('index.html', 'utf8');
//    req.setHeader('Content-Type', 'text/html');
//    req.end(data)
let data;
req.setHeader('Content-Type', 'text/html'); 
 if (req.url ==='/') {
     data=fs.readFileSync(path.join(__dirname,'./','index.html'),'utf8');
 }
 if (req.url ==='/about' && req.method === 'GET') {
    data=fs.readFileSync(path.join(__dirname,'./','about.html'),'utf8');
 }

 if (req.url ==='/contact') {
    data=fs.readFileSync(path.join(__dirname,'./','contact.html'),'utf8');
 }

 
 if (req.url ==='/store' && req.method === 'POST') {
    req.on('data', function(data){
        console.log(data);
    })
    
    req.on('end', function(){
      console.log("testing");
    })
    req.on('error', function(err){
      console.log(err);
    })
}

    if (req.url === '/data') {
        let employee=[
            {name: 'John',email:'john@gmail.com',contact:"4587456981"},
            {name: 'vasu',email:'vasu@gmail.com',contact:"4587456981"},
            {name: 'varun',email:'varun@gmail.com',contact:"4587456981"}
        ]
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(employee));
    }
  req.end(data);
})

server.listen(3000,function(){
    console.log(server.address());
});

