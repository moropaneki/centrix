"use client";

import { ArrowDown, ArrowUp, Mouse } from "lucide-react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useState } from "react";

export default function ScrollCue() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });
  const indicatorY = useTransform(progress, [0, 0.5, 0.9, 1], [0, 52, 104, 0]);
  const indicatorScale = useTransform(progress, [0, 0.08, 0.9, 1], [0.65, 1, 1, 0.65]);
  const [atBottom, setAtBottom] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (currentProgress) => {
    setAtBottom(currentProgress > 0.92);
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 text-stone-600 lg:flex dark:text-stone-400"
    >
      <motion.div animate={{ y: atBottom ? 0 : [0, 7, 0], scale: atBottom ? 1 : [1, 1.08, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
        {atBottom ? <ArrowUp className="h-6 w-6 text-red-600" /> : <Mouse className="h-6 w-6" strokeWidth={1.5} />}
      </motion.div>
      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] [writing-mode:vertical-rl]">{atBottom ? "Top" : "Scroll"}</span>
      <div className="relative h-28 w-0.5 bg-stone-300 dark:bg-stone-700">
        <motion.div style={{ y: indicatorY, scale: indicatorScale, marginLeft: -3 }} className="absolute left-1/2 h-4 w-1.5 rounded-full bg-red-600 shadow-md shadow-red-600/40" />
      </div>
      <motion.div animate={{ y: atBottom ? [0, -5, 0] : [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
        {atBottom ? <ArrowUp className="h-4 w-4 text-red-600" /> : <ArrowDown className="h-4 w-4 text-red-600" />}
      </motion.div>
    </motion.div>
  );
}
