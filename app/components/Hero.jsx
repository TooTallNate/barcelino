export default function Hero() {
  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/homepagecouple-1.jpg')" }}
      aria-label="Homepage hero banner showing a fashionable couple"
      role="banner"
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content container */}
      <div className="relative z-10 h-full flex items-center justify-end px-4 sm:px-6 lg:px-8">
        <div className="text-right max-w-2xl pr-8 sm:pr-12 lg:pr-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
            It's a Visual World
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight">
            Eyes are On You
          </p>
        </div>
      </div>
      
      {/* Decorative gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent"></div>
    </section>
  );
}
