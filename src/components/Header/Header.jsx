import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 border-b border-gray-200">
      <nav className="bg-white w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to='/' className="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse">
            <p className="h4 mr-6 font-semibold">Logo</p>
          </Link>
          <div className="flex p-2 space-x-2 font-medium">
            <NavLink to='' className={({isActive}) => `py-1 px-2 text-sm ${isActive ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100" } rounded` }>
              Home
            </NavLink>
            <NavLink to='/about' className={({isActive}) => `py-1 px-2 text-sm ${isActive ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100" } rounded` }>
              About
            </NavLink>
            <NavLink to='/contact' className={({isActive}) => `py-1 px-2 text-sm ${isActive ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100" } rounded` }>
              Contact
            </NavLink>
            <NavLink to='/github' className={({isActive}) => `py-1 px-2 text-sm ${isActive ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100" } rounded` }>
              Github
            </NavLink>
          </div>
          <div className="flex space-x-2">
            <Link to='#' className="py-1 px-2 text-sm rounded-lg text-gray-900 hover:bg-gray-100">
              Log in
            </Link>
            <Link to='#' className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg py-1 px-2 text-sm text-center">
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

