import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-l88na1x7soze7bl4.us.auth0.com -- domain
// IEbXh6EDLvGeZ8jAtKHdT9UELhfRYxdm -- clientID

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-l88na1x7soze7bl4.us.auth0.com"
    clientId="IEbXh6EDLvGeZ8jAtKHdT9UELhfRYxdm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <UserProvider>
      <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
    
);
