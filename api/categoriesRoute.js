const express = require("express");

const { 
    create_category_post, 
    get_categories,
    get_category_by_id,
    update_category,
    delete_category
} = require("../controllers/categoriesController");

const router = express.Router();

router.post("/create-category", create_category_post);

router.get("/categories", get_categories);

router.get("/categories/:categoryId", get_category_by_id);

router.put("/categories/:categoryId", update_category);

router.delete("/categories/:categoryId", delete_category);


module.exports = router;