export function OverviewSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-6 uppercase">
              Company Overview
            </h2>
            <div className="prose max-w-none text-foreground-muted">
              <p className="mb-4 text-sm sm:text-base">
                SSSK Environmental Services is committed to protecting the natural world through innovative
                environmental solutions. We act as a trusted partner, providing immediate response to hazardous spills
                and environmental threats. Our fully-equipped teams deploy rapidly across the region, offering reliable
                24/7/365 service to ensure minimal ecological impact.
              </p>
              <p className="text-sm sm:text-base">
                With decades of combined experience, SSSK Environmental Services leverages advanced analysis and swift
                mobilization to enable industries and communities to operate safely. We admit the complexity of
                environmental challenges, developing tailored hazmat and spill response strategies that prioritize
                safety, compliance, and environmental restoration.
              </p>
            </div>
          </div>
          <div className="bg-accent p-6 sm:p-8 md:p-12 rounded-lg shadow-lg relative transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
            <span className="material-icons text-5xl sm:text-6xl text-black/10 absolute top-4 left-4">
              format_quote
            </span>
            <blockquote className="relative z-10">
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-gray-900 leading-relaxed italic mb-6">
                &quot;You cannot get through a single day without having an impact on the world around you. What you do
                makes a difference, and you have to decide what kind of difference you want to make.&quot;
              </p>
              <footer className="font-bold text-gray-900 uppercase tracking-wider text-sm sm:text-base">
                — Jane Goodall
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
