
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootPage from './Pages/RootPage/RootPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import Register from './Register/Register';
import AddProduct from './Pages/AddProduct/AddProduct';
import AllProducts from './Pages/AllProducts/AllProducts';
import Update from './Pages/Update/Update';
import BrandCar from './Pages/BrandCar/BrandCar';
import MyCart from './Pages/MyCarts/MyCart';
import CartDetails from './Pages/CartDetails/CartDetails';
import PrivetRouter from './PriverRouter/PrivetRouter';
const router = createBrowserRouter([
  {
    path: "/",
    element:<RootPage></RootPage>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader:()=>fetch('https://assignment-10-server-3zpemp4ty-abdullah-1922.vercel.app/brands')
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>

      },
      {
        path:'/addProduct',
        element:<PrivetRouter><AddProduct></AddProduct></PrivetRouter> 
      },
      {
        path:'/allProducts',
        element:<AllProducts></AllProducts>,
        loader:()=>fetch('https://assignment-10-server-3zpemp4ty-abdullah-1922.vercel.app/allProducts')
      },
      {
        path:'/update/:id',
        element:<PrivetRouter><Update></Update></PrivetRouter> ,
        loader:({params})=>fetch(`https://assignment-10-server-3zpemp4ty-abdullah-1922.vercel.app/allProducts/${params.id}`)
      },
      {
        path:'product/:id',
        element:<BrandCar></BrandCar>,
        loader:({params})=>  fetch(`https://assignment-10-server-3zpemp4ty-abdullah-1922.vercel.app/products/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<CartDetails></CartDetails>,
        loader:({params})=>fetch(`https://assignment-10-server-3zpemp4ty-abdullah-1922.vercel.app/allProducts/${params.id}`)

      },
      {
        path:'/carts',
        element:<MyCart></MyCart>,
        loader:()=>fetch('https://assignment-10-server-3zpemp4ty-abdullah-1922.vercel.app/allCarts')
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
 <AuthProvider> 
  <RouterProvider router={router}>

  </RouterProvider>
  </AuthProvider>
 
 
)
