"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const services = [["Business Websites", "websites"], ["Web Applications", "web-applications"], ["Mobile Applications", "mobile-applications"], ["E-Commerce", "ecommerce"], ["Automation & Integrations", "automation-integrations"]] as const;

const company = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="w-full border-t border-stone-200 bg-white px-6 py-16 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="inline-block">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                Agency<span className="text-red-600">Name</span>
              </Link>
            </motion.div>

            <p className="mt-4 max-w-md leading-7 text-stone-600 dark:text-stone-400">
              We design and build modern websites, web applications, mobile
              apps, and digital systems for businesses, startups, and
              entrepreneurs.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-red-600 transition hover:text-red-800 dark:text-red-400"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-red-600 dark:text-red-400">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {services.map(([label, slug]) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="text-sm text-stone-600 transition hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-red-600 dark:text-red-400">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {company.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-stone-600 transition hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-stone-200 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between dark:border-stone-800">
          <p>
            © {new Date().getFullYear()} AgencyName. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-red-600 dark:hover:text-red-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-red-600 dark:hover:text-red-400"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
