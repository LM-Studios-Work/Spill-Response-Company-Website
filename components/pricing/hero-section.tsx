import Image from "next/image"

export function PricingHeroSection() {
  return (
    <section className="relative bg-primary min-h-[350px] sm:min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Businessmen shaking hands in industrial setting"
          fill
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 sm:mb-6 text-white">
            Cost-Effective Spill Response & Compliance Retainers
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 font-light">
            Ensure 24/7 readiness and minimize financial risk with our flexible retainer packages.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-yellow-400 text-black font-bold text-base sm:text-lg py-3 px-6 sm:px-8 rounded shadow-lg transition-transform hover:-translate-y-1"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
