const fs = require('fs-extra');

fs.ensureDirSync('dist')
fs.copySync('static', 'dist')
