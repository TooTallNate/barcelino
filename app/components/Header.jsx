'use client';
import { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mensDropdownOpen, setMensDropdownOpen] = useState(false);
  const [womensDropdownOpen, setWomensDropdownOpen] = useState(false);
  const [saleDropdownOpen, setSaleDropdownOpen] = useState(false);

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
            onMouseLeave={() => setMensDropdownOpen(false)}
          >
            <a href="/mens" className="hover:underline cursor-pointer">Men</a>
          </div>
          <div 
            className="relative"
            onMouseEnter={() => setWomensDropdownOpen(true)}
            onMouseLeave={() => setWomensDropdownOpen(false)}
          >
            <a href="/womens" className="hover:underline cursor-pointer">Women</a>
          </div>
          <a href="/stores" className="hover:underline cursor-pointer">Stores</a>
          <div 
            className="relative"
            onMouseEnter={() => setSaleDropdownOpen(true)}
            onMouseLeave={() => setSaleDropdownOpen(false)}
          >
            <a href="/sale" className="hover:underline cursor-pointer">Sale</a>
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

      {/* Dropdown Menus - Positioned outside the main container */}
      {mensDropdownOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50" role="menu" aria-label="Men's clothing categories">
          <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="grid grid-cols-3 gap-16">
              <div className="space-y-8">
                <div>
                                          <h3 className="font-bold text-sm mb-4 uppercase text-black" id="mens-business-professional">BUSINESS PROFESSIONAL</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="mens-business-professional">
                          <li><a href="/mens/jackets" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Men's jackets">JACKETS</a></li>
                          <li><a href="/mens/suits" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Men's suits">SUITS</a></li>
                          <li><a href="/mens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all men's business professional">SHOP ALL</a></li>
                        </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-4 uppercase text-black" id="mens-outerwear">OUTERWEAR</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="mens-outerwear">
                          <li><a href="/mens/outerwear" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all men's outerwear">SHOP ALL</a></li>
                        </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-4 uppercase text-black" id="mens-leathers">LEATHERS</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="mens-leathers">
                          <li><a href="/mens/leathers" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all men's leathers">SHOP ALL</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="mens-sport-shirts">SPORT SHIRTS</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="mens-sport-shirts">
                          <li><a href="/mens/haupt-germany" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Haupt-Germany sport shirts">HAUPT-GERMANY</a></li>
                          <li><a href="/mens/silk-shirts" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Silk shirts">SILK SHIRTS</a></li>
                          <li><a href="/mens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all men's sport shirts">SHOP ALL</a></li>
                        </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-sm mb-4 uppercase text-black" id="mens-sweaters">SWEATERS</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="mens-sweaters">
                          <li><a href="/mens/cashmere" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Cashmere sweaters">CASHMERE</a></li>
                          <li><a href="/mens/fancy-designs" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Fancy design sweaters">FANCY DESIGNS</a></li>
                          <li><a href="/mens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all men's sweaters">SHOP ALL</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="mens-shoes">SHOES</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="mens-shoes">
                          <li><a href="/mens/bruno-magli" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Bruno Magli shoes">BRUNO MAGLI</a></li>
                          <li><a href="/mens/trask" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Trask shoes">TRASK</a></li>
                          <li><a href="/mens/exotic-skins" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Exotic skin shoes">EXOTIC SKINS</a></li>
                          <li><a href="/mens/urban-sport" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Urban sport shoes">URBAN SPORT</a></li>
                          <li><a href="/mens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all men's shoes">SHOP ALL</a></li>
                        </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-sm mb-4 uppercase text-black" id="mens-accessories">ACCESSORIES</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="mens-accessories">
                          <li><a href="/mens/ties" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Men's ties">TIES</a></li>
                          <li><a href="/mens/extra-long-ties" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Extra long ties">EXTRA LONG TIES</a></li>
                          <li><a href="/mens/bow-ties" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Bow ties">BOW TIES</a></li>
                          <li><a href="/mens/cuff-links" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Cuff links">CUFF LINKS</a></li>
                          <li><a href="/mens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all men's accessories">SHOP ALL</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="mens-belts">BELTS</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="mens-belts">
                          <li><a href="/mens/belts" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all men's belts">SHOP ALL</a></li>
                        </ul>
                </div>
                <div>
                  <a href="/mens/sale" className="text-red-600 font-bold text-sm hover:underline cursor-pointer uppercase" role="menuitem" aria-label="Men's sale items">SALE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {womensDropdownOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50" role="menu" aria-label="Women's clothing categories">
          <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-leathers">LEATHERS</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="womens-leathers">
                          <li><a href="/womens/short-jackets" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Short leather jackets">SHORT JACKETS</a></li>
                          <li><a href="/womens/long-jackets" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Long leather jackets">LONG JACKETS</a></li>
                          <li><a href="/womens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all women's leathers">SHOP ALL</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-jackets">JACKETS</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="womens-jackets">
                          <li><a href="/womens/business-professional" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Business and professional jackets">BUSINESS & PROFESSIONAL</a></li>
                          <li><a href="/womens/special-occasions" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Special occasions jackets">SPECIAL OCCASIONS</a></li>
                          <li><a href="/womens/casual-jackets" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Casual jackets">CASUAL JACKETS</a></li>
                          <li><a href="/womens/shackets" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shackets">SHACKETS</a></li>
                          <li><a href="/womens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all women's jackets">SHOP ALL</a></li>
                        </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-tops">TOPS</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="womens-tops">
                          <li><a href="/womens/blouses" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Women's blouses">BLOUSES</a></li>
                          <li><a href="/womens/shackets" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shackets">SHACKETS</a></li>
                          <li><a href="/womens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all women's tops">SHOP ALL</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-knitwear">KNITWEAR</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="womens-knitwear">
                          <li><a href="/womens/cashmere" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Cashmere knitwear">CASHMERE</a></li>
                          <li><a href="/womens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all women's knitwear">SHOP ALL</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-coats">COATS & OUTERWEAR</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="womens-coats">
                          <li><a href="/womens/rainwear" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Rainwear">RAINWEAR</a></li>
                          <li><a href="/womens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all women's coats and outerwear">SHOP ALL</a></li>
                        </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                                          <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-dresses">DRESSES</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="womens-dresses">
                          <li><a href="/womens/day-dresses" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Day dresses">DAY DRESSES</a></li>
                          <li><a href="/womens/party-cocktail-dresses" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Party and cocktail dresses">PARTY & COCKTAIL DRESSES</a></li>
                          <li><a href="/womens/gowns" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Gowns">GOWNS</a></li>
                          <li><a href="/womens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all women's dresses">SHOP ALL</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-pool">POOL & LOUNGEWEAR</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="womens-pool">
                          <li><a href="/womens/pool-loungewear" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all pool and loungewear">SHOP ALL</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-bottoms">BOTTOMS</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="womens-bottoms">
                          <li><a href="/womens/denim" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Denim bottoms">DENIM</a></li>
                          <li><a href="/womens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all women's bottoms">SHOP ALL</a></li>
                        </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                                          <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-accessories">ACCESSORIES</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="womens-accessories">
                          <li><a href="/womens/purses" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Women's purses">PURSE</a></li>
                          <li><a href="/womens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all women's accessories">SHOP ALL</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-designers">DESIGNERS</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="womens-designers">
                          <li><a href="/womens/kinross" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Kinross designer">KINROSS</a></li>
                          <li><a href="/womens/frank-lyman" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Frank Lyman designer">FRANK LYMAN</a></li>
                          <li><a href="/womens/hale-bob" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Hale Bob designer">HALE BOB</a></li>
                          <li><a href="/womens/komarov" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Komarov designer">KOMAROV</a></li>
                          <li><a href="/womens/tadashi-shoji" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Tadashi Shoji designer">TADASHI SHOJI</a></li>
                          <li><a href="/womens/anorak" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Anorak designer">ANORAK</a></li>
                          <li><a href="/womens/shop-all" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Shop all women's designers">SHOP ALL</a></li>
                        </ul>
                </div>
                <div>
                  <a href="/womens/sale" className="text-red-600 font-bold text-sm hover:underline cursor-pointer uppercase" role="menuitem" aria-label="Women's sale items">SALE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {saleDropdownOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50" role="menu" aria-label="Sale categories">
          <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                                          <h3 className="font-bold text-sm mb-4 uppercase text-black" id="womens-sale">WOMEN'S SALE</h3>
                                          <ul className="space-y-3" role="group" aria-labelledby="womens-sale">
                          <li><a href="/womens/sale" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Women's sale items">SHOP ALL WOMEN'S SALE</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-bold text-sm mb-4 uppercase text-black" id="mens-sale">MEN'S SALE</h3>
                        <ul className="space-y-3" role="group" aria-labelledby="mens-sale">
                          <li><a href="/mens/sale" className="hover:text-purple-600 cursor-pointer text-xs uppercase text-black" role="menuitem" aria-label="Men's sale items">SHOP ALL MEN'S SALE</a></li>
                        </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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