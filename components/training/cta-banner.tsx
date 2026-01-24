export function TrainingCtaBanner() {
  return (
    <div className="bg-primary py-12 px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-2">Is your team ready for a spill?</h2>
      <p className="text-green-100 mb-6">
        Don&apos;t wait for an accident to find out. Schedule your{" "}
        <span className="text-accent font-bold">Spill Kit Training</span> today:{" "}
        <a href="tel:0717881312" className="text-white font-bold hover:text-accent transition">
          071 788 1312
        </a>
        .
      </p>
      <span className="material-icons text-6xl text-white opacity-20 animate-pulse">shield</span>
    </div>
  )
}
