const packages = [
  {
    name: "Basic Compliance Retainer",
    price: "R 3,750 – R 6,000",
    coverage: "Priority call-out, compliance advisory, reporting support (response cost excluded)",
  },
  {
    name: "Standard Spill Response Retainer",
    price: "R 7,500 – R 12,500",
    coverage: "Priority response, mobilization readiness, discounted response rates",
  },
  {
    name: "Comprehensive Risk Retainer",
    price: "R 15,000 – R 22,500",
    coverage: "Full priority response, reduced mobilization fees, compliance & training support",
  },
]

export function PricingTable() {
  return (
    <section className="pb-12 md:pb-16 bg-card">
      <div className="container mx-auto px-4">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 lg:p-5 font-bold text-base lg:text-lg border-b border-primary w-1/3">
                  Package Name
                </th>
                <th className="p-4 lg:p-5 font-bold text-base lg:text-lg border-b border-primary w-1/4">
                  Monthly Retainer (ZAR)
                </th>
                <th className="p-4 lg:p-5 font-bold text-base lg:text-lg border-b border-primary">Coverage & Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-background">
              {packages.map((pkg, index) => (
                <tr key={pkg.name} className={`hover:bg-gray-50 transition-colors ${index % 2 === 1 ? "bg-card" : ""}`}>
                  <td className="p-4 lg:p-5 font-semibold text-foreground">{pkg.name}</td>
                  <td className="p-4 lg:p-5 text-foreground-muted font-medium">{pkg.price}</td>
                  <td className="p-4 lg:p-5 text-foreground-muted">{pkg.coverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-background rounded-lg shadow-lg border border-gray-200 p-4">
              <h3 className="font-bold text-foreground text-lg mb-2">{pkg.name}</h3>
              <p className="text-primary font-bold text-xl mb-3">{pkg.price}</p>
              <p className="text-foreground-muted text-sm">{pkg.coverage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
