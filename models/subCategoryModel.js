const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const subCategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "subCategory required"],
        unique: [true, "subCategory must be unique"],
        minlength: [3, "too short subCategory name"],
        maxlength: [30, "too long subCategory name"]
    },
    slug: {
        type: String,
        lowercase: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'SubCategory must be belong to parent category'],
    },
}, {
    timestamps: true
});

const SubCategory = model("subCategory", subCategorySchema);

module.exports = SubCategory;