const asyncHandler = require("express-async-handler");
const SubCategory = require("../models/subCategoryModel");
const { default: slugify } = require("slugify");
const ApiError = require("../utils/ApiError");

const createSubCategory = asyncHandler(async (req, res) => {

    const { name } = req.body;

    const newSubCategory = new SubCategory({
        name,
        slug : slugify(name)
    });
    await newSubCategory.save();
    res.status(201).json({ message: "subCategory created successfully!!", data: newSubCategory });
})

const getSubCategories = asyncHandler(async(req, res) => {

    const page = parseInt(req.query) || 1;
    const limit = parseInt(req.query) || 5;
    const skip = (page - 1) * limit;

    const subCategories = await SubCategory.find({}).skip(skip).limit(limit);
    res.status(200).json({message : "all subCategories fetched successfully!!",  data : subCategories});
});

const getSubCategoriesById = asyncHandler(async (req, res, next) => {
    const { subCategoryId } = req.params;

    const category = await SubCategory.findById(subCategoryId);

    if(!category) {
        return next(new ApiError(`category with the id : ${subCategoryId} does not exist!!`, 404));
    }

    res.status(200).json({ message : `category with the ${subCategoryId} id fetched successfully!!`,  data : category});
})

const updateSubCategory = asyncHandler(async(req, res, next) => {
    const { subCategoryId  } = req.params;
    const { name } = req.body;
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(subCategoryId, {
        name,
        slug : slugify(name)
    }, { new : true});

    if(!updatedSubCategory) {
        return next(new ApiError(`category with the id : ${subCategoryId} does not exist!!`, 404));
    }

    res.status(200).json({message : "subCategory updated successfully!!", date : updatedSubCategory});
})

const deleteSubCategory = asyncHandler(async(req, res, next) => {
    const { subCategoryId } = req.params;
    const deletedSubCategory = await SubCategory.findByIdAndDelete(subCategoryId);
    if(!deletedSubCategory) {
        return next(new ApiError(`category with the id : ${subCategoryId} does not exist!!`, 404));
    }
    res.status(200).json({message : "subCategory updated successfully!!", date : deletedSubCategory});
})

module.exports = {
    createSubCategory,
    getSubCategories,
    getSubCategoriesById,
    updateSubCategory,
    deleteSubCategory
}