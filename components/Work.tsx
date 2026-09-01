"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    category: "Business Website",
    title: "Corporate Website",
    description:
      "A modern company website focused on building trust, explaining services clearly, and generating qualified leads.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Web Application",
    title: "Operations Dashboard",
    description:
      "A custom dashboard for managing business data, workflows, users, reporting, and day-to-day operations.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    category: "E-Commerce",
    title: "Online Store",
    description:
      "A responsive e-commerce experience with product management, checkout, payments, and inventory integrations.",
    tags: ["WordPress", "WooCommerce", "API"],
  },
  {
    category: "Business Automation",
    title: "CRM Integration",
    description:
      "A connected workflow that synchronises customer data, automates repetitive processes, and keeps business systems aligned.",
    tags: ["CRM", "Webhooks", "REST API"],
  },
];

export default function Work() {
  return (
    <section id="work" className="w-full border-y border-stone-200 bg-white px-6 py-28 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              Our Work
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Solutions designed for real business needs.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-stone-600 dark:text-stone-400">
            From professional websites to complete business systems, we build
            digital products that solve practical problems and support growth.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900"
            >
              {/* Project Preview */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-800"
              >
                <span className="text-sm text-stone-400">
                  Project Preview
                </span>

                <span className="absolute left-5 top-5 rounded-full border border-red-200 bg-white/85 px-3 py-1 text-xs font-medium text-red-700 backdrop-blur dark:border-red-900 dark:bg-stone-950/85 dark:text-red-300">
                  {project.category}
                </span>

                <div className="absolute bottom-0 right-0 text-[120px] font-bold leading-none text-black/[0.03] dark:text-white/[0.03]">
                  0{index + 1}
                </div>
              </motion.div>

              {/* Project Content */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    aria-label={`View ${project.title}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-300 transition group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white dark:border-stone-700"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-4 max-w-xl leading-7 text-stone-600 dark:text-stone-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-600 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
