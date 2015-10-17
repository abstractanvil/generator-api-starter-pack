'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('api-starter-pack:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ name: 'New API Test' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.gitignore',
      'readme.md',
      'app.js',
      'api/index.js'
    ]);
  });

  it('inserts user info into project files', function () {
    assert.fileContent('package.json', /"name": "new-api-test"/);
    assert.fileContent('readme.md', "New API Test");
  });
});
