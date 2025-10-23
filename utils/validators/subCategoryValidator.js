const { check } = require('express-validator');
const { validatorMiddleware } = require('../../middlewares/validatorMiddleware');

exports.getSubCategoryValidator = [
    check('subCategoryId').notEmpty().withMessage('subCategory id shouldn\'t empty').isMongoId().withMessage('Invalid subCategory id format'),
    validatorMiddleware
]

exports.createSubCategoryValidator = [
    check('name')
        .notEmpty()
        .withMessage('SubCategory required')
        .isLength({ min: 2 })
        .withMessage('Too short subcategory name')
        .isLength({ max: 32 })
        .withMessage('Too long subcategory name'),
    check('category')
        .notEmpty()
        .withMessage('SubCategory must be belong to category')
        .isMongoId()
        .withMessage('Invalid Category id format'),
    validatorMiddleware,
];

exports.updateSubCategoryValidator = [
    check('subCategoryId').notEmpty().withMessage('subCategory id shouldn\'t empty').isMongoId().withMessage('Invalid subCategory id format'),
    validatorMiddleware,
];

exports.deleteSubCategoryValidator = [
    check('subCategoryId').notEmpty().withMessage('subCategory id shouldn\'t empty').isMongoId().withMessage('Invalid subCategory id format'),
    validatorMiddleware,
];