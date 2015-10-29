# is-vfile-message

[![NPM version](https://img.shields.io/npm/v/is-vfile-message.svg)](https://www.npmjs.com/package/is-vfile-message)
[![Bower version](https://img.shields.io/bower/v/is-vfile-message.svg)](https://github.com/shinnn/is-vfile-message/releases)
[![Build Status](https://travis-ci.org/shinnn/is-vfile-message.svg?branch=master)](https://travis-ci.org/shinnn/is-vfile-message)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-vfile-message.svg)](https://coveralls.io/github/shinnn/is-vfile-message)
[![devDependency Status](https://david-dm.org/shinnn/is-vfile-message/dev-status.svg)](https://david-dm.org/shinnn/is-vfile-message#info=devDependencies)

Check if a value is a [VFileMessage](https://github.com/wooorm/vfile#vfilemessage) object

```javascript
const VFile = require('vfile');
const isVFileMessage = require('is-vfile-message');

const file = new VFile();

isVFileMessage(file.warn('error!')); //=> true
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install is-vfile-message
```

#### [bower](http://bower.io/)

```
bower install is-vfile-message
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/is-vfile-message/master/browser.js)

## API

### isVFileMessage(*value*)

*value*: any value  
Return: `Boolean`

It returns `true` if the argument is a valid [VFileMessage](https://github.com/wooorm/vfile/blob/500c69c2faa29cc837d6859009ff6b0788690aa9/index.js#L45-L71) object, otherwise `false`.

```javascript
isVFileMessage(new Error()); //=> false
isVFileMessage({name: 'error!'}); //=> false
isVFileMessage(); //=> false
```

## License

Copyright (c) 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
