import type { RouteObject } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import HomePage from '../pages/HomePage'

export const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]
