'use strong';

const alex = require('alex');
const test = require('tape');
const VFile = require('vfile');

function runTest(description, isVFileMessage) {
  test(description, t => {
    t.plan(7);

    t.strictEqual(isVFileMessage.name, 'isVFileMessage', 'should have a function name.');

    t.strictEqual(
      isVFileMessage(alex('maniac').messages[0]),
      true,
      'should return true when it takes a VFileMessage.'
    );

    t.strictEqual(
      isVFileMessage((new VFile()).warn('')),
      true,
      'should return true even if it takes an almost empty VFileMessage.'
    );

    const fakeMessage = new Error();
    fakeMessage.name = '';
    fakeMessage.file = '';
    fakeMessage.reason = '';
    fakeMessage.line = 1;
    fakeMessage.column = 1;
    fakeMessage.location = {};
    fakeMessage.fatal = false;

    t.strictEqual(
      isVFileMessage(fakeMessage),
      false,
      'should return false when it doesn\'t match the spec.'
    );

    fakeMessage.location.start = {};
    fakeMessage.location.end = {};

    t.strictEqual(
      isVFileMessage(fakeMessage),
      false,
      'should return false when the properties don\'t match the spec.'
    );

    t.strictEqual(isVFileMessage(1), false, 'should return false when it takes non-object value.');

    t.strictEqual(isVFileMessage(), false, 'should return false when it takes no arguments.');
  });
}

runTest('require(\'is-vfile-message\')', require('.'));

global.window = {};
require('./' + require('./bower.json').main);

runTest('window.isVFileMessage', global.window.isVFileMessage);
