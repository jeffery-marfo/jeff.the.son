import { useState } from 'react';
import { User, Sun, Moon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="w-full bg-[#f9f9f9] dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center text-[#333] dark:text-white no-underline hover:opacity-80 transition-opacity duration-300">
            <User size={20} className="mr-2" />
            <span className="font-semibold text-lg">Jeff.The.Son</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-[#666] dark:text-gray-400 hover:text-[#333] dark:hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Color Toggle + Hamburger */}
          <div className="flex items-center space-x-4">
            {/* <button
              onClick={toggleMode}
              className="text-[#666] dark:text-gray-400 hover:text-[#333] dark:hover:text-white transition-colors duration-200"
            >
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button> */}

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-[#666] dark:text-gray-400"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Pop-out Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-start pt-16 px-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
          <div className="w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
            >
              <X size={24} />
            </button>

            {/* Logo */}
            <div className="mb-6 flex items-center">
              <User size={20} className="mr-2 text-gray-700 dark:text-white" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">Jeff.The.Son</span>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-5">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isActive(path)
                      ? 'text-amber-500 dark:text-amber-300'
                      : 'text-gray-800 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-400'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

