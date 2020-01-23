export const normalizeProductToNewApi = product => {
  const {
    id,
    title,
    price,
    discount,
    discountRatio,
    images,
    capacity
  } = product;

  const normalizedImages = [];
  if (images) {
    images.forEach(image => {
      const { imageThumbnailSrc, imageSrc } = image;
      normalizedImages.push({
        thumb: imageThumbnailSrc,
        image: imageSrc
      });
    });
  }

  return {
    id,
    title,
    price,
    max_order_cap   : capacity,
    discount_percent: discountRatio,
    discounted_price: price - discount,
    images          : normalizedImages
  };
};
/* eslint-disable camelcase */
export const unnormalizeProductToOldApi = product => {
  const {
    id,
    title,
    max_order_cap: capacity,
    price,
    discount_percent: discountRatio,
    discounted_price,
    images,
    needs_server_approval
  } = product;

  const unnormalizedImages = [];
  if (images) {
    images.forEach(image => {
      const { thumb: imageThumbnailSrc, image: imageSrc } = image;
      unnormalizedImages.push({
        imageThumbnailSrc,
        imageSrc
      });
    });
  }

  return {
    id,
    title,
    price,
    discount      : price - discounted_price,
    discountRatio,
    productId     : null,
    containerPrice: 0,
    vat           : 0,
    images        : unnormalizedImages,
    capacity,
    needs_server_approval
  };
};
/* eslint-enable camelcase */
export const normalizeProductsToNewApi = products => {
  const normalizedProducts = [];
  products.forEach(product => {
    normalizedProducts.push(normalizeProductToNewApi(product));
  });
  return normalizedProducts;
};
