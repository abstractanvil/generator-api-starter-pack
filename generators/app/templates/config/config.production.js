var config = require('./config.global');

config.env = 'production';
config.mongo.db = 'api_prod';

module.exports = config;
