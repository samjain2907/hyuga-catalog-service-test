const express = require('express');
const controller = require('../../controllers/catalog.controller');

const router = express.Router();

router.route('/product/id/:productId').get(controller.getProductById);
router.route('/product/slug/:productSlug').get(controller.getProductBySlug);

router.route('/category/bubbles').get(controller.getCategoryBubbles);

router.route('/category/slug/:categorySlug/info').get(controller.getCategoryInfo);
router.route('/category/slug/:categorySlug/tree').get(controller.getCategoryTree);

router.route('/category/id/:categoryId/products').get(controller.getProductsByCategoryId);
router.route('/category/slug/:categorySlug/products').get(controller.getProductsByCategorySlug);

router.route('/product/slug/:productSlug/offers/:platform').get(controller.getProductOffersBySlug);
router.route('/product/slug/:productSlug/offers').get(controller.getProductOffersBySlug);
router.route('/crosssell/id/:productId/products').get(controller.getCrossSellProductsById);
router.route('/crosssell/slug/:productSlug/products').get(controller.getCrossSellProductsBySlug);
router.route('/upsell/id/:productId/products').get(controller.getUpSellProductsById);
router.route('/upsell/slug/:productSlug/products').get(controller.getUpSellProductsBySlug);
router.route('/related/id/:productId/products').get(controller.getRelatedProductsById);
router.route('/related/slug/:productSlug/products').get(controller.getRelatedProductsBySlug);

router.route('/category/id/:categoryId/banners').get(controller.getBannersByCategoryId);
router.route('/category/slug/:categorySlug/banners').get(controller.getBannersByCategorySlug);

router.route('/reviews/:productId').get(controller.getReviewsByProductId);
router.route('/reviews/:productSlug').get(controller.getReviewsByProductSlug);
router.route('/review/:type/post').post(controller.createReview);

router.route('/search?').get(controller.quickSearch);

router.route('/category/slug/:categorySlug/shop-by-category').get(controller.shopByCategory);
router.route('/category/slug/:categorySlug/top-brand-deals').get(controller.getTopBrandDeals);

module.exports = router;
