import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/1Root'
import Error from './pages/2Error'
import Home from './pages/Home'
import { Fallback } from './components/layout/Fallback'

const Shop = lazy(() => import('./pages/Shop'))
const Detail = lazy(() => import('./pages/Detail'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        id: 'home-page',
        loader: () => import('./pages/Home').then(i => i.loader())
      },
      {
        path: 'shop',
        element: <Suspense fallback={<Fallback />}>
          <Shop />
        </Suspense>
      },
      {
        path: 'detail/:productId',
        element: <Suspense fallback={<Fallback />}>
          <Detail />
        </Suspense>
      },
      {
        path: 'cart',
        element: <Suspense fallback={<Fallback />}>
          <Cart />
        </Suspense>
      },
      {
        path: 'checkout',
        element: <Suspense fallback={<Fallback />}>
          <Checkout />
        </Suspense>
      },
      {
        path: 'login',
        element: <Suspense fallback={<Fallback />}>
          <Login />
        </Suspense>
      },
      {
        path: 'register',
        element: <Suspense fallback={<Fallback />}>
          <Register />
        </Suspense>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />
}

export default App
