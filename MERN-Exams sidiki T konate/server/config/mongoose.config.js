const mongoose = require('mongoose')
const databaseName =  process.env.DB

module.exports = (databaseName) => {
    mongoose.connect(`mongodb://localhost/${databaseName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log(`🔥🔥🔥 --- ESTABLISHED CONNECTION WITH ${databaseName} --- 🔥🔥🔥`))
        .catch(err => console.log('Something went wrong when connecting to the database ', err));
}