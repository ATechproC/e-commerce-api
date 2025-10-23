const express = require("express");

const {
    create_brand_post,
    get_brands,
    get_brand_by_id,
    update_brand,
    delete_brand
} = require("../controllers/brandsController");

const { 
    getBrandValidator,
    createBrandValidator, 
    updateBrandValidator, 
    deleteBrandValidator 
} = require("../utils/validators/brandValidator");

const router = express.Router();

// handle categories routes : 

router.post("/create-brand", createBrandValidator, create_brand_post);

router.get("/brands", get_brands);

router.get("/brands/:brandId",
    getBrandValidator,
    get_brand_by_id
);

router.put("/brands/:brandId",
    updateBrandValidator,
    update_brand
);

router.delete("/brands/:brandId",
    deleteBrandValidator,
    delete_brand
);

// const subCategoriesRoutes = require("./subCategoryRoutes");
// router.use("/:categoryId/subCategories",  subCategoriesRoutes)


module.exports = router;