export function TrainingHeroSection() {
  return (
    <header className="relative bg-primary h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Industrial workers in safety gear managing a spill"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/20 z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-md">
            Spill Kit Training &<br />
            Environmental Awareness
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg leading-relaxed drop-shadow-sm">
            Equip your team with the practical skills to contain spills instantly. Effective training for compliance and
            safety.
          </p>
          <a
            href="#"
            className="inline-block bg-accent hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded shadow-lg transition transform hover:-translate-y-1"
          >
            Book a Training Session
          </a>
        </div>
      </div>
    </header>
  )
}
