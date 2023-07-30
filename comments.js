// Create web server 
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for the profile page
// 5. Create a route for the contact page
// 6. Create a route for the error page
// 7. Run the server and test the routes
// 8. Create a route for the static files
// 9. Run the server and test the static files

// 1. Create a web server
// 1.1. Import the http module
const http = require('http');

// 1.2. Create a web server
const server = http.createServer((req, res) => {
    // 1.2.1. Log the request url
    console.log(req.url);

    // 1.2.2. Set the content type
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // 1.2.3. Write the response
    res.write('<h1>Hello Node.js</h1>');

    // 1.2.4. End the response
    res.end();
});

// 1.3. Listen to a port
server.listen(3000);
console.log('Server is running at port 3000...');

// 2. Create a route for the home page
// 2.1. Create a route for the home page
const homePage = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Home Page</title>
        </head>
        <body>
            <h1>Welcome to the home page</h1>
        </body>
    </html>
`;

// 2.2. Set the content type
res.writeHead(200, { 'Content-Type': 'text/html' });

// 2.3. Write the response
res.write(homePage);

// 2.4. End the response
res.end();

// 3. Create a route for the comments page
// 3.1. Create a route for the comments page
const commentsPage = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Comments Page</title>
        </head>
        <body>
            <h1>Welcome to the comments page</h1>
        </body>
    </html>
