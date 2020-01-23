import React from 'react';

// Route loadable components
import Home from 'components/Pages/Home/loadable';
import Categories from 'components/Pages/Categories/loadable';
import Checkout from 'components/Pages/Checkout/loadable/index.loadable';
import CheckoutSuccess from 'components/Pages/Checkout/loadable/success.loadable';
import CheckoutFailure from 'components/Pages/Checkout/loadable/failure.loadable';
import Basket from 'components/Pages/Basket/loadable';
import AboutUs from 'components/Pages/AboutUs/loadable';
import Faq from 'components/Pages/Faq/loadable';
import Profile from 'components/Pages/Profile/loadable';
import Credit from 'components/Pages/Credit/loadable';
import Orders from 'components/Pages/Orders/loadable';
import Search from 'components/Pages/Search/loadable';
import OrderFeedback from 'components/Pages/Order/loading/feedback.loading';
import OrderFollowup from 'components/Pages/Order/loading/followup.loading';
import OrderReceipt from 'components/Pages/Order/loading/receipt.loading';
import Campaigns from '../../Pages/Campaigns';
import Product from '../../Pages/Product';
import Brands from '../../Pages/Brands';
import Tags from '../../Pages/Tags';
import routes from './routes';

const routers = [
  {
    path: routes.root,
    exact: false,
    layout: false,
    Component: [
      {
        path: routes.root,
        exact: true,
        Component: <Home />,
      },
      {
        path: routes.categories.index,
        exact: false,
        Component: <Categories />,
      },
      {
        path: routes.campaigns.index,
        exact: false,
        Component: <Campaigns />,
      },
      {
        path: routes.brands.index,
        exact: false,
        Component: <Brands />,
      },
      {
        path: routes.tags.index,
        exact: false,
        Component: <Tags />,
      },
      {
        path: routes.search.index,
        exact: false,
        Component: <Search />,
      },
      {
        path: routes.products.index,
        exact: false,
        Component: <Product />,
      },
      {
        path: routes.checkout.path,
        permissions: ['hasBasket'],
        redirect: '',
        exact: true,
        Component: <Checkout />,
        layout: 'simple',
      },
      {
        path: routes.checkout.failure,
        permissions: ['isLoggedIn'],
        redirect: '',
        exact: true,
        Component: <CheckoutFailure />,
        layout: 'simple',
      },
      {
        path: routes.checkout.success,
        permissions: ['isLoggedIn'],
        redirect: '',
        exact: true,
        Component: <CheckoutSuccess />,
        layout: 'simple',
      },
      {
        path: routes.basket,
        permissions: ['hasBasket'],
        redirect: '',
        exact: true,
        Component: <Basket />,
        layout: 'simple',
      },
      {
        path: routes.user.credit,
        exact: true,
        Component: <Credit />,
      },
      {
        path: routes.user.profile,
        exact: true,
        Component: <Profile />,
      },
      {
        path: routes.user.orders,
        exact: true,
        Component: <Orders />,
      },
      {
        path: routes.info.faq,
        exact: true,
        Component: <Faq />,
      },
      {
        path: routes.info.about,
        exact: true,
        Component: <AboutUs />,
      },
      {
        path: routes.order.feedback,
        exact: true,
        Component: <OrderFeedback />,
      },
      {
        path: routes.order.followup,
        exact: true,
        Component: <OrderFollowup />,
      },
      {
        path: routes.order.receipt,
        exact: true,
        Component: <OrderReceipt />,
      },
    ],
  },
];

export default routers;
