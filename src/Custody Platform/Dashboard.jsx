import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Search,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071D49] via-[#0B2C6B] to-[#123C8C]">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Blue Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* RIGHT SIDE */}
          <div
            className="relative md:flex justify-center lg:justify-end lg:hidden block mx-auto w-full max-w-md pt-10"
            data-aos="fade-left"
          >
            {/* Outer Glow */}
            <div className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-[#2563EB]/10 rounded-full"></div>

            {/* Inner Glow */}
            <div className="absolute w-[220px] h-[220px] md:w-[280px] md:h-[280px] bg-[#3B82F6]/10 rounded-full top-10"></div>

            {/* SMALL FLOATING BLOCKS */}
            <div className="absolute top-12 left-6 w-7 h-7 md:w-8 md:h-8 bg-[#3B82F6]/30 border border-[#60A5FA]/20 rounded-md rotate-12 backdrop-blur-sm"></div>

            <div className="absolute bottom-14 left-8 w-6 h-6 md:w-7 md:h-7 bg-[#2563EB]/30 border border-[#60A5FA]/20 rounded-md -rotate-12 backdrop-blur-sm"></div>

            <div className="absolute top-8 right-8 w-7 h-7 md:w-8 md:h-8 bg-[#60A5FA]/30 border border-[#93C5FD]/20 rounded-md rotate-45 backdrop-blur-sm"></div>

            <div className="absolute bottom-16 right-4 w-6 h-6 md:w-7 md:h-7 bg-[#2563EB]/30 border border-[#60A5FA]/20 rounded-md rotate-12 backdrop-blur-sm"></div>

            {/* MAIN GLASS CARD */}
            <div className="relative z-10 mt-10 bg-white/10 border border-white/10 backdrop-blur-xl rounded-[28px] p-6 md:p-8 w-full max-w-sm shadow-2xl">
              {/* Top Lines */}
              <div className="space-y-3">
                <div className="h-2.5 w-24 rounded-full bg-[#B8D7FF]/70"></div>
                <div className="h-2.5 w-16 rounded-full bg-[#B8D7FF]/40"></div>
              </div>

              {/* Evaluation Items */}
              <div className="mt-7 space-y-4">
                {[
                  {
                    icon: (
                      <CheckCircle2
                        size={15}
                        className="text-[#93C5FD]"
                      />
                    ),
                  },
                  {
                    icon: (
                      <CheckCircle2
                        size={15}
                        className="text-[#93C5FD]"
                      />
                    ),
                  },
                  {
                    icon: (
                      <AlertCircle
                        size={15}
                        className="text-[#FACC15]"
                      />
                    ),
                  },
                  {
                    icon: (
                      <CheckCircle2
                        size={15}
                        className="text-[#93C5FD]"
                      />
                    ),
                  },
                  {
                    icon: (
                      <CheckCircle2
                        size={15}
                        className="text-[#93C5FD]"
                      />
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="h-2 bg-white/25 rounded-full flex-1"></div>

                    <div>{item.icon}</div>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center justify-between">
                <p className="text-[#B9D9FF] text-[10px] tracking-[3px] uppercase">
                  Evaluation
                </p>

                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#60A5FA]/40 bg-[#0B2C6B]">
                  <Search
                    size={20}
                    className="text-[#B9D9FF]"
                  />
                </div>
              </div>

              {/* PASS Badge */}
              <div className="absolute top-5 right-5 bg-[#60A5FA] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                PASS
              </div>
            </div>
          </div>

          {/* LEFT SIDE */}
          <div data-aos="fade-right">
            {/* Small Heading */}
            <span className="uppercase tracking-[5px] text-[#93C5FD] text-[10px] md:text-xs font-semibold">
              Custody Platform Advisory & Security Assessment
            </span>

            {/* Main Heading */}
            <h1 className="mt-5 text-3xl xl:text-5xl lg:text-5xl md:text-4xl font-bold leading-[1.05] text-white max-w-2xl">
              Make the Right
              <br />
              <span className="text-[#8EC5FF]">
                Custody Decision
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-[#D8E6FF] text-base md:text-lg leading-relaxed max-w-2xl">
              Choosing a custody platform is one of the most important
              decisions in your digital asset stack. Once integrated,
              it defines how keys are controlled, how transactions are
              approved, and how risk is distributed.
            </p>

            <p className="mt-5 text-[#B9CDED] text-sm md:text-lg leading-relaxed max-w-2xl">
              We help you evaluate platforms at a deeper level, so you
              understand not just what they claim, but how they actually
              work under real conditions.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3.5 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                <a href="/contact-us">Get Started →</a>
                
              </button>

              <button className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300">
                <a href="#workprocess">Learn More</a>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="relative md:flex justify-center lg:justify-end hidden lg:block mx-auto w-full max-w-md"
            data-aos="fade-left"
          >
            {/* Outer Glow */}
            <div className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-[#2563EB]/10 rounded-full"></div>

            {/* Inner Glow */}
            <div className="absolute w-[220px] h-[220px] md:w-[280px] md:h-[280px] bg-[#3B82F6]/10 rounded-full top-10"></div>

            {/* SMALL FLOATING BLOCKS */}
            <div className="absolute top-12 left-6 w-7 h-7 md:w-8 md:h-8 bg-[#3B82F6]/30 border border-[#60A5FA]/20 rounded-md rotate-12 backdrop-blur-sm"></div>

            <div className="absolute bottom-14 left-8 w-6 h-6 md:w-7 md:h-7 bg-[#2563EB]/30 border border-[#60A5FA]/20 rounded-md -rotate-12 backdrop-blur-sm"></div>

            <div className="absolute top-8 right-8 w-7 h-7 md:w-8 md:h-8 bg-[#60A5FA]/30 border border-[#93C5FD]/20 rounded-md rotate-45 backdrop-blur-sm"></div>

            <div className="absolute bottom-16 right-4 w-6 h-6 md:w-7 md:h-7 bg-[#2563EB]/30 border border-[#60A5FA]/20 rounded-md rotate-12 backdrop-blur-sm"></div>

            {/* MAIN GLASS CARD */}
            <div className="relative z-10 mt-10 bg-white/10 border border-white/10 backdrop-blur-xl rounded-[28px] p-6 md:p-8 w-full max-w-sm shadow-2xl">
              {/* Top Lines */}
              <div className="space-y-3">
                <div className="h-2.5 w-24 rounded-full bg-[#B8D7FF]/70"></div>
                <div className="h-2.5 w-16 rounded-full bg-[#B8D7FF]/40"></div>
              </div>

              {/* Evaluation Items */}
              <div className="mt-7 space-y-4">
                {[
                  {
                    icon: (
                      <CheckCircle2
                        size={15}
                        className="text-[#93C5FD]"
                      />
                    ),
                  },
                  {
                    icon: (
                      <CheckCircle2
                        size={15}
                        className="text-[#93C5FD]"
                      />
                    ),
                  },
                  {
                    icon: (
                      <AlertCircle
                        size={15}
                        className="text-[#FACC15]"
                      />
                    ),
                  },
                  {
                    icon: (
                      <CheckCircle2
                        size={15}
                        className="text-[#93C5FD]"
                      />
                    ),
                  },
                  {
                    icon: (
                      <CheckCircle2
                        size={15}
                        className="text-[#93C5FD]"
                      />
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="h-2 bg-white/25 rounded-full flex-1"></div>

                    <div>{item.icon}</div>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center justify-between">
                <p className="text-[#B9D9FF] text-[10px] tracking-[3px] uppercase">
                  Evaluation
                </p>

                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#60A5FA]/40 bg-[#0B2C6B]">
                  <Search
                    size={20}
                    className="text-[#B9D9FF]"
                  />
                </div>
              </div>

              {/* PASS Badge */}
              <div className="absolute top-5 right-5 bg-[#60A5FA] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                PASS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;