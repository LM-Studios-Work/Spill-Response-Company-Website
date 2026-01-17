export function ComplianceBanner() {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs md:text-sm font-semibold text-foreground-muted uppercase tracking-wider text-center">
          <span>
            <span className="material-icons text-base align-middle mr-1 text-primary">verified</span> NEMA Compliant
          </span>
          <span>
            <span className="material-icons text-base align-middle mr-1 text-primary">verified</span> National Water Act
          </span>
          <span>
            <span className="material-icons text-base align-middle mr-1 text-primary">verified</span> Waste Management
            Act
          </span>
          <span>
            <span className="material-icons text-base align-middle mr-1 text-primary">verified</span> ISO 14001
            Standards
          </span>
        </div>
      </div>
    </div>
  )
}
