export function WasteSplitSection() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Hazardous Waste Section */}
      <div className="lg:w-1/2 bg-primary text-white p-12 lg:p-20 flex flex-col justify-center">
        <div className="max-w-xl mx-auto lg:mx-0">
          <span className="block text-gray-300 font-bold uppercase tracking-wider mb-2 text-sm">
            Hazardous Waste Specialists
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-8">
            Hazardous Waste Collection & Disposal
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="material-icons text-accent mr-4 mt-1">oil_barrel</span>
              <div>
                <strong className="text-white block mb-1">Hydrocarbon Waste:</strong>
                <span className="text-gray-300 text-sm">Diesel and oil spills, contaminated rags, and filters.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-accent mr-4 mt-1">science</span>
              <div>
                <strong className="text-white block mb-1">Chemical Waste:</strong>
                <span className="text-gray-300 text-sm">Acid spills, solvents, and other industrial chemicals.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-accent mr-4 mt-1">warning</span>
              <div>
                <strong className="text-white block mb-1">Contaminated Materials:</strong>
                <span className="text-gray-300 text-sm">Soil binders, hazardous absorbents, and containers.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-accent mr-4 mt-1">coronavirus</span>
              <div>
                <strong className="text-white block mb-1">Bio-Hazardous Waste:</strong>
                <span className="text-gray-300 text-sm">
                  Disposal compliant with Hazardous Biological Agents Regulations.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="lg:w-1/2 bg-background p-12 lg:p-20 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-200">
        <div className="max-w-xl mx-auto lg:ml-10">
          <span className="block text-foreground-muted font-bold uppercase tracking-wider mb-2 text-sm">
            Documentation & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Audit-Ready Documentation
          </h2>
          <p className="text-foreground-muted mb-8">
            Peace of mind through meticulous paperwork handling to eliminate the procedural cost to management today. We
            ensure you are always audit-ready.
          </p>
          <ul className="space-y-3 mb-10 text-foreground font-medium">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3" />
              Certificates of Safe Disposal
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3" />
              Landfill Permits
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3" />
              Destruction Certificates
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3" />
              Management Reports
            </li>
          </ul>
          <div className="border-l-4 border-accent pl-4 py-2">
            <p className="text-sm text-foreground-muted font-bold">
              We operate strictly according to:
              <br />
              <span className="font-normal text-foreground">
                National Environmental Management: Waste Act (Act 59 of 2008), The National Waste Management Strategy.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
