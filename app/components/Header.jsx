'use client';
import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'; // icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mensDropdownOpen, setMensDropdownOpen] = useState(false);
  const [womensDropdownOpen, setWomensDropdownOpen] = useState(false);
  const [saleDropdownOpen, setSaleDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileMensOpen, setMobileMensOpen] = useState(false);
  const [mobileWomensOpen, setMobileWomensOpen] = useState(false);
  const [mobileSaleOpen, setMobileSaleOpen] = useState(false);

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
                            className={`w-full text-left text-xs uppercase cursor-pointer hover:text-amber-600 ${
                              activeCategory === key ? 'text-amber-600' : 'text-black'
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
                                className="text-xs uppercase text-black hover:text-amber-600 cursor-pointer"
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
                            className={`w-full text-left text-xs uppercase cursor-pointer hover:text-amber-600 ${
                              activeCategory === key ? 'text-amber-600' : 'text-black'
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
                                className="text-xs uppercase text-black hover:text-amber-600 cursor-pointer"
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
                            className="text-xs uppercase text-black hover:text-amber-600 cursor-pointer"
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
                            className="text-xs uppercase text-black hover:text-amber-600 cursor-pointer"
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
            className="bg-black text-white px-4 py-1.5 rounded hover:bg-gray-600 text-sm cursor-pointer"
          >
            Careers
          </a>
          <button aria-label="Search" className="text-black text-xl hover:opacity-70 cursor-pointer">
            <FaSearch />
          </button>
          <a 
            href="/account" 
            aria-label="My Account" 
            tabIndex="0"
            className="text-black text-xl hover:opacity-70 cursor-pointer"
          >
            <FaUser />
          </a>
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
          className="md:hidden px-4 pb-4 flex flex-col gap-2 text-base text-black bg-white border-t border-gray-200"
          aria-label="Mobile navigation"
          role="navigation"
        >
          {/* Men's Mobile Dropdown */}
          <div className="border-b border-gray-200 pb-2">
            <button
              onClick={() => setMobileMensOpen(!mobileMensOpen)}
              className="flex items-center justify-between w-full text-left hover:underline cursor-pointer py-2"
              aria-expanded={mobileMensOpen}
              aria-controls="mobile-mens-submenu"
              aria-label="Toggle Men's categories"
            >
              <span className="font-semibold">Men</span>
              <span className="text-lg transition-transform duration-200" aria-hidden="true">
                {mobileMensOpen ? '−' : '+'}
              </span>
            </button>
            <div 
              id="mobile-mens-submenu"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileMensOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
              role="region"
              aria-labelledby="mobile-mens-button"
            >
              <div className="mt-2 ml-4 space-y-3">
                {Object.entries(mensCategories).map(([key, category]) => (
                  <div key={key} className="border-l-2 border-gray-200 pl-3">
                    <h4 className="font-bold text-sm uppercase text-black mb-2" id={`mens-${key}-header`}>
                      {category.title}
                    </h4>
                    <ul className="space-y-1 ml-2" role="group" aria-labelledby={`mens-${key}-header`}>
                      {category.items.map((item, index) => (
                        <li key={index}>
                          <a 
                            href={`/mens/${key}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`text-xs uppercase hover:text-amber-600 cursor-pointer block py-1 ${
                              category.isSale ? 'text-red-600 font-bold' : 'text-black'
                            }`}
                            role="menuitem"
                            aria-label={`${item} in ${category.title}`}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Women's Mobile Dropdown */}
          <div className="border-b border-gray-200 pb-2">
            <button
              onClick={() => setMobileWomensOpen(!mobileWomensOpen)}
              className="flex items-center justify-between w-full text-left hover:underline cursor-pointer py-2"
              aria-expanded={mobileWomensOpen}
              aria-controls="mobile-womens-submenu"
              aria-label="Toggle Women's categories"
            >
              <span className="font-semibold">Women</span>
              <span className="text-lg transition-transform duration-200" aria-hidden="true">
                {mobileWomensOpen ? '−' : '+'}
              </span>
            </button>
            <div 
              id="mobile-womens-submenu"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileWomensOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
              role="region"
              aria-labelledby="mobile-womens-button"
            >
              <div className="mt-2 ml-4 space-y-3">
                {Object.entries(womensCategories).map(([key, category]) => (
                  <div key={key} className="border-l-2 border-gray-200 pl-3">
                    <h4 className="font-bold text-sm uppercase text-black mb-2" id={`womens-${key}-header`}>
                      {category.title}
                    </h4>
                    <ul className="space-y-1 ml-2" role="group" aria-labelledby={`womens-${key}-header`}>
                      {category.items.map((item, index) => (
                        <li key={index}>
                          <a 
                            href={`/womens/${key}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`text-xs uppercase hover:text-amber-600 cursor-pointer block py-1 ${
                              category.isSale ? 'text-red-600 font-bold' : 'text-black'
                            }`}
                            role="menuitem"
                            aria-label={`${item} in ${category.title}`}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stores Link */}
          <div className="border-b border-gray-200 pb-2">
            <a 
              href="/stores" 
              className="hover:underline cursor-pointer block py-2 font-semibold"
              role="menuitem"
              aria-label="Find our stores"
            >
              Stores
            </a>
          </div>

          {/* Sale Mobile Dropdown */}
          <div className="border-b border-gray-200 pb-2">
            <button
              onClick={() => setMobileSaleOpen(!mobileSaleOpen)}
              className="flex items-center justify-between w-full text-left hover:underline cursor-pointer py-2"
              aria-expanded={mobileSaleOpen}
              aria-controls="mobile-sale-submenu"
              aria-label="Toggle Sale categories"
            >
              <span className="font-semibold">Sale</span>
              <span className="text-lg transition-transform duration-200" aria-hidden="true">
                {mobileSaleOpen ? '−' : '+'}
              </span>
            </button>
            <div 
              id="mobile-sale-submenu"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileSaleOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
              role="region"
              aria-labelledby="mobile-sale-button"
            >
              <div className="mt-2 ml-4 space-y-3">
                <div className="border-l-2 border-gray-200 pl-3">
                  <h4 className="font-bold text-sm uppercase text-black mb-2" id="womens-sale-header">
                    WOMEN'S SALE
                  </h4>
                  <ul className="space-y-1 ml-2" role="group" aria-labelledby="womens-sale-header">
                    <li>
                      <a 
                        href="/womens/sale" 
                        className="text-xs uppercase text-black hover:text-amber-600 cursor-pointer block py-1"
                        role="menuitem"
                        aria-label="Shop all women's sale items"
                      >
                        SHOP ALL WOMEN'S SALE
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="border-l-2 border-gray-200 pl-3">
                  <h4 className="font-bold text-sm uppercase text-black mb-2" id="mens-sale-header">
                    MEN'S SALE
                  </h4>
                  <ul className="space-y-1 ml-2" role="group" aria-labelledby="mens-sale-header">
                    <li>
                      <a 
                        href="/mens/sale" 
                        className="text-xs uppercase text-black hover:text-amber-600 cursor-pointer block py-1"
                        role="menuitem"
                        aria-label="Shop all men's sale items"
                      >
                        SHOP ALL MEN'S SALE
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Careers Link */}
          <div className="pt-2">
            <a
              href="/careers"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer block text-center font-semibold"
              role="menuitem"
              aria-label="View career opportunities"
            >
              Careers
            </a>
          </div>

          {/* My Account Link */}
          <div className="border-t border-gray-200 pt-2 mt-2">
            <a
              href="/account"
              className="hover:underline cursor-pointer block py-2 font-semibold text-center"
              role="menuitem"
              aria-label="Access my account"
            >
              MY ACCOUNT
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}