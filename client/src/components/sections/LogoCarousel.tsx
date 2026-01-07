import { motion } from "framer-motion";
import { logos } from "@/data/logos";

export default function LogoCarousel() {
  // Use a subset of logos for the carousel to keep it clean, or all of them
  // Doubling the logos array to create a seamless loop
  const carouselLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-white py-12 border-y border-slate-100 relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      
      <motion.div
        className="flex gap-12 items-center whitespace-nowrap"
        animate={{
          x: [0, -2500],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {carouselLogos.map((logo, idx) => (
          <div
            key={`${logo.id}-${idx}`}
            className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-12 w-40"
          >
            <img
              src={logo.path}
              alt={logo.name}
              className="max-h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/200x80/f8fafc/64748b?text=${logo.name}`;
                target.onerror = null;
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
