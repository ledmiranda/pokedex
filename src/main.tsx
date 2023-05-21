import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PokemonInfoPage from './pages/pokemon-info.tsx';
import { Provider } from 'react-redux';
import store from './store/index.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'detail/:id',
    element: <PokemonInfoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
