var trace = require('../')({
  format: 'array'
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

[ 'at c (/Users/alessioalex/www/trace-current/examples/array-format.js:12:15)',
  'at b (/Users/alessioalex/www/trace-current/examples/array-format.js:9:3)',
  'at a (/Users/alessioalex/www/trace-current/examples/array-format.js:6:3)',
  'at anonymous (/Users/alessioalex/www/trace-current/examples/array-format.js:15:1)',
  'at Module._compile (module.js:449:26)',
  'at Module._extensions..js (module.js:467:10)',
  'at Module.load (module.js:356:32)',
  'at Module._load (module.js:312:12)',
  'at Module.runMain (module.js:492:10)' ]

*/
