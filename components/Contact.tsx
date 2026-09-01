"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const projectTypes = [
  "Business Website",
  "Web Application",
  "Mobile Application",
  "E-Commerce",
  "Automation / Integration",
  "Other",
];

export default function Contact() {
  const [projectType, setProjectType] = useState("");

  return (
    <section
      id="contact"
      className="w-full border-t border-stone-200 bg-white px-6 py-28 text-stone-950 dark:border-stone-800 dark:bg-stone-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              Start A Project
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Have an idea?
              <br />
              Let&apos;s build it.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-300">
              Tell us what you want to create and we&apos;ll help you figure out
              the best way to turn it into a real digital product.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-stone-600 dark:text-stone-300">
                  No technical knowledge required
                </span>
              </div>

              <div className="flex items-center gap-3 text-red-600 dark:text-red-400">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-stone-600 dark:text-stone-300">
                  Clear project scope before development
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-stone-600 dark:text-stone-300">
                  Websites, apps, systems and integrations
                </span>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8 dark:border-black/10">
              <p className="text-sm text-gray-500">
                Prefer email?
              </p>

              <a
                href="mailto:hello@agencyname.com"
                className="mt-2 inline-block text-lg font-medium underline-offset-4 hover:underline"
              >
                hello@agencyname.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="border-l-2 border-red-600 bg-stone-50 p-7 text-stone-950 sm:p-10 dark:bg-stone-900 dark:text-white">
            <form className="space-y-6">
              {/* Name + Company */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 outline-none transition placeholder:text-stone-400 focus:border-red-600 dark:border-stone-700 dark:focus:border-red-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 outline-none transition placeholder:text-stone-400 focus:border-red-600 dark:border-stone-700 dark:focus:border-red-400"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 outline-none transition placeholder:text-stone-400 focus:border-red-600 dark:border-stone-700 dark:focus:border-red-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+27"
                    className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 outline-none transition placeholder:text-stone-400 focus:border-red-600 dark:border-stone-700 dark:focus:border-red-400"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="mb-3 block text-sm font-medium">
                  What do you want to build?
                </label>

                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        projectType === type
                          ? "border-red-600 bg-red-600 text-white"
                          : "border-stone-300 text-stone-600 hover:border-red-300 hover:text-red-600 dark:border-stone-700 dark:text-stone-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Estimated Budget
                </label>

                <select className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 outline-none focus:border-red-600 dark:border-stone-700 dark:focus:border-red-400">
                  <option value="">Select a budget</option>
                  <option>Under R5,000</option>
                  <option>R5,000 - R10,000</option>
                  <option>R10,000 - R25,000</option>
                  <option>R25,000 - R50,000</option>
                  <option>R50,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Tell us about your project
                </label>

                <textarea
                  rows={6}
                  placeholder="What are you trying to build? What problem should it solve?"
                  className="w-full resize-none border-0 border-b border-stone-300 bg-transparent px-0 py-3 outline-none transition placeholder:text-stone-400 focus:border-red-600 dark:border-stone-700 dark:focus:border-red-400"
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 bg-red-600 px-6 py-4 font-medium text-white transition hover:bg-red-700"
              >
                Request A Quote
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-center text-xs text-gray-500">
                We&apos;ll review your project and get back to you with the next
                steps.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
