export function PollutionCtaBanner() {
  return (
    <section className="bg-secondary text-white py-12 border-t-8 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold mb-2">Need a site assessment or remediation plan?</h3>
            <p className="text-gray-300 mb-6">Partner with SSSK for science-based environmental solutions.</p>
            <div className="flex flex-col sm:flex-row gap-6 text-lg font-semibold">
              <a href="tel:0717881312" className="flex items-center hover:text-accent transition-colors">
                <span className="material-icons mr-2 text-accent">call</span>
                071 788 1312
              </a>
              <a
                href="mailto:info@sssksolutions.co.za"
                className="flex items-center hover:text-accent transition-colors"
              >
                <span className="material-icons mr-2 text-accent">email</span>
                info@sssksolutions.co.za
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 opacity-90">
              <div className="relative w-16 h-14 overflow-hidden">
                <div className="absolute inset-0 bg-white rounded-tr-3xl rounded-bl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-3/4 h-3 bg-accent"></div>
              </div>
              <div className="flex flex-col text-white">
                <span className="font-display font-bold text-2xl leading-none">SSSK</span>
                <span className="text-xs font-semibold tracking-wider">Environmental Services</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400 italic font-display">
          Protecting Today. Preserving Tomorrow.
        </div>
      </div>
    </section>
  )
}
