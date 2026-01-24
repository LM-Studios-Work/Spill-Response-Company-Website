export function PricingCtaBanner() {
  return (
    <section className="bg-primary py-12 md:py-16 text-center text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Not sure which package is right for you?</h2>
        <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Contact our team for a free risk assessment and customized proposal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-accent">
            <span className="material-icons">phone</span>
            <a href="tel:0717881312" className="hover:text-white transition">
              Call: 071 788 1312
            </a>
          </div>
          <div className="hidden sm:block text-green-300">|</div>
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-accent">
            <span className="material-icons">email</span> info@sssksolutions.co.za
          </div>
        </div>
        <a
          href="/contact"
          className="inline-block bg-accent hover:bg-yellow-400 text-black font-bold py-3 px-8 sm:px-10 rounded shadow-md text-base sm:text-lg transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
