const benefits = [
  "Guaranteed 24/7 Response Priority",
  "Discounted Call-Out & Cleanup Rates",
  "Ongoing Compliance Support & Reporting",
  "Reduced Financial & Legal Liability",
  "Dedicated Account Management",
]

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center lg:text-left">
          Why Choose a Retainer?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-12">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3">
              <span className="material-icons text-primary mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-base sm:text-lg text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
