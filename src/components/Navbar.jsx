import { useState } from "react";
import Logo from '../assets/logo.png'
import Bg from '../assets/bg.jpg'
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuUser, setMenuUser] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md md:px-8">
      <div className="flex justify-between items-center h-16 px-4">
        <div className="text-2xl font-bold text-blue-600">
          <img src={Logo} className="inline w-30" alt=""/>
         
        </div>
        <div className="hidden md:flex space-x-6">
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " text-[#F3845E] font-semibold px-3 py-2 rounded-md transition"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md transition"
            }
          >
            Home
          </NavLink>
          <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#F3845E] font-semibold px-3 py-2 rounded-md transition"
            : "text-gray-700 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md transition"
        }
      >
        About
      </NavLink>
          

          <a href="#">
          </a>
          {/* <button onClick={() => setLoginOpen(!loginOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button> */}
        </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6 text-gray-600 hover:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* <button onClick={() => setLoginOpen(!loginOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:text-blue-200">
                {loginOpen ? (
                    <path stroke-linecap="round" stroke-linejoin="round" className="text-blue-500" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                ) : (
                    <path stroke-linecap="round" stroke-linejoin="round"  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                )}
                
            </svg>
          </button> */}
          </div>

          
        </div>

      {menuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100">About</a>
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100">Contact</a>
        </div>
      )}

{loginOpen && (
  <>
    {/* Backdrop */}
    <div
      onClick={() => setLoginOpen(false)}
      className="fixed top-16 left-0 right-0 bottom-0 bg-white/40 bg-opacity-30 z-40"
    ></div>

    {/* Sidebar */}
    <div className="fixed right-0 h-full bg-white shadow-lg z-50 w-full max-w-md p-8 transform transition-transform duration-300 ease-in-out">
      {menuUser ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </>
      ) : (
        <div className="text-gray-600 text-center">Saya sudah login</div>
      )}
    </div>
  </>
)}
    </nav>
  );
}

export default Navbar;
