import React from "react";
import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, your goals, your users, and what you want the final product to achieve.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the project scope, features, pages, integrations, timelines, and the best technical approach for your project.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the user experience and visual direction so the product feels modern, clear, and easy to use.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Build",
    description:
      "We turn the approved plan into a working website, web application, or mobile application using modern technologies.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test the final product, connect everything needed, deploy it, and make sure it is ready for real users.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Support",
    description:
      "After launch, we can continue improving, maintaining, and extending the product as your business grows.",
    icon: LifeBuoy,
  },
];

export default function Process() {
  return (
    <section id="process" className="w-full border-t border-red-100 bg-white px-6 py-28 dark:border-red-950 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              Our Process
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              From your first idea to a finished product.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-stone-600 dark:text-stone-400">
            A simple and transparent process designed to keep your project
            moving forward without unnecessary complexity.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="reveal-up group relative border-b border-stone-300 py-8 transition-colors duration-300 hover:border-red-500 dark:border-stone-700 dark:hover:border-red-500"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-bold text-red-100 dark:text-red-950">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <Icon className="h-6 w-6 text-red-600 dark:text-red-400" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
                    Step {step.number}
                  </p>

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-y border-stone-300 py-8 md:flex-row md:items-center dark:border-stone-700">
          <div>
            <h3 className="text-xl font-semibold">
              Already have an idea?
            </h3>

            <p className="mt-2 text-stone-600 dark:text-stone-400">
              Tell us what you want to build and we&apos;ll help you figure out
              the best way to bring it to life.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 border-b-2 border-red-600 pb-1 text-sm font-semibold text-red-600 transition hover:border-red-800 hover:text-red-800 dark:text-red-400"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
