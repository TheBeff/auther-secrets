'use strict';

var Sequelize = require('sequelize');
var config = require('../config.json');

var databaseURI = config.DATABASE_URI;

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
