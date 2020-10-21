// const mongoose = require('mongoose');

// // Connection URL
// const url = 'mongodb+srv://Love_Liz:Crance.2017@loveliz.mvrrv.mongodb.net/products?retryWrites=true&w=majority'

// const InitiateMongoServer = async () => {
//     try {
//         await mongoose.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: true
//         });
//         console.log('<<--Connected to DB-->>');
//     } catch (e) {
//         console.log(e);
//         throw e;
//     }
// }

// module.exports = InitiateMongoServer;