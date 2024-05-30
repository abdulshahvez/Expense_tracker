const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://aqs:aqs-mongodb@projects.bxh6qsm.mongodb.net/Login-data-exp?retryWrites=true&w=majority");
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
