import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logos } from "@/data/logos";
import { cn } from "@/lib/utils";

const categories = ["전체", "글로벌/대기업", "통신", "금융", "공공", "국내 주요 기업"];

export default function UseCasesLogos() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filteredLogos = useMemo(() => {
    if (activeCategory === "전체") return logos;
    return logos.filter((logo) => logo.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-[25px] md:text-4xl font-black text-slate-900 mb-4">산업별 환경에 최적화된 원격지원</h2>
          <p className="text-slate-500 text-[14px] md:text-lg font-medium">다양한 산업 분야의 리딩 기업들이 애니서포트와 함께하고 있습니다.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                data-testid={`button-category-${category}`}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all duration-200",
                  activeCategory === category
                    ? "bg-white text-primary shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Logos Grid */}
        <div className="min-h-[400px]">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredLogos.map((logo) => (
                <motion.div
                  key={logo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-primary/20 h-32"
                >
                  <img
                    src={logo.path}
                    alt={`${logo.name} 로고`}
                    className="max-h-16 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/200x80/f8fafc/64748b?text=${logo.name}`;
                      target.onerror = null;
                    }}
                    data-testid={`img-logo-${logo.id}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
