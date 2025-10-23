const express = require("express");

const { 
    createSubCategory, 
    getSubCategories, 
    updateSubCategory,
    deleteSubCategory,
    getSubCategoriesById,
} = require("../controllers/subCategoriesController");

const { 
    getSubCategoryValidator,
    createSubCategoryValidator,
    updateSubCategoryValidator,
    deleteSubCategoryValidator
} = require("../utils/validators/subCategoryValidator");

const router = express.Router();
// const router = express.Router({mergeParams : true});

router.post("/create-subCategory",
    createSubCategoryValidator,
    createSubCategory
);

router.get("/subCategories",  
    getSubCategories
);

router.get("/subCategories/:subCategoryId", 
    getSubCategoryValidator, 
    getSubCategoriesById
);

router.put("/update-subCategory/:subCategoryId",  
    updateSubCategoryValidator,
    updateSubCategory
);

router.delete("/delete-subCategory/:subCategoryId",  
    deleteSubCategoryValidator,
    deleteSubCategory
);

module.exports = router;