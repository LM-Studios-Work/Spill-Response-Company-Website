export function PollutionHeroSection() {
  return (
    <header className="relative bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Environmental specialist conducting water testing in a river"
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:w-2/3">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            ENVIRONMENTAL POLLUTION CONTROL <br className="hidden lg:block" />& SITE REMEDIATION
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Science-based restoration for contaminated land, watercourses, and industrial sites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-md text-secondary bg-accent hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Request an Assessment
            </a>
            <a
              href="tel:0717881312"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-md text-white border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              <span className="material-icons mr-2 text-accent">phone</span>
              071 788 1312
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
