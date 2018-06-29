
## Run backend server in development mode

Install packages using the command line.

```
    $ npm install
```

### Nodemon
Install nodemon globally on your machine and then run the server. 
nodemon will restart the server each time changes are saved.

```
    $ npm install -g nodemon
```

To run a service using nodemon

```
    $ nodemon bookface.js
```

### Forever
Install and use forever to run instances of services.

```
    $ npm install -g forever
    $ forever start user.js
    $ forever start book.js
    $ forever start comment.js
    $ forever list

```
