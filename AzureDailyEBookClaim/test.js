var index = require('./index.js');
var context = {
    log: console.log,
    done: ()=> {}
};
index(context, {});