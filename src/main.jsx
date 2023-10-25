
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
const router = createBrowserRouter([
  {
    path: "/",
    element:<RootPage></RootPage>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/brands')
        
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
        element:<AddProduct></AddProduct>
      },
      {
        path:'/allProducts',
        element:<AllProducts></AllProducts>,
        loader:()=>fetch('http://localhost:5000/allProducts')
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/allProducts/${params.id}`)
      },
      {
        path:'product/:id',
        element:<BrandCar></BrandCar>,
        loader:({params})=>  fetch(`http://localhost:5000/products/${params.id}`)
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
