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
      'api/index.js',
      'bin/www',
      'config/index.js',
      'config/config.global.js',
      'config/config.development.js',
      'config/config.production.js',
      'config/config.test.js'
    ]);
  });

  it('inserts user info into project files', function () {
    assert.fileContent('package.json', /"name": "new-api-test"/);
    assert.fileContent('readme.md', "New API Test");
  });

  it('inserts project name into config files', function() {
    assert.fileContent('config/config.development.js', 'new-api-test-dev');
    assert.fileContent('config/config.production.js', 'new-api-test-prod');
    assert.fileContent('config/config.test.js', 'new-api-test-test');
  });
});
