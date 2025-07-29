'use client';

import { useState } from 'react';
import { navLinks } from './navLinks';
import clsx from 'clsx';
import Link from 'next/link';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden min-w-0">
        {/* Flex Container */}
        <div className="flex flex-wrap items-center justify-between py-4">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide truncate max-w-[80%]">
            ADmyBRAND
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-2xl text-gray-800 dark:text-gray-200"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden w-full px-4 pt-2 pb-4 bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;



