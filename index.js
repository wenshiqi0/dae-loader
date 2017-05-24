const parseDae = require('collada-dae-parser');
const path = require('path');
const fs = require('fs');

module.exports = function(source) {	
  this.cacheable && this.cacheable();

  const uid = {};

  uid.callback = this.async();
  uid.finalString = source;

  loadColladaDae(source, uid);
}

function loadColladaDae(source, self) {
  const parsed = parseDae(source);

  self.finalString = `module.exports = ${JSON.stringify(parsed)}`;

  self.callback(null, self.finalString);
}