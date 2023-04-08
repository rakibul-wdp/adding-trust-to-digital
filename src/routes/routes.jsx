import Main from '../Layout/Main';
import Home from '../pages/Home/Home';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
