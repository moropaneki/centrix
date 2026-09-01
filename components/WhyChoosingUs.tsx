import React from "react";
import {
  Layers3,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Smartphone,
  RefreshCw,
} from "lucide-react";

const benefits = [
  {
    title: "Built Around Your Business",
    description:
      "We don't force your business into a generic template. Every solution is planned around your goals, customers, and workflow.",
    icon: Layers3,
  },
  {
    title: "Clear Communication",
    description:
      "You'll always know what we're building, what's completed, and what comes next throughout the project.",
    icon: MessageSquareText,
  },
  {
    title: "From Idea to Launch",
    description:
      "We help you move from an initial idea to planning, design, development, testing, and a production-ready launch.",
    icon: Rocket,
  },
  {
    title: "Reliable & Secure",
    description:
      "We build with modern development practices, secure integrations, and reliable infrastructure from the start.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive by Default",
    description:
      "Every experience is designed to work smoothly across desktops, tablets, and mobile devices.",
    icon: Smartphone,
  },
  {
    title: "Support After Launch",
    description:
      "Your launch isn't the end. We can continue maintaining, improving, and expanding your product as your business grows.",
    icon: RefreshCw,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="w-full border-y border-stone-200 bg-white px-6 py-28 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Side */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              Why Work With Us
            </p>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              One team.
              <br />
              From idea to launch.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:text-lg dark:text-stone-300">
              Building a digital product should not mean coordinating multiple
              developers, designers, and service providers.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-stone-600 dark:text-stone-400">
              We help you handle the entire process — from understanding the
              idea and choosing the right technology to building, launching,
              and supporting the final product.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center border-b-2 border-red-600 pb-1 text-sm font-semibold text-red-600 transition hover:border-red-800 hover:text-red-800 dark:text-red-400"
            >
              Start a Project
            </a>
          </div>

          {/* Right Side */}
          <div className="grid gap-x-10 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="reveal-up border-b border-stone-300 py-8 dark:border-stone-700"
                >
                  <div className="mb-5 text-red-600 dark:text-red-400">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    {benefit.description}
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
