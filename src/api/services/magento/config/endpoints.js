// Magento Catalog Endpoints

module.exports = {
    BASE_URL: process.env.MAGE_URL,

    GET_CATEGORY_TREE: categorySlug => `/catalog/categories/slug/${categorySlug}/tree`,
    GET_ALL_PRODUCTS: `/catalog/products?searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][0][field]=status&searchCriteria[filterGroups][0][filters][0][value]=1&searchCriteria[filterGroups][1][filters][0][conditionType]=neq&searchCriteria[filterGroups][1][filters][0][field]=visibility&searchCriteria[filterGroups][1][filters][0][value]=1`,
    GET_PRODUCT_BY_ID: productId => `/catalog/products/id/${productId}`,
    GET_PRODUCT_BY_SLUG: productSlug => `/catalog/products/slug/${productSlug}`,
    GET_PRODUCTS_BY_CATEGORY_ID: categoryId => `/catalog/categories/id/${categoryId}/products`,
    GET_PRODUCTS_BY_CATEGORY_SLUG: categorySlug => `/catalog/categories/slug/${categorySlug}/products`,
    GET_PRODUCT_OFFERS_BY_SLUG: (productSlug, platform) => `/catalog/products/slug/${productSlug}/offers?platform=${platform}`,

    GET_CROSSSELL_PRODUCTS_BY_ID: productId => `/catalog/products/id/${productId}/cross-sell`,
    GET_CROSSSELL_PRODUCTS_BY_SLUG: productSlug => `/catalog/products/slug/${productSlug}/cross-sell`,
    GET_UPSELL_PRODUCTS_BY_ID: productId => `/catalog/products/id/${productId}/up-sell`,
    GET_UPSELL_PRODUCTS_BY_SLUG: productSlug => `/catalog/products/slug/${productSlug}/up-sell`,
    GET_RELATED_PRODUCTS_BY_ID: productId => `/catalog/products/id/${productId}/related`,
    GET_RELATED_PRODUCTS_BY_SLUG: productSlug => `/catalog/products/slug/${productSlug}/related`,

    GET_BANNERS_BY_CATEGORY_ID: id => `/catalog/categories/id/${id}/banners`,
    GET_BANNERS_BY_CATEGORY_SLUG: slug => `/catalog/categories/slug/${slug}/banners`,

    GET_REVIEWS_BY_PRODUCT_ID: productId => `/catalog/products/id/${productId}/reviews`,
    GET_REVIEWS_BY_PRODUCT_SLUG: productSlug => `/catalog/products/slug/${productSlug}/reviews`,
    CREATE_REVIEW: type => type === 'guest' ? `/review/guest/post` : `/review/customer/post`,

    QUICK_SEARCH: q => `/catalog/search?searchCriteria[requestName]=quick_search_container&searchCriteria[filterGroups][0][filters][0][field]=search_term&searchCriteria[filterGroups][0][filters][0][value]=${q}`,

    GET_CATEGORY_BUBBLES: `/catalog/categories/bubbles`,

    CATEGORY_INFO: categorySlug => `/catalog/categories/slug/${categorySlug}/info`,

    SHOP_BY_CATEGORY: categorySlug => `/catalog/categories/slug/${categorySlug}/shop-by-category`,
    TOP_BRAND_DEALS: categorySlug => `/catalog/categories/slug/${categorySlug}/top-brand-deals`,

};
