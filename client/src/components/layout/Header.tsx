import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import logo from "@assets/애니서포트--new-log_1767678194580.png";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "제품", href: "/product" },
  { label: "솔루션", href: "/solutions" },
  { label: "가격", href: "/pricing" },
  { label: "다운로드", href: "/download" },
  { label: "고객지원", href: "/support" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md border-b shadow-sm py-3" : "bg-white/80 backdrop-blur-sm py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 group">
          <img src={logo} alt="AnySupport" className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={cn(
              "text-sm font-semibold transition-colors hover:text-primary",
              location === item.href ? "text-primary" : "text-foreground/80"
            )}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="font-semibold text-foreground/70">로그인</Button>
          <Button onClick={openModal} className="font-bold px-6 shadow-md">무료체험 신청</Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-white flex flex-col p-6 md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 border-b border-slate-100 text-lg font-bold">
                {item.label}
                <ChevronRight size={20} className="text-slate-400" />
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-10 pb-20 flex flex-col gap-4">
            <Button variant="outline" className="h-14 text-lg font-bold">로그인</Button>
            <Button onClick={() => { setIsMobileMenuOpen(false); openModal(); }} className="h-14 text-lg font-bold">무료체험 신청</Button>
          </div>
        </div>
      )}
    </header>
  );
}
