var trace = require('../')({
  limit : 4,
  tpl   : 'Function: {{function}} --> Filename: ({{filename}} {{line}}:{{column}})'
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

Function: c --> Filename: (/Users/alessioalex/www/trace-current/examples/custom-template.js 13:15)
Function: b --> Filename: (/Users/alessioalex/www/trace-current/examples/custom-template.js 10:3)
Function: a --> Filename: (/Users/alessioalex/www/trace-current/examples/custom-template.js 7:3)
Function: anonymous --> Filename: (/Users/alessioalex/www/trace-current/examples/custom-template.js 16:1)

*/
