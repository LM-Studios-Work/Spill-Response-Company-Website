export function TrainingSection() {
  return (
    <section className="py-16 bg-green-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
          <span className="material-icons text-primary text-4xl">school</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Spill Kit Training</h2>
        <p className="text-foreground-muted mb-8 text-lg">
          Owning a kit is a legal requirement; knowing how to use it is a safety necessity. We provide expert training
          on proper spill kit usage and environmental awareness, available at your premises or our offices.
        </p>
        <a
          href="/training"
          className="inline-block bg-accent hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded shadow hover:shadow-lg transition"
        >
          View Training Options
        </a>
      </div>
    </section>
  )
}
