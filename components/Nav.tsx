"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const navLinkClass = "text-sm text-stone-600 transition hover:text-red-600 dark:text-stone-300 dark:hover:text-red-400";
  const services = [["Business Websites", "websites"], ["Web Applications", "web-applications"], ["Mobile Applications", "mobile-applications"], ["E-Commerce", "ecommerce"], ["Automation & Integrations", "automation-integrations"], ["Support & Improvements", "support-maintenance"]] as const;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Agency<span className="text-red-600">Name</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="relative">
            <button type="button" onClick={() => setServicesOpen((open) => !open)} aria-expanded={servicesOpen} className={`flex items-center gap-1 ${navLinkClass}`}>
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.98 }} transition={{ duration: 0.18 }} className="absolute left-0 top-8 z-50 w-64 border border-stone-200 bg-white p-2 shadow-xl shadow-stone-900/10 dark:border-stone-800 dark:bg-stone-900">
                  {services.map(([label, slug]) => (
                    <Link key={slug} href={`/services/${slug}`} onClick={() => setServicesOpen(false)} className="block px-3 py-2 text-sm text-stone-600 transition hover:bg-red-50 hover:text-red-600 dark:text-stone-300 dark:hover:bg-red-950/30 dark:hover:text-red-400">
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/work"
            className={navLinkClass}
          >
            Our Work
          </Link>

          <Link
            href="/#process"
            className={navLinkClass}
          >
            Process
          </Link>

          <Link
            href="/about"
            className={navLinkClass}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={navLinkClass}
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Start a Project
        </Link>
      </div>
    </motion.nav>
  );
}
