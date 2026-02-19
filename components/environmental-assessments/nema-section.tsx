export function NemaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Left Column - Understanding NEMA */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Understanding Section 30 of NEMA
          </h2>
          <div className="prose max-w-none text-foreground-muted">
            <p className="mb-4">
              The National Environmental Management Act (NEMA) places strict
              obligations on companies dealing with hazardous materials. Under
              Section 30, any party responsible for an unexpected release of a
              hazardous substance must not only clean it up but also report it
              immediately.
            </p>
            <p className="mb-4 font-medium text-foreground">
              Failure to comply with these reporting standards can result in:
            </p>
            <ul className="list-none space-y-2 pl-0 mb-6">
              <li className="flex items-start gap-2">
                <span className="material-icons text-destructive text-sm mt-1">
                  error
                </span>
                <span>
                  <strong>Criminal prosecution,</strong> fines, and potential
                  jail time.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-destructive text-sm mt-1">
                  error
                </span>
                <span>
                  <strong>Directives</strong> to cease operations until
                  compliance.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-destructive text-sm mt-1">
                  error
                </span>
                <span>
                  <strong>Cost recovery orders</strong> for environmental
                  damages.
                </span>
              </li>
            </ul>
            <p>
              At SSSK Environmental Services, we don&apos;t just clean the
              spill—we manage the regulatory fallout to protect your business.
            </p>
          </div>
        </div>

        {/* Right Column - Incident Reporting */}
        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary shadow-sm">
          <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">
            Post-Incident Reporting
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            NEMA Section 30(5) Incident Reporting
          </h2>
          <p className="text-foreground-muted mb-6">
            Following a spill or environmental accident, the paperwork is as
            critical as the cleanup. We provide comprehensive Section 30 NEMA
            incident reporting support. Our team handles the formal reporting
            process required by law, including:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="font-bold text-foreground">
                  Immediate Notification
                </h4>
                <p className="text-sm text-foreground-muted">
                  Alerting relevant authorities immediately after an incident.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="font-bold text-foreground">
                  Section 30(5) Compliance
                </h4>
                <p className="text-sm text-foreground-muted">
                  Detailed reporting as required by Section 30(5) of the
                  National Environmental Management Act (Act No. 10).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="font-bold text-foreground">Authority Liaison</h4>
                <p className="text-sm text-foreground-muted">
                  Submitting formal reports to the Director-General and SAPS on
                  your behalf.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-foreground-muted italic border-t border-gray-200 pt-4">
            We ensure that all post-incident documentation accurately reflects
            the containment and remediation steps taken, providing you with a
            defendable legal record.
          </p>
        </div>
      </div>
    </section>
  );
}
