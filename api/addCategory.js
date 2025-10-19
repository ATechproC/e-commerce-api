const express = require("express");
const post_category_add = require("../controllers/categoryController");

const router = express.Router();

router.post("/api/v1/categories", post_category_add)

module.exports = router;