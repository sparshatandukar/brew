import React, { useState } from 'react';
import logo from '../image/logo.png';
import { Link , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../features/auth/authSlice";
import { toggle } from "../../features/navbar/navbarSlice";
import { FaUserCircle } from 'react-icons/fa';

function NavbarComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const isOpen = useSelector((state) => state.navbar.isOpen);

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <>
      <nav className="bg-browninsh shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-7">
              <div>
                <Link to="/" className="flex items-center py-2 px-2">
                  <img src={logo} alt="Logo" className="h-18 w-20 mt-0 mr-5" />
                  <span className="font-semibold text-white text-lg">Blend & Brew</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-1 justify-center items-center space-x-4">
              <Link to="/" className="py-4 px-2 text-white border-b-4 hover:text-yellowish font-semibold">Home</Link>
              {authState.isAuthenticated ? (
                <>
                  {authState.userRole === "admin" ? (
                    <>
                      <Link to="/recipe" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Recipe</Link>
                      <Link to="/addIngredient" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Add Ingredient</Link>
                      <Link to="/addRecipe" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Add Recipe</Link>
                      <Link to="/addCategory" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Add Category</Link>
                    </>
                  ) : (
                    <>
                      <Link to="/recipe" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Recipe</Link>
                      <Link to="/about" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">About</Link>
                      <Link to="/contact" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Contact</Link>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link to="/about" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">About</Link>
                  <Link to="/contact" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Contact</Link>
                </>
              )}
            </div>
            <div className="flex items-center space-x-3">
              {authState.isAuthenticated ? (
                <div className="relative">
                  <FaUserCircle
                    className="text-white text-2xl cursor-pointer hover:text-yellowish transition duration-300"
                    onClick={toggleProfileDropdown}
                  />
                  {profileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                      <Link
                        to="/profile"
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="py-2 px-3 font-medium text-white rounded hover:bg-yellowish transition duration-300">Log In</Link>
                  <Link to="/signup" className="py-2 px-3 font-medium text-white rounded hover:bg-yellowish transition duration-300">Sign Up</Link>
                </>
              )}
            </div>
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
        {isOpen && (
          <div className="md:hidden">
            <ul>
              <li><Link to="/" className="block text-sm px-2 py-4 text-white hover:bg-yellowish font-semibold transition duration-300">Home</Link></li>
              {authState.isAuthenticated ? (
                <>
                  {authState.userRole === "admin" ? (
                    <>
                      <li><Link to="/recipe" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Recipe</Link></li>
                      <li><Link to="/addIngredient" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Add Ingredient</Link></li>
                      <li><Link to="/addRecipe" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Add Recipe</Link></li>
                      <li><Link to="/addCategory" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Add Category</Link></li>
                    </>
                  ) : (
                    <>
                      <li><Link to="/recipe" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Recipe</Link></li>
                      <li><Link to="/about" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">About</Link></li>
                      <li><Link to="/contact" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Contact</Link></li>
                    </>
                  )}
                </>
              ) : (
                <>
                  <li><Link to="/about" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">About</Link></li>
                  <li><Link to="/contact" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Contact</Link></li>
                  <li><Link to="/login" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Log In</Link></li>
                  <li><Link to="/signup" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Sign Up</Link></li>
                </>
              )}
              {authState.isAuthenticated && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300"
                  >
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavbarComponent;
