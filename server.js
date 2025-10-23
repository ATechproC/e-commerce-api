const express = require("express");

const morgan = require("morgan");

const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

const ApiError = require("./utils/ApiError");
const globalError = require("./middlewares/errorMiddleware");

//  express app :
const app = express();

// Middlewares : 

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log(`mode : ${process.env.NODE_ENV}`);
}

app.use(express.json());

// =========================================================== 

// set up routes : 

    //  handle category routes : 

        const categoriesRoute = require("./api/categoryRoutes");
        app.use("/api/v1", categoriesRoute);

    // handle subCategory routes :

    const subCategoriesRoutes = require("./api/subCategoryRoutes");
    app.use("/api/v1", subCategoriesRoutes);

    // handle brand routes :

    const brandRoutes = require("./api/brandRoutes");
    app.use("/api/v1", brandRoutes);

// =========================================================== 

app.use(/.*/, (req, res, next) => {
    next(new ApiError(`Not Found : ${req.method} ${req.originalUrl}`, 404))
})


// Global error handling Middleware : 

app.use(globalError);

// connect to the DB : 
const dbConnect = require("./config/database");

const server = () => {
    return app.listen(PORT, () => {
        console.log(`the server is running on the port ${PORT}`);
    });
}

dbConnect().then(() => {
    server();
}).catch((err) => {
    console.log("failed to start the server : ", err);
});

// Handle rejection outside express
process.on('unhandledRejection', (err) => {
    console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
    server.close(() => {
        console.error('Shutting down....');
        process.exit(1);
    });
});