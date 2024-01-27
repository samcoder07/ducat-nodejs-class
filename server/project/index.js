const http=require('http')
const fs=require('fs')
const path = require('path')

let serverFunction =async (req, res) => {
    if(req.url === '/') {
       let data =  fs.readFileSync(path.join(__dirname, './views', 'index.html'), 'utf8');

       res.setHeader('Accept', 'text/html');
       res.end(data)
    }

    if(req.url === '/about') {
        let data =  fs.readFileSync(path.join(__dirname, './views', 'about.html'), 'utf8');

        res.setHeader('Accept', 'text/html');
        res.end(data)
    }

    if(req.url === '/contact') {
        let data =  fs.readFileSync(path.join(__dirname, './views', 'contact.html'), 'utf8');

        res.setHeader('Accept', 'text/html');
        res.end(data)
    }

    if(req.url === '/lib/animate/animate.min.css') {
      let file=   fs.readFileSync(path.join(__dirname, './public', '/lib/animate/animate.min.css'))
   
      res.setHeader('Accept', 'text/plain');
      res.end(file)
    }

    if(req.url === "/lib/owlcarousel/assets/owl.carousel.min.css") {
        let file=   fs.readFileSync(path.join(__dirname, './public', '/lib/owlcarousel/assets/owl.carousel.min.css'))
   
        res.end(file)
    }

    if(req.url === "/css/bootstrap.min.css") {
        let file=   fs.readFileSync(path.join(__dirname, './public', '/css/bootstrap.min.css'))
        res.setHeader('Accept', 'text/plain');
        res.end(file)
    }

    if(req.url === "/css/style.css") {
        let file=   fs.readFileSync(path.join(__dirname, './public', '/css/style.css'))
        res.setHeader('Accept', 'text/plain');
        res.end(file)
    }

    if(req.url === "/lib/wow/wow.min.js") {
        let file=   fs.readFileSync(path.join(__dirname, './public', '/lib/wow/wow.min.js'))
        res.setHeader('Accept', 'text/plain');
        res.end(file)
    }

    if(req.url === "/lib/easing/easing.min.js") {
        let file=   fs.readFileSync(path.join(__dirname, './public', '/lib/easing/easing.min.js'))
        res.setHeader('Accept', 'text/plain');
        res.end(file)
    }

    if(req.url === "/lib/waypoints/waypoints.min.js") {
        let file=   fs.readFileSync(path.join(__dirname, './public', '/lib/waypoints/waypoints.min.js'))
   
        res.end(file)
    }


    if(req.url === "/lib/owlcarousel/owl.carousel.min.js") {
        let file=   fs.readFileSync(path.join(__dirname, './public', '/lib/owlcarousel/owl.carousel.min.js'))
        res.setHeader('Accept', 'text/plain');
        res.end(file)
    }

    if(req.url === "/js/main.js") {
        let file=   fs.readFileSync(path.join(__dirname, './public', '/js/main.js'))
        res.setHeader('Accept', 'text/plain');
        res.end(file)
    }
}

let server=http.createServer(serverFunction)

const PORT = process.env.PORT || 3000;

server.listen(PORT, function(){
    console.log(server.address());
})  