const fs = require('fs');
const path = require ('path');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/bicis.json','utf-8'));