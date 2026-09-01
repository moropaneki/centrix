import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MotionSection from "@/components/MotionSection";

const projects = [
  {
    type: "Web Application",
    name: "Business Operations Platform",
    description:
      "A custom platform for managing users, business workflows, reporting, and daily operations.",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    type: "Business Website",
    name: "Corporate Website",
    description:
      "A modern company website designed to improve credibility, communicate services, and generate enquiries.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    type: "E-Commerce",
    name: "Online Store",
    description:
      "A complete e-commerce solution with product management, payments, order processing, and inventory integration.",
    technologies: ["WordPress", "WooCommerce", "REST API"],
  },
  {
    type: "Automation",
    name: "CRM Automation System",
    description:
      "Automated workflows connecting CRM data, external applications, business processes, and APIs.",
    technologies: ["CRM", "Webhooks", "APIs"],
  },
];

export default function WorkPage() {
  return (
    <MotionSection><main className="bg-white dark:bg-stone-950">
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              Our Work
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Digital solutions created to address meaningful business challenges.
            </h1>

            <p className="mt-6 text-lg leading-8 text-stone-600 dark:text-stone-400">
              A sample of the websites, systems, applications, and integrations we build for
              organisations that need practical, scalable digital capability.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group overflow-hidden border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="relative flex aspect-[16/9] items-center justify-center bg-stone-100 dark:bg-stone-800">
                  <span className="text-sm text-stone-400">
                    Project Screenshot
                  </span>

                  <span className="absolute right-6 top-4 text-7xl font-bold text-black/5 dark:text-white/5">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-8">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {project.type}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-5">
                    <h2 className="text-2xl font-semibold">
                      {project.name}
                    </h2>

                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                  <p className="mt-4 leading-7 text-stone-600 dark:text-stone-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-600 dark:border-stone-700 dark:text-stone-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold">
              Ready to build something impactful?
            </h2>

            <Link
              href="/contact"
              className="mt-6 inline-flex bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main></MotionSection>
  );
}
