const Response = require('../../utils/response.util');
const ServiceError = require('../../errors/service-error.util');
const magentoCatalogService = require('../magento/catalog.service')();
const customerService = require('../customer/customer.service')();
const redisClient = require('../../../config/redis');
const constants = require('../../utils/constants');

const catalogService = () => {

    const getDataFromCache = async (key) => {
        try {
            const cacheData = await redisClient.get(key);
            return JSON.parse(cacheData);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const setDataInCache = async (key, value) => {
        try {
            await redisClient.set(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const setCacheResponse = (data) => {
        let response = new Response()
        try {
            response.setResource('cache');
            response.setStatus(true);
            response.setCode(data.code);
            response.setMessage('success');
            response.setData(data);
        } catch (error) {
            console.error(error);
        };
        return response;
    };

    const setSuccessResponse = async (redisKey, data) => {
        let response = new Response()
        try {
            redisKey ? await setDataInCache(redisKey, data.data) : null;
            response.setResource('catalog');
            response.setStatus(true);
            response.setCode(data.code);
            response.setMessage(data.message);
            response.setData(data.data);
        } catch (error) {
            console.error(error);
        };
        return response;
    };

    const setFailureResponse = async (data) => {
        let response = new Response()
        try {
            response.setResource('catalog');
            response.setStatus(false);
            response.setCode(data.code);
            response.setMessage(data.message);
            response.setData(data.data);
        } catch (error) {
            console.error(error);
        };
        return response;
    };

    const getCategoryTree = async ({ categorySlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.CATEGORY_SLUG}:${categorySlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getCategoryTree(categorySlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getProductById = async ({ productId }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.PRODUCT_ID}:${productId}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getProductById(productId);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getProductBySlug = async ({ productSlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.PRODUCT_SLUG}:${productSlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getProductBySlug(productSlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getProductOffersBySlug = async ({ productSlug, platform }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.PRODUCT_SLUG}:offers:${productSlug}:${platform}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getProductOffersBySlug(productSlug, platform ? platform : "App");
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getProductsByCategoryId = async ({ categoryId }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.CATEGORY_ID}:${categoryId}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getProductsByCategoryId(categoryId);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getProductsByCategorySlug = async ({ categorySlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.CATEGORY_SLUG}:${categorySlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getProductsByCategorySlug(categorySlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getCrossSellProductsById = async ({ productId }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.CROSSSELL_PRODUCT_ID}:${productId}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getCrossSellProductsById(productId);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getCrossSellProductsBySlug = async ({ productSlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.CROSSSELL_PRODUCT_SLUG}:${productSlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getCrossSellProductsBySlug(productSlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getUpSellProductsById = async ({ productId }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.UPSELL_PRODUCT_ID}:${productId}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getUpSellProductsById(productId);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getUpSellProductsBySlug = async ({ productSlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.UPSELL_PRODUCT_SLUG}:${productSlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getUpSellProductsBySlug(productSlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getRelatedProductsById = async ({ productId }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.RELATED_PRODUCT_ID}:${productId}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getRelatedProductsById(productId);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getRelatedProductsBySlug = async ({ productSlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.RELATED_PRODUCT_SLUG}:${productSlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getRelatedProductsBySlug(productSlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getBannersByCategoryId = async ({ categoryId }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.BANNERS_CATEGORY_ID}:${categoryId}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getBannersByCategoryId(categoryId);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getBannersByCategorySlug = async ({ categorySlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.BANNERS_CATEGORY_SLUG}:${categorySlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getBannersByCategorySlug(categorySlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getCategoryBubbles = async () => {
        try {
            const data = await magentoCatalogService.getCategoryBubbles();
            return data.status ? setSuccessResponse(null, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getReviewsByProductId = async ({ productId }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.PRODUCT_REVIEWS_ID}:${productId}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getReviewsByProductId(productId);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getReviewsByProductSlug = async ({ productSlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.PRODUCT_REVIEWS_SLUG}:${productSlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getReviewsByProductSlug(productSlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const createReview = async ({ type }, { reviewData }) => {
        try {
            const mageId = type === 'customer' ? await customerService.getMageId(reviewData.customerId) : null;
            const data = await magentoCatalogService.createReview(type, mageId, reviewData);
            return data.status ? setSuccessResponse(null, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getCategoryInfo = async ({ categorySlug }) => {
        try {
            const data = await magentoCatalogService.getCategoryInfo(categorySlug);
            return data.status ? setSuccessResponse(null, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const shopByCategory = async ({ categorySlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.SHOP_BY_CATEGORY}:${categorySlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.shopByCategory(categorySlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const getTopBrandDeals = async ({ categorySlug }) => {
        try {
            const redisKey = `${constants.CATALOG_REDIS_KEY.TOP_BRAND_DEALS}:${categorySlug}`;
            const cacheData = await getDataFromCache(redisKey);
            if (cacheData) return setCacheResponse(cacheData);
            const data = await magentoCatalogService.getTopBrandDeals(categorySlug);
            return data.status ? setSuccessResponse(redisKey, data) : setFailureResponse(data);
        } catch (error) {
            console.error(error);
            throw new ServiceError(error);
        };
    };

    const quickSearch = async ({ query }) => {
        try {
            const data = await magentoCatalogService.quickSearch(query);
            return data;
        } catch (error) {
            throw new ServiceError(error);
        };
    };

    return {
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
        getReviewsByProductId,
        getReviewsByProductSlug,
        createReview,
        getCategoryInfo,
        shopByCategory,
        getTopBrandDeals,
        quickSearch,
        getProductOffersBySlug,
    };
};

module.exports = catalogService;
