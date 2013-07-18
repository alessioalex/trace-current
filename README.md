# trace-current

### Description

Node.js module that returns the stacktrace for the current position.

### Motivation

`console.trace()` is nice, but what if you want to log the trace to a file (or other custom transport)?

### Installation

```bash
npm install trace-current
```

### Examples

```js
var trace = require('trace-current')();

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
```

Output:

```bash
at c (/home/alessio/node_tests/trace-current/examples/simple.js:10:15)
at b (/home/alessio/node_tests/trace-current/examples/simple.js:7:3)
at a (/home/alessio/node_tests/trace-current/examples/simple.js:4:3)
at anonymous (/home/alessio/node_tests/trace-current/examples/simple.js:13:1)
at Module._compile (module.js:441:26)
at Module._extensions..js (module.js:459:10)
at Module.load (module.js:348:31)
at Module._load (module.js:308:12)
at Module.runMain (module.js:479:10)
```

### Advanced options

There are several options you can pass to the module's init function param:

- limit {Number}: limit the stacktrace to X depth
- format {String}: 'array' to return the stacktrace as an array
- tpl {String}: defaults to 'at {{function}} ({{filename}}:{{line}}:{{column}})'

Ex:

```js
var Trace = require('trace-current')({ limit: 3 });

// ...

trace();
```
For more look into the `/examples` folder.

### Tests

```bash
npm test
```

## License

MIT
