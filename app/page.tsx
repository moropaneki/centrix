import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Service";
import WhyChooseUs from "@/components/WhyChoosingUs";
import MotionSection from "@/components/MotionSection";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white font-sans dark:bg-stone-950">
      <main className="flex w-full flex-col items-center justify-center bg-white dark:bg-stone-950">
        <MotionSection><Hero /></MotionSection>
        <MotionSection><Services /></MotionSection>
        <MotionSection><WhyChooseUs /></MotionSection>
        <MotionSection><Process /></MotionSection>
        <MotionSection><Technologies /></MotionSection>
        <MotionSection><Contact /></MotionSection>
      </main>
    </div>
  );
}
