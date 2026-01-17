const roadTankerServices = [
  {
    icon: "fa-solid fa-truck-moving",
    title: "Road Tanker Incidents:",
    description: "Comprehensive cleanup for tanker collisions and rollovers on major routes.",
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-secondary uppercase mb-8 border-b-4 border-secondary pb-2 inline-block">
              Specialized Road Tanker & Industrial Response
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roadTankerServices.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="text-secondary shrink-0 pt-1">
                    <i className={`${service.icon} text-3xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase text-sm mb-1">{service.title}</h4>
                    <p className="text-sm text-foreground-muted leading-snug">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-secondary uppercase mb-8 border-b-4 border-secondary pb-2 inline-block">
              Hazardous Material Capabilities
            </h3>
            <div className="space-y-6">
              {hazmatCapabilities.map((capability) => (
                <div key={capability.title} className="flex gap-4 items-start">
                  <div className="bg-gray-100 p-3 rounded text-secondary shrink-0">
                    <i className={`${capability.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase text-sm mb-1">{capability.title}</h4>
                    <p className="text-sm text-foreground-muted">{capability.description}</p>
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
