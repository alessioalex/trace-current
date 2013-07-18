"use strict";

var stack = require('callsite');

/**
* Returns a 'nice' loggable error, with name, stack, message and other custom
* properties you set on the error.
*
*   Example:
*
*   Output:
*
* @param {Object} opts
*/
function getCurrentStacktrace(opts) {
  var tpl, originalStackLimit, limit;

  opts  = opts || {};
  tpl   = opts.tpl || 'at {{function}} ({{filename}}:{{line}}:{{column}})';
  originalStackLimit = Error.stackTraceLimit;
  limit = (typeof opts.limit !== 'undefined') ? parseInt(opts.limit, 10) : null;
  // add 1 because we eliminate the stack from this function
  if (limit) { limit += 1; }

  return function() {
    var stacktrace, output;

    if (opts.limit) {
      Error.stackTraceLimit = limit;
    }

    stacktrace = stack();

    if (opts.limit) {
      Error.stackTraceLimit = originalStackLimit;
    }

    // remove this function from the stack
    stacktrace.shift();

    output = [];
    stacktrace.forEach(function(site) {
      var msg;

      msg = tpl.replace('{{function}}', site.getFunctionName() || 'anonymous');
      msg = msg.replace('{{filename}}', site.getFileName());
      msg = msg.replace('{{line}}', site.getLineNumber());
      msg = msg.replace('{{column}}', site.getColumnNumber());

      output.push(msg);
    });

    return (opts.format === 'array') ? output : output.join('\n');
  };
};

module.exports = getCurrentStacktrace;
