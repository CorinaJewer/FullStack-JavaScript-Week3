const http = require('http');
const fs = require('fs');
global.DEBUG = true;
 
const server = http.createServer((request, response) => {
    if(DEBUG)console.log('Request Url:', request.url);
    //let filename = 'index.html';
    let path = './views/';

    switch (request.url){
        case '/':
            if(DEBUG) console.log('Root Route')
            path += 'index.html';
            if(DEBUG) console.log('Path: ',path)
            fetchFile(path);
            break;

        case '/home':
            response.statusCode = 301; //permanently moved - redirect page
            response.setHeader('Location', '/');
            response.end();
            break;

        case '/cookie':
            response.setHeader('Set-Cookie', 'fullName = Fred Flintstone');
            response.end('Cookie Set');
            break;

            //set a cookie named fullName with the value Fred Flintstone when the path /cookie is accessed. The specific use case for this cookie depends on the requirements of the web application. It could be used for user identification, customization, or any other functionality that involves storing information on the client side.








        case '/about':
            response.statusCode = 200
            if(DEBUG) console.log('About Route')
            //filename = 'about.html';
            path += 'about.html';
            //fetchFile(fiename);
            if(DEBUG) console.log('Path: ',path);
            fetchFile(path);
            break;

        case '/contact':
            if(DEBUG) console.log('Contact Route')
            //filename = 'contact.html';
            path += 'contact.html';
            //fetchFile(filename);
            if(DEBUG) console.log('Path: ',path);
            fetchFile(path);
            break;

        default:
            if(DEBUG) console.log('404 not found')
            response.writeHead(404, {'Content-Type':'text/plain'});
            response.end('404 not found.')
            break;
    }  

    function fetchFile(filename){
        fs.readFile(filename,(error,content)=>{
            if(error){
            response.writeHead(500, {'Content-Type':"text/plain"});
            response.end('500 Internal Server Error')
            }else{
            response.writeHead(200, {'Content-Type':"text/html"});
            response.end(content,'utf-8');
        }})
    }     
});

server.listen(3000, () => {
  console.log('Server is running...');
});