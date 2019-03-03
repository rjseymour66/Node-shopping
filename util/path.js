const path = require('path');

module.exports = path.dirname(process.mainModule.filename) // this is path to root directory. No need to put '__dirname', '..' in html sendFile paths