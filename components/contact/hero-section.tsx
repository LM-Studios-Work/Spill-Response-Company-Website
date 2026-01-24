import Image from "next/image";

export function ContactHeroSection() {
  return (
    <section className="relative bg-primary border-b border-gray-200">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero2.webp?height=400&width=1200')",
        }}
      >
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Abstract pattern"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 py-12 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white leading-tight tracking-tight mb-4">
          GET IN TOUCH
        </h1>
        <p className="text-gray-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
          Whether you need an immediate spill response or a long-term waste
          management plan, our team is ready to assist.
        </p>
      </div>
    </section>
  );
}
