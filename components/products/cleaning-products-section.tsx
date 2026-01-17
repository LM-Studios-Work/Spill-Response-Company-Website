export function CleaningProductsSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-foreground mb-4">Eco-Friendly Cleaning Products</h2>
            <p className="text-foreground-muted mb-4 leading-relaxed">
              Post-spill cleanup often requires heavy-duty cleaning to remove residue and stains. We supply
              eco-friendly, industrial products for all cleaning requirements.
            </p>
            <p className="text-foreground-muted leading-relaxed border-l-4 border-accent pl-4">
              Our cleaning range is powerful enough for industrial use but formulated to be safer for the environment,
              supporting your company&apos;s green credentials.
            </p>
            <div className="mt-8 flex gap-4">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide">
                Non-Toxic
              </span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide">
                Biodegradable
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Eco-friendly industrial cleaning supplies"
              className="w-full max-w-md rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
