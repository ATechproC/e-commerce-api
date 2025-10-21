const express = require("express");

const { 
    createSubCategory, 
    getSubCategories, 
    updateSubCategory,
    deleteSubCategory,
} = require("../controllers/subCategoriesController");

const { 
    getSubCategoryValidator,
    createSubCategoryValidator,
    updateSubCategoryValidator,
    deleteSubCategoryValidator
} = require("../utils/validators/subCategoryValidator");

const router = express.Router();

router.post("/create-subCategory",
    createSubCategoryValidator,
    createSubCategory
);

router.get("/subCategories",  
    getSubCategories
);

router.get("/subCategories/:subCategoryId", 
    getSubCategoryValidator, 
    getSubCategories
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