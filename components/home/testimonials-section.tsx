export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-primary/90 to-primary py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block mb-10">
          <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center bg-transparent mx-auto relative z-10">
            <div className="text-center">
              <span className="block text-3xl font-display font-bold text-accent">24/7</span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider">Response</span>
            </div>
          </div>
          <div className="absolute -inset-2 rounded-full border-t-4 border-r-4 border-accent opacity-60 animate-spin-slow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <p className="text-gray-200 italic mb-4 text-sm">
              &quot;We had a hazardous chemical spill at our depot. SSSK arrived within 45 minutes and contained the
              situation before it reached the stormwater drains.&quot;
            </p>
            <div className="flex items-center text-accent mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-sm">
                  star
                </span>
              ))}
            </div>
            <p className="font-bold text-white text-sm">- Logistics Manager, Durban</p>
          </div>

          <div className="bg-accent text-black p-6 rounded-lg shadow-lg transform md:-translate-y-4">
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold uppercase mb-2">SPILL RESPONSE SERVICES</h3>
              <div className="hazard-stripe h-2 w-full mb-4 opacity-30"></div>
              <p className="font-bold mb-4">EMERGENCY CALL-OUT SERVICE</p>
              <p className="text-sm mb-4">If you have a spill that requires immediate assistance:</p>
              <a
                href="tel:0717881312"
                className="block bg-black text-accent font-display font-bold text-2xl py-3 rounded hover:bg-gray-800 transition"
              >
                CALL US NOW!
                <br />
                <span className="text-white text-lg font-sans">071 788 1312</span>
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <p className="text-gray-200 italic mb-4 text-sm">
              &quot;Professional, fully equipped, and compliant. They handled the waste disposal paperwork seamlessly.
              Highly recommended for industrial sites.&quot;
            </p>
            <div className="flex items-center text-accent mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-sm">
                  star
                </span>
              ))}
            </div>
            <p className="font-bold text-white text-sm">- Factory Operations, Gauteng</p>
          </div>
        </div>
      </div>
    </section>
  )
}
