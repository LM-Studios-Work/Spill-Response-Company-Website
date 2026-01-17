export function EiaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <div className="grid md:grid-cols-2 gap-0 shadow-lg rounded-xl overflow-hidden">
        {/* EIA Section */}
        <div className="bg-primary p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <span className="block text-accent font-bold tracking-widest uppercase mb-1">
            Hazardous Waste Specialists
          </span>
          <h2 className="text-3xl font-bold mb-2">Environmental Impact Assessments</h2>
          <h3 className="text-3xl font-black mb-6 text-accent">(EIA)</h3>
          <p className="mb-8 opacity-90">
            Beyond immediate spills, we conduct thorough assessments to understand environmental risks and damages.
          </p>
          <ul className="space-y-6">
            <li className="flex gap-3">
              <span className="material-icons text-accent mt-1">analytics</span>
              <div>
                <strong className="text-accent block">Impact Studies</strong>
                <span className="text-sm opacity-90">
                  We perform Environmental Impact Assessments (EIA) to evaluate the extent of contamination on land and
                  water.
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="material-icons text-accent mt-1">landscape</span>
              <div>
                <strong className="text-accent block">Site Assessments</strong>
                <span className="text-sm opacity-90">
                  Our teams assess the condition of soil, storm water, and watercourses to determine the necessary
                  remediation strategy.
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="material-icons text-accent mt-1">warning</span>
              <div>
                <strong className="text-accent block">Risk Management</strong>
                <span className="text-sm opacity-90">
                  We identify potential hazards in your operations before they become accidents.
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Waste Management Reporting */}
        <div className="bg-gray-100 p-10 flex flex-col justify-center">
          <span className="text-foreground-muted font-medium mb-1">Audit-Ready Documentation</span>
          <h2 className="text-3xl font-bold text-foreground mb-6">Waste Management Reporting</h2>
          <p className="text-foreground-muted mb-6">
            For clients on our waste management programmes, we provide detailed data to support your environmental goals
            and audit requirements.
          </p>
          <p className="text-foreground font-medium mb-4">We provide regular management reports that:</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-foreground-muted">
              <span className="material-icons text-green-600">check_circle</span>
              <span>Detail your company&apos;s waste generation volumes.</span>
            </li>
            <li className="flex items-center gap-3 text-foreground-muted">
              <span className="material-icons text-green-600">check_circle</span>
              <span>Highlight recycling efforts and diversion from landfills.</span>
            </li>
            <li className="flex items-center gap-3 text-foreground-muted">
              <span className="material-icons text-green-600">check_circle</span>
              <span>Quantify cost savings achieved through efficient waste handling.</span>
            </li>
          </ul>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-xs text-foreground-muted italic">
              These reports serve as vital evidence of your commitment to the National Waste Management Strategy and the
              National Environmental Management: Waste Act (Act 59 of 2008).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
