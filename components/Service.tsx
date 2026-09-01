import React from "react";
import {
  Globe2,
  AppWindow,
  Smartphone,
  ShoppingCart,
  Workflow,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description:
      "Modern, responsive websites designed to help your business build trust, generate leads, and convert visitors into customers.",
    icon: Globe2,
  },
  {
    title: "Web Applications",
    description:
      "Custom platforms, dashboards, portals, booking systems, and internal tools built around your business processes.",
    icon: AppWindow,
  },
  {
    title: "Mobile Applications",
    description:
      "Mobile experiences for customers and internal teams, from startup ideas to business management applications.",
    icon: Smartphone,
  },
  {
    title: "E-Commerce",
    description:
      "Professional online stores with product management, payments, order processing, and inventory integrations.",
    icon: ShoppingCart,
  },
  {
    title: "Automation & Integrations",
    description:
      "Connect your website or application with CRM systems, APIs, payment platforms, email, WhatsApp, and more.",
    icon: Workflow,
  },
  {
    title: "Support & Improvements",
    description:
      "Already have a website or system? We can fix issues, redesign pages, add features, improve performance, and maintain it.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full border-t border-stone-200 bg-white px-6 py-28 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
            What We Build
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Digital solutions built around your business.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg dark:text-stone-300">
            Whether you need a simple company website or a complete custom
            platform, we help you design, build, launch, and improve your
            digital product.
          </p>
        </div>

        <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="reveal-up group border-b border-stone-300 py-8 transition-colors duration-300 hover:border-red-500 dark:border-stone-700 dark:hover:border-red-500"
              >
                <div className="mb-5 text-red-600 dark:text-red-400">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">
                  {service.description}
                </p>

                <button className="mt-6 text-sm font-semibold text-red-600 transition group-hover:translate-x-1 dark:text-red-400">
                  Learn more →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
