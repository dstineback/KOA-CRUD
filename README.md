README.md

# KOA-CRUD Project

#### Developers:
* __Chris Perez__
* __Dan Stineback__
* __Kevin Chuang__

## Koa Framework
Using a new framework was easy for the most part due to our experience with Express.

Syntax and how things are used are only slightly different such as the introduction of generator functions

```javascript
function*()
```
and using this.body to set the response message was new.

```javascript
router.get(function*(next){
  this.body = 'message'
});
```

Something we noticed was that Koa doesn't carry its own router constructor like Express so we had to install and require in koa-router to be able to make routers.

Also we ran into a difference in app.use. Initially we had the routes used on the server.js like so:
```javascript
// Incorrect
const router = require('./routes/router');
app.use(router);
```
When trying to run the server, we get an error something along the lines of "app.use requires a generator function". After reading some docs, we figure out that it has to be written like this:

 ```javascript
 // Correct
const router = require('./routes/router');
app.use(router.routes());
```

since routes() is the function that lets the server know what to do when the specific CRUD route is requested.

Another key point to note is that, because Koa does not have built-in or default modules for things like body parsing and routing, it helps to know which helper modules will best serve your needs before beginning your project. There are many similarly named packages with varying levels of effectiveness and clarity. We determined that 'koa-body' was a better body parser than 'koa-body-parser' or 'koa-bodyparser', and that 'koa-router' was better than 'koa-route.'

Other than these new concepts, everything else was similar enough to get a server up and running very easily.
