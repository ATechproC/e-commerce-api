const asyncHandler = require('express-async-handler');
const Brand = require("../models/brandModel");
const slugify = require("slugify");

const ApiError = require("../utils/ApiError");

const create_brand_post = asyncHandler(async (req, res) => {

    const { name } = req.body;

    const newBrand = new Brand({
        name, slug: slugify(name)
    });
    await newBrand.save();
    
    res.status(201).json({ message: "a new brand added successfully", data: newBrand });
});

const get_brands = asyncHandler(async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = ( page - 1 ) * limit;

    const brands = await Brand.find({}).skip(skip).limit(limit);
    res.status(200).json({ result : brands.length, page, data: brands });
})

const get_brand_by_id = asyncHandler(async (req, res, next) => {

    const { brandId } = req.params;

    const brand = await Brand.findById(brandId);

    if(!brand) {
        return next(new ApiError(`brand with the id : ${brandId} does not exist!!`, 404));
    }

    res.status(200).json({message : "brand was founded!!", data : brand});
})

const update_brand = asyncHandler(async (req, res, next) => {
    const { brandId } = req.params;

    const { name } = req.body;

    const updatedBrand = await Brand.findByIdAndUpdate(brandId, {
        name,
        slug : slugify(name)
    } , {new : true});

    if(!updatedBrand) {
        return next(new ApiError(`brand with the id : ${brandId} does not exist!!`, 404));
    }

    res.status(200).json({message : "brand updated successfully!!", data : updatedBrand})
})

const delete_brand = asyncHandler(async (req, res, next) => {

    const { brandId } = req.params;

    const deletedBrand = await Brand.findByIdAndDelete(brandId);

    if(!deletedBrand) {
        return next(new ApiError(`brand with the id : ${brandId} does not exist!!`, 404));
    }

    res.status(200).json({ message : "brand deleted successfully!!", data : deletedBrand});
})

module.exports = {
    create_brand_post,
    get_brands,
    get_brand_by_id,
    update_brand,
    delete_brand
};