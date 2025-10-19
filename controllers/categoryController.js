const Category = require("../models/categories");

const post_category_add = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        newCategory.save();
        res.status(201).json({ message: "a new category added successfully", data: newCategory });
    } catch (err) {
        console.log("failed to add a new category : ", err);
        res.status(400).json({ message: "failed to add a new category" });
    }
}

module.exports = post_category_add;