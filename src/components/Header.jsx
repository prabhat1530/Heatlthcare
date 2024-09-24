import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import img from '../assets/logo_healthCare copy.jpeg';
import { signOut } from "firebase/auth";
import { auth } from '../assets/firebase'; // Your Firebase configuration

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-menu')) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      setUser(null);
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <div className="bg-white/70 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <img
              src={img}
              alt="Neuro Health Care Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            />

            <nav className="hidden md:flex space-x-4 lg:space-x-6">
              <Link className="text-sm lg:text-base hover:text-green-600 transition-colors" to="/">Home</Link>
              <Link className="text-sm lg:text-base hover:text-green-600 transition-colors" to="/services">Services</Link>
              <Link className="text-sm lg:text-base hover:text-green-600 transition-colors" to="/contact">Contact</Link>
              <Link className="text-sm lg:text-base hover:text-green-600 transition-colors" to="/feedback">Feedback</Link>
            </nav>

            <div className="flex items-center space-x-4 md:space-x-6">
              {user ? (
                <div className="relative profile-menu">
                  <button className="flex items-center space-x-2 focus:outline-none" onClick={toggleProfileMenu}>
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="User profile" className="w-8 h-8 rounded-full" />
                    ) : (
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                        {user.email[0].toUpperCase()}
                      </div>
                    )}
                    <span className="hidden md:inline text-sm text-gray-700">{user.displayName || user.email}</span>
                  </button>
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                      {/* <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Profile</Link> */}
                      <button onClick={handleSignOut} className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">Sign Out</button>
                    </div>
                  )}
                </div>
              ) : (
                <Link className="hidden md:block bg-green-600 text-white px-4 py-2 text-sm lg:text-base lg:px-6 lg:py-2 rounded-full hover:bg-green-700 transition-colors" to='/login'>Login</Link>
              )}

              <button onClick={toggleMenu} className="md:hidden text-2xl text-green-600 focus:outline-none">
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 bg-white/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center space-y-6 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'} md:hidden`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-green-600 focus:outline-none" aria-label="Close menu">
          <FaTimes />
        </button>
        <Link onClick={toggleMenu} className="text-xl hover:text-green-600 transition-colors" to="/">Home</Link>
        <Link onClick={toggleMenu} className="text-xl hover:text-green-600 transition-colors" to="/services">Services</Link>
        <Link onClick={toggleMenu} className="text-xl hover:text-green-600 transition-colors" to="/contact">Contact</Link>
        <Link onClick={toggleMenu} className="text-xl hover:text-green-600 transition-colors" to="/feedback">Feedback</Link>
        {user ? (
          <button onClick={() => { toggleMenu(); handleSignOut(); }} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">Sign Out</button>
        ) : (
          <Link onClick={toggleMenu} className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors" to='/login'>Login</Link>
        )}
      </div>
    </header>
  );
}
