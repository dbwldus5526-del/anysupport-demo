import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Accordion({ title, children, className }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("border rounded-lg overflow-hidden bg-white mb-2", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          size={20}
          className={cn(
            "text-slate-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "transition-all duration-200 ease-in-out",
          isOpen ? "max-h-[1000px] border-t" : "max-h-0"
        )}
      >
        <div className="p-5 text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
