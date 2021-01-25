const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/bicis.json','utf-8'));