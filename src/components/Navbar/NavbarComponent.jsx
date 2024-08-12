import React from 'react';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../features/auth/authSlice";
import { toggle } from "../../features/navbar/navbarSlice";

function NavbarComponent() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const isOpen = useSelector((state) => state.navbar.isOpen);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="bg-browninsh shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-7">
              <div>
                {/* Logo */}
                <Link to="/" className="flex items-center py-2 px-2">
                  <img src={logo} alt="Logo" className="h-18 w-20 mt-0 mr-5" />
                  <span className="font-semibold text-white text-lg">Blend & Brew</span>
                </Link>
              </div>
            </div>
            {/* Primary Navbar items wrapper */}
            <div className="flex justify-center flex-1">
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/" className="py-4 px-2 text-white border-b-4 hover:text-yellowish font-semibold">Home</Link>
                {authState.isAuthenticated && (
                  <>
                    <Link to="/recipe" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Recipe</Link>
                    
                    {authState.userRole === "admin" && (
                      <>
                    <Link to="/addIngredient" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Add Ingredient</Link>
                    <Link to="/addRecipe" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Add Recipe</Link>
                      </>
                    )}
                  </>
                )}
                <Link to="/about" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">About</Link>
                <Link to="/contact" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Contact</Link>
              </div>
            </div>
            {/* Secondary Navbar items */}
            <div className="hidden md:flex items-center space-x-3">
              {authState.isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="py-2 px-3 font-medium text-white rounded hover:bg-yellowish transition duration-300"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link to="/login" className="py-2 px-3 font-medium text-white rounded hover:bg-yellowish transition duration-300">Log In</Link>
                  <Link to="/signup" className="py-2 px-3 font-medium text-white rounded hover:bg-yellowish transition duration-300">Sign Up</Link>
                </>
              )}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={() => dispatch(toggle())}>
                <svg className="w-6 h-6 text-white hover:text-yellowish"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul>
              <li><Link to="/" className="block text-sm px-2 py-4 text-white hover:bg-yellowish font-semibold transition duration-300">Home</Link></li>
              {authState.isAuthenticated && (
                <>
                  <li><Link to="/recipe" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Recipe</Link></li>
                  {authState.userRole === "admin" && (
                    <>
                      <li><Link to="/addIngredient" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Add Ingredient</Link></li>
                      <li><Link to="/addRecipe" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Add Recipe</Link></li>
                    </>
                  )}
                </>
              )}
              <li><Link to="/about" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">About</Link></li>
              <li><Link to="/contact" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Contact</Link></li>
              {authState.isAuthenticated ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300"
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <>
                  <li><Link to="/login" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Log In</Link></li>
                  <li><Link to="/signup" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Sign Up</Link></li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavbarComponent;
