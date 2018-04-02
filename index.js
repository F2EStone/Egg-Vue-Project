'use strict';

const egg = require('egg');

egg.startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 8080,
});
