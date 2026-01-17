export function TrainingSkillsSection() {
  return (
    <section className="grid md:grid-cols-2">
      {/* Practical Skills */}
      <div className="bg-white p-8 md:p-16 lg:p-20 border-r border-gray-100">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
          Practical Spill Response Skills
        </h3>
        <ul className="space-y-6">
          <li className="flex items-start">
            <span className="material-icons text-primary mr-3 mt-1">eco</span>
            <div>
              <strong className="text-foreground block">Environmental Awareness:</strong>
              <span className="text-foreground-muted">
                Understanding the impact of hazardous materials and the legal duty to protect the environment.
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="material-icons text-primary mr-3 mt-1">inventory</span>
            <div>
              <strong className="text-foreground block">Spill Kit Familiarization:</strong>
              <span className="text-foreground-muted">
                Identifying the correct components—booms, absorbents, and PPE—within a complete mobile spill kit.
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="material-icons text-primary mr-3 mt-1">build</span>
            <div>
              <strong className="text-foreground block">Proper Deployment:</strong>
              <span className="text-foreground-muted">
                Step-by-step training on proper spill kit usage, ensuring fast acting containment.
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="material-icons text-primary mr-3 mt-1">health_and_safety</span>
            <div>
              <strong className="text-foreground block">Safety & PPE:</strong>
              <span className="text-foreground-muted">
                Protecting the responder during the cleanup process with appropriate gear.
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Premium Spill Kits */}
      <div className="bg-gray-50 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
          Premium Spill Kits & Absorbents
        </h3>
        <p className="text-foreground-muted mb-6 leading-relaxed">
          Training is best conducted with the equipment your team will actually use. We supply and train on:
        </p>
        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-accent pl-4">
            <h4 className="font-bold text-foreground">Field-Proven Industrial Absorbents</h4>
            <p className="text-sm text-foreground-muted">
              Economical and fast-acting materials designed for rapid absorption.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h4 className="font-bold text-foreground">Hazmat Spill Kits</h4>
            <p className="text-sm text-foreground-muted">
              Complete mobile spill kits containing absorbents, containment products, and safety vests.
            </p>
          </div>
        </div>
        <p className="text-foreground-muted font-medium mb-6 italic">Need to restock before training?</p>
        <div>
          <a
            href="/products"
            className="inline-block bg-accent hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded shadow-md transition"
          >
            View Our Products
          </a>
        </div>
      </div>
    </section>
  )
}
