import { NavLink } from "react-router-dom";

const Navbar = () => {
 
    const NavLinks= <>
     <li > <NavLink to={'/'}><button>Home</button> </NavLink></li>
    <li><NavLink to={'/login'}><button>Login</button> </NavLink></li> 
    <li><NavLink to={'/addProduct'}><button>Add Product</button> </NavLink></li> 
    <li><NavLink to={'/allProducts'}><button>All Products</button> </NavLink></li> 
    <li><NavLink to={'/carts'}><button>My Cart</button> </NavLink></li> 
    
    
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
    <a className="btn btn-ghost  normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
      {
        NavLinks
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;