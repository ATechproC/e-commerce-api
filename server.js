const express = require("express");

const morgan = require("morgan");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const app = express();

if (process.env.NODE_DEV === "development") {
    app.use(morgan("dev"));
}

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("this is the home page");
});

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
