export function ComplianceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Compliance & Impact Assessments
            </h2>
            <p className="text-foreground-muted mb-8 italic">
              Navigating the law to complying by specialist requirements and
              statutes.
            </p>
            <div className="space-y-8">
              <div>
                <h4 className="flex items-start font-bold text-lg text-secondary mb-2">
                  <span className="material-icons mr-2 text-accent mt-1 text-sm">
                    circle
                  </span>
                  Environmental Impact Assessments (EIA)
                </h4>
                <p className="text-foreground-muted pl-6 text-sm">
                  Comprehensive impact assessments assumed in remediation and
                  natural impact assessments.
                </p>
              </div>
              <div>
                <h4 className="flex items-start font-bold text-lg text-secondary mb-2">
                  <span className="material-icons mr-2 text-accent mt-1 text-sm">
                    circle
                  </span>
                  NEMA Section 30(5) Compliance
                </h4>
                <p className="text-foreground-muted pl-6 text-sm">
                  compliance: Norm of non-compliance on NEMA Section 30(5)
                  compliance vital-acts, retaining the nature verification of
                  external empires.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-l-4 border-accent">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Why Remediation Matters
            </h2>
            <blockquote className="text-foreground-muted italic mb-8 border-l-2 border-gray-300 pl-4">
              &quot;The greatest threat to our planet is the belief that someone
              else will save it.&quot; <br />
              <span className="font-bold not-italic text-sm mt-2 block text-foreground">
                – Robert Swan
              </span>
            </blockquote>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="material-icons text-accent mr-3 mt-1">
                  gavel
                </span>
                <div>
                  <strong className="text-foreground">Legal Risk:</strong>
                  <span className="text-foreground-muted text-sm">
                    {" "}
                    Avoid heavy fines, legal processes, and assessment
                    penalties.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-accent mr-3 mt-1">
                  campaign
                </span>
                <div>
                  <strong className="text-foreground">
                    Reputational Damage:
                  </strong>
                  <span className="text-foreground-muted text-sm">
                    {" "}
                    Identify analytical reputational damage, economic isolation
                    and potential PR crises.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-accent mr-3 mt-1">
                  park
                </span>
                <div>
                  <strong className="text-foreground">Ecosystem Health:</strong>
                  <span className="text-foreground-muted text-sm">
                    {" "}
                    Develop rehabilitation and health ecosystems pressures
                    ecosystems.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
