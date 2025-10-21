const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const subCategorySchema = new Schema({
    name : {
        type : String,
        required : [true, "Category required"],
        unique : [true, "Category must be unique"],
        minlength : [3, "too short category name"],
        maxlength : [30, "too long category name"]
    },
    slug : {
        type : String,
        lowercase : true
    }
}, {
    timestamps : true
});

const SubCategory = model("subCategory",  subCategorySchema);

module.exports = SubCategory;