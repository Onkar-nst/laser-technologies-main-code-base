import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Car, Layers, Cpu, Plane, Wind, Building2, Zap, Stethoscope } from "lucide-react";
import { motion } from "motion/react";

const DARK_BG =
  "https://dihcmuqusfdckdcadswg.supabase.co/storage/v1/object/public/images/page/dark_BACKGROUND.jpg";

interface IndustryItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgImage: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    title: "Automotive",
    description: "Fiber laser cutting machines built for body panels, chassis brackets, exhaust components, and high-volume automotive part production.",
    icon: <Car className="w-12 h-12" />,
    bgImage: "https://dihcmuqusfdckdcadswg.supabase.co/storage/v1/object/public/images/industry-solutions/new-icons-updated-11/12/205/Body%20parts.jpg"
  },
  {
    title: "Sheet Metal Fabrication",
    description: "CNC laser cutting machines for enclosures, structural profiles, custom panels, and high-speed batch fabrication workflows.",
    icon: <Layers className="w-12 h-12" />,
    bgImage: "https://dihcmuqusfdckdcadswg.supabase.co/storage/v1/object/public/images/industry-solutions/new-icons-updated-11/12/205/Contract%20manufacturers.jpg"
  },
  {
    title: "Electrical and Electronics",
    description: "Precision laser cutting for switchgear housings, control panel enclosures, DIN rail components, and electrical mounting systems.",
    icon: <Cpu className="w-12 h-12" />,
    bgImage: "https://dihcmuqusfdckdcadswg.supabase.co/storage/v1/object/public/images/industry-solutions/new-icons-updated-11/12/205/Enclosures.jpg"
  },
  {
    title: "Aerospace and Defence",
    description: "High-accuracy fiber laser cutting for structural brackets, fuselage panels, and aerospace-grade aluminium and titanium components.",
    icon: <Plane className="w-12 h-12" />,
    bgImage: "https://dihcmuqusfdckdcadswg.supabase.co/storage/v1/object/public/images/industry-solutions/new-icons-updated-11/12/205/Aircraft%20components.jpg"
  },
  {
    title: "HVAC and Ducting",
    description: "Industrial laser cutting machines for duct components, flanges, diffuser plates, and ventilation profiles in galvanised and stainless steel.",
    icon: <Wind className="w-12 h-12" />,
    bgImage: "https://dihcmuqusfdckdcadswg.supabase.co/storage/v1/object/public/images/industry-solutions/new-icons-updated-11/12/205/Cooling_heating%20units.jpg"
  },
  {
    title: "Construction and Infrastructure",
    description: "Sheet and tube laser cutting for structural steel profiles, hollow sections, connection plates, and architectural metalwork.",
    icon: <Building2 className="w-12 h-12" />,
    bgImage: "https://dihcmuqusfdckdcadswg.supabase.co/storage/v1/object/public/images/industry-solutions/new-icons-updated-11/12/205/Metal%20doors,%20railings,%20facades.jpg"
  },
  {
    title: "EV and Energy",
    description: "Electrolamination laser cutting machines for motor lamination stacks, transformer cores, and EV drivetrain components.",
    icon: <Zap className="w-12 h-12" />,
    bgImage: "https://dihcmuqusfdckdcadswg.supabase.co/storage/v1/object/public/images/industry-solutions/new-icons-updated-11/12/205/Tubes%20&%20chassis%20parts.jpg"
  },
  {
    title: "Medical Devices",
    description: "Precision CNC laser cutting for surgical trays, implant component blanks, and medical-grade stainless steel enclosures.",
    icon: <Stethoscope className="w-12 h-12" />,
    bgImage: "https://dihcmuqusfdckdcadswg.supabase.co/storage/v1/object/public/images/industry-solutions/new-icons-updated-11/12/205/Hospital%20furniture.jpg"
  }
];

export default function AdsIndustries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, INDUSTRIES.length - itemsPerView);
  const cardWidthPercent = 100 / itemsPerView;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
  const prevSlide = () => setCurrentIndex((p) => (p <= 0 ? maxIndex : p - 1));

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${DARK_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-primary font-medium text-white leading-tight mb-4">
            Built for Industries Where Precision is{" "}
            <span className="text-[#f31524]">Non-Negotiable</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light font-secondary leading-relaxed">
            Tailor-made laser cutting solutions for demanding industrial manufacturing scenarios.
          </p>
        </motion.div>

        {/* Carousel Window */}
        <div className="overflow-hidden mb-12">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidthPercent}%)`,
            }}
          >
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 border border-white/10 cursor-pointer overflow-hidden bg-black/40 backdrop-blur-sm"
                style={{
                  width: `calc(${cardWidthPercent}% - ${itemsPerView > 1 ? 16 : 0}px)`,
                  marginRight: `${itemsPerView > 1 ? 24 : 0}px`,
                  height: "22rem",
                }}
              >
                {/* Hover Background Image */}
                <img
                  src={industry.bgImage}
                  alt={`${industry.title} background`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-750 ease-in-out"
                  loading="lazy"
                />

                {/* Red Semi-Transparent Overlay */}
                <div className="absolute inset-0 bg-[#f31524]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                  {/* Default State: Icon & Title */}
                  <div className="flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-6">
                    <div className="text-[#f31524] mb-5 group-hover:text-white transition-colors duration-500">
                      {industry.icon}
                    </div>
                    <h4 className="text-xl font-primary font-medium text-white group-hover:text-white transition-colors">
                      {industry.title}
                    </h4>
                  </div>

                  {/* Hover State: Description */}
                  <p className="absolute bottom-8 left-8 right-8 text-sm text-white/95 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 font-secondary leading-relaxed font-light">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={prevSlide}
            className="bg-white/10 text-white p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all active:scale-95 bg-transparent"
            aria-label="Previous Industry Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 bg-transparent border-0 ${
                  i === currentIndex
                    ? "bg-[#f31524] w-8"
                    : "bg-white/35 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white/10 text-white p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all active:scale-95 bg-transparent"
            aria-label="Next Industry Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
