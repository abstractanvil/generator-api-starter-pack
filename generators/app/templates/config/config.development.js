var config = require('./config.global');

config.env = 'development';
config.mongo.db = '<%= projectName %>-dev';

module.exports = config;
