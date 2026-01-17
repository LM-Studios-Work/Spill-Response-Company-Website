const values = [
  {
    icon: "engineering",
    title: "Professionalism",
    description:
      "Professionalism is our core focus on spill containment, aiming to minimize environmental impact through speed, efficiency, and expert execution.",
  },
  {
    icon: "volunteer_activism",
    title: "Honesty",
    description:
      "Honesty represents our ethical foundation, built over years of experience and ensuring full transparency with regulatory technicians and clients.",
  },
  {
    icon: "lock",
    title: "Confidentiality",
    description:
      "Confidential regarding environmental laws, we provide discreet and accurate reporting for insurance purposes and regulatory bodies.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-primary mb-12 md:mb-16 uppercase">
          Company Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {values.map((value) => (
            <div key={value.title} className="group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <span className="material-icons text-4xl sm:text-5xl text-primary group-hover:text-primary transition-colors duration-300">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase mb-4 text-foreground">{value.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed px-2 sm:px-4">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
