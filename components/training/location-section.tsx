export function TrainingLocationSection() {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-12 text-center md:text-left">
          Training at Your Premises or Ours
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary rounded p-3 shadow-md">
              <span className="material-icons text-white text-3xl">factory</span>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold text-foreground mb-2">On-Site Training:</h3>
              <p className="text-foreground-muted leading-relaxed">
                We come to your facility or depot. Training can be provided at the client&apos;s premises, allowing your
                staff to learn in their actual work environment with their own equipment.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary rounded p-3 shadow-md">
              <span className="material-icons text-white text-3xl">business</span>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Off-Site Training:</h3>
              <p className="text-foreground-muted leading-relaxed">
                Send your team to us. Training can be conducted at our SSSK offices for a focused learning environment
                away from daily distractions and site operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
