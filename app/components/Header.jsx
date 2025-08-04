'use client';
import { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mensDropdownOpen, setMensDropdownOpen] = useState(false);
  const [womensDropdownOpen, setWomensDropdownOpen] = useState(false);
  const [saleDropdownOpen, setSaleDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Men's categories and subcategories
  const mensCategories = {
    'business-professional': {
      title: 'BUSINESS PROFESSIONAL',
      items: ['JACKETS', 'SUITS', 'SHOP ALL']
    },
    'outerwear': {
      title: 'OUTERWEAR',
      items: ['SHOP ALL']
    },
    'leathers': {
      title: 'LEATHERS',
      items: ['SHOP ALL']
    },
    'sport-shirts': {
      title: 'SPORT SHIRTS',
      items: ['HAUPT-GERMANY', 'SILK SHIRTS', 'SHOP ALL']
    },
    'sweaters': {
      title: 'SWEATERS',
      items: ['CASHMERE', 'FANCY DESIGNS', 'SHOP ALL']
    },
    'shoes': {
      title: 'SHOES',
      items: ['BRUNO MAGLI', 'TRASK', 'EXOTIC SKINS', 'URBAN SPORT', 'SHOP ALL']
    },
    'accessories': {
      title: 'ACCESSORIES',
      items: ['TIES', 'EXTRA LONG TIES', 'BOW TIES', 'CUFF LINKS', 'SHOP ALL']
    },
    'belts': {
      title: 'BELTS',
      items: ['SHOP ALL']
    },
    'sale': {
      title: 'SALE',
      items: ['SHOP ALL'],
      isSale: true
    }
  };

  // Women's categories and subcategories
  const womensCategories = {
    'leathers': {
      title: 'LEATHERS',
      items: ['SHORT JACKETS', 'LONG JACKETS', 'SHOP ALL']
    },
    'jackets': {
      title: 'JACKETS',
      items: ['BUSINESS & PROFESSIONAL', 'SPECIAL OCCASIONS', 'CASUAL JACKETS', 'SHACKETS', 'SHOP ALL']
    },
    'tops': {
      title: 'TOPS',
      items: ['BLOUSES', 'SHACKETS', 'SHOP ALL']
    },
    'knitwear': {
      title: 'KNITWEAR',
      items: ['CASHMERE', 'SHOP ALL']
    },
    'coats': {
      title: 'COATS & OUTERWEAR',
      items: ['RAINWEAR', 'SHOP ALL']
    },
    'dresses': {
      title: 'DRESSES',
      items: ['DAY DRESSES', 'PARTY & COCKTAIL DRESSES', 'GOWNS', 'SHOP ALL']
    },
    'pool': {
      title: 'POOL & LOUNGEWEAR',
      items: ['SHOP ALL']
    },
    'bottoms': {
      title: 'BOTTOMS',
      items: ['DENIM', 'SHOP ALL']
    },
    'accessories': {
      title: 'ACCESSORIES',
      items: ['PURSE', 'SHOP ALL']
    },
    'designers': {
      title: 'DESIGNERS',
      items: ['KINROSS', 'FRANK LYMAN', 'HALE BOB', 'KOMAROV', 'TADASHI SHOJI', 'ANORAK', 'SHOP ALL']
    },
    'sale': {
      title: 'SALE',
      items: ['SHOP ALL'],
      isSale: true
    }
  };

  return (
    <header className="w-full border-b border-gray-200 shadow-sm bg-white relative">
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
        <nav className="hidden md:flex items-center gap-16 text-xl text-black" aria-label="Main navigation">
          <div 
            className="relative"
            onMouseEnter={() => setMensDropdownOpen(true)}
            onMouseLeave={() => {
              setMensDropdownOpen(false);
              setActiveCategory(null);
            }}
          >
            <a href="/mens" className="hover:underline cursor-pointer">Men</a>
            {mensDropdownOpen && (
              <div 
                className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md z-50 min-w-[600px]" 
                role="menu" 
                aria-label="Men's clothing categories"
                onMouseEnter={() => setMensDropdownOpen(true)}
                onMouseLeave={() => {
                  setMensDropdownOpen(false);
                  setActiveCategory(null);
                }}
              >
                <div className="flex">
                  {/* Categories Column */}
                  <div className="w-1/2 p-6 border-r border-gray-200">
                    <h3 className="font-bold text-sm mb-4 uppercase text-black">CATEGORIES</h3>
                    <ul className="space-y-2">
                      {Object.entries(mensCategories).map(([key, category]) => (
                        <li key={key}>
                          <button
                            className={`w-full text-left text-xs uppercase cursor-pointer hover:text-purple-600 ${
                              activeCategory === key ? 'text-purple-600' : 'text-black'
                            } ${category.isSale ? 'text-red-600 font-bold' : ''}`}
                            onMouseEnter={() => setActiveCategory(key)}
                            role="menuitem"
                            aria-label={`${category.title} category`}
                          >
                            {category.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Subcategories Column */}
                  <div className="w-1/2 p-6">
                    {activeCategory && mensCategories[activeCategory] && (
                      <>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black">
                          {mensCategories[activeCategory].title}
                        </h3>
                        <ul className="space-y-2">
                          {mensCategories[activeCategory].items.map((item, index) => (
                            <li key={index}>
                              <a 
                                href={`/mens/${activeCategory}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-xs uppercase text-black hover:text-purple-600 cursor-pointer"
                                role="menuitem"
                                aria-label={item}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div 
            className="relative"
            onMouseEnter={() => setWomensDropdownOpen(true)}
            onMouseLeave={() => {
              setWomensDropdownOpen(false);
              setActiveCategory(null);
            }}
          >
            <a href="/womens" className="hover:underline cursor-pointer">Women</a>
            {womensDropdownOpen && (
              <div 
                className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md z-50 min-w-[600px]" 
                role="menu" 
                aria-label="Women's clothing categories"
                onMouseEnter={() => setWomensDropdownOpen(true)}
                onMouseLeave={() => {
                  setWomensDropdownOpen(false);
                  setActiveCategory(null);
                }}
              >
                <div className="flex">
                  {/* Categories Column */}
                  <div className="w-1/2 p-6 border-r border-gray-200">
                    <h3 className="font-bold text-sm mb-4 uppercase text-black">CATEGORIES</h3>
                    <ul className="space-y-2">
                      {Object.entries(womensCategories).map(([key, category]) => (
                        <li key={key}>
                          <button
                            className={`w-full text-left text-xs uppercase cursor-pointer hover:text-purple-600 ${
                              activeCategory === key ? 'text-purple-600' : 'text-black'
                            } ${category.isSale ? 'text-red-600 font-bold' : ''}`}
                            onMouseEnter={() => setActiveCategory(key)}
                            role="menuitem"
                            aria-label={`${category.title} category`}
                          >
                            {category.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Subcategories Column */}
                  <div className="w-1/2 p-6">
                    {activeCategory && womensCategories[activeCategory] && (
                      <>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black">
                          {womensCategories[activeCategory].title}
                        </h3>
                        <ul className="space-y-2">
                          {womensCategories[activeCategory].items.map((item, index) => (
                            <li key={index}>
                              <a 
                                href={`/womens/${activeCategory}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-xs uppercase text-black hover:text-purple-600 cursor-pointer"
                                role="menuitem"
                                aria-label={item}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <a href="/stores" className="hover:underline cursor-pointer">Stores</a>
          
          <div 
            className="relative"
            onMouseEnter={() => setSaleDropdownOpen(true)}
            onMouseLeave={() => setSaleDropdownOpen(false)}
          >
            <a href="/sale" className="hover:underline cursor-pointer">Sale</a>
            {saleDropdownOpen && (
              <div 
                className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md z-50 min-w-[400px]" 
                role="menu" 
                aria-label="Sale categories"
                onMouseEnter={() => setSaleDropdownOpen(true)}
                onMouseLeave={() => setSaleDropdownOpen(false)}
              >
                <div className="p-6">
                  <h3 className="font-bold text-sm mb-4 uppercase text-black">SALE CATEGORIES</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-xs mb-3 uppercase text-black">WOMEN'S SALE</h4>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="/womens/sale" 
                            className="text-xs uppercase text-black hover:text-purple-600 cursor-pointer"
                            role="menuitem"
                            aria-label="Women's sale items"
                          >
                            SHOP ALL WOMEN'S SALE
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs mb-3 uppercase text-black">MEN'S SALE</h4>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="/mens/sale" 
                            className="text-xs uppercase text-black hover:text-purple-600 cursor-pointer"
                            role="menuitem"
                            aria-label="Men's sale items"
                          >
                            SHOP ALL MEN'S SALE
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
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
          className="md:hidden text-3xl cursor-pointer text-black"
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
          className="md:hidden px-4 pb-4 flex flex-col gap-4 text-base text-black"
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