import Contact from "@/components/Contact";
import MotionSection from "@/components/MotionSection";

export default function ContactPage() {
  return (
    <MotionSection><main className="bg-white dark:bg-stone-950">
      <section className="px-6 pb-8 pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Tell us what you want to build.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Websites, applications, integrations, business systems, or
            something completely new — tell us about it.
          </p>
        </div>
      </section>

      <Contact />
    </main></MotionSection>
  );
}
