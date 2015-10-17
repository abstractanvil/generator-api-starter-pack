var config = require('./config.global');

config.env = 'production';
config.mongo.db = '<%= projectName %>-prod';

module.exports = config;
