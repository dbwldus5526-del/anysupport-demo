import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import logo from "@assets/generated_images/minimalist_tech_logo_for_anysupport.png";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
  { label: "Support", href: "/support" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-105">
             <img src={logo} alt="AnySupport Logo" className="w-full h-full object-contain p-1" />
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl text-foreground tracking-tight">
            AnySupport
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-medium text-muted-foreground hover:text-foreground">
            Login
          </Button>
          <Button onClick={openModal} className="font-semibold shadow-lg shadow-primary/20">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-background flex flex-col p-6 md:hidden animate-in slide-in-from-top-5 fade-in duration-200">
          <nav className="flex flex-col gap-6 text-lg">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="flex items-center justify-between py-2 border-b border-border/50 font-medium text-foreground/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4 pb-8">
            <Button variant="outline" className="w-full justify-center text-base py-6">
              Login
            </Button>
            <Button 
              className="w-full justify-center text-base py-6 shadow-xl shadow-primary/20"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
