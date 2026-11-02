import type { Metadata } from "next";
import { programsIntro } from "@/data/content";
import { assetPath } from "@/config/site";
import ProgramExplorer from "@/components/programs/ProgramExplorer";

export const metadata: Metadata = {
  title: "Eğitim Programlarımız",
  description: programsIntro.lead,
};

export default function EgitimProgramlarimizPage() {
  return (
    <div className="bg-paper text-ink">
      {/* Clean, Spacious Cobalt Header */}
      <section className="studio-hero text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs sm:text-[13px] font-bold tracking-[0.06em] text-white mb-5">
                <span className="h-2 w-2 rounded-full bg-crimson-500 shrink-0" />
                <span>{programsIntro.eyebrow}</span>
              </div>

              <h1 className="text-[2rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
                {programsIntro.headline}
              </h1>

              <p className="mt-4 text-[15.5px] sm:text-lg text-cobalt-50/95 leading-relaxed">
                {programsIntro.lead}
              </p>
            </div>

            {/* Right Column — Single Clean White-Framed Photo */}
            <div className="lg:col-span-5">
              <div className="bg-white p-2.5 rounded-2xl shadow-studio">
                <img
                  src={assetPath("/images/programs-global-study.jpg")}
                  alt={programsIntro.headline}
                  className="w-full aspect-[16/10] object-cover rounded-xl block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProgramExplorer />
    </div>
  );
}
