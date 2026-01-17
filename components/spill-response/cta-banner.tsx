export function CtaBanner() {
  return (
    <section className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-display font-bold uppercase mb-2">Have a Spill? Do Not Wait.</h3>
          <p className="text-sm text-gray-300">Under Section 30 of NEMA, immediate action is a legal requirement.</p>
          <div className="mt-4 text-xl md:text-2xl font-bold font-display uppercase">
            Call SSSK Environmental Services Now: <span className="text-accent">071 788 1312</span>
          </div>
        </div>
        <div className="hidden md:block opacity-20">
          <span className="material-icons text-9xl">stars</span>
        </div>
      </div>
    </section>
  )
}
