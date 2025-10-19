const mongoose = require("mongoose");
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

const dbConnect = () => {
    mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
        app.listen(PORT, () => {
            console.log(`the server is running on the port ${PORT}`);
        });
        console.log(`Database : ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log("error happened while trying to connect to the DB : ", err);
        process.exit(1);
    });
}

module.exports = dbConnect;