export default function Hero() {
  return (
    <section 
      className="relative w-full h-[80vh] overflow-hidden"
      aria-label="Hero section featuring a fashionable couple with luxury fashion messaging"
      role="banner"
    >
      <img
        src="/homepagecouple-8.jpg"
        alt="Barcelino Fashion Hero - Fashionable couple in luxury fashion setting"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />

      {/* Mobile overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 md:hidden"></div>

      {/* Desktop layout - Left bottom corner */}
      <div className="absolute inset-0 flex items-end justify-start hidden md:flex">
        <div className="pb-16 pl-16">
          <div className="max-w-md">
            <h1
              className="font-playfair text-5xl font-bold text-white mb-4"
              id="hero-heading"
            >
              It's a Visual World
            </h1>
            <p className="text-4xl font-light text-white font-playfair" style={{ textShadow: '3px 3px 4px rgba(0,0,0,0.8), -3px -3px 4px rgba(255,255,255,0.5)' }} aria-describedby="hero-heading">Eyes Are On You.</p>
          </div>
        </div>
      </div>

      {/* Mobile layout - Left bottom corner */}
      <div className="absolute inset-0 flex items-end justify-start md:hidden">
        <div className="pb-8 pl-6">
          <div className="max-w-sm">
            <h1 className="font-playfair text-3xl font-bold text-white mb-2 drop-shadow-lg" id="hero-heading-mobile">It's a Visual World</h1>
            <p className="text-lg font-light text-white drop-shadow-lg" aria-describedby="hero-heading-mobile">Eyes Are On You.</p>
          </div>
        </div>
      </div>
    </section>
  );
}