export function SpillHeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[600px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/spill.jpeg?height=600&width=1200')`,
      }}
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent text-black font-bold uppercase text-xs px-2 py-1 mb-4 rounded-sm tracking-wider">
            NEMA Compliant & ISO Certified
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase leading-tight mb-6 drop-shadow-lg">
            24/7 Emergency
            <br />
            Spill Response &
            <br />
            Hazmat Recovery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl drop-shadow-md">
            Rapid mobilization for Road, Rail, and Industrial incidents across
            South Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="tel:0717881312"
              className="bg-accent-red hover:bg-red-800 text-white font-display font-bold text-xl px-8 py-4 rounded shadow-lg uppercase tracking-wide flex items-center gap-3 transition-colors duration-300"
            >
              <span className="material-icons animate-pulse">emergency</span>
              Emergency Call-Out: 071 788 1312
            </a>
            <span className="text-gray-300 text-sm italic mt-2 sm:mt-0">
              Fully Compliant with Section 30 of NEMA
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
