var config = require('./config.global');

config.env = 'test';
config.mongo.db = '<%= projectName %>-test';

module.exports = config;
