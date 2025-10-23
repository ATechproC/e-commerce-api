const { check } = require('express-validator');
const { validatorMiddleware } = require('../../middlewares/validatorMiddleware');

exports.getBrandValidator = [
    check('brandId').isMongoId().withMessage('Invalid brand id format'),
    validatorMiddleware
]

exports.createBrandValidator = [
    check('name')
        .notEmpty()
        .withMessage('Brand required')
        .isLength({ min: 3 })
        .withMessage('Too short brand name')
        .isLength({ max: 32 })
        .withMessage('Too long brand name'),
    validatorMiddleware,
];

exports.updateBrandValidator = [
    check('brandId').isMongoId().withMessage('Invalid brand id format'),
    validatorMiddleware,
];

exports.deleteBrandValidator = [
    check('brandId').isMongoId().withMessage('Invalid brand id format'),
    validatorMiddleware,
];