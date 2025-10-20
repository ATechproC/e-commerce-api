const mongoose = require("mongoose");

const dbConnect = () => {
    return mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`Database : ${conn.connection.host}`);
        return conn;
    })
    // .catch((err) => {
    //     console.log("error happened while trying to connect to the DB : ", err);
    //     process.exit(1);
    // });
}

module.exports = dbConnect;