import Link from "next/link";
import MotionSection from "@/components/MotionSection";

const values = [
  {
    title: "Practical",
    description:
      "We focus on building useful digital solutions that solve real commercial problems and support measurable growth.",
  },
  {
    title: "Transparent",
    description:
      "Clear communication, realistic expectations, and visible progress throughout the lifecycle of every project.",
  },
  {
    title: "Modern",
    description:
      "We apply current technologies, scalable architecture, and strong engineering standards to create products that are built to last.",
  },
  {
    title: "Long-Term",
    description:
      "We aim to build lasting partnerships that continue to support your business beyond launch and initial delivery.",
  },
];

export default function AboutPage() {
  return (
    <MotionSection><main className="bg-white dark:bg-stone-950">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
                About Us
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                We build digital systems that help businesses move with confidence.
              </h1>
            </div>

            <div className="space-y-5 text-lg leading-8 text-stone-600 dark:text-stone-400">
              <p>
                AgencyName is a digital product and business systems studio helping
                companies, founders, and growing teams turn ideas into professional,
                customer-facing, and operationally efficient solutions.
              </p>

              <p>
                We design and build websites, web applications, mobile experiences,
                e-commerce platforms, integrations, and automation systems that support
                real business objectives.
              </p>

              <p>
                Our method is grounded in strategy, clarity, and execution: we understand
                the challenge, define the right approach, deliver a robust product, and
                continue refining it as the business evolves.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              How We Work
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Built around business goals, clear communication, and practical delivery.
            </h2>

            <div className="mt-10 grid gap-x-10 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="border-b border-stone-300 py-6 dark:border-stone-700">
                  <h3 className="text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 border-l-2 border-red-600 bg-stone-100 p-10 dark:bg-stone-900">
            <h2 className="text-3xl font-bold">
              Looking for a strategic digital partner?
            </h2>

            <p className="mt-4 max-w-2xl text-stone-600 dark:text-stone-400">
              Whether you are launching a new venture, improving an existing platform,
              or modernising internal operations, we would be pleased to discuss your goals.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
            >
              Talk To Us
            </Link>
          </div>
        </div>
      </section>
    </main></MotionSection>
  );
}
