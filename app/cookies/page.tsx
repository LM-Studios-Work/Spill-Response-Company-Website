import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | SSSK Environmental Services",
  description: "How we use cookies to improve your experience on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl text-foreground">
        <h1 className="font-display text-4xl font-bold text-primary mb-8 uppercase">
          Cookie Policy
        </h1>
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            This website uses cookies to distinguish you from other users and to
            provide you with a high-quality browsing experience.
          </p>

          <div className="grid gap-6 mt-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-card">
              <h2 className="font-bold text-xl text-secondary mb-3 uppercase">
                1. Necessary Cookies
              </h2>
              <p className="text-foreground-muted">
                These are required for the operation of our website. They
                include, for example, cookies that enable you to fill out quote
                request forms securely.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg bg-card">
              <h2 className="font-bold text-xl text-secondary mb-3 uppercase">
                2. Analytical Cookies
              </h2>
              <p className="text-foreground-muted">
                We use these to recognize and count the number of visitors and
                to see how visitors move around our website. This helps us
                ensure users find the environmental services they need quickly.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg bg-card">
              <h2 className="font-bold text-xl text-secondary mb-3 uppercase">
                3. Functional Cookies
              </h2>
              <p className="text-foreground-muted">
                These are used to recognize you when you return to our website,
                allowing us to personalize our content for you (e.g.,
                remembering your service preferences).
              </p>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-secondary uppercase mb-4">
              4. Managing Cookies
            </h2>
            <p>
              Most browsers allow you to refuse or delete cookies. If you block
              cookies, some features of this site (like the interactive contact
              form) may not function as intended.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
