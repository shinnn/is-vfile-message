/*!
 * is-vfile-message | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-vfile-message
*/
(function() {
  'use strict';

  var locationPropNames = ['start', 'end'];
  var rangePropNames = ['line', 'column'];
  var i;
  var ii;
  var p;
  var pp;
  var loc;

  window.isVFileMessage = function isVFileMessage(obj) {
    if (!(
      obj instanceof Error &&
      typeof obj.name === 'string' &&
      typeof obj.file === 'string' &&
      typeof obj.reason === 'string' &&
      (obj.line === null || typeof obj.line === 'number') &&
      (obj.column === null || typeof obj.column === 'number') &&
      obj.location !== null &&
      typeof obj.location === 'object' &&
      typeof obj.fatal === 'boolean'
    )) {
      return false;
    }

    loc = obj.location;
    i = 2;

    while (i--) {
      p = locationPropNames[i];

      if (!(
        loc[p] !== null &&
        typeof loc[p] === 'object'
      )) {
        return false;
      }

      ii = 2;

      while (ii--) {
        pp = rangePropNames[ii];
        if (!(loc[p][pp] === null || typeof loc[p][pp] === 'number')) {
          return false;
        }
      }
    }

    return true;
  };
})();
