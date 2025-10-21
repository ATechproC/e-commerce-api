const { check } = require('express-validator');
const { validatorMiddleware } = require('../../middlewares/validatorMiddleware');

exports.getSubCategoryValidator = [
    check('subCategoryId').isMongoId().withMessage('Invalid category id'),
    validatorMiddleware
]

exports.createSubCategoryValidator = [
    check('name')
        .notEmpty()
        .withMessage('Category required')
        .isLength({ min: 3 })
        .withMessage('Too short category name')
        .isLength({ max: 32 })
        .withMessage('Too long category name'),
    validatorMiddleware,
];

exports.updateSubCategoryValidator = [
    check('categoryId').isMongoId().withMessage('Invalid category id format'),
    validatorMiddleware,
];

exports.deleteSubCategoryValidator = [
    check('categoryId').isMongoId().withMessage('Invalid category id format'),
    validatorMiddleware,
];