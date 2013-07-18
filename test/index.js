var test  = require('tap').test,
    Trace = require('../');

test('defaults', function(t) {
  var myTrace, trace;

  trace = Trace();

  function ab() {
    return de();
  }
  function de() {
    return fg();
  }
  function fg() {
    return trace();
  }

  myTrace = ab();

  t.type(myTrace, 'string', 'trace should be a string');
  t.equal((myTrace.split('\n').length + 1), Error.stackTraceLimit, 'limit should be Error.stackTraceLimit - 1')
  t.ok(/at (.*) ((.*):\d+:\d+)/.test(myTrace), 'template');
  t.end();
});

test('array format', function(t) {
  var trace = Trace({ format: 'array' });

  t.ok(Array.isArray(trace()));
  t.end();
});

test('custom stack limit', function(t) {
  var trace, stackTraceLimit;

  stackTraceLimit = Error.stackTraceLimit;
  trace = Trace({ limit: 3, format: 'array' });

  t.equal(trace().length, 3, 'stacktrace custom length');
  t.equal(Error.stackTraceLimit, stackTraceLimit, 'Error.stackTraceLimit should be unchanged');

  t.end();
});

test('custom template', function(t) {
  var trace = Trace({
    format : 'array',
    tpl    : '{{function}}~{{filename}}|{{line}}|{{column}}'
  });

  t.ok(/(.*)~(.*)|\d+|\d+/.test(trace().shift()))
  t.end();
});
