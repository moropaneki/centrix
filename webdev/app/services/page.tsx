import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <MotionSection>
      <main className="bg-white px-6 py-28 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">Our Services</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Digital solutions built around how your business works.</h1>
            <p className="mt-6 text-lg leading-8 text-stone-600 dark:text-stone-400">From a credible business website to connected software systems, we plan, design, build, launch, and improve digital products that support measurable business goals.</p>
          </div>
          <div className="mt-16 grid gap-x-10 md:grid-cols-2">
            {services.map((service, index) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group border-b border-stone-300 py-8 transition-colors hover:border-red-500 dark:border-stone-700">
                  <div className="flex items-start justify-between gap-6"><div><p className="text-sm font-semibold text-red-600 dark:text-red-400">0{index + 1} · {service.eyebrow}</p><h2 className="mt-3 text-2xl font-semibold">{service.title}</h2></div><ArrowUpRight className="h-5 w-5 text-red-600 transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
                  <p className="mt-4 max-w-xl leading-7 text-stone-600 dark:text-stone-400">{service.description}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-red-600 dark:text-red-400">Explore service →</span>
                </Link>
            ))}
          </div>
        </div>
      </main>
    </MotionSection>
  );
}
