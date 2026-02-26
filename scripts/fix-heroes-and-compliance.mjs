import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const root = '/vercel/share/v0-project';

function updateFile(relPath, transformFn) {
  const fullPath = join(root, relPath);
  const original = readFileSync(fullPath, 'utf8');
  const updated = transformFn(original);
  if (original !== updated) {
    writeFileSync(fullPath, updated, 'utf8');
    console.log(`[v0] Updated: ${relPath}`);
  } else {
    console.log(`[v0] No change needed: ${relPath}`);
  }
}

// ─── HERO HEIGHT STANDARDISATION ────────────────────────────────────────────
// Standard for all inner-page heroes: min-h-[360px] lg:min-h-[560px]

updateFile('components/about/hero-section.tsx', (src) =>
  src.replace(
    /h-\[300px\] sm:h-\[400px\] md:h-\[500px\]/,
    'min-h-[360px] lg:min-h-[560px]'
  )
);

updateFile('components/contact/hero-section.tsx', (src) =>
  src.replace(
    'className="relative bg-primary border-b border-gray-200"',
    'className="relative bg-primary border-b border-gray-200 min-h-[360px] lg:min-h-[560px] flex items-center"'
  )
);

updateFile('components/environmental-assessments/hero-section.tsx', (src) =>
  src.replace(
    'className="relative bg-primary h-[500px] flex items-center"',
    'className="relative bg-primary min-h-[360px] lg:min-h-[560px] flex items-center"'
  )
);

updateFile('components/pollution-control/hero-section.tsx', (src) =>
  src
    .replace(
      'className="relative bg-secondary overflow-hidden"',
      'className="relative bg-secondary overflow-hidden min-h-[360px] lg:min-h-[560px] flex items-center"'
    )
    .replace('py-20 lg:py-32', 'py-16 lg:py-20')
);

updateFile('components/pricing/hero-section.tsx', (src) =>
  src.replace(
    /min-h-\[350px\] sm:min-h-\[400px\] md:min-h-\[500px\]/,
    'min-h-[360px] lg:min-h-[560px]'
  )
);

updateFile('components/products/hero-section.tsx', (src) =>
  src
    .replace(
      'className="relative bg-primary overflow-hidden"',
      'className="relative bg-primary overflow-hidden min-h-[360px] lg:min-h-[560px] flex items-center"'
    )
    .replace('py-16 lg:py-24 relative z-20 flex flex-col lg:flex-row items-center', 'py-16 lg:py-20 relative z-20 flex flex-col lg:flex-row items-center w-full')
);

updateFile('components/spill-response/hero-section.tsx', (src) =>
  src.replace('min-h-[600px] flex items-center', 'min-h-[360px] lg:min-h-[560px] flex items-center')
);

updateFile('components/training/hero-section.tsx', (src) =>
  src.replace(
    'className="relative bg-primary h-[600px] flex items-center overflow-hidden"',
    'className="relative bg-primary min-h-[360px] lg:min-h-[560px] flex items-center overflow-hidden"'
  )
);

updateFile('components/waste-management/hero-section.tsx', (src) =>
  src.replace(
    'className="relative h-[600px] flex items-center"',
    'className="relative min-h-[360px] lg:min-h-[560px] flex items-center"'
  )
);

// ─── COMPLIANCE GRAMMAR FIXES ────────────────────────────────────────────────

// spill-response/hero-section.tsx
updateFile('components/spill-response/hero-section.tsx', (src) =>
  src
    .replace('NEMA compliance\n          </div>', 'NEMA Authorised\n          </div>')
    .replace('NEMA compliance">', 'NEMA Authorised">')
    .replace('Fully compliance with Section 30 of NEMA', 'Fully aligned with Section 30 of NEMA')
);

// spill-response/faq-section.tsx
updateFile('components/spill-response/faq-section.tsx', (src) =>
  src
    .replace(
      'Is SSSK Environmental Services NEMA compliance?',
      'Does SSSK Environmental Services meet NEMA requirements?'
    )
    .replace(
      'Yes. We are fully compliance with Section 30 of the National',
      'Yes. We operate fully in accordance with Section 30 of the National'
    )
);

// spill-response/response-protocol.tsx
updateFile('components/spill-response/response-protocol.tsx', (src) =>
  src.replace(
    'environmentally compliance disposal at approved facilities.',
    'environmentally responsible disposal at approved facilities.'
  )
);

// spill-response/intro-section.tsx
updateFile('components/spill-response/intro-section.tsx', (src) =>
  src.replace('professional, compliant, and rapid', 'professional, thorough, and rapid')
);

// products/hero-section.tsx
updateFile('components/products/hero-section.tsx', (src) =>
  src.replace(
    'fast-acting, and compliance with environmental regulations.',
    'fast-acting, and in line with environmental regulations.'
  )
);

// pricing/intro-section.tsx
updateFile('components/pricing/intro-section.tsx', (src) =>
  src.replace(
    'is compliance, prepared, and has guaranteed access',
    'meets regulatory requirements, is prepared, and has guaranteed access'
  )
);

// home/testimonials-section.tsx
updateFile('components/home/testimonials-section.tsx', (src) =>
  src.replace(
    'Professional, fully equipped, and compliance.',
    'Professional, fully equipped, and thorough.'
  )
);

// environmental-assessments/hero-section.tsx
updateFile('components/environmental-assessments/hero-section.tsx', (src) =>
  src.replace(
    'accurate, compliance, and audit-ready.',
    'accurate, thorough, and audit-ready.'
  )
);

// environmental-assessments/cta-banner.tsx
updateFile('components/environmental-assessments/cta-banner.tsx', (src) =>
  src.replace(
    'accurate and compliance.',
    'accurate and regulation-ready.'
  )
);

// waste-management/split-section.tsx
updateFile('components/waste-management/split-section.tsx', (src) =>
  src
    .replace(
      'Disposal compliance with Hazardous Biological Agents',
      'Disposal in accordance with Hazardous Biological Agents'
    )
    .replace('NEMA Compliant Waste Disposal', 'NEMA-Approved Waste Disposal')
    .replace(/NEMA compliant waste disposal/g, 'NEMA-approved waste disposal')
);

// waste-management/intro-section.tsx
updateFile('components/waste-management/intro-section.tsx', (src) =>
  src.replace(/NEMA compliant waste disposal/g, 'NEMA-approved waste disposal')
);

// app/waste-management/page.tsx
updateFile('app/waste-management/page.tsx', (src) =>
  src
    .replace(/NEMA compliant waste disposal/gi, 'NEMA-approved waste disposal')
    .replace(/"NEMA compliant waste disposal"/gi, '"NEMA-approved waste disposal"')
);

// app/emergency-spill-response/page.tsx
updateFile('app/emergency-spill-response/page.tsx', (src) =>
  src.replace(/NEMA compliant\./gi, 'NEMA-approved.')
    .replace(/NEMA compliant"/gi, 'NEMA-approved"')
);

// app/products/page.tsx
updateFile('app/products/page.tsx', (src) =>
  src.replace(
    'compliance with environmental regulations.',
    'in line with environmental regulations.'
  )
);

console.log('[v0] All updates complete.');
