import {
  Truck,
  Factory,
  PackageOpen,
  Waves,
  FireExtinguisher,
  Building2,
  Fuel,
  FlaskConical,
  Biohazard,
  Shovel,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const roadTankerServices: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Truck,
    title: "Road Tanker Incidents:",
    description:
      "As a leading spill cleanup company, we offer comprehensive cleanup for tanker collisions and rollovers on major routes.",
  },
  {
    icon: Factory,
    title: "Mechanical Failures:",
    description:
      "Containment of leaks caused by valve, hose, and manhole failures.",
  },
  {
    icon: PackageOpen,
    title: "Operational Spills:",
    description:
      "Managing accidental releases during loading and offloading operations.",
  },
  {
    icon: Waves,
    title: "Complex Environmental Risks:",
    description:
      "Remediation of soil, storm water, and watercourse contamination.",
  },
  {
    icon: FireExtinguisher,
    title: "High-Consequence Events:",
    description:
      "Management of fire restoration, vapor releases, and secondary environmental impacts.",
  },
  {
    icon: Building2,
    title: "Historical & Industrial:",
    description:
      "Remediation of historical spills and contaminated land restoration.",
  },
];

const hazmatCapabilities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Fuel,
    title: "Hydrocarbons:",
    description: "Diesel, Petrol, and Oil spills.",
  },
  {
    icon: FlaskConical,
    title: "Chemicals:",
    description: "Acid spills and corrosive substances.",
  },
  {
    icon: Biohazard,
    title: "Hazardous Waste:",
    description: "Safe collection and disposal of hazardous waste materials.",
  },
  {
    icon: Shovel,
    title: "Soil Treatment:",
    description:
      "Application of soil binders and bio-remediation for hydrocarbon-contaminated ground.",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1px_2fr] gap-16 lg:gap-12">
          {/* Left column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-secondary uppercase mb-2 pb-2 border-b-4 border-secondary inline-block">
              Road Spill Response Services & Industrial Spill Containment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mt-8">
              {roadTankerServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="flex gap-4">
                    <div className="text-secondary shrink-0 pt-0.5">
                      <Icon size={30} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground uppercase text-sm mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-border w-px self-stretch" />

          {/* Right column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-secondary uppercase mb-2 pb-2 border-b-4 border-secondary inline-block">
              Hazmat Recovery Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-y-8 mt-8">
              {hazmatCapabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div key={capability.title} className="flex gap-4">
                    <div className="text-secondary shrink-0 pt-0.5">
                      <Icon size={30} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground uppercase text-sm mb-1">
                        {capability.title}
                      </h4>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
