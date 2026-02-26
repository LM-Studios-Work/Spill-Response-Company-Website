const roadTankerServices = [
  {
    icon: "fa-solid fa-truck-moving",
    title: "Road Tanker Incidents:",
    description: "As a leading spill cleanup company, we offer comprehensive cleanup for tanker collisions and rollovers on major routes.",
  },
  {
    icon: "fa-solid fa-industry",
    title: "Mechanical Failures:",
    description: "Containment of leaks caused by valve, hose, and manhole failures.",
  },
  {
    icon: "fa-solid fa-dolly",
    title: "Operational Spills:",
    description: "Managing accidental releases during loading and offloading operations.",
  },
  {
    icon: "fa-solid fa-water",
    title: "Complex Environmental Risks:",
    description: "Remediation of soil, storm water, and watercourse contamination.",
  },
  {
    icon: "fa-solid fa-fire-extinguisher",
    title: "High-Consequence Events:",
    description: "Management of fire restoration, vapor releases, and secondary environmental impacts.",
  },
  {
    icon: "fa-solid fa-city",
    title: "Historical & Industrial:",
    description: "Remediation of historical spills and contaminated land restoration.",
  },
]

const hazmatCapabilities = [
  {
    icon: "fa-solid fa-oil-can",
    title: "Hydrocarbons:",
    description: "Diesel, Petrol, and Oil spills.",
  },
  {
    icon: "fa-solid fa-flask",
    title: "Chemicals:",
    description: "Acid spills and corrosive substances.",
  },
  {
    icon: "fa-solid fa-biohazard",
    title: "Hazardous Waste:",
    description: "Safe collection and disposal of hazardous waste materials.",
  },
  {
    icon: "fa-solid fa-trowel",
    title: "Soil Treatment:",
    description: "Application of soil binders and bio-remediation for hydrocarbon-contaminated ground.",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1px_2fr] gap-0 lg:gap-12">

          {/* Left column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-secondary uppercase mb-2 pb-2 border-b-4 border-secondary inline-block">
              Road Spill Response Services & Industrial Spill Containment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mt-8">
              {roadTankerServices.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="text-secondary shrink-0 pt-0.5">
                    <i className={`${service.icon} text-3xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase text-sm mb-1">{service.title}</h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-border w-px self-stretch" />

          {/* Right column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-secondary uppercase mb-2 pb-2 border-b-4 border-secondary inline-block">
              Hazmat Recovery Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-y-8 mt-8">
              {hazmatCapabilities.map((capability) => (
                <div key={capability.title} className="flex gap-4">
                  <div className="text-secondary shrink-0 pt-0.5">
                    <i className={`${capability.icon} text-3xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase text-sm mb-1">{capability.title}</h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
