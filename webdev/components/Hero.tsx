"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiWordpress,
  SiWoocommerce,
  SiPostgresql,
  SiPrisma,
  SiPython,
} from "react-icons/si";

const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "NestJS",
    icon: SiNestjs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
  },
  {
    name: "WordPress",
    icon: SiWordpress,
  },
  {
    name: "WooCommerce",
    icon: SiWoocommerce,
  },
  {
    name: "Python",
    icon: SiPython,
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 18 });
  const shapeX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const shapeY = useTransform(smoothY, [-0.5, 0.5], [-22, 22]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate flex w-full items-center justify-center overflow-hidden bg-white px-6 py-20 dark:bg-stone-950"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div style={{ x: shapeX, y: shapeY }} animate={{ rotate: [-18, -8, -22, -18], borderRadius: ["28% 72% 45% 55%", "48% 52% 64% 36%", "65% 35% 28% 72%", "28% 72% 45% 55%"] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-28 -top-28 h-72 w-96 bg-red-600 shadow-2xl shadow-red-900/20" />
        <motion.div style={{ x: useTransform(shapeX, (value) => -value), y: useTransform(shapeY, (value) => -value) }} animate={{ rotate: [42, 32, 48, 42], borderRadius: ["55% 45% 30% 70%", "30% 70% 55% 45%", "72% 28% 48% 52%", "55% 45% 30% 70%"] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-36 -right-32 h-80 w-[28rem] bg-red-700 shadow-2xl shadow-red-900/25" />
        <motion.div animate={{ x: [0, 14, -4, 0], rotate: [45, 38, 50, 45], borderRadius: ["24% 76% 58% 42%", "52% 48% 30% 70%", "70% 30% 45% 55%", "24% 76% 58% 42%"] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -bottom-20 -left-28 h-44 w-72 border-[18px] border-red-500/90 bg-white shadow-xl shadow-stone-900/15 dark:bg-stone-950" />
        <motion.div animate={{ y: [0, 22, -8, 0], rotate: [-42, -35, -48, -42], borderRadius: ["58% 42% 25% 75%", "32% 68% 52% 48%", "70% 30% 42% 58%", "58% 42% 25% 75%"] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute -right-36 top-24 h-48 w-80 border-[18px] border-red-600/90 bg-white shadow-xl shadow-stone-900/15 dark:bg-stone-950" />
        <motion.div animate={{ rotate: 360, scale: [1, 1.12, 1], opacity: [0.15, 0.35, 0.15] }} transition={{ rotate: { duration: 24, repeat: Infinity, ease: "linear" }, default: { duration: 5, repeat: Infinity, ease: "easeInOut" } }} className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/30" />
        <motion.div animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[22%] top-[32%] h-2 w-2 rounded-full bg-red-500" />
        <motion.div animate={{ y: [0, 14, 0], opacity: [0.15, 0.7, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute right-[24%] bottom-[28%] h-3 w-3 rounded-full bg-red-600" />
        <motion.div
          animate={{ x: [0, 26, -14, 0], y: [0, -18, 10, 0], rotate: [12, 42, -8, 12], scale: [1, 1.18, 0.86, 1], borderRadius: ["18% 82% 34% 66%", "50% 50% 12% 88%", "82% 18% 65% 35%", "18% 82% 34% 66%"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute left-[12%] top-[42%] h-20 w-20 bg-red-500/80 shadow-lg shadow-red-900/10"
        />
        <motion.div
          animate={{ x: [0, -22, 12, 0], y: [0, 16, -12, 0], rotate: [-25, 18, 55, -25], scale: [1, 0.82, 1.12, 1], borderRadius: ["70% 30% 50% 50%", "25% 75% 35% 65%", "50% 50% 80% 20%", "70% 30% 50% 50%"] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-[13%] top-[38%] h-16 w-28 border-8 border-red-500/60 bg-transparent shadow-lg shadow-red-900/10"
        />
        <motion.div
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.25, 0.9, 1.15, 1], borderRadius: ["10%", "50%", "25% 75%", "50%", "10%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[18%] right-[32%] h-10 w-10 border-4 border-red-600/50"
        />
        <div className="absolute inset-0 bg-white/75 dark:bg-stone-950/75" />
      </div>
      <div className="relative flex max-w-6xl flex-col items-center gap-6 text-center text-stone-950">
        <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
          Websites · Web Apps · Mobile Apps
        </span>

        <h1 className="reveal-up max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build Something <br />
          That Moves Your Business Forward.
        </h1>

        <p className="reveal-up max-w-2xl text-base leading-7 text-stone-700 [animation-delay:120ms] sm:text-lg">
          We design and build modern websites, web applications, and mobile
          apps for businesses, startups, and entrepreneurs — turning ideas
          into fast, reliable, and professional digital products.
        </p>

        <div className="reveal-up mt-2 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="rounded-lg border border-stone-200 px-6 py-3 font-medium transition hover:border-red-300 hover:bg-red-50 dark:border-stone-700 dark:hover:border-red-800 dark:hover:bg-red-950/30">
            Explore Our Services
          </button>
        </div>

        <p className="mt-4 text-sm text-stone-600">
          From idea to design, development, launch, and support.
        </p>

        {/* Technology Stack */}
        <div className="mt-10 w-full">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-stone-600">
            Technologies we work with
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.name}
                  className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 transition hover:-translate-y-1 hover:border-red-300 hover:text-red-700 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-red-800 dark:hover:text-red-300"
                >
                  <Icon className="h-5 w-5" />

                  <span>{technology.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
