const express = require("express");

const morgan = require("morgan");

const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

//  express app :
const app = express();

// Middlewares : 

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log(`mode : ${process.env.NODE_ENV}`);
}

app.use(express.json());

// set up routes : 

const categoriesRoute = require("./api/categoriesRoute");

app.use("/api/v1" ,categoriesRoute);

// connect to the DB : 
const dbConnect = require("./config/database");
dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`the server is running on the port ${PORT}`);
    });
}).catch((err) => {
    console.log("failed to start the server : ", err);
});