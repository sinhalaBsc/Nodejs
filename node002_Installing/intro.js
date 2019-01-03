// tutorial about nodejs

/*
Node.js was created by 'Ryan Dhal' starting in 2009

node js is a open source cross platform runtime environment
to develop server side webapplication.

NODE.JS is
1. ?? Evented I/O for javascript
2. server side javascript
3. Runs on Google's V8 javascript Engine
4. Licence MIT
5. Node's goal is provide an easy way to build scalable network programs.
6. not Another web framework.
7. not multi-thread.because of nodejs is event based.

Benefits of node.js
1. It's fast.
2. It can handle tons of concurrent requests.
3. backend and frontend bothside can program in one language.

// ----------------part 2 -----------------------------
instalation for Fedora (64bit)

Fedora is Enterprise Linux based distributions system.
Installation instructions

Step 1 – Installing Prerequisites

We will need curl to add node.js ppa in our system.

$ dnf install curl


Step 2 – Adding NodeJs PPA (NodeJS 11.x)
$ sudo dnf install -y gcc-c++ make
$ curl -sL https://rpm.nodesource.com/setup_11.x | sudo -E bash -

Step 3 – Installing Node.js and NPM
After adding yum repository in your system lets install Node.js package.
NPM will also be installed with node.js. This command will also install
many other dependent packages on your system.
$ sudo dnf install nodejs

Step 4 – Check Node.js
First check installed Node.js version by following command
$ node --version
>> v11.4.0

First check installed npm version by following command
$ npm --version
>> 6.4.1

Step 4 – Check Node.js
$ node
> console.log('hello sri lanka');
hello sri lanka
undefined
if you are getting same result then it's meanm node.js properly installed on our system

to exit from noed.js
> .exit

les't create small server



let's create simple node web server
copy this code to text editor and save as a .js file (small_server.js)

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome Node.js');
}).listen(3001, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3001/');

to run the server
$ node small_server.js
> Server running at http://127.0.0.1:3001/

open the browser with this  http://127.0.0.1:3001/ link.


*/
