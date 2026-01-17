export function AbsorbentsSection() {
  return (
    <section className="py-16 lg:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white w-full max-w-md">
              <img
                src="/placeholder.svg?height=320&width=400"
                alt="Pouring absorbent granules onto a spill"
                className="w-full h-64 lg:h-80 object-cover hover:scale-110 transition duration-700"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-foreground mb-4">Fast-Acting & Economical Absorbents</h2>
            <p className="text-foreground-muted mb-6 leading-relaxed">
              Not all spills are the same, and you need materials you can trust. We use and supply field-proven
              industrial absorbents that are both economical and fast-acting.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <span className="material-icons text-primary mr-4 mt-1">science</span>
                <div>
                  <h4 className="font-bold text-foreground">Versatile Application</h4>
                  <p className="text-sm text-foreground-muted">
                    Suitable for oil, fuel, chemical, and industrial liquid spills.
                  </p>
                </div>
              </li>
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <span className="material-icons text-primary mr-4 mt-1">savings</span>
                <div>
                  <h4 className="font-bold text-foreground">High Absorption Rate</h4>
                  <p className="text-sm text-foreground-muted">
                    Minimizes the amount of product needed, saving you money on waste disposal costs.
                  </p>
                </div>
              </li>
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <span className="material-icons text-primary mr-4 mt-1">timer</span>
                <div>
                  <h4 className="font-bold text-foreground">Rapid Containment</h4>
                  <p className="text-sm text-foreground-muted">
                    Stops the spill from spreading to soil or water sources immediately.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
