const routes = {
  root: '/',
  home: '/',
  categories: {
    path: '/categories',
    index: '/categories/:criterion',
  },
  campaigns: {
    path: '/campaigns',
    index: '/campaigns/:criterion',
  },
  brands: {
    path: '/brands',
    index: '/brands/:criterion',
  },
  tags: {
    path: '/tags',
    index: '/tags/:criterion',
  },
  search: {
    path: '/search',
    index: '/search/:term',
  },
  product: {
    path: '/products',
    index: '/products/:criterion',
  },
  checkout: {
    path: '/checkout',
    failure: '/checkout/failure',
    success: '/checkout/success',
  },
  basket: '/basket',
  products: {
    path: '/products',
    index: '/products/:criterion',
  },
  order: {
    feedback: '/order/feedback',
    followup: '/order/followup',
    receipt: '/order/receipt',
  },
  user: {
    profile: '/user/profile',
    orders: '/user/orders',
    credit: '/user/credit',
  },
  info: {
    about: '/about',
    faq: '/faq',
  },
};

export default routes;
