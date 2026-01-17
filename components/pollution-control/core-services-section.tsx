const coreServices = [
  {
    icon: "spa",
    title: "Bio-Remediation of Soil",
    description:
      "Biological agents and special processes to remove toxins, using soil binders, reagents, and other natural restoration methods.",
  },
  {
    icon: "water_drop",
    title: "Watercourse & Storm Water Decontamination",
    description:
      "Specialized remediation protection and reduction measures for native environmental water bodies and systems.",
  },
  {
    icon: "assignment_turned_in",
    title: "Environmental Management Plans (EMPs)",
    description:
      "Proactive planning and assessments to support services, leading education and compliance formalities.",
  },
  {
    icon: "recycling",
    title: "Waste Reduction & Recycling",
    description:
      "Circular economy is the process and recreation to return waste into usable resources and minimize impact.",
  },
]

export function CoreServicesSection() {
  return (
    <section className="py-20 bg-secondary text-white relative">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white mb-12 text-center border-b border-white/20 pb-4 inline-block w-full">
          Core Pollution Control Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreServices.map((service) => (
            <div key={service.title} className="text-center group p-6 rounded-lg hover:bg-white/5 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-accent text-accent mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-accent">{service.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
