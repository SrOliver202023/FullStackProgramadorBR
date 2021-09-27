const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/newlinks`)
//   .then(()=> console.log(`db It's OK!`))
//   .catch(error=>console.log(`Error Detected`)
// );

module.exports = mongoose.connection;