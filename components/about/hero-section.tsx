import Image from "next/image"
import image from "public"                                                                                                                      
export function AboutHeroSection() {
  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.webp?height=500&width=1200"
          alt="Pristine lake and forest landscape"
          fill
          className="object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 uppercase tracking-wide">
          About SSSK Environmental
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-light text-gray-200 max-w-2xl mx-auto">
          Committed to Protecting South Africa&apos;s Natural Environment
        </p>
      </div>
    </section>
  )
}
