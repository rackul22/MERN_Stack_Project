const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Mongo Db connected...');
  } catch (err) {
    console.error(err.message);
    //Exit the process incase of any errors/failure
    process.exit(1);
  }
};

module.exports = connectDB;
