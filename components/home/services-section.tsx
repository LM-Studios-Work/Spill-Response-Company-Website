import Image from "next/image"

const services = [
  {
    title: "Rapid Response",
    icon: "timelapse",
    image: "/rapidr.webp?height=192&width=400",
    tag: "Emergency",
    description:
      "Guaranteed arrival times for spill containment. We minimize environmental impact through speed and efficiency.",
  },
  {
    title: "Fully Equipped Teams",
    icon: "engineering",
    image: "/equipped.webp?height=192&width=400",
    description:
      "State-of-the-art spill kits, vacuums, and remediation technology operated by certified hazmat technicians.",
  },
  {
    title: "Safety & Compliance",
    icon: "shield",
    image: "/saftey.jpeg?height=192&width=400",
    description:
      "Full adherence to environmental laws. We provide detailed reporting for insurance and regulatory bodies.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 uppercase">
            Comprehensive Environmental Solutions
          </h2>
          <p className="text-foreground-muted">
            We handle everything from initial damage assessment to structural remediation. Get a free quote today.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
            >
              <div className="h-56 md:h-64 overflow-hidden relative">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                {service.tag && (
                  <div className="absolute bottom-0 left-0 bg-accent text-black font-bold text-xs px-3 py-1 uppercase">
                    {service.tag}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="material-icons text-primary text-3xl mr-3">{service.icon}</span>
                  <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-foreground-muted text-sm mb-4">{service.description}</p>
                <a href="#" className="text-primary font-bold text-sm uppercase flex items-center hover:underline">
                  Learn More <span className="material-icons text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
