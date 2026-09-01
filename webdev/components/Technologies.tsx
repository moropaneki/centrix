import React from "react";
import {
  Code2,
  Database,
  Cloud,
  Workflow,
  Smartphone,
  Globe2,
} from "lucide-react";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiWordpress,
  SiWoocommerce,
  SiPython,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "WordPress", icon: SiWordpress },
  { name: "WooCommerce", icon: SiWoocommerce },
  { name: "Python", icon: SiPython },
];

const capabilities = [
  {
    title: "Frontend Development",
    description:
      "Fast, responsive interfaces built for performance and usability.",
    icon: Code2,
  },
  {
    title: "Backend Systems",
    description:
      "Reliable APIs, business logic, authentication, and server-side applications.",
    icon: Database,
  },
  {
    title: "Cloud & Deployment",
    description:
      "Production-ready deployments with scalable hosting and modern infrastructure.",
    icon: Cloud,
  },
  {
    title: "Automation",
    description:
      "Connect tools, remove repetitive work, and automate business processes.",
    icon: Workflow,
  },
  {
    title: "Mobile Experiences",
    description:
      "Applications and responsive interfaces designed for mobile users.",
    icon: Smartphone,
  },
  {
    title: "Web Platforms",
    description:
      "From company websites to complete SaaS and business platforms.",
    icon: Globe2,
  },
];

export default function Technologies() {
  return (
    <section className="w-full border-t border-stone-200 bg-white px-6 py-28 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              Technology
            </p>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The right technology for the right problem.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:text-lg dark:text-stone-400">
              We use modern technologies to build fast, secure, scalable, and
              maintainable digital products.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-stone-600 dark:text-stone-400">
              Technology is only part of the solution. The goal is always to
              choose tools that make sense for your business and your product.
            </p>

            {/* Tech icons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm text-stone-700 transition hover:-translate-y-0.5 hover:border-red-300 hover:text-red-700 dark:border-stone-800 dark:text-stone-300"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{technology.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="border-b border-stone-300 py-7 transition-colors duration-300 hover:border-red-500 dark:border-stone-700"
                >
                  <div className="mb-5 text-red-600 dark:text-red-400">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
