const express = require("express");

const morgan = require("morgan");

const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

//  express app :
const app = express();

if (process.env.NODE_DEV === "development") {
    app.use(morgan("dev"));
}

// Middlewares : 

app.use(express.json());

// set up routes : 

const categoryRoute = require("./api/addCategory");

app.use(categoryRoute);

// connect to the DB : 

const dbConnect = require("./config/database");

dbConnect();