const mongoose = require("mongoose");
const colors = require('colors');


const dbConnect = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/');
        console.log(colors.blue('Connected to MongoDB'));
    }
    catch (error) {
        console.log(colors.red(error));
    }
};
module.exports = dbConnect;