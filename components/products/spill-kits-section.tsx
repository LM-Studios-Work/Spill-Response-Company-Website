export function SpillKitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-foreground mb-4">Complete Mobile Spill Kits</h2>
            <p className="text-foreground-muted mb-6 leading-relaxed">
              When a spill occurs, seconds count. We supply complete mobile spill kits designed for immediate
              deployment. Our kits are packed with everything your team needs to contain and clean up hazardous
              materials safely.
            </p>
            <p className="font-bold text-sm text-foreground-muted uppercase tracking-wide mb-3">
              Our Hazmat Spill Kits Include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="material-icons text-primary mr-3 mt-1 text-xl">check_circle</span>
                <span className="text-foreground-muted">
                  <strong>High-Performance Absorbents:</strong> Fast-acting materials to soak up spills instantly.
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-3 mt-1 text-xl">check_circle</span>
                <span className="text-foreground-muted">
                  <strong>Containment Products:</strong> Booms and socks to stop the spread of liquid.
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-3 mt-1 text-xl">check_circle</span>
                <span className="text-foreground-muted">
                  <strong>PPE:</strong> Essential safety gear, including Safety Vests, gloves, and goggles to protect
                  your workers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-3 mt-1 text-xl">check_circle</span>
                <span className="text-foreground-muted">
                  <strong>Disposal Bags:</strong> For safe cleanup and removal.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="bg-gray-100 rounded-2xl p-8 w-full max-w-md shadow-inner">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Complete Spill Kit Contents Display"
                className="w-full h-auto object-contain drop-shadow-lg transform transition hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
