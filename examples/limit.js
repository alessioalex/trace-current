var trace = require('../')({
  limit: 4
});

function a() {
  b();
}
function b() {
  c();
}
function c() {
  console.log(trace());
}

a();

// Outputs:
/*

at c (/Users/alessioalex/www/trace-current/examples/limit.js:12:15)
at b (/Users/alessioalex/www/trace-current/examples/limit.js:9:3)
at a (/Users/alessioalex/www/trace-current/examples/limit.js:6:3)
at anonymous (/Users/alessioalex/www/trace-current/examples/limit.js:15:1)

*/
