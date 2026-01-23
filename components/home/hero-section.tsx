import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero2.webp?height=800&width=1200"
          alt="Hazmat team cleaning spill"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-0 min-h-[calc(100svh-80px)] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-4 lg:space-y-5">
          <div className="inline-block px-3 py-1 bg-accent text-black font-bold text-xs uppercase tracking-widest rounded mb-2">
            NEMA Compliant & ISO Certified
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            SPILL RESPONSE <br />
            <span className="text-accent">SERVICES</span>
          </h1>
          <div className="relative overflow-hidden rounded bg-black/30 backdrop-blur-sm border-l-4 border-accent p-4 max-w-lg">
            <div className="hazard-stripe h-2 w-full absolute top-0 left-0 opacity-50"></div>
            <h2 className="font-display text-2xl text-white font-bold uppercase tracking-wide mt-2">
              Emergency Call-Out Service
            </h2>
            <p className="text-gray-200 mt-2 text-sm md:text-base">
              Immediate assistance for hazardous spills. Fully equipped teams ready to deploy 24/7/365 across the
              region.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="tel:0717881312"
              className="flex items-center justify-center bg-accent hover:bg-yellow-400 text-black font-display font-bold text-xl px-8 py-4 rounded shadow-lg transform hover:-translate-y-1 transition border-2 border-accent"
            >
              <span className="material-icons mr-2">phone_in_talk</span> REPORT A SPILL NOW
            </a>
            <a
              href="#products"
              className="flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold px-8 py-4 rounded transition"
            >
              View Products
            </a>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-3">
          <Image
            src="/hero2.webp?height=200&width=280"
            alt="Industrial cleanup worker"
            width={280}
            height={200}
            className="rounded-lg shadow-2xl border-4 border-white/10 w-full h-48 xl:h-56 object-cover transform translate-y-6"
          />
          <Image
            src="/hero4.webp?height=200&width=280"
            alt="Environmental testing"
            width={280}
            height={200}
            className="rounded-lg shadow-2xl border-4 border-white/10 w-full h-48 xl:h-56 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
