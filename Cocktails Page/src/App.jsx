import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError
} from './pages';
import { loader as landingLoader } from './pages/Landing.jsx';
import { loader as singleCocktailLoader } from './pages/Cocktail.jsx';
import { action as newsletterAction } from './pages/Newsletter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        action: newsletterAction,
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;