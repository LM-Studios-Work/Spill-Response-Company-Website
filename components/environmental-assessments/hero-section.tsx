import Image from "next/image";

export function AssessmentHeroSection() {
  return (
    <header className="relative bg-primary h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.webp?height=500&width=1200"
          alt="Environmental specialist reviewing documents at site"
          fill
          className="object-cover object-top opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Environmental Assessments
            <br />& Regulatory Reporting
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 font-light max-w-xl">
            Navigating the complexities of South African environmental law. We
            ensure your documentation is accurate, thorough, and audit-ready.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded shadow-lg transition-transform transform hover:-translate-y-1 text-lg"
          >
            Get Regulatory Support
          </a>
        </div>
      </div>
    </header>
  );
}
