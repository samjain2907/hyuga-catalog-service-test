const httpStatus = require('http-status');
const catalogService = require('../services/catalog/catalog.service')();

const getCategoryTree = async (req, res, next) => {
	try {
		const response = await catalogService.getCategoryTree(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getProductById = async (req, res, next) => {
	try {
		const response = await catalogService.getProductById(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getProductBySlug = async (req, res, next) => {
	try {
		const response = await catalogService.getProductBySlug(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getProductsByCategoryId = async (req, res, next) => {
	try {
		const response = await catalogService.getProductsByCategoryId(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getProductsByCategorySlug = async (req, res, next) => {
	try {
		const response = await catalogService.getProductsByCategorySlug(req.params, req.query);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getCrossSellProductsById = async (req, res, next) => {
	try {
		const response = await catalogService.getCrossSellProductsById(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getCrossSellProductsBySlug = async (req, res, next) => {
	try {
		const response = await catalogService.getCrossSellProductsBySlug(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getUpSellProductsById = async (req, res, next) => {
	try {
		const response = await catalogService.getUpSellProductsById(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getUpSellProductsBySlug = async (req, res, next) => {
	try {
		const response = await catalogService.getUpSellProductsBySlug(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getRelatedProductsById = async (req, res, next) => {
	try {
		const response = await catalogService.getRelatedProductsById(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getRelatedProductsBySlug = async (req, res, next) => {
	try {
		const response = await catalogService.getRelatedProductsBySlug(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getBannersByCategoryId = async (req, res, next) => {
	try {
		const response = await catalogService.getBannersByCategoryId(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getBannersByCategorySlug = async (req, res, next) => {
	try {
		const response = await catalogService.getBannersByCategorySlug(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getCategoryBubbles = async (req, res, next) => {
	try {
		const response = await catalogService.getCategoryBubbles();
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getReviewsByProductId = async (req, res, next) => {
	try {
		const response = await catalogService.getReviewsByProductId(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getReviewsByProductSlug = async (req, res, next) => {
	try {
		const response = await catalogService.getReviewsByProductSlug(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const createReview = async (req, res, next) => {
	try {
		const response = await catalogService.createReview(req.params, req.body);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getCategoryInfo = async (req, res, next) => {
	try {
		const response = await catalogService.getCategoryInfo(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const shopByCategory = async (req, res, next) => {
	try {
		const response = await catalogService.shopByCategory(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getTopBrandDeals = async (req, res, next) => {
	try {
		const response = await catalogService.getTopBrandDeals(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const quickSearch = async (req, res, next) => {
	try {
		const response = await catalogService.quickSearch(req.query);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

const getProductOffersBySlug = async (req, res, next) => {
	try {
		const response = await catalogService.getProductOffersBySlug(req.params);
		return res.status(httpStatus.OK).json(response);
	} catch (error) {
		return next(error);
	};
};

module.exports = {
	getCategoryTree,
	getProductById,
	getProductBySlug,
	getProductsByCategoryId,
	getProductsByCategorySlug,
	getCrossSellProductsById,
	getCrossSellProductsBySlug,
	getUpSellProductsById,
	getUpSellProductsBySlug,
	getRelatedProductsById,
	getRelatedProductsBySlug,
	getBannersByCategoryId,
	getBannersByCategorySlug,
	getCategoryBubbles,
	getCategoryInfo,
	getReviewsByProductId,
	getReviewsByProductSlug,
	createReview,
	shopByCategory,
	getTopBrandDeals,
	quickSearch,
	getProductOffersBySlug,
};
