require('dotenv').config();

const productsDt = require('./data/productsData');
const connectDB = require('./config/db');
const Product = require('./models/productSchema');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        console.log("home coming");
        await Product.insertMany(productsDt);

        console.log('Data import success');

        process.exit();
    } catch (error) {
        console.error("Error with data import".error);
        process.exit(1);
    }
};

importData();