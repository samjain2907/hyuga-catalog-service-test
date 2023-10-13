const Response = require('../../utils/response.util');
const axios = require('./config/axios');
const endpoints = require('./config/endpoints');
const { errorResponseGenerator } = require('../../errors/error-response-generator');

const catalogService = () => {

    const setSuccessResponse = (mageResponse) => {
        let response = new Response()
        try {
            response.setResource('catalog');
            response.setStatus(true);
            response.setMessage(mageResponse.data.message);
            response.setData(mageResponse.data || mageResponse.data.data);
            response.setCode(mageResponse.status)
        } catch (error) {
            response = errorResponseGenerator(error, response);
        };
        return response;
    };

    const setFailureResponse = (error) => {
        try {
            let response = new Response();
            response = errorResponseGenerator(error, response);
            return response;
        } catch (error) {
            console.error(error);
        }
    };

    const getCategoryTree = async (categorySlug) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_CATEGORY_TREE(categorySlug));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getProductById = async (productId) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_PRODUCT_BY_ID(productId));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getProductBySlug = async (productSlug) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_PRODUCT_BY_SLUG(productSlug));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getProductOffersBySlug = async (productSlug, platform) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_PRODUCT_OFFERS_BY_SLUG(productSlug, platform));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getProductsByCategoryId = async (categoryId) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_PRODUCTS_BY_CATEGORY_ID(categoryId));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getProductsByCategorySlug = async (categorySlug) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_PRODUCTS_BY_CATEGORY_SLUG(categorySlug));
            const response = setSuccessResponse(mageResponse);
            const sortedProducts = response.data.data.products.sort(
                (p1, p2) => (p1.stock_info.is_in_stock < p2.stock_info.is_in_stock) ? 1 : (p1.stock_info.is_in_stock > p2.stock_info.is_in_stock) ? -1 : 0
            );
            response.data.data.products = sortedProducts;
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getCrossSellProductsById = async (productId) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_CROSSSELL_PRODUCTS_BY_ID(productId));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getCrossSellProductsBySlug = async (productSlug) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_CROSSSELL_PRODUCTS_BY_SLUG(productSlug));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getUpSellProductsById = async (productId) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_UPSELL_PRODUCTS_BY_ID(productId));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getUpSellProductsBySlug = async (productSlug) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_UPSELL_PRODUCTS_BY_SLUG(productSlug));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getRelatedProductsById = async (productId) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_RELATED_PRODUCTS_BY_ID(productId));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getRelatedProductsBySlug = async (productSlug) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_RELATED_PRODUCTS_BY_SLUG(productSlug));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getBannersByCategoryId = async (categoryId) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_BANNERS_BY_CATEGORY_ID(categoryId));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getBannersByCategorySlug = async (categoryId) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_BANNERS_BY_CATEGORY_SLUG(categoryId));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getCategoryBubbles = async () => {
        try {
            const mageResponse = await axios.get(endpoints.GET_CATEGORY_BUBBLES);
            const response = setSuccessResponse(mageResponse.data);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getReviewsByProductId = async (productId) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_REVIEWS_BY_PRODUCT_ID(productId));
            const response = setSuccessResponse(mageResponse.data);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getReviewsByProductSlug = async (productSlug) => {
        try {
            const mageResponse = await axios.get(endpoints.GET_REVIEWS_BY_PRODUCT_SLUG(productSlug));
            const response = setSuccessResponse(mageResponse.data);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const createReview = async (type, mageId, reviewData) => {
        try {
            type === 'customer' ? reviewData.customerId = mageId : null;
            const mageResponse = await axios.post(endpoints.CREATE_REVIEW(type), reviewData);
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getCategoryInfo = async (menuSlug) => {
        try {
            const mageResponse = await axios.get(endpoints.CATEGORY_INFO(menuSlug));
            const response = setSuccessResponse(mageResponse.data);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const shopByCategory = async (categorySlug) => {
        try {
            const mageResponse = await axios.get(endpoints.SHOP_BY_CATEGORY(categorySlug));
            const response = setSuccessResponse(mageResponse.data);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const getTopBrandDeals = async (categorySlug) => {
        try {
            const mageResponse = await axios.get(endpoints.TOP_BRAND_DEALS(categorySlug));
            const response = setSuccessResponse(mageResponse.data);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
        };
    };

    const quickSearch = async (query) => {
        try {
            const mageResponse = await axios.get(endpoints.QUICK_SEARCH(query));
            const response = setSuccessResponse(mageResponse);
            return response;
        } catch (error) {
            const failure = setFailureResponse(error);
            return failure;
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
