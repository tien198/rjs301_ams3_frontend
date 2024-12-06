import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Error from './pages/Error'
import Home from './pages/home'
import { PageUrlsList } from './ultil/ultilEnums'
import { Fallback } from './components/layout/Fallback'
//routes
import shopRoute from './routes/shopRoute'
import cartRoute from './routes/cartRoute'

const Detail = lazy(() => import('./pages/detail'))
const Signup = lazy(() => import('./pages/authentication/Signup'))
const Login = lazy(() => import('./pages/authentication/Login'))



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
        loader: (args) => import('./pages/home/TrendingProduct').then(i => i.loader(args))
      },
      shopRoute,
      cartRoute,
      {
        path: `${PageUrlsList.Detail}/:productId`,
        element: <Suspense fallback={<Fallback />}>
          <Detail />
        </Suspense>,
        loader: (args) => import('./pages/detail').then(i => i.loader(args))
      },
      {
        path: PageUrlsList.Login,
        element: <Suspense fallback={<Fallback />}>
          <Login />
        </Suspense>,
        loader: (args) => import('./pages/authentication/Login').then(i => i.loader(args)),
        action: (args) => import('./pages/authentication/Login').then(i => i.action(args))
      },
      {
        path: PageUrlsList.Signup,
        element: <Suspense fallback={<Fallback />}>
          <Signup />
        </Suspense>,
        loader: (args) => import('./pages/authentication/Signup').then(i => i.loader(args)),
        action: (args) => import('./pages/authentication/Signup').then(i => i.action(args))
      },
      {
        path: PageUrlsList.Logout,
        action: () => import('./pages/authentication/Logout').then(i => i.action())
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />
}

export default App
