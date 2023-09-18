import {
  createBrowserRouter,
} from 'react-router-dom'
import HomePage from '@/pages/Home'
import RootLayout from '@/pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ]
  }
])

export default router;
