export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <img
        src="/homepagecouple-1.png"
        alt="Barcelino Fashion Hero - Fashionable couple"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="w-full flex justify-end pr-80">
          <div className="max-w-lg text-right">
            <h1 className="text-5xl font-bold text-black">It's a Visual World</h1>
            <p className="text-4xl font-light text-white" style={{ textShadow: '3px 3px 4px rgba(0,0,0,0.8), -3px -3px 4px rgba(255,255,255,0.5)' }}>Eyes Are On You.</p>
          </div>
        </div>
      </div>
    </section>
  );
}