import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  console.log(user);
  const handleSignOut=()=>{
    logOut()
  }
 
    const NavLinks= <>
     <li > <NavLink to={'/'}><button>Home</button> </NavLink></li>
   
    <li><NavLink to={'/addProduct'}><button>Add Product</button> </NavLink></li> 
    <li><NavLink to={'/allProducts'}><button>All Products</button> </NavLink></li> 
    <li><NavLink to={'/carts'}><button>My Cart</button> </NavLink></li> 
     <li><NavLink to={'/login'}><button>Login</button> </NavLink></li> 
    
    
    </>

    return (
        <div className="font-bold text-white">
           <div className="navbar h-[64px] rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu bg-gradient-to-r from-fuchsia-500 to-pink-500  menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
       {
        NavLinks
       }
      </ul>
    </div>
   <img className="w-[60px] lg:ml-10 "  src="https://i.ibb.co/mhdSzWB/logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
      {
        NavLinks
      }
    </ul>
  </div>
  <div className="navbar-end">
   {
    user? <div className="flex items-center gap-3"> <p>{user.displayName}</p>
     <button onClick={handleSignOut} className="bg-orange-900 px-2 text-sm rounded-2xl p-2">SIGN OUT</button>
    </div>:<NavLink to={'/login'}><button className="bg-blue-500 border-transparent rounded-2xl p-3 py-2">Login</button> </NavLink>
   }
  </div>
</div>
        </div>
    );
};

export default Navbar;