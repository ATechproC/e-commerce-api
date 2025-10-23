const express = require("express");

const {
    create_category_post,
    get_categories,
    get_category_by_id,
    update_category,
    delete_category
} = require("../controllers/categoriesController");

const { 
    getCategoryValidator,
    createCategoryValidator, 
    updateCategoryValidator, 
    deleteCategoryValidator 
} = require("../utils/validators/categoryValidator");

const router = express.Router();

// handle categories routes : 

router.post("/create-category", createCategoryValidator, create_category_post);

router.get("/categories", get_categories);

router.get("/categories/:categoryId",
    getCategoryValidator,
    get_category_by_id
);

router.put("/categories/:categoryId",
    updateCategoryValidator,
    update_category
);

router.delete("/categories/:categoryId",
    deleteCategoryValidator,
    delete_category
);

// const subCategoriesRoutes = require("./subCategoryRoutes");
// router.use("/:categoryId/subCategories",  subCategoriesRoutes)


module.exports = router;