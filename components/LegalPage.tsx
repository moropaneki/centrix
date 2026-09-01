import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";
import MotionSection from "@/components/MotionSection";

type LegalSection = {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  icon?: "privacy" | "terms";
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  icon = "terms",
  sections,
}: LegalPageProps) {
  const Icon = icon === "privacy" ? ShieldCheck : FileText;

  return (
    <MotionSection><main className="bg-white dark:bg-stone-950">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white px-6 py-20 dark:border-stone-800 dark:bg-stone-950 sm:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-black/[0.02] dark:bg-white/[0.02]" />
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-black/[0.02] dark:bg-white/[0.02]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-2 text-sm text-stone-500">
            <Link
              href="/"
              className="transition hover:text-red-600 dark:hover:text-red-400"
            >
              Home
            </Link>

            <span>/</span>

            <span>{title}</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div>
                <div className="mb-6 text-red-600 dark:text-red-400">
                <Icon className="h-6 w-6" />
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
                {eyebrow}
              </p>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 dark:text-stone-400">
                {description}
              </p>
            </div>

            {/* Last updated card */}
            <div className="border-l-2 border-red-600 bg-stone-100 p-6 dark:bg-stone-900">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
                Document Information
              </p>

              <div className="mt-5 border-t pt-5">
                <p className="text-sm text-gray-500">
                  Last updated
                </p>

                <p className="mt-1 font-medium">
                  {lastUpdated}
                </p>
              </div>

              <div className="mt-5 border-t pt-5">
                <p className="text-sm text-gray-500">
                  Applies to
                </p>

                <p className="mt-1 font-medium">
                  AgencyName website & services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 border-l-2 border-transparent px-3 py-2.5 text-sm text-stone-500 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                  >
                    <span className="text-xs text-gray-400">
                      {section.number}
                    </span>

                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-10 border-l-2 border-red-600 bg-stone-100 p-5 dark:bg-stone-900">
                <Mail className="h-5 w-5" />

                <h3 className="mt-4 font-semibold">
                  Have a question?
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Contact us if you need clarification about this policy.
                </p>

                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
                >
                  Contact us
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main legal content */}
          <article className="min-w-0">
            <div className="mb-10 border-l-2 border-red-600 bg-stone-100 p-6 dark:bg-stone-900 sm:p-7">
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                This document explains the terms and policies that apply when
                you use our website, contact us, or engage with our services.
                Please read it carefully.
              </p>
            </div>

            <div>
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-32 py-12 ${
                    index !== 0 ? "border-t" : "pt-0"
                  }`}
                >
                  <div className="grid gap-5 sm:grid-cols-[55px_minmax(0,1fr)]">
                    <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                      {section.number}
                    </span>

                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4 text-base leading-8 text-gray-600 dark:text-gray-400">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* LEGAL CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="border-l-2 border-red-600 bg-stone-100 p-8 sm:p-10 lg:p-12 dark:bg-stone-900">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                  Need clarification?
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Questions about our policies or services?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400 dark:text-gray-600">
                  Contact us and we&apos;ll help clarify any questions relating
                  to our website, projects, or service agreements.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Return */}
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>
        </div>
      </section>
    </main></MotionSection>
  );
}
