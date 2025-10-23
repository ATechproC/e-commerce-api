const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const brandSchema = new Schema({
    name : {
        type : String,
        required : [true, "Brand required"],
        unique : [true, "Brand must be unique"],
        minlength : [3, "too short brand name"],
        maxlength : [30, "too long brand name"]
    },
    slug : {
        type : String,
        lowercase : true
    },
    image : String
}, {
    timestamps : true
});

const Brand = model("Brand", brandSchema);

module.exports = Brand;