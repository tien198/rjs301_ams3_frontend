import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/1Root'
import Error from './routes/2Error'
import Home from './pages/home/Home'
import { Fallback } from './components/layout/Fallback'
//routes
import shopRoute from './routes/shopRoute'
// use for testing
import Test from './pages/0Test'

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
        loader: () => import('./pages/home/TrendingProduct').then(i => i.loader())
      },
      shopRoute,
      {
        path: 'detail/:productId',
        element: <Suspense fallback={<Fallback />}>
          <Detail />
        </Suspense>,
        loader: () => null
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
      },
      {
        path: 'test',
        element: <Test />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />
}

export default App
