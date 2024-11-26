const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.URL_CONNECTION);
    console.log("connections established ^_^");
  } catch (error) {
    console.log("connect error: " + error);
  }
};
