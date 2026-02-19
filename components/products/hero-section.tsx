export function ProductsHeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent z-10 w-full lg:w-3/4" />
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-20 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-white pr-0 lg:pr-12 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
            Industrial Spill Kits &<br />
            Containment Products
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-lg">
            Field-proven solutions for rapid spill response. Economical,
            fast-acting, and compliance with environmental regulations.
          </p>
          <button className="bg-accent hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl flex items-center">
            Request a Quote
            <span className="material-icons ml-2">arrow_forward</span>
          </button>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <img
            src="/productwal.webp?height=400&width=600"
            alt="Industrial warehouse setting with spill kits"
            className="object-cover w-full h-64 lg:h-96 rounded-lg shadow-2xl opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
