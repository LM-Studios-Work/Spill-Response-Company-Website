export function ProductsCtaBanner() {
  return (
    <section className="bg-primary py-12 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-10">
        <span className="material-icons text-[200px] text-white">local_shipping</span>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Equip your fleet and facility today.</h2>
        <p className="text-gray-300 mb-8 text-lg">Get a quote for bulk orders or single units.</p>
        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
          <div className="text-center md:text-right">
            <p className="text-accent font-bold uppercase text-xs tracking-wider mb-1">Order Now</p>
            <p className="text-2xl lg:text-3xl font-bold text-white">071 788 1312</p>
          </div>
          <div className="hidden md:block h-10 w-px bg-gray-500" />
          <div className="text-center md:text-left">
            <p className="text-accent font-bold uppercase text-xs tracking-wider mb-1">Email Us</p>
            <a
              href="mailto:info@ssksolutions.co.za"
              className="text-xl lg:text-2xl text-white hover:text-accent transition underline decoration-accent decoration-2 underline-offset-4"
            >
              info@ssksolutions.co.za
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
