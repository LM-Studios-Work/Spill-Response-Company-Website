const missionItems = [
  {
    icon: "spa",
    title: "Protect ecosystems",
    description: "Protect ecosystems from hazardous spills and environmental threats through rapid containment.",
  },
  {
    icon: "home_work",
    title: "Safeguard communities",
    description: "Safeguard communities by protecting living environments and ensuring safety protocols.",
  },
  {
    icon: "handshake",
    title: "Support clients",
    description: "Support clients with compliant, efficient services that minimize operational downtime.",
  },
]

const visionItems = [
  {
    icon: "timer",
    title: "Fast action",
    description:
      "Fast action and restorability, responding immediately to our clients' needs as an energy and trading partner.",
  },
  {
    icon: "forest",
    title: "Environmental restoration",
    description: "Environmental restoration and consistent care for our planet's delicate resilience.",
  },
  {
    icon: "trending_up",
    title: "Long-term resilience",
    description: "Long-term resilience and sustainable solutions to long-term environmental development.",
  },
]

export function MissionVisionSection() {
  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-8 uppercase border-b-2 border-accent w-max pb-2">
              Mission Statement
            </h2>
            <ul className="space-y-6 sm:space-y-8">
              {missionItems.map((item) => (
                <li key={item.title} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <span className="material-icons text-3xl sm:text-4xl text-primary">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground-muted text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-8 uppercase border-b-2 border-accent w-max pb-2">
              Vision Statement
            </h2>
            <ul className="space-y-6 sm:space-y-8">
              {visionItems.map((item) => (
                <li key={item.title} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <span className="material-icons text-3xl sm:text-4xl text-primary">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground-muted text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
