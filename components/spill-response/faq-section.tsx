import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary uppercase text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {/* Emergency Actions */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-bold text-foreground">
              What should I do immediately after a hazardous material spill?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              First, ensure the safety of all personnel and secure the area. Then, immediately call the SSSK 24/7 Emergency Hotline at <a href="tel:0717881312" className="font-bold text-primary hover:underline">071 788 1312</a>. Under Section 30 of NEMA, immediate action is a legal requirement to minimize environmental impact and avoid penalties.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-bold text-foreground">
              Do you offer 24/7 emergency spill response in South Africa?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              Yes. Our teams are available 24 hours a day, 7 days a week, for rapid mobilization to road, rail, and industrial incidents across South African national and provincial roads.
            </AccordionContent>
          </AccordionItem>

          {/* Capabilities */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-bold text-foreground">
              What types of hazardous materials can you clean up?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              <p className="mb-2">We specialize in a wide range of hazmat recovery, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Hydrocarbons:</strong> Diesel, petrol, and oil spills.</li>
                <li><strong>Chemicals:</strong> Acid spills and corrosive substances.</li>
                <li><strong>Hazardous Waste:</strong> Safe collection and disposal.</li>
                <li><strong>Contaminated Soil:</strong> Bio-remediation and soil treatment.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-bold text-foreground">
              Do you handle road tanker accidents and collisions?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              Yes. We provide specialized response for road tanker incidents, including collisions, rollovers, mechanical failures (valves/hoses), and leaks during loading or offloading operations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-bold text-foreground">
              Can you assist with industrial site remediation?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              Absolutely. Beyond emergency response, we manage complex environmental risks such as soil and stormwater contamination, fire restoration, and the remediation of historical spills on industrial sites.
            </AccordionContent>
          </AccordionItem>

          {/* Protocol */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left font-bold text-foreground">
              What is your response protocol for a spill?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              <p className="mb-2">Our ISO-certified process follows five steps:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Immediate Mobilization:</strong> Dispatching fully equipped teams.</li>
                <li><strong>Containment:</strong> Using booms and absorbents to stop the spread.</li>
                <li><strong>Cleanup & Disposal:</strong> Removing contaminants to approved facilities.</li>
                <li><strong>Remediation:</strong> Restoring the site to pre-incident conditions.</li>
                <li><strong>Reporting:</strong> Handling all regulatory reporting to the Director-General and SAPS.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Compliance */}
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left font-bold text-foreground">
              Is SSSK Environmental Services NEMA compliant?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              Yes. We are fully compliant with Section 30 of the National Environmental Management Act (NEMA). We assist clients with the necessary legal reporting to relevant authorities to protect you from criminal prosecution and financial penalties.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left font-bold text-foreground">
              Why is Section 30 NEMA compliance important for transporters?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              Section 30 governs the control of emergency incidents. Failure to report and contain a spill immediately can result in severe fines, legal action, and responsible party cost recovery. We ensure all procedures meet these strict legal standards.
            </AccordionContent>
          </AccordionItem>

          {/* Pricing */}
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left font-bold text-foreground">
              What is the difference between the Emergency Call-Out and the Retainer option?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              <ul className="space-y-3">
                <li>
                  <strong>Option A (Emergency Call-Out):</strong> A "pay-as-used" service ideal for operators with ad-hoc needs. Costs are based on the specific incident's duration, equipment, and personnel.
                </li>
                <li>
                  <strong>Option B (Retainer/Standby):</strong> Recommended for high-risk or high-volume fleets. This provides guaranteed priority response, pre-agreed rates, and full compliance support.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-left font-bold text-foreground">
              Do I need a contract to use your services?
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted leading-relaxed">
              No. You can use Option A for immediate, ad-hoc assistance without a long-term contract. However, we recommend Option B for regular transporters to ensure priority service and predictable commercial terms.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}