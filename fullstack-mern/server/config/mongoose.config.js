// const mongoose = require('mongoose')

// module.exports = (databaseName) =>{
//     mongoose.Connect('mongodb://127.0.0.1:27017/${databaseName}',{
//         useNewUrlparser: true,
//         useUnifiedTopology: true

//     }).then(()=>console.log('---ESTABLISHED CONNECTION WITH ${databaseName}'))
//         .catch(err =>console.log('something want wrong when connecting to the database', err))

// }

    const mongoose = require('mongoose');

    module.exports = (databaseName) => {
    mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to MongoDB: ${databaseName}`);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
    };
