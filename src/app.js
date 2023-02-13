const express = require("express");
const app = express();
const Routes = require('./routes');

const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const cors = require("cors");

const start = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true}, () => {
            console.log("Mongodb connected mongodb://127.0.0.1:27017/test")
        });

        app.use(cors());
        app.use(express.json());
        app.use(express.static('./views/pages'))
        app.use(express.static('./views/admin'))
        app.set('view engine', 'ejs');
        app.use("/", Routes);

        app.listen(port, () => {
            console.log(`Server succesfull running on the http://localhost:${port}`)
        })     
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
};
  
start();
