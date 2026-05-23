import { useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";
import { Settings, Users, Clock, Factory, MapPin } from "lucide-react";

const METRICS = [
  { id: 1, label: "Machines Deployed Across India", value: "5500+", icon: Settings },
  { id: 2, label: "Customers Served", value: "7200+", icon: Users },
  { id: 3, label: "Years of Manufacturing Excellence", value: "15+", icon: Clock },
  { id: 4, label: "Industries Served", value: "10+", icon: Factory },
  { id: 5, label: "Pan-India Sales & Service Network", value: "✓", icon: MapPin },
];

const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    const element = ref.current;
    if (!element || !inView) return;
    const match = value.match(/(\d+)(.*)/);
    if (!match) {
      element.textContent = value;
      return;
    }
    const end = parseInt(match[1], 10);
    const suffix = match[2];
    const controls = animate(0, end, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v: number) {
        element.textContent = Math.floor(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [value, inView]);

  return (
    <span
      ref={ref}
      className="tabular-nums"
      style={{ opacity: inView ? 1 : 0, transition: "opacity 0.3s" }}
    >
      {value}
    </span>
  );
};

export default function AdsTrustBar() {
  return (
    <div className="relative z-20 -mt-20 container mx-auto px-6">
      <div className="bg-white shadow-2xl rounded-sm grid grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 border border-gray-100">
        {METRICS.map((m) => (
          <div
            key={m.id}
            className="p-6 md:p-8 text-center bg-white group hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <m.icon className="w-5 h-5 text-[#f31524]" />
              </div>
            </div>
            <h3 className="text-2xl md:text-4xl font-medium text-red-600 mb-2 font-primary tracking-tight">
              <Counter value={m.value} />
            </h3>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-medium">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
