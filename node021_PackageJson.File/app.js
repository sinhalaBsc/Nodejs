// refer node020  node package manager

/*
les't talk about package.json File..
  what it is for >
    * we used 'node packae manager' for install packages for our application.
    * if we are install more packages when we use our program in some other
      enviroment then we have to install same packges to that enviroment too.
    * it's good idea to keep track of which packages are we installed  and which
      packages our package depends on dependencies of your application.
    * for this tracking purposes we are using 'package.json' .
    * we can use 'package.json' as manualy or command in nodejs.

  les't use 'package.json' as command in nodejs.
     1 $ npm init
     // it will ask us a series of questions about our project
     package name : default   // for user default press enter key
     varsion : default
     description :a little test app
     entry point: default  // this is start point of our application
     test command: default (empty)
     git repository: default (empty)
     keywords: fun, ninjas
     auothor: me
     license: default
*  now we can see 'package.json' file is created on our directory with our input details.
*  and this file automatically(when add '-save') store packages and dependencies which we using.
*  now when another developer run our program it will show what packages and dependencies
  have to be install to run our program.

* let's install 'express' package and check how 'package.json' store packages and dependencies
  in package.json file
    $ npm install express -save

* let's uninstall 'express' package and check how 'package.json' update stored packages and dependencies
  in package.json file
   $ npm uninstall express.
   // it will  remove data of uninstalled packages and dependencies.

* other developer which use our program he can use following command for install all packages and dependencies
  in store on 'package.json'
   $ npm install

*/
