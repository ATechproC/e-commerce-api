const asyncHandler = require('express-async-handler');
const Category = require("../models/categoryModel");
const slugify = require("slugify");;

const create_category_post = asyncHandler(async (req, res) => {

    const { name } = req.body;

    const newCategory = new Category({
        name, slug: slugify(name)
    });
    await newCategory.save();
    
    res.status(201).json({ message: "a new category added successfully", data: newCategory });
});

const get_categories = asyncHandler(async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = ( page - 1 ) * limit;

    const categories = await Category.find({}).skip(skip).limit(limit);
    res.status(200).json({ result : categories.length, data: categories });
})

const get_category_by_id = asyncHandler(async (req, res) => {

    const { categoryId } = req.params;

    const category = await Category.findById(categoryId);

    if(!category) {
        res.status(404).json(`category with the id : ${categoryId} does not exist!!`);
        return;
    }

    res.status(200).json({message : "category was founded!!", data : category});
})

const update_category = asyncHandler(async (req, res) => {
    const { categoryId } = req.params;

    const {name} = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(categoryId, {
        name,
        slug : slugify(name)
    } , {new : true});

    if(!updatedCategory) {
        res.status(404).json(`category with the id : ${categoryId} does not exist!!`);
        return;
    }

    res.status(200).json({message : "category updated successfully!!", data : updatedCategory})
})

const delete_category = asyncHandler(async (req, res) => {

    const { categoryId } = req.params;

    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if(!deletedCategory) {
        res.status(404).json(`category with the id : ${categoryId} does not exist!!`);
        return;
    }

    res.status(200).json({ message : "category deleted successfully!!", data : deletedCategory});

})

module.exports = {
    create_category_post,
    get_categories,
    get_category_by_id,
    update_category,
    delete_category
};