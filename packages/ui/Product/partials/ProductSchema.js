import React from 'react';
import PropTypes from 'prop-types';

import generalMessages from 'constants/Messages/general.messages';
import routes from 'components/Global/Router/routes';
import JsonLD from 'components/Global/JsonLD';

const ProductSchema = ({ product }) => (
  <JsonLD
    schema={{
      '@context': 'http://schema.org',
      '@type': 'Product',
      name: product.title,
      image: product.thumb,
      numberOfItems: product.max_order_cap,
      url: `${routes.products.path}/${product.slug || product.id}`,
      brand: product.brand ? product.brand.title : '',
      offers: {
        '@type': 'Offer',
        availability: 'http://schema.org/InStock',
        price: product.discountPrice || product.price,
        priceCurrency: generalMessages.pricingUnit,
      },
    }}
  />
);

ProductSchema.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductSchema;
