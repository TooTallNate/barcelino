'use client';
import { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 shadow-sm bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center" aria-label="Go to homepage">
        <img
  src="/barcelino-logo.png"
  alt="Barcelino Logo"
  className="h-14 w-auto"
/>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xl text-black" aria-label="Main navigation">
          <a href="/mens" className="hover:underline cursor-pointer">Men</a>
          <a href="/womens" className="hover:underline cursor-pointer">Women</a>
          <a href="/stores" className="hover:underline cursor-pointer">Stores</a>
          <a href="/sale" className="hover:underline cursor-pointer">Sale</a>
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/careers"
            className="bg-purple-600 text-white px-4 py-1.5 rounded hover:bg-purple-700 text-sm cursor-pointer"
          >
            Careers
          </a>
          <button aria-label="Search" className="text-black text-xl hover:opacity-70 cursor-pointer">
            <FaSearch />
          </button>
          <button aria-label="Cart" className="text-black text-xl hover:opacity-70 cursor-pointer">
            <FaShoppingCart />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          className="md:hidden px-4 pb-4 flex flex-col gap-2 text-base text-black"
          aria-label="Mobile navigation"
        >
          <a href="/mens" className="hover:underline cursor-pointer">Men</a>
          <a href="/womens" className="hover:underline cursor-pointer">Women</a>
          <a href="/stores" className="hover:underline cursor-pointer">Stores</a>
          <a href="/sale" className="hover:underline cursor-pointer">Sale</a>
          <a
            href="/careers"
            className="bg-purple-600 text-white px-4 py-1.5 rounded hover:bg-purple-700 cursor-pointer"
          >
            Careers
          </a>
        </nav>
      )}
    </header>
  );
}