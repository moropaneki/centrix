import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import {
  getService,
  services,
} from "@/data/services";
import MotionSection from "@/components/MotionSection";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | AgencyName`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <MotionSection><main className="bg-white dark:bg-stone-950">
      {/* HERO */}
      <section className="border-b border-stone-200 px-6 py-20 sm:py-28 dark:border-stone-800">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-sm text-stone-500">
            <Link
              href="/"
              className="transition hover:text-red-600 dark:hover:text-red-400"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link
              href="/services"
              className="transition hover:text-red-600 dark:hover:text-red-400"
            >
              Services
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span>{service.eyebrow}</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
                {service.eyebrow}
              </p>

              <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {service.headline}
              </h1>
            </div>

            <div>
              <p className="text-lg leading-8 text-stone-600 dark:text-stone-400">
                {service.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/work"
                  className="border border-stone-300 px-6 py-3 font-medium transition hover:border-red-300 hover:bg-red-50 dark:border-stone-700 dark:hover:border-red-800 dark:hover:bg-red-950/30"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              The Opportunity
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {service.intro.title}
            </h2>

            <div className="mt-8 max-w-3xl space-y-5">
              {service.intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-8 text-stone-600 dark:text-stone-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="border-y border-stone-200 bg-stone-100 px-6 py-24 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              Problems We Solve
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Technology should remove friction, not create more of it.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {service.problems.map((problem, index) => (
              <div
                key={problem.title}
                className="border-b border-stone-300 py-7 dark:border-stone-700"
              >
                <div className="mb-8 flex items-center justify-between">
                  <CheckCircle2 className="h-6 w-6" />

                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">
                  {problem.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
                What We Deliver
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built around what your business actually needs.
              </h2>

              <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
                Every project is different. We select the features,
                integrations, and technologies appropriate for your objectives
                instead of forcing unnecessary functionality into the project.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-stone-300 py-6 dark:border-stone-700"
                >
                  <Check className="mb-5 h-5 w-5" />

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-red-100 bg-red-50/40 px-6 py-24 dark:border-red-950 dark:bg-red-950/10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              How We Work
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              A clear process from idea to production.
            </h2>
          </div>

          <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step) => (
              <div
                key={step.number}
                className="border-b border-stone-300 py-7 dark:border-stone-700"
              >
                <p className="text-sm text-red-600 dark:text-red-400">
                  {step.number}
                </p>

                <h3 className="mt-8 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL FOR + TECHNOLOGY */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              Who It&apos;s For
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Is this the right service for your business?
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.idealFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b py-3"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />

                  <span className="text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Technology
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Modern tools selected for the project.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
              We don&apos;t select technology because it is trendy. We choose a
              stack based on reliability, maintainability, performance,
              scalability, and what makes sense for the project.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="border-l-2 border-red-600 bg-stone-100 p-8 sm:p-12 lg:p-16 dark:bg-stone-900">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                  Let&apos;s Work Together
                </p>

                <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  {service.closing.title}
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                  {service.closing.description}
                </p>
              </div>

              <div className="lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 px-7 py-4 font-medium text-white transition hover:bg-red-700"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main></MotionSection>
  );
}
