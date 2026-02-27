import Image from "next/image";

export function WasteHeroSection() {
  return (
    <section className="relative h-[500px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/waste.jpg?height=600&width=1200"
          alt="Industrial waste management facility with waste truck"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/20" />
      <div className="container mx-auto px-4 relative z-20 pt-16">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            Industrial Waste Management
            <br />& Hazardous Waste Disposal
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light">
            Environmentally responsible, cost-effective, and operationally efficient industrial waste management and hazardous waste disposal services for industries in Gauteng, South Africa.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-black hover:bg-yellow-400 font-bold py-4 px-8 rounded shadow-lg uppercase tracking-wide transition transform hover:-translate-y-1"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
