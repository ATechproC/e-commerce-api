const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const newCategory = new Schema({
    name : String,
})

const Category = model("category", newCategory);

module.exports = Category;