const protocolSteps = [
  {
    number: 1,
    icon: "timer",
    title: "Immediate Mobilization:",
    description: "24/7 dispatch of fully equipped teams to secure the site.",
  },
  {
    number: 2,
    icon: "waves",
    title: "Containment & Recovery:",
    description: "Rapid deployment of booms and absorbents to stop the spread.",
  },
  {
    number: 3,
    icon: "local_shipping",
    title: "Cleanup & Disposal:",
    description:
      "Removal of contaminants and environmentally compliance disposal at approved facilities.",
  },
  {
    number: 4,
    icon: "spa",
    title: "Remediation:",
    description: "Restoration of the site to pre-incident conditions.",
  },
  {
    number: 5,
    icon: "description",
    title: "Regulatory Reporting:",
    description:
      "Formal reporting to relevant authorities including the Director-General and SAPS as required by law.",
  },
];

export function ResponseProtocol() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-display font-bold text-secondary uppercase mb-8">
              The SSSK Response Protocol
            </h3>
            <div className="space-y-6">
              {protocolSteps.map((step) => (
                <div key={step.number} className="flex items-start group">
                  <span className="text-5xl font-display font-bold text-gray-200 leading-none mr-2 group-hover:text-accent transition-colors">
                    {step.number}
                  </span>
                  <div className="flex gap-4 mt-2">
                    <span className="material-icons text-secondary text-3xl">
                      {step.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-foreground uppercase text-sm">
                        {step.title}
                      </h4>
                      <p className="text-sm text-foreground-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-secondary uppercase mb-8">
              Flexible Service Options
            </h3>
            <div className="grid gap-6">
              <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                <h4 className="font-bold text-lg text-secondary uppercase mb-2">
                  Option A: Emergency Call-Out (Pay-as-used)
                </h4>
                <p className="text-sm text-foreground-muted">
                  Ideal for operators requiring ad-hoc spill response. Charges
                  are based on mobilization, personnel, equipment, materials
                  used, and duration of response.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs px-2 py-1 uppercase font-bold">
                  Recommended
                </div>
                <h4 className="font-bold text-lg text-secondary uppercase mb-2">
                  Option B: Retainer / Standby Agreement
                </h4>
                <p className="text-sm text-foreground-muted mb-2">
                  Recommended for high-risk or high-volume transport operations.
                </p>
                <ul className="text-sm text-foreground-muted space-y-1 list-disc pl-5">
                  <li>
                    <strong className="text-foreground">
                      Guaranteed Priority Response:
                    </strong>{" "}
                    You are included in our emergency response plan.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Pre-Agreed Rates:
                    </strong>{" "}
                    Predictable commercial terms.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Compliance Support:
                    </strong>{" "}
                    Assistance with NEMA Section 30 reporting.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-accent hover:bg-yellow-400 text-black font-display font-bold uppercase py-3 px-8 rounded shadow w-full md:w-auto transition-colors">
                View Pricing & Retainers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
