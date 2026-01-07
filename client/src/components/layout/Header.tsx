import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import logo from "@assets/애니서포트--new-log_1767681624073.png";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
  { 
    label: "제품", 
    href: "/product",
    subItems: [
      { label: "PC 원격지원", href: "/product/pc" },
      { label: "Mobile 원격지원", href: "/product/mobile" },
      { label: "Video 원격지원", href: "/product/video" },
    ]
  },
  { 
    label: "솔루션", 
    href: "/solution",
    subItems: [
      { label: "애니서포트 소개", href: "/solution/intro" },
      { label: "보안성과 안전성", href: "/solution/security" },
      { label: "다양한 기능", href: "/solution/features" },
      { label: "사용 방법", href: "/solution/guide" },
      { label: "사용 환경", href: "/solution/environment" },
    ]
  },
  { label: "가격", href: "/pricing" },
  { label: "다운로드", href: "/download" },
  { label: "고객지원", href: "/support" },
];

function MobileMenuSheet({ isOpen, onClose, navItems, openMenus, toggleSubmenu, openModal }: any) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
          />
          
          {/* Half-Sheet Menu */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] z-[9999] md:hidden h-[55dvh] max-h-[60dvh] flex flex-col shadow-[0_-8px_30px_rgb(0,0,0,0.12)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sheet Header - Sticky */}
            <div className="sticky top-0 bg-white flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0 z-10">
              <span className="text-lg font-bold">Menu</span>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-slate-500" />
              </button>
            </div>

            {/* Sheet Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
              <nav className="flex flex-col">
                {navItems.map((item: any) => (
                  <div key={item.href} className="border-b border-slate-50 last:border-0">
                    <div 
                      className="flex items-center justify-between py-4 cursor-pointer"
                      onClick={() => item.subItems ? toggleSubmenu(item.label) : onClose()}
                    >
                      {item.subItems ? (
                        <span className="text-base font-bold text-slate-800">{item.label}</span>
                      ) : (
                        <Link href={item.href} className="text-base font-bold text-slate-800 w-full" onClick={onClose}>
                          {item.label}
                        </Link>
                      )}
                      {item.subItems ? (
                        <ChevronDown 
                          size={18} 
                          className={cn(
                            "text-slate-400 transition-transform duration-300",
                            openMenus.includes(item.label) && "rotate-180"
                          )} 
                        />
                      ) : (
                        <ChevronRight size={18} className="text-slate-400" />
                      )}
                    </div>
                    
                    {item.subItems && (
                      <div className={cn(
                        "bg-slate-50/50 rounded-xl overflow-hidden transition-all duration-300 ease-in-out",
                        openMenus.includes(item.label) ? "max-h-[500px] mb-4 opacity-100 py-2" : "max-h-0 opacity-0"
                      )}>
                        {item.subItems.map((sub: any) => (
                          <Link 
                            key={sub.href} 
                            href={sub.href} 
                            onClick={onClose}
                            className="block py-3 px-6 text-slate-600 text-sm font-semibold hover:text-primary transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Sheet Footer (Buttons) */}
            <div className="p-6 bg-slate-50/30 border-t border-slate-100 shrink-0 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12 font-bold border-slate-200">로그인</Button>
                <Button onClick={() => { onClose(); openModal(); }} className="h-12 font-bold shadow-md">무료체험 신청</Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);
  const { openModal } = useModal();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileMenus(prev => 
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md border-b shadow-sm py-3" : "bg-white/80 backdrop-blur-sm py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 group shrink-0">
          <img src={logo} alt="AnySupport" className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger className={cn(
                        "bg-transparent font-semibold hover:bg-transparent data-[state=open]:bg-transparent",
                        location.startsWith(item.href) ? "text-primary" : "text-foreground/80"
                      )}>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2 bg-white">
                          {item.subItems.map((sub) => (
                            <li key={sub.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={sub.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-primary text-sm font-medium"
                                >
                                  {sub.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent font-semibold hover:bg-transparent",
                        location === item.href ? "text-primary" : "text-foreground/80"
                      )}>
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Button variant="ghost" className="font-semibold text-foreground/70">로그인</Button>
          <Button onClick={openModal} className="font-bold px-6 shadow-md">무료체험 신청</Button>
        </div>

        <button 
          className="md:hidden p-2 relative z-[61]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenuSheet 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navItems={NAV_ITEMS}
        openMenus={openMobileMenus}
        toggleSubmenu={toggleMobileSubmenu}
        openModal={openModal}
      />
    </header>
  );
}
